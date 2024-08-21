import { NextResponse } from 'next/server';
import { db } from "../../../../fireBaseConfig";
import { collection, addDoc } from 'firebase/firestore';
import { transporter } from   "../../../app/utils/mailSender.utils"

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    try {
        const docRef = await addDoc(collection(db, 'contacts'), {
            name,
            email,
            subject,
            message,
           
        });

        await transporter.sendMail({
            from: "rohit1.osc@gmail.com",
            to: email,
            subject: "Thank you for submitting",
            text: `Hello ${name},

Thank you so much for getting in touch! We want to confirm that we received your request for information regarding our services, and we will contact you within 7 hours with a comprehensive response.

However, if you require immediate assistance, do not hesitate to email us @ rohit1.osc@gmail.com

Sincerely,

`
        });

        return NextResponse.json({
            id: docRef.id,
            message: "Message sent successfully!!!"
        });
    } catch (error) {
        console.error("Error adding document: ", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}