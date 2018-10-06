export default () => {
  return import(/* webpackChunkName: "other-chunk-6" */ './otherChunk')
    .then(module => {
      console.log('other chunk 6 is loaded!');
      module.default.logAnother('en');
    })
}
