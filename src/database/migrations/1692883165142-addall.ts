import { MigrationInterface, QueryRunner } from "typeorm";

export class Addall1692883165142 implements MigrationInterface {
    name = 'Addall1692883165142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_name"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phonenumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createddate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updateddate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleteddate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "post" ADD "postname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "postorder" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "createddate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updateddate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "deleteddate" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "deleteddate"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updateddate"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "createddate"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "postorder"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "postname"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleteddate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updateddate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createddate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phonenumber"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "post_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "user_name" character varying NOT NULL`);
    }

}
