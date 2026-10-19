import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "5561996451338";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Olá! Encontrei seu portfólio e gostaria de conversar.",
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      title="Fale comigo pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#20bd5a]"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
