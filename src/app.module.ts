import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionsModule } from './submissions/submissions.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb+srv://allstackdev:ypiCKC7g5OcDYaKZ@cluster0.nciey.mongodb.net',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    SubmissionsModule,
    InstitutionsModule,
    SubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
