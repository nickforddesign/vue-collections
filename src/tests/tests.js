export default (test_component, Collection) => {
  describe('VueCollections - Vue binding', () => {
    it('should correctly bind a collection to vue instance', () => {
      expect(test_component.$collection.models instanceof Array)
        .toBe(true)
    })

    it('should fetch models from a collection', () => {
      expect(test_component.$collection.models.length)
        .toBe(3)
    })

    it('should have models accessible from the shortcut property', () => {
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

  describe('VueCollections - Collections', () => {
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

    it('should throw error when invalid initial state is passed', () => {
      expect(() => {
        /* eslint-disable no-new */
        new Collection({
          basePath: 'things'
        }, {
          id: 1
        })
      })
        .toThrow(TypeError)
    })
  })

  describe('Vue-Collections - custom id attributes', () => {
    const collection = new Collection({
      basePath: 'things',
      id_attribute: 'post_id'
    }, [{
      post_id: 1
    },
    {
      post_id: 2
    }])

    it('should handle custom id attributes when creating a collection', () => {
      expect(collection.models.length)
        .toBe(2)
    })

    it('should handle models that already exist', () => {
      collection.add({
        post_id: 2
      })
      expect(collection.models.length)
        .toBe(2)
    })
  })

  describe('Vue-Collections - updating basePath', () => {
    it('should handle changes to basePath', () => {
      const collection = new Collection({
        basePath: 'test'
      })
      const basePath = collection.$basePath
      collection.basePath = () => {
        return `${basePath}?some_query=true`
      }
      expect(collection.$basePath)
        .toBe('test?some_query=true')
    })
  })
}
