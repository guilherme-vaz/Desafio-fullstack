import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Solicitacoes from 'App/Models/Solicitacoes'
import SolicitacoesValidator from 'App/Validators/SolicitacoeSValidator'
import User from 'App/Models/User'

export default class SolicitacoesController {
  public async store({ request, auth }: HttpContextContract) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { title, content, userId, status } = await request.validate(SolicitacoesValidator)

    const user = await User.findOrFail(userId)

    const solicitacao = await user.related('solicitacoes').create({ title, content, status })

    return solicitacao
  }

  public async update({ request, params, auth, response }: HttpContextContract) {
    const { title, content } = await request.only(['title', 'content'])

    const solicitacao = await Solicitacoes.findOrFail(params.id)

    if (auth.user!.id !== solicitacao.userId) {
      return response.unauthorized()
    }

    solicitacao.merge({ title, content })

    await solicitacao.save()

    return solicitacao
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const solicitacao = await Solicitacoes.findOrFail(params.id)

    if (auth.user!.id !== solicitacao.userId) {
      return response.unauthorized()
    }

    await solicitacao.delete()
  }
}

// public async index({}: HttpContextContract) {
//   const solicitacoes = await Solicitacoes.all()

//   return solicitacoes
// }

// public async store({ request }: HttpContextContract) {
//   const data = await request.validate(SolicitacoesValidator)

//   const solicitacoes = await Solicitacoes.create(data)

//   return solicitacoes
// }

// public async show({ params }: HttpContextContract) {
//   const solicitacoes = await Solicitacoes.findOrFail(params.id)
//   return solicitacoes
// }

// public async update({ request, params }: HttpContextContract) {
//   const solicitacoes = await Solicitacoes.findOrFail(params.id)
//   const data = request.only(['title', 'content'])

//   solicitacoes.merge(data)

//   await solicitacoes.save()
// }

// public async destroy({ params }: HttpContextContract) {
//   const solicitacoes = await Solicitacoes.findOrFail(params.id)
//   await solicitacoes.delete()
// }
