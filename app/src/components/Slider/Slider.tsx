import * as React from 'react';
import {Button, TFullButtonProps} from "../Button/Button";
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

const ControlIncrease = (props: TFullButtonProps) => <Button {...props}>{`→`}</Button>;

const ControlDecrease = (props: TFullButtonProps) => <Button {...props}>{`←︎`}</Button>;

export const Slider = (props: {images: string[]}) => {
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