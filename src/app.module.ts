import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
//import { BooksService } from './books/books.service';
//import { AimsModule } from './aims/aims.module';
import { MissionsModule } from './missions/missions.module';
import { BlogService } from './blog/blog.service';

@Module({
  imports: [UsersModule, MissionsModule],
  controllers: [AppController],
  providers: [AppService, BlogService],
})
export class AppModule {}
