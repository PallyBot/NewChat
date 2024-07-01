import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MainService } from "./main.service";

@swagger.ApiTags("mains")
@common.Controller("mains")
export class MainController {
  constructor(protected readonly service: MainService) {}
}
