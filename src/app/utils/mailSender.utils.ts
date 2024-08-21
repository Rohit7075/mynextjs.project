import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    service: "gmail",

    port: 465,
    secure: false,
    auth: {
        user: "rohit1.osc@gmail.com",
        pass: "gnbp icyu zgku rphw"
    }
})