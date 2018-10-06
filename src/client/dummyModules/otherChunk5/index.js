export default () => {
  return import(/* webpackChunkName: "other-chunk-5" */ './otherChunk')
    .then(module => {
      console.log('other chunk 5 is loaded!');
      module.default.logAnother('en');
    })
}
