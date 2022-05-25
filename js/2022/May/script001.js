const int = 10,
  array = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

function sockMerchant(n, ar) {
  const socks = ar.map((e) => e).sort((a, b) => a - b);

  let temp = [],
    pairs = 0,
    i;

  for (i = 0; i < n; i++) {
    let el = socks[i];

    if (temp.length === 0) {
      temp.push(el);
    } else if (temp.length < 2 && temp[0] !== el) {
      temp[0] = el;
    } else {
      pairs++;
      temp = [];
    }
  }

  return pairs;
}

sockMerchant(int, array);
