import * as React from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import css from './Button.module.css';
import {EventHandler, MouseEvent} from 'react';

export const BUTTON = Symbol('Button') as symbol;

export interface TButtonTheme {
    container?: string;
    container_primary?: string;
    container_flat?: string;
}

interface TMyButtonProps {
    theme?: TButtonTheme;
    style?: {};
    type?: 'submit' | 'reset' | 'button';
    isDisabled?: boolean;
    isPrimary?: boolean;
    isFlat?: boolean;
    onClick?: EventHandler<MouseEvent<HTMLButtonElement>>;
    tabIndex?: number;
}

export type TFullButtonProps = TMyButtonProps | undefined;

class RawButton extends React.Component<TFullButtonProps> {
    public static defaultProps = {
        type: 'button',
    };

    render() {
        const props = this.props;
        const {theme = {}} = props;
        const className = classnames(theme.container, {
            [theme.container_primary as string]: props.isPrimary,
            [theme.container_flat as string]: props.isFlat,
        });

        return (
            <button className={className}
                    onClick={props.onClick}
                    style={props.style}
                    tabIndex={props.tabIndex}
                    disabled={props.isDisabled}
            >
                {props.children}
            </button>
        )
    }
}

export const Button = themr(BUTTON, css)(RawButton);