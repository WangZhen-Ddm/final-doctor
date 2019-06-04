Component({
  properties: {
    tag: Object // include type name and id
  },
  methods: {
    deleteTag: function () {
      const { id } = this.properties.tag
      this.triggerEvent('deleteTag', { id })
    }
  }
})