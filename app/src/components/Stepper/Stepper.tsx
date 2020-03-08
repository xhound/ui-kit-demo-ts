import * as React from 'react';
import {themr} from 'react-css-themr';
import {Input, TInputTheme} from "../Input/Input";
import {Button, TButtonTheme} from "../Button/Button";

const STEPPER = Symbol('Stepper');

interface TStepperProps {
    minValue?: number;
    maxValue?: number;
    theme: {
        container?: string;
        valueRendererTheme?: TInputTheme;
        increaseTheme?: TButtonTheme;
        decreaseTheme?: TButtonTheme;
    }
}

interface TStepperDefaultProps {
    initial: number;
    step: number;
    ValueRenderer: Function;
    Increase: Function;
    Decrease: Function;
}

interface TStepperState {
    value: number;
}

class RawStepper extends React.Component<TStepperProps & Partial<TStepperDefaultProps> | undefined, TStepperState> {
    public static defaultProps: TStepperDefaultProps = {
        initial: 0,
        ValueRenderer: Input,
        Increase: Button,
        Decrease: Button,
        step: 1
    };

    state = {
       value: this.props.initial!
    };

    handleIncreaseClick = () => {
        const props = this.props;
        const state = this.state;

        const newValue = state.value + props.step!;

        if (props.maxValue) {
            this.setState({
                value: newValue < props.maxValue ? newValue : props.maxValue
            })
        } else {
            this.setState({
                value: newValue
            })
        }
    };

    handleDecreaseClick = () => {
        const props = this.props;
        const state = this.state;

        const newValue = state.value - props.step!;

        if (props.minValue || props.minValue === 0) {
            this.setState({
                value: newValue >= props.minValue ? newValue : props.minValue
            })
        } else {
            this.setState({
                value: newValue
            })
        }
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { minValue, maxValue} = this.props;
        const newValue = Number(e.target.value);
        if (minValue && newValue <= minValue) {
            this.setState({
                value: minValue
            });
        } else if (maxValue && newValue >= maxValue) {
            this.setState({
                value: maxValue
            });
        } else {
            this.setState({
                value: newValue
            });
        }
    };


    render() {
        const props = this.props;
        const ValueRenderer = props.ValueRenderer!;
        const Increase = props.Increase!;
        const Decrease = props.Decrease!;
        return (
            <div className={props.theme.container}>
                <ValueRenderer theme={props.theme.valueRendererTheme} value={this.state.value} onChange={this.handleChange}/>
                <Decrease theme={props.theme.decreaseTheme} onClick={this.handleDecreaseClick}>-</Decrease>
                <Increase theme={props.theme.increaseTheme} onClick={this.handleIncreaseClick}>+</Increase>
            </div>
        );
    }
}

export const Stepper = themr(STEPPER)(RawStepper);