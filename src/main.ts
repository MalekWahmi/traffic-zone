import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  const config = new DocumentBuilder().setTitle("Trafic Zone API").build();
  const options: SwaggerCustomOptions = {
    useGlobalPrefix: true,
    explorer: true,
    urls: [],
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document, options);
  await app.listen(3000);
}

bootstrap();
