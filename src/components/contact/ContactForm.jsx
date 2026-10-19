import { useState } from "react";
import { sendContactMessage } from "../../api/contactApi";

const initialForm = {
  sender_name: "",
  sender_email: "",
  subject: "",
  message_text: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.sender_name ||
      !form.sender_email ||
      !form.subject ||
      !form.message_text
    ) {
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");

      await sendContactMessage(form);

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 rounded-2xl border border-slate-800 bg-slate-900"
    >
      <input
        name="sender_name"
        value={form.sender_name}
        onChange={handleChange}
        placeholder="Seu nome"
        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800"
      />

      <input
        name="sender_email"
        type="email"
        value={form.sender_email}
        onChange={handleChange}
        placeholder="Seu e-mail"
        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800"
      />

      <input
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Assunto"
        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800"
      />

      <textarea
        name="message_text"
        rows="5"
        value={form.message_text}
        onChange={handleChange}
        placeholder="Mensagem"
        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-400">
          Mensagem enviada com sucesso.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400">
          Preencha todos os campos ou tente novamente.
        </p>
      )}
    </form>
  );
}
