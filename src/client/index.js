import { longString, shortString } from './dummyModules';
// import i18n from './dummyModules/i18n';
import { errorMessageProduct } from './dummyModules/i18n-v2';
// import otherChunk from './dummyModules/otherChunk';
// import otherChunk2 from './dummyModules/otherChunk2';
// import otherChunk3 from './dummyModules/otherChunk3';
// import otherChunk4 from './dummyModules/otherChunk4';
// import otherChunk5 from './dummyModules/otherChunk5';
// import otherChunk6 from './dummyModules/otherChunk6';

const main = lang => {
  let asd = shortString();
  let qwe = longString();
  
  console.log('process started...', asd, qwe);
  console.log('lang', errorMessageProduct[lang]);
};

main('id');

// const main = () => {
  // console.log('lang', i18n[lang].errorMessageProduct);
  
//   otherChunk().then(res => {
//     console.log('otherChunk', res);
//   })
//   otherChunk2().then(res => {
//     console.log('otherChunk2', res);
//   })
//   otherChunk3().then(res => {
//     console.log('otherChunk3', res);
//   })
//   otherChunk4().then(res => {
//     console.log('otherChunk4', res);
//   })
//   otherChunk5().then(res => {
//     console.log('otherChunk5', res);
//   })
//   otherChunk6().then(res => {
//     console.log('otherChunk6', res);
//   })
// }


// main();
