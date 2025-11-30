import en from './locales/en.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import type { Locale, TranslationValue } from './types';

// Ф-ция, которая объединяет классы в одну строку, удаляя пустые элементы
function createClassNames(...args: string[]): string {
  return args.filter(Boolean).join(' ');
}

// Объект с методом для получения строки классов
export const classNameUtils = {
  cx: (...args: string[]): string => createClassNames(...args),
};

// Текущая локаль
let currentLocale: Locale = 'ru';

export const setLocale = (locale: Locale) => {
  currentLocale = locale;
};

export const getLocale = () => {
  return currentLocale;
};

// Словарь доступных международных языков
export const dictionaries: Record<Locale, Record<string, TranslationValue>> = {
  en,
  ru,
  de,
};

// Ф-ция для перевода текста
function translate(str: string, opts?: { context?: string }) {
  const entry = dictionaries[currentLocale]?.[str];

  return opts?.context
    ? (typeof entry === 'object' && entry[opts.context]) || str
    : (typeof entry === 'string' && entry) || str;
}

// Объект с методами для поддержки переводов в сервисе
export const localeUtils = {
  gettext: (str: string): string => translate(str),
  pgettext: (context: string, str: string): string => translate(str, { context }),
};
