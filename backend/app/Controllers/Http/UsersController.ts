import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const user = await User.all()

    return user
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(UserValidator)

    const user = await User.create(data)

    return user
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    return user
  }

  public async update({ request, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['email', 'nome', 'telefone', 'genero', 'idade'])

    user.merge(data)

    return user.save
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}
