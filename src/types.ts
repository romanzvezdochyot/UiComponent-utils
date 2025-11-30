/**
 * Внешние данные компонента UiComponent
 */
export type UiComponentProps = { [key: string]: unknown } | object;

/**
 * Собственные данные компонента UiComponent
 */
export interface UiComponentState {
  [key: string]: unknown;
}

export interface UiComponentClasses {
  ns: string;
}

/**
 * Конструктор компонента UiComponentC
 */
export interface UiComponentConstructor {
  classes?: UiComponentClasses;
}

/**
 * Строковый литерал локалей
 */
export type Locale = 'en' | 'ru' | 'de';

/**
 * Тип значений словаря переводов текста
 */
export type TranslationValue = string | { [key: string]: string };

/**
 * Внешние данные компонента Toggle
 */
export interface ToggleProps {
  forceUpdate: () => void;
}
