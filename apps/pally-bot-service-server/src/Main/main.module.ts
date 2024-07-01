import { Module } from "@nestjs/common";
import { MainService } from "./main.service";
import { MainController } from "./main.controller";
import { MainResolver } from "./main.resolver";

@Module({
  controllers: [MainController],
  providers: [MainService, MainResolver],
  exports: [MainService],
})
export class MainModule {}
