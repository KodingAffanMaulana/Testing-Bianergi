const data =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const countChar = (data) => {
  let character_nospace = 0;
  let all_character = 0;
  let word = 0;
  let sentence = 0;
  let isWord = false;

  for (let i = 0; i < data.length; i++) {
    all_character++;
    character_nospace++;
    if (data[i] === ' ') {
      character_nospace--;
      if (isWord) {
        word++;
        isWord = false;
      }
    } else if (data[i] === '.') {
      sentence++;
      if (isWord) {
        word++;
        isWord = false;
      }
    } else {
      isWord = true;
    }
  }

  if (isWord) {
    word++;
  }

  return {
    'Semua Karakter': all_character,
    'Karakter Tanpa Spasi': character_nospace,
    'Jumlah Kata': word,
    'Jumlah Kalimat': sentence,
  };
};

console.log(countChar(data));
