import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertCreditCards1600298627060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO creditcard(cardNumber, expireAt, webPwd, is_active, customer_id, created_at, updated_at)
            VALUES
            ('1111111111111111', '05/20', '123456', 1, 1, UTC_TIMESTAMP(), UTC_TIMESTAMP()),
            ('2222222222222222', '05/20', '123456', 1, 2, UTC_TIMESTAMP(), UTC_TIMESTAMP()),
            ('3333333333333333', '05/20', '123456', 1, 3, UTC_TIMESTAMP(), UTC_TIMESTAMP());            
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
