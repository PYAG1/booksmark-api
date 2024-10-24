import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

// Simulating the server
// We use global types
describe('App e2e', () => {
  let app: INestApplication;
  let prisma:PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    prisma = app.get(PrismaService)
    await prisma.cleanDb()
  });

  afterAll(async () => {
    await app.close();
  });

  it.todo('should pass');

  describe('Auth',()=>{
    describe('Signup',()=>{
      it.todo('should pass');  
    })

    describe('Signin',()=>{})
  })


  describe('User',()=>{
    describe('Get User',()=>{})
    describe('Edit user',()=>{})
  })

  describe('Bookmarks',()=>{
    describe('Get Bookmarks',()=>{})
    describe('Get Bookmarks by id',()=>{})
    describe('Create Bookmarks',()=>{})
    describe('Edit Bookmarks',()=>{})
    describe('Delete Bookmarks',()=>{})
  })
});
