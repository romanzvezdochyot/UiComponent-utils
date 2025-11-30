import UiComponent from '../UiComponent';
import type { Locale, ToggleProps } from '../types';
import { dictionaries, getLocale, setLocale } from '../utils';
import './styles.css';

const locales = Object.keys(dictionaries) as Array<Locale>;

class Toggle extends UiComponent<ToggleProps, { value: string }> {
  static classes = {
    ns: 'MyToggle',
  };

  constructor(props: ToggleProps) {
    super(props);
    this.state = { value: '' };
    this.handleClick = this.handleClick.bind(this);

    const locale = navigator.language.split('-')[0] as Locale;
    setLocale(locale);
  }

  componentDidMount(): void {
    const locale = getLocale();
    this.setState({ value: locale });
  }

  handleClick(value: Locale) {
    return () => {
      this.setState({ value }, () => {
        setLocale(value);
        this.props.forceUpdate();
      });
    };
  }

  render() {
    const { value: currentLocale } = this.state;

    return (
      <div className={this.cx('Wrapper')}>
        {locales.map((locale, key) => {
          return (
            <button
              className={this.cx('Button', { Active: currentLocale === locale })}
              onClick={this.handleClick(locale)}
              key={key}
            >
              {locale}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Toggle;
