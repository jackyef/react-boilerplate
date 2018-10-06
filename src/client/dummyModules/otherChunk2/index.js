export default () => {
  return import(/* webpackChunkName: "other-chunk-2" */ './otherChunk')
    .then(module => {
      console.log('other chunk 2 is loaded!');
      module.default.logAnother('en');
    })
}
