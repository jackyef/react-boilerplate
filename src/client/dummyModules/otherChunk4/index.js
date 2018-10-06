export default () => {
  return import(/* webpackChunkName: "other-chunk-4" */ './otherChunk')
    .then(module => {
      console.log('other chunk 4 is loaded!');
      module.default.logAnother('en');
    })
}
