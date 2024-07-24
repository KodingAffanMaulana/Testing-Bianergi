const data =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const countChar = (data) => {
  let charTanpaSpasi = 0;
  let semuaChar = 0;
  let kata = 0;
  let kalimat = 0;
  let isWord = false;

  for (let i = 0; i < data.length; i++) {
    semuaChar++;
    charTanpaSpasi++;
    if (data[i] === ' ') {
      charTanpaSpasi--;
      if (isWord) {
        kata++;
        console.log(kata);
        isWord = false;
      }
    } else if (data[i] === '.') {
      kalimat++;
      if (isWord) {
        kata++;
        console.log(data[i]);
        isWord = false;
      }
    } else {
      isWord = true;
    }
  }

  if (isWord) {
    kata++;
  }

  return {
    'Semua Karakter': semuaChar,
    'Karakter Tanpa Spasi': charTanpaSpasi,
    'Jumlah Kata': kata,
    'Jumlah Kalimat': kalimat,
  };
};

console.log(countChar(data));
