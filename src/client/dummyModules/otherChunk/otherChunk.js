import i18n from '../i18n';

const otherChunk = {
  logAnother(lang) {
    console.log('otherChunk is logging...', i18n[lang].settingButtonCancel);
  }
}

export default otherChunk;
