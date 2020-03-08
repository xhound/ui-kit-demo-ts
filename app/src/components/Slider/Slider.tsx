import * as React from 'react';
import {Button, TButtonTheme} from "../Button/Button";
import {Stepper} from "../Stepper/Stepper";
import css from './Slider.module.css';

const sliderTheme = {
    container: css.container,
    valueRendererTheme: {
        container: css.showValue
    },
    increaseTheme: {
        container: css.increase
    },
    decreaseTheme: {
        container: css.decrease
    }
};

const Images = (images: string[]) => (props: {theme: {container?: string}, value: number}) => {
    return (
        <div className={props.theme.container}>
            <img src={images[props.value]} alt="Hot-roads"/>
        </div>
    );
};

const ControlIncrease = (props: {theme: TButtonTheme}) => <Button {...props}>{`→`}</Button>;

const ControlDecrease = (props: {theme: TButtonTheme}) => <Button {...props}>{`←︎`}</Button>;

export const Slider = (props: any) => {
    return (
        <Stepper theme={sliderTheme}
                 minValue={0}
                 maxValue={props.images.length - 1}
                 ValueRenderer={Images(props.images)}
                 Increase={ControlIncrease}
                 Decrease={ControlDecrease}
        />
    )
};