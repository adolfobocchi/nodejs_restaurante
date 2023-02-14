import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {
    let {nome, email, assunto, mensagem} = req.body;
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ee3ecaa3f58041",
          pass: "b4e550cc7007e6"
        }
    });

    let message = {
        from: `nao-responda@canesrestaurante.com.br`,
        to: 'dolfao@gmail.com',
        replyTo: email,
        subject: assunto,
        html: `De: ${nome} - Mensagem de contato: ${mensagem}`,
        text: `De: ${nome} - Mensagem de contato: ${mensagem}`
    }

    let info = await transport.sendMail(message);

    res.json({pong: true});
    
}