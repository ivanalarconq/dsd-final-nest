import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialSchema1600298593632 implements MigrationInterface {
    name = 'InitialSchema1600298593632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `customer` (`customer_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `first_name` varchar(75) NOT NULL, `last_name` varchar(75) NOT NULL, `dni` varchar(50) NOT NULL, `is_active` tinyint(1) UNSIGNED NOT NULL DEFAULT 1, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, UNIQUE INDEX `IDX_4fbd35975cb4ad42e0fa011406` (`dni`), PRIMARY KEY (`customer_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `account` (`account_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `number` varchar(50) NOT NULL, `type` varchar(200) NOT NULL, `balance` decimal(10,2) NOT NULL, `is_locked` tinyint(1) UNSIGNED NOT NULL DEFAULT 0, `customer_id` bigint UNSIGNED NOT NULL, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, UNIQUE INDEX `IDX_51a4a0db7e5c7bc465ffc8722b` (`number`), PRIMARY KEY (`account_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `creditcard` (`creditcard_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `cardNumber` varchar(16) NOT NULL, `expireAt` varchar(255) NOT NULL, `webPwd` varchar(255) NOT NULL, `is_active` tinyint(1) UNSIGNED NOT NULL DEFAULT 1, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, `customer_id` bigint UNSIGNED NOT NULL, UNIQUE INDEX `IDX_47393482684828666a79584572` (`cardNumber`), PRIMARY KEY (`creditcard_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `operation` (`operation_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `description` varchar(100) NOT NULL, `amount` decimal(10,2) NOT NULL, `madeAt` datetime NOT NULL, `isIncome` tinyint(1) UNSIGNED NOT NULL DEFAULT 0, `accountId` bigint UNSIGNED NOT NULL, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, `account_id` bigint UNSIGNED NULL, PRIMARY KEY (`operation_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `transaction` (`transaction_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `account_id_from` bigint UNSIGNED NOT NULL, `account_id_to` bigint UNSIGNED NULL, `amount` decimal(10,2) NOT NULL, `status` tinyint(2) UNSIGNED NOT NULL, `created_at` datetime NOT NULL, PRIMARY KEY (`transaction_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `account` ADD CONSTRAINT `FK_977b5abdf1370566eaade16eaa9` FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `creditcard` ADD CONSTRAINT `FK_a7ec3f32c59a5af829dd8c3313a` FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `operation` ADD CONSTRAINT `FK_3fa6013709ddc86070400f3ca1d` FOREIGN KEY (`account_id`) REFERENCES `account`(`account_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `transaction` ADD CONSTRAINT `FK_104c437ca92d5dce9ffeb968917` FOREIGN KEY (`account_id_from`) REFERENCES `account`(`account_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `transaction` ADD CONSTRAINT `FK_f9f4ecb2248d77a54a9e6b43c6a` FOREIGN KEY (`account_id_to`) REFERENCES `account`(`account_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `transaction` DROP FOREIGN KEY `FK_f9f4ecb2248d77a54a9e6b43c6a`");
        await queryRunner.query("ALTER TABLE `transaction` DROP FOREIGN KEY `FK_104c437ca92d5dce9ffeb968917`");
        await queryRunner.query("ALTER TABLE `operation` DROP FOREIGN KEY `FK_3fa6013709ddc86070400f3ca1d`");
        await queryRunner.query("ALTER TABLE `creditcard` DROP FOREIGN KEY `FK_a7ec3f32c59a5af829dd8c3313a`");
        await queryRunner.query("ALTER TABLE `account` DROP FOREIGN KEY `FK_977b5abdf1370566eaade16eaa9`");
        await queryRunner.query("DROP TABLE `transaction`");
        await queryRunner.query("DROP TABLE `operation`");
        await queryRunner.query("DROP INDEX `IDX_47393482684828666a79584572` ON `creditcard`");
        await queryRunner.query("DROP TABLE `creditcard`");
        await queryRunner.query("DROP INDEX `IDX_51a4a0db7e5c7bc465ffc8722b` ON `account`");
        await queryRunner.query("DROP TABLE `account`");
        await queryRunner.query("DROP INDEX `IDX_4fbd35975cb4ad42e0fa011406` ON `customer`");
        await queryRunner.query("DROP TABLE `customer`");
    }

}
