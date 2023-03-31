import nodemailer from "nodemailer";
import config from "../config";

interface EmailMessage {
    from: string;
    to: string;
    cc?: string;
    subject: string;
    text?: string;
    html?: string;
    attachments?: {
        filename: string;
        content: Buffer | string;
        contentType?: string;
    }[];
}

async function wrapedSendMail(message: EmailMessage) {
    return new Promise((resolve) => {
        const transporter = nodemailer.createTransport(config.email.credenciais);

        transporter.sendMail(message, (error) => {
            if (error) {
                console.log(`\nFalha ao enviar e-mail.`);
                console.log(`Error: ${error}`);
                resolve(false);
            } else {
                console.log(`\nEnviado e-mail com sucesso.`);
                resolve(true);
            }
        });
    });
}

export const sendmail = async () => {
    const message: EmailMessage = {
        from: String(config.email.from),
        to: String(config.email.to),
        subject: ``,
        text: ``,
        html: ``,
    };

    await wrapedSendMail(message);
};
