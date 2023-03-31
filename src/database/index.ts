import { DataSource } from "typeorm";
import config from "../config";

const AppDataSource = new DataSource(config.database);

export default AppDataSource;
