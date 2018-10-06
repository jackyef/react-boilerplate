export default () => {
  return import(/* webpackChunkName: "other-chunk-3" */ './otherChunk')
    .then(module => {
      console.log('other chunk 3 is loaded!');
      module.default.logAnother('en');
    })
}
