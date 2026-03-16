import React from "react";
import settings from "../settings.json";

function ContactCard() {
  const { title, contacts } = settings.contact;

  const formatHref = (key, value) => {
    const val = String(value);
    if (key === "email") return `mailto:${val}`;
    if (key === "phone") return `tel:${val}`;
    return val;
  };

  const formatKey = (key) => key.charAt(0).toUpperCase() + key.slice(1);

  return (
    <section className="contact-section">    
      <div className="contact-title">
        <h2>{title}</h2>
      </div>     
      <div className="contact-container">
        {contacts.map((contact, index) => (
          <article
            key={index}
            className={`contact-card ${contact.category.toLowerCase().replace(/\s+/g, "-")}`}
          >          
            <div className="card-header">
              <h3>{contact.category}</h3>
            </div>
            <div className="card-body">
              <ul>
                {Object.entries(contact).map(([key, value]) =>
                  key !== "category" ? (
                    <li key={key}>
                      <strong>{formatKey(key)}:</strong>{" "}
                      <a href={formatHref(key, value)} target="_blank" rel="noopener noreferrer">
                        {value}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ContactCard;