const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateSeriesA = (length) => {
  let series = new Array(length);
  for (let i = 0; i < length; i++) {
    series[i] = i * i;
  }
  return series;
};

const generateSeriesB = (length) => {
  let series = [1];
  for (let i = 1; i < length; i++) {
    series.push(series[i - 1] + (2 * i - 1));
  }
  return series;
};

const generateSeriesC = (length) => {
  let series = new Array(length);
  series[0] = 0;
  series[1] = 1;
  for (let i = 2; i < length; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
};

const generateSeriesD = (length) => {
  let series = [0, 0, 1];
  for (let i = 3; i < length; i++) {
    series.push(series[i - 1] + series[i - 2] + series[i - 3]);
  }
  return series.slice(0, length);
};

rl.question('Masukkan jumlah elemen: ', (input) => {
  const length = parseInt(input);
  if (isNaN(length) || length < 1) {
    console.log('Masukkan nilai yang valid.');
  } else {
    console.log('Deret a): ' + generateSeriesA(length).join(' '));
    console.log('Deret b): ' + generateSeriesB(length).join(' '));
    console.log('Deret c): ' + generateSeriesC(length).join(' '));
    console.log('Deret d): ' + generateSeriesD(length).join(' '));
  }
  rl.close();
});
