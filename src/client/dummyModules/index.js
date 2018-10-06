import Nouns, { MacbookPro } from './nouns';

export const longString = () => {
  return 'a long string';
}

export const shortString = () => {
  return `a short ${MacbookPro}`;
};

export const horribleCodeNoOneShouldEverWrite = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return `Let's upgrade to ${Nouns[`M${alphabet[0]}cbookPro`]}`;
}
