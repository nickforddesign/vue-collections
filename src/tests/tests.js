export default (test_component) => {
  describe('VueCollection', () => {
    it('should correctly bind a collection to vue instance', () => {
      expect(test_component.collection instanceof Array)
        .toBe(true)
    })

    it('should fetch models from a collection', () => {
      expect(test_component.collection.length)
        .toBe(6)
    })

    it('should delete a model from a collection', () => {
      expect.assertions(1);
      return test_component.$collection.delete('587e3faae4e05574a49cdcd6')
        .then(() => {
          expect(test_component.collection.length)
            .toBe(5)
        })
    })

    it('should add a model to a collection', () => {
      expect.assertions(1);
      return test_component.$collection.add({
        _id: '587e3faae4e05574a49cdcd6'
      })
      .then(() => {
        expect(test_component.collection.length)
          .toBe(6)
      })
    })

    it('should reset the collection successfully on destroy', () => {
      test_component.$destroy()
      expect(test_component.collection.length)
        .toBe(0)
    })
  })

  // write tests to use bound $request method
}
