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

    it('should correctly sort the collection', () => {
      test_component.$collection.sort((a, b) => {
        return a.first_name < b.first_name
          ? -1
          : 1
      })
      expect(test_component.$collection.models[0].first_name)
        .toBe('Jim')
      expect(test_component.$collection.models[1].first_name)
        .toBe('Michael')
      expect(test_component.$collection.models[2].first_name)
        .toBe('Pam')
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
      expect(matches.length)
        .toBe(2)
    })

    it('should be able to eencode the entire collection to extended json', () => {
      const encoded = test_component.$collection.encode()
      const all_ids_are_objects = encoded.reduce((acc, model) => {
        if (!(model._id instanceof Object)) {
          acc = false
        }
        return acc
      }, true)
      expect(all_ids_are_objects)
        .toBe(true)
    })

    it('should return undefined when using .find() and not finding a match', () => {
      const match = test_component.$collection.find({
        id: 'test'
      })
      expect(match)
        .toBe(undefined)
    })

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

  describe('Vue-Collections - query strings', () => {
    const collection = new Collection({
      basePath: 'test',
      query: {
        one: true,
        two: [1, 2, 'three']
      }
    })

    it('should set query string on init', () => {
      expect(collection.$url)
        .toBe('test?one=true&two=[1,2,three]')
    })

    it('should update query using .query_push', () => {
      collection.query_push({three: 'test'})
      expect(collection.$url)
        .toBe('test?one=true&two=[1,2,three]&three=test')
    })

    it('should update query using .query_remove', () => {
      collection.query_remove('three')
      expect(collection.$url)
        .toBe('test?one=true&two=[1,2,three]')
    })

    it('should update query using .query_set', () => {
      collection.query_set({four: 'test'})
      expect(collection.$url)
        .toBe('test?four=test')
    })

    it('should remove query using .query_clear', () => {
      collection.query_clear()
      expect(collection.$url)
        .toBe('test')
    })

    const collection2 = new Collection({
      basePath: 'test?one=test',
      query: {
        two: 'test'
      }
    })

    it('should set query string correctly when there is a query string in basePath', () => {
      expect(collection2.$url)
        .toBe('test?one=test&two=test')
    })
  })
}
