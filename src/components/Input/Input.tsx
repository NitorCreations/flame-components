import * as React from 'react';

interface IInputProps {
  placeholder?: string;
  onChange?: () => void;
  disabled?: boolean;
  className?: string;
}

export default class Input extends React.PureComponent<IInputProps, {}> {
  public render() {
    const { onChange, placeholder, className, disabled } = this.props;

    return (
      <input
        className={`flame-input ${className ? className : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    );
  }
}