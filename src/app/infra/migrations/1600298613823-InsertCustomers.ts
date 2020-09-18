import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertCustomers1600298613823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO customer(first_name, last_name, dni, is_active, created_at, updated_at) 
            VALUES
            ('Juan', 'Pérez', 1234567, 1, UTC_TIMESTAMP(),UTC_TIMESTAMP()),
            ('Carlos', 'Pérez', 1234568, 1, UTC_TIMESTAMP(),UTC_TIMESTAMP()),
            ('Alberto', 'Otero', 1234569, 1, UTC_TIMESTAMP(),UTC_TIMESTAMP());
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }


}
