import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertOperations1600301615760 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            INSERT INTO operation(description, amount, madeAt, isIncome, accountId, created_at, updated_at)
            VALUES
            ('Netflix', '45.0', UTC_TIMESTAMP(), 0, 1, UTC_TIMESTAMP(), UTC_TIMESTAMP()),
            ('Pensión FISI', '2000.0', UTC_TIMESTAMP(), 0, 1, UTC_TIMESTAMP(), UTC_TIMESTAMP()),
            ('Pago de sueldo', '8000.0', UTC_TIMESTAMP(), 1, 1, UTC_TIMESTAMP(), UTC_TIMESTAMP()),
            ('Steam INC', '24.0', UTC_TIMESTAMP(), 0, 1, UTC_TIMESTAMP(), UTC_TIMESTAMP()),
            ('Udemy', '39.0', UTC_TIMESTAMP(), 0, 1, UTC_TIMESTAMP(), UTC_TIMESTAMP());
                        
        `);

        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
