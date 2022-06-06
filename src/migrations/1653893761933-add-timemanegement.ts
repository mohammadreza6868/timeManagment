import {MigrationInterface, QueryRunner} from "typeorm";

export class addTimemanegement1653893761933 implements MigrationInterface {
    name = 'addTimemanegement1653893761933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "operation" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "subjecId" int, CONSTRAINT "PK_18556ee6e49c005fc108078f3ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" int NOT NULL IDENTITY(1,1), "rolename" nvarchar(255) NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "ferstname" nvarchar(255) NOT NULL, "lastname" nvarchar(255) NOT NULL, "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "roleId" int, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "master" ("id" int NOT NULL IDENTITY(1,1), "date" nvarchar(255) NOT NULL, "starttime" int NOT NULL, "startminutes" int NOT NULL, "endtime" int NOT NULL, "endminutes" int NOT NULL, "totalhours" int NOT NULL, "description" nvarchar(255) NOT NULL, "subjectId" int, "userId" int, CONSTRAINT "PK_1ad656927ad7cd2b8a20c27e44c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_973f5b120d5a712bd1dc8d20fff" FOREIGN KEY ("subjecId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "master" ADD CONSTRAINT "FK_de1fceb77b219a2f5daa5d8cd18" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "master" ADD CONSTRAINT "FK_c30b6c69aa944eabf5b89e8c5df" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "master" DROP CONSTRAINT "FK_c30b6c69aa944eabf5b89e8c5df"`);
        await queryRunner.query(`ALTER TABLE "master" DROP CONSTRAINT "FK_de1fceb77b219a2f5daa5d8cd18"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_973f5b120d5a712bd1dc8d20fff"`);
        await queryRunner.query(`DROP TABLE "master"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "subject"`);
        await queryRunner.query(`DROP TABLE "operation"`);
    }

}
