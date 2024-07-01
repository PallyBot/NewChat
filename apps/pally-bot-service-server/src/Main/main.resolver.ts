import * as graphql from "@nestjs/graphql";
import { MainService } from "./main.service";

export class MainResolver {
  constructor(protected readonly service: MainService) {}
}
