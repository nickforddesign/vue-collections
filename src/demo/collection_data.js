module.exports = () => {
  return [
    {
      id: {
        $oid: 'c12acd432b19cb22c12db021'
      },
      created: {
        $date: '2015-10-11T00:00:00'
      },
      updated: '2017-10-09T00:00:00',
      role: 'admin',
      first_name: 'Michael',
      last_name: 'Scott',
      email: 'mscott@dundermifflin.com',
      avatar_color: 'rebeccapurple',
      notifications: {
        alarm: {
          $date: '2017-10-09T00:00:00'
        },
        test: {
          one: {
            $date: '2017-10-09T00:00:00'
          },
          two: {
            three: {
              $date: '2017-10-09T00:00:00'
            }
          }
        }
      },
      things: [
        {
          id: {
            $oid: '587e3e15e4e05574a3f91e23'
          },
          created: {
            $date: '2017-10-09T00:00:00'
          }
        },
        {
          id: {
            $oid: '58e3e8fee4e0555b7f600c46'
          },
          created: {
            $date: '2017-10-09T00:00:00'
          }
        }
      ]
    },
    {
      id: {
        $oid: '586e6d75b7a7bc5c852c60a5'
      },
      created: {
        $date: '2017-10-09T00:00:00'
      },
      updated: '2017-10-09T00:00:00',
      role: 'manager',
      first_name: 'Jim',
      last_name: 'Halpert',
      email: 'jhalpert@dundermifflin.com',
      avatar_color: 'teal',
      notifications: {
        alarm: {
          $date: '2017-10-09T00:00:00'
        },
        test: {
          one: {
            $date: '2017-10-09T00:00:00'
          },
          two: {
            three: {
              $date: '2017-10-09T00:00:00'
            }
          }
        }
      },
      things: [
        {
          id: {
            $oid: '42356d75b7a7bc5c52c11a90'
          },
          created: {
            $date: '2016-12-16T00:00:00'
          }
        },
        {
          id: {
            $oid: '09a11c25c5cb7a7b57d65324'
          },
          created: {
            $date: '2016-12-16T00:00:00'
          }
        }
      ]
    },
    {
      id: {
        $oid: 'dc23bd12b1b9f2fc79ac22c0'
      },
      created: {
        $date: '2015-12-12T00:00:00'
      },
      updated: '2016-11-09T00:00:00',
      role: 'manager',
      first_name: 'Pam',
      last_name: 'Halpert',
      email: 'phalpert@dundermifflin.com',
      avatar_color: 'orange',
      notifications: {
        alarm: {
          $date: '2016-11-09T00:00:00'
        },
        test: {
          one: {
            $date: '2016-11-09T00:00:00'
          },
          two: {
            three: {
              $date: '2016-11-09T00:00:00'
            }
          }
        }
      },
      things: [
        {
          id: {
            $oid: '58fa1966e4e05570c2787c4a'
          },
          created: {
            $date: '2014-08-12T00:00:00'
          }
        },
        {
          id: {
            $oid: '5914688de4e0556b1dcf29d3'
          },
          created: {
            $date: '2016-03-11T00:00:00'
          }
        }
      ]
    }
  ]
}
