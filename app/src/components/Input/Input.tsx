import * as React from 'react';
import {themr} from 'react-css-themr';

export const INPUT = Symbol('Input');

export interface  TInputTheme {
    container?: string
}

interface TMyInputProps {
    theme: TInputTheme;
}

type TFullInputProps = TMyInputProps & React.HTMLProps<HTMLInputElement>

const RawInput: React.SFC<TFullInputProps> = ({theme, ...props}) => <input {...props} className={theme.container} />;

export const Input = themr(INPUT)(RawInput);