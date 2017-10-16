export default (test_component, Collection) => {
  describe('VueCollection - Vue binding', () => {
    it('should correctly bind a collection to vue instance', () => {
      expect(test_component.collection instanceof Array)
        .toBe(true)
    })

    it('should fetch models from a collection', () => {
      expect(test_component.collection.length)
        .toBe(3)
    })

    it('should add a model to a collection', () => {
      expect.assertions(1)
      return test_component.$collection.add({
        _id: '587e3faae4e05574a49cdcd6'
      })
      .then(() => {
        expect(test_component.collection.length)
          .toBe(4)
      })
    })

    it('should automatically update a model when adding one that already exists', () => {
      expect.assertions(1)
      return test_component.$collection.add({
        _id: '587e3faae4e05574a49cdcd6'
      })
      .then(() => {
        expect(test_component.collection.length)
          .toBe(4)
      })
    })

    it('should delete a model from a collection', () => {
      expect.assertions(1)
      return test_component.$collection.delete('587e3faae4e05574a49cdcd6')
        .then(() => {
          expect(test_component.collection.length)
            .toBe(3)
        })
    })

    it('should do nothing when deleting a model that doesn\'t exist', () => {
      expect.assertions(1)
      return test_component.$collection.delete('587e3faae4e05574a49cdcd6')
        .then(() => {
          expect(test_component.collection.length)
            .toBe(3)
        })
    })

    it('should handle extended json', () => {
      expect.assertions(1)
      return test_component.$collection.add({
        _id: {
          $oid: '42cb23aae4e05574a49cdcd2'
        }
      })
      .then(() => {
        const match = test_component.$collection.find({
          id: '42cb23aae4e05574a49cdcd2'
        })
        expect(match.id)
        .toBe('42cb23aae4e05574a49cdcd2')
      })
    })

    it('should be able to filter models based on an attribute', () => {
      const matches = test_component.$collection.filter({
        role: 'manager'
      })
      // matches.map(model => {
      //   console.log(model.first_name)
      // })
      expect(matches.length)
        .toBe(2)
    })

    // it('should be able to filter models based on multiple attributes', () => {
    //   const matches = test_component.$collection.filter({
    //     role: 'manager',
    //     avatar_color: 'teal'
    //   })

    //   // console.log(matches)
    //   expect(matches.length)
    //     .toBe(1)
    // })

    it('should reset the collection successfully on destroy', () => {
      test_component.$destroy()
      expect(test_component.collection.length)
        .toBe(0)
    })
  })

  describe('VueCollection - Collections', () => {
    const collection = new Collection({
      basePath: 'things'
    }, [{
      id: 1
    },
    {
      id: 2
    }])
    it('should be able to handle initial state passed', () => {
      expect(collection.models.length)
        .toBe(2)
    })
  })
}
