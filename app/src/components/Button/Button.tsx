import * as React from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import css from './Button.module.css';
import {ComponentClass} from 'react';

export const BUTTON = Symbol('Button') as symbol;

export interface TButtonTheme {
    container?: string;
    container_primary?: string;
    container_flat?: string;
}

interface TMyButtonProps {
    theme: TButtonTheme;
    style?: {};
    type?: 'submit' | 'reset' | 'button';
    isDisabled?: boolean;
    isPrimary?: boolean;
    isFlat?: boolean;
}

export type TFullButtonProps = TMyButtonProps & React.HTMLProps<HTMLButtonElement> | undefined;

class RawButton extends React.Component<TFullButtonProps> {
    public static defaultProps = {
        type: 'button',
    };

    render() {
        const props = this.props;
        const className = classnames(props.theme.container, {
            [props.theme.container_primary as string]: props.isPrimary,
            [props.theme.container_flat as string]: props.isFlat,
        });

        return (
            <button className={className}
                    onMouseLeave={props.onMouseLeave}
                    onMouseDown={props.onMouseDown}
                    onMouseUp={props.onMouseUp}
                    onMouseEnter={props.onMouseEnter}
                    onMouseMove={props.onMouseMove}
                    onMouseOut={props.onMouseOut}
                    onMouseOver={props.onMouseOver}
                    onDoubleClick={props.onDoubleClick}
                    onDrag={props.onDrag}
                    onDragEnd={props.onDragEnd}
                    onDragEnter={props.onDragEnter}
                    onDragExit={props.onDragExit}
                    onDragLeave={props.onDragLeave}
                    onDragOver={props.onDragOver}
                    onDragStart={props.onDragStart}
                    onDrop={props.onDrop}
                    onClick={props.onClick}
                    onTouchCancel={props.onTouchCancel}
                    onTouchEnd={props.onTouchEnd}
                    onTouchMove={props.onTouchMove}
                    onTouchStart={props.onTouchStart}
                    type={props.type}
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