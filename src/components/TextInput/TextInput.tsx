import * as React from 'react';

interface IInputProps {
  placeholder?: string;
  label?: string;
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
    const { onChange, placeholder, label, type, className, disabled } = this.props;

    const labelBlock = label ? (
      <span className="flame-input-label">
          {label}
        </span>
    ) : null;

    return (
      <div className={`flame-input ${className ? className : ''}`}>
        {labelBlock}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    );
  }
}