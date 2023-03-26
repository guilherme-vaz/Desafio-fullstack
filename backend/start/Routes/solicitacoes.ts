/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.resource('/solicitacoes', 'SolicitacoesController')
  .apiOnly()


  // Teste com middleware - autenticação tá com um bug
  // .middleware({
  //   store: ['acl:client'],
  //   update: ['acl:client'],
  //   destroy: ['acl:client'],
  // }
