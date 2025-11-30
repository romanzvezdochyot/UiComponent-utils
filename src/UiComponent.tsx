import React from 'react';
import { classNameUtils, localeUtils } from './utils';
import type { UiComponentProps, UiComponentState, UiComponentConstructor } from './types';

class UiComponent<
  P extends UiComponentProps = UiComponentProps,
  S extends UiComponentState = UiComponentState,
> extends React.Component<P, S> {
  private get namespace(): string {
    const ctor = this.constructor as unknown as UiComponentConstructor;
    return ctor.classes?.ns || '';
  }

  /**
   * Метод для получения мультиязычного текста
   * @param str Строка
   * @returns Мультиязычный текст
   */
  protected gettext(str: string): string {
    return localeUtils.gettext(str);
  }

  /**
   * Метод для получения мультиязычного текста в зависимости от контекста
   * @param context Смысловая нагрузка
   * @param str Строка
   * @returns Мультиязычный текст
   */
  protected pgettext(context: string, str: string): string {
    return localeUtils.pgettext(context, str);
  }

  /**
   * Метод, который позволяет создавать строку классов, объединяя их на основе булевых условий.
   * @param args Названия классов или объекты с ключами названий классов и булевыми значениями.
   * @returns Строка классов.
   */
  protected cx = (...args: Array<string | { [key: string]: boolean }>): string => {
    const ns = this.namespace ? this.namespace.concat('__') : '';
    const namespaced = args.map((a) => {
      if (typeof a === 'object') {
        const [className, isActive] = Object.entries(a).shift() as string[];

        if (isActive) {
          return ns + className;
        }
        return '';
      }
      return ns + a;
    });

    return classNameUtils.cx(...namespaced);
  };
}

export default UiComponent;
