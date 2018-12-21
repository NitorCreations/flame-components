import * as React from 'react';

interface IInputProps {
  placeholder?: string;
  onChange?: () => void;
  type?: string;
  disabled?: boolean;
  className?: string;
}

export default class TextInput extends React.PureComponent<IInputProps, {}> {
  static defaultProps = {
    type: 'text'
  };

  public render() {
    const { onChange, placeholder, type, className, disabled } = this.props;

    return (
      <input
        type={type}
        className={`flame-input ${className ? className : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    );
  }
}