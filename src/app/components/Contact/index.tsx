"use client";

import emailjs from "@emailjs/browser";

// components
import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";
import { Textarea } from "../Textarea";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const public_key = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send(service_id, template_id, templateParams, public_key).then(
      (result) => {
        alert(result.text);
      },
      (error) => {
        alert(error.text);
      }
    );

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section
      className="mt-36 text-white px-4 max-w-tela w-full h-full m-auto"
      id="secao6"
    >
      <h2 className="text-4xl max-sm:text-3xl font-bold mb-16 text-center">
        Contato <span className="text-color-border-1">.</span>
      </h2>

      <form
        className="flex flex-col gap-4 max-w-[608px] m-auto"
        onSubmit={sendEmail}
      >
        <Input
          placeholder="Nome"
          name="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Textarea
          name="mensagem"
          id="mensagem"
          cols={30}
          rows={10}
          className=" bg-transparent border-2 w-full rounded-lg focus:border-color-border-1 px-3 pt-5 peer transition-all outline-none"
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></Textarea>

        <Button
          type="submit"
          className={`m-2 ${name && email && message ? "" : "disabled"}`}
        >
          Enviar
        </Button>
      </form>
    </section>
  );
}
