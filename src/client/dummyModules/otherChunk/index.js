export default () => {
  import(/* webpackChunkName: "other-chunk" */ './otherChunk')
    .then(module => {
      console.log('other chunk is loaded!');
      module.default.logAnother('id');
    })
}
