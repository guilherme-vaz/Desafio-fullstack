import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './solicitacoes'
import './users'

Route.get('/', 'SolicitacoesController.index')
