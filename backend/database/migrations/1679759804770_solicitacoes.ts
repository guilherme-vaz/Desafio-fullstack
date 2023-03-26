import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Solicitacoes extends BaseSchema {
  protected tableName = 'solicitacoes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.text('content', 'longtext')
      table
        .enu('status', ['solicitada', 'aceita', 'recusada'])
        .notNullable()
        .defaultTo('solicitada')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
