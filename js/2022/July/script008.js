// Source: https://www.megacolorboy.com/writings/posts/convert-svg-from-image-to-code-using-javascript/

$(function () {
  //Change the class name, if it has to be applied for more SVG elements
  jQuery('img.custom-svg-icon').each(function () {
    var $img = jQuery(this); // The image
    var imgID = $img.attr('id'); // ID attribute
    var imgClass = $img.attr('class'); // Class Name
    var imgURL = $img.attr('src'); // URL of the SVG image

    jQuery.get(
      imgURL,
      function (data) {
        //The data param contains the XML data of the SVG image
        //alert(new XMLSerializer().serializeToString(data));

        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Give the image's ID to the SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }

        // Give the image's class to the SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, else we gonna set it if we can.
        if (
          !$svg.attr('viewBox') &&
          $svg.attr('height') &&
          $svg.attr('width')
        ) {
          $svg.attr(
            'viewBox',
            '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width')
          );
        }

        // Replace image with new SVG
        $img.replaceWith($svg);
      },
      'xml'
    ); //Returns as XML
  });
});
