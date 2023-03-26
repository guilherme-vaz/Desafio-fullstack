import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'gui@gmail.com',
        password: 'secret',
        role: 'client',
        nome: 'Gui',
        telefone: '(82) 98147-8578',
        genero: 'masculino',
        idade: 26,
      },
      {
        email: 'franky@gmail.com',
        password: 'secret',
        role: 'architect',
        nome: 'Franky',
        telefone: '(45) 98347-2348',
        genero: 'masculino',
        idade: 36,
      },
    ])
  }
}
