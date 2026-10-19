import { useState } from "react";
import { sendContactMessage } from "../../api/contactApi";

const initialForm = {
  sender_name: "",
  sender_email: "",
  subject: "",
  message_text: "",
};

function validateForm(form) {
  const errors = {};

  if (!form.sender_name.trim()) {
    errors.sender_name = "Informe seu nome.";
  }

  if (!form.sender_email.trim()) {
    errors.sender_email = "Informe seu e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.sender_email)) {
    errors.sender_email = "Informe um e-mail válido.";
  }

  if (!form.subject.trim()) {
    errors.subject = "Informe o assunto.";
  }

  if (!form.message_text.trim()) {
    errors.message_text = "Informe sua mensagem.";
  }

  return errors;
}

const fieldClass =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500";

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("validation_error");
      return;
    }

    try {
      setErrors({});
      setStatus("loading");

      await sendContactMessage(form);

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatus("submit_error");
    }
  }

  const isSubmitting = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      noValidate
    >
      <div>
        <label
          htmlFor="sender_name"
          className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Seu nome
        </label>

        <input
          id="sender_name"
          name="sender_name"
          value={form.sender_name}
          onChange={handleChange}
          placeholder="Digite seu nome"
          className={`${fieldClass} ${
            errors.sender_name
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-800"
          }`}
        />

        {errors.sender_name && (
          <p className="mt-1 text-xs text-red-500">{errors.sender_name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="sender_email"
          className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Seu e-mail
        </label>

        <input
          id="sender_email"
          name="sender_email"
          type="email"
          value={form.sender_email}
          onChange={handleChange}
          placeholder="voce@exemplo.com"
          className={`${fieldClass} ${
            errors.sender_email
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-800"
          }`}
        />

        {errors.sender_email && (
          <p className="mt-1 text-xs text-red-500">{errors.sender_email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Assunto
        </label>

        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Como posso ajudar?"
          className={`${fieldClass} ${
            errors.subject
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-800"
          }`}
        />

        {errors.subject && (
          <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message_text"
          className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Mensagem
        </label>

        <textarea
          id="message_text"
          name="message_text"
          rows="5"
          value={form.message_text}
          onChange={handleChange}
          placeholder="Escreva sua mensagem..."
          className={`${fieldClass} resize-y ${
            errors.message_text
              ? "border-red-500"
              : "border-slate-300 dark:border-slate-800"
          }`}
        />

        {errors.message_text && (
          <p className="mt-1 text-xs text-red-500">{errors.message_text}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "success" && (
        <p className="rounded-lg bg-emerald-100 p-3 text-sm text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
          Mensagem enviada com sucesso. Obrigado pelo contato!
        </p>
      )}

      {status === "submit_error" && (
        <p className="rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400">
          Não foi possível enviar sua mensagem. Tente novamente.
        </p>
      )}
    </form>
  );
}
