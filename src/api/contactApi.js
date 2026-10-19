import { supabase } from "../lib/supabaseClient";

export async function sendContactMessage(formData) {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert({
      sender_name: formData.sender_name.trim(),
      sender_email: formData.sender_email.trim().toLowerCase(),
      subject: formData.subject.trim(),
      message_text: formData.message_text.trim(),
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
