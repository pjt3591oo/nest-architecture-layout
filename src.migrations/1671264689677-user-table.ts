import { MigrationInterface, QueryRunner } from "typeorm";

export class userTable1671264689677 implements MigrationInterface {
    name = 'userTable1671264689677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` enum ('pending', 'failure', 'complete') NOT NULL DEFAULT 'pending', \`amount\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` enum ('pending', 'failure', 'complete') NOT NULL DEFAULT 'pending', \`amount\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`orderId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`order_history\` ADD CONSTRAINT \`FK_e15b4a73a3e53311433968993cc\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_history\` DROP FOREIGN KEY \`FK_e15b4a73a3e53311433968993cc\``);
        await queryRunner.query(`DROP TABLE \`order_history\``);
        await queryRunner.query(`DROP TABLE \`order\``);
    }

}
