import * as React from 'react';

export enum Theme {
  primary = 'primary',
  secondary = 'secondary',
  unset = ''
}

interface IButtonPropTypes {
  onClick: () => void;
  theme?: Theme;
  disabled?: boolean;
  className?: string;
}

export default class Button extends React.PureComponent<IButtonPropTypes, {}> {
  static defaultProps = {
    theme: Theme.primary
  };

  public render() {
    const { onClick, theme, disabled, className } = this.props;
    return (
      <button className={`nitor-button ${theme} ${className ? className : ''}`} type="button" onClick={onClick} disabled={disabled}>
          <span>
              {this.props.children}
          </span>
      </button>
    );
  }
}