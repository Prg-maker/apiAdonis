
import Route from '@ioc:Adonis/Core/Route'



Route.group(() => {
  Route.get('/', async () => {
    return { name: 'daniel' }
  })

  Route.resource('/moments', "MomentsController").apiOnly()

}).prefix('/api')
