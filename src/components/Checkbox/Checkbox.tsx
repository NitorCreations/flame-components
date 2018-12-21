import * as React from 'react';

interface ICheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: any) => void;
  className?: string;
}

export default class Checkbox extends React.PureComponent<ICheckboxProps, {}> {
  static defaultProps = {
    checked: false
  };

  public render() {
    const { checked, disabled, onChange, className } = this.props;

    return (
      <label className={`flame-checkbox ${className ? className : ''} ${disabled ? 'disabled' : ''}`}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span>
          {this.props.children}
        </span>
      </label>
    );
  }
}