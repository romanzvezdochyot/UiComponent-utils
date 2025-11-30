import { ERROR_FIELD, HEADER, INPUT_FIELD, PLACEHOLDER, MAX_LENGTH } from '../consts';
import UiComponent from '../UiComponent';
import './styles.css';

export class Input extends UiComponent<{ label?: string }, { value: string; error: boolean }> {
  static classes = {
    ns: 'MyInput',
  };

  constructor(props: { label?: string }) {
    super(props);
    this.state = { value: '', error: false };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value,
      error: event.target.value.length > MAX_LENGTH,
    });
  };

  render() {
    const { label } = this.props;
    const { value, error } = this.state;

    return (
      <>
        <h3>{this.pgettext(HEADER.CONTEXT, HEADER.TEXT)}</h3>
        <label className={this.cx('Label')}>
          {label || this.gettext(INPUT_FIELD)}
          <div>
            <input
              value={value}
              onChange={this.handleChange}
              className={this.cx('Input', { Error: error })}
              placeholder={this.pgettext(PLACEHOLDER.CONTEXT, PLACEHOLDER.TEXT)}
            />
            <div>{error && this.gettext(ERROR_FIELD)}</div>
          </div>
        </label>
      </>
    );
  }
}
