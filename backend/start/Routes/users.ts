/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'UsersController').apiOnly()
