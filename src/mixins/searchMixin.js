export default {
  computed: {
    filteredData: function() {
      return this.datas.filter((data) => {
        return data.title.match(this.search)
      })
    }
  }
}
