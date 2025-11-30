# Тестовое задание

## Условие:

### Существует два объекта со следующими вспомогательными методами:

```typescript
// Объект с методами для поддержки переводов в сервисе
const localeUtils = {
  gettext: (str: string): string => translate(str),
  pgettext: (context: string, str: string): string => translate(str,{context}),
};

// Объект с методом для получения строки классов
const classNameUtils = {
  cx: (...args: string[]): string => createClassNames(...args),
};
```
а также React-компонент Input, который отрисовывает в интерфейсе поле ввода:

```typescript
export class Input extends UiComponent {
  constructor(props) {
    super(props)

	this.state = { value: ‘’ }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { label } = this.props;
	const { value } = this.state;

    return (
      <label>
        {label}
 		<input 
  value={value} 
  onChange={this.handleChange}
/>
      </label>
    )
  }
}
```

### Задачи:	

## 1. Необходимо реализовать классовый компонент UiComponent, который будет предоставлять доступ к методам из объектов localeUtils и classNameUtils для всех компонентов, наследуемых от UiComponent. Каждый компонент, который будет наследоваться от UiComponent, будет иметь статическое свойство classes. В этом свойстве будет задан namespace. Методы из classNameUtils должны иметь доступ к этому статическому свойству, для корректной генерации наименований классов.

Например:

```typescript
export class Input extends UiComponent {

  static classes = {
    ns: ‘MyInput’
  }
  
  constructor(props) {
    super(props)

	this.state = { value: ‘’ }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { label } = this.props;
	const { value } = this.state;

    return (
      <label
	    className={this.cx(‘Label’)}
 >
        {label || this.gettext(‘Поле ввода’)}
 		<input 
  value={value} 
  onChange={this.handleChange}  
  className={this.cx(‘Input’)}
/>
      </label>
    )
  }
}
```

## 2. Покрыть компонент UiComponent типами с помощью TypeScript.

