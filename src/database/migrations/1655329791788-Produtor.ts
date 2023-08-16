import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Produtor1655329791788 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
			new Table({
				name: "produtor",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true
					},
					{
						name: "nome",
						type: "varchar",
					},
					{
						name: "cpf_cnpj",
						type: "varchar",
						isUnique: true
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					},
					{
						name: "updated_at",
						type: "timestamp",
						default: "now()"
					}
				]
			})
		)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("produtor")  
  }

}
