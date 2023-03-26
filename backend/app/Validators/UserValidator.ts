/* eslint-disable @typescript-eslint/naming-convention */
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [rules.unique({ table: 'solicitacoes', column: 'nome' })]),
    password: schema.string(),
    telefone: schema.string(),
    idade: schema.number(),
    genero: schema.string(),
    role: schema.enum(['client', 'architect'] as const),
  })

  public messages: CustomMessages = {}
}
