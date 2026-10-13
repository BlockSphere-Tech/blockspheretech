import type { Locale, Messages } from "../types";
import en from "./en";
import zh from "./zh";
import es from "./es";

export const messages: Record<Locale, Messages> = { en, zh, es };

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? en;
}
