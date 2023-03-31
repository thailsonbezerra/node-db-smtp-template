import SMTPTransport from "nodemailer/lib/smtp-transport";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config();

const config = {
    database: {
        type: process.env.DB_TYPE as "postgres" | "mysql" | "mariadb",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),
    },
    email: {
        credenciais: {
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        } as SMTPTransport.Options,
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
    },
};

export default config;
