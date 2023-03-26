import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SolicitacoesValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }),
    content: schema.string({ trim: true }),
    userId: schema.number(),
    status: schema.enum(['solicitada', 'aceita', 'recusada'] as const),
  })

  public messages: CustomMessages = {}
}
