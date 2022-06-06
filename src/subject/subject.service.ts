import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'src/entities/Subject.entity';
import { Repository } from 'typeorm';
import { subjectDto } from './Dto/subjectDto';

@Injectable()
export class SubjectService {
    constructor(@InjectRepository(Subject)
    private subjectrepository: Repository<Subject>) { }

    createsubject(subjectDto: subjectDto) {
        let subject = new Subject()
        subject.name = subjectDto.name;
        subject.save();
        return 'عملیات با موفقیت انجام شد';
    }

    async getsubject() {
        const subject =await this.subjectrepository.find();
        return subject;
    }

    async updatesubject(subjectDto: subjectDto) {
        let subject = await this.subjectrepository.findOne(subjectDto);
        if (subject) {
            subject.name = subjectDto.name;
            subject.save();
            return 'عملیات آپدیت انجام شد';
        }
        return 'آیدی مورد نظر یافت نشد';
    }

    deletesubject(id: number) {
        this.subjectrepository.delete(id);
        return 'حذف انجام شد';
    }
}
