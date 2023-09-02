"use client";

import emailjs from "@emailjs/browser";

// components
import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";

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

    const service_id = process.env.YOUR_SERVICE_ID as string;
    const template_id = process.env.YOUR_TEMPLATE_ID as string;
    const public_key = process.env.YOUR_PUBLIC_KEY as string;

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send(service_id, template_id, templateParams, public_key).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <section
      className="mt-28 text-white px-4 max-w-tela w-full h-full m-auto"
      id="secao6"
    >
      <h2 className="text-4xl max-sm:text-3xl font-bold mb-16 text-center">
        Contato <span className="text-color-tertiary">.</span>
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

        <textarea
          name="Mensagem"
          id="mensagem"
          cols={30}
          rows={10}
          className="bg-color-primary border-2  w-full rounded-lg px-3 pt-4 peer focus:border-color-tertiary transition-all outline-none"
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <Button type="submit" className="m-2">
          Enviar
        </Button>
      </form>
    </section>
  );
}
