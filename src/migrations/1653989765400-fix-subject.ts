import {MigrationInterface, QueryRunner} from "typeorm";

export class fixSubject1653989765400 implements MigrationInterface {
    name = 'fixSubject1653989765400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_973f5b120d5a712bd1dc8d20fff"`);
        await queryRunner.query(`EXEC sp_rename "timemanagement.dbo.operation.subjecId", "subjectId"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_a136bf7e0a53e0e929307a0ca1e" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "FK_a136bf7e0a53e0e929307a0ca1e"`);
        await queryRunner.query(`EXEC sp_rename "timemanagement.dbo.operation.subjectId", "subjecId"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "FK_973f5b120d5a712bd1dc8d20fff" FOREIGN KEY ("subjecId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
