import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
    BlueButton,
    CarinfoInput,
    CarinfoInputs,
    CarinfoTabSend,
} from "../style/style";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_xflwzxe", "template_5gzb00o", form.current, {
                publicKey: "r0iN9kNKzqqYk44mH",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <CarinfoTabSend>
                    <div>Send a question</div>
                    <CarinfoInputs>
                        <CarinfoInput
                            name="user_name"
                            placeholder="Your name"
                            type="text"
                        />
                        <CarinfoInput
                            name="user_email"
                            placeholder="Your email"
                            type="email"
                        />
                        <CarinfoInput
                            name="message"
                            $big
                            placeholder="Your question"
                            type="text"
                        />
                    </CarinfoInputs>
                    <BlueButton $sendButton type="submit" value="Send">
                        Send question
                    </BlueButton>
                </CarinfoTabSend>
            </form>
        </div>
    );
};
