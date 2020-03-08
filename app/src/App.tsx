import React from 'react';
import './App.css';
import css from './App.module.css';
import {Stepper} from "./components/Stepper/Stepper";
import {Button} from "./components/Button/Button";
import img1 from './components/Slider/resources/1.jpg';
import img2 from './components/Slider/resources/2.jpg';
import img3 from './components/Slider/resources/3.jpg';
import {Slider} from "./components/Slider/Slider";

const imagesArray = [img1, img2, img3];

const buttonTheme = {
    container: css.button,
    container_primary: css.button_primary
};

const stepperTheme = {
    valueRendererTheme: {
        container: css.input
    },
    decreaseTheme: {
        container: css.stepperButton
    },
    increaseTheme: {
        container: css.stepperButton
    }
};

const someControlledTheme = {
    container: css.stepperButton
};


const onClickHandler = (value: string) => () => {
    alert(`Your Stepper value: ${value}`);
};

const SomeShowView = (props: {
    value: string
}) => <Button theme={someControlledTheme} onClick={onClickHandler(props.value)}>{props.value}</Button>;

function App() {
    return (
        <div className="App">
            <section>
                <Button isPrimary={true}>I am a Button</Button>
                <Button isPrimary={true} theme={buttonTheme}>I am a Themed Button</Button>
            </section>
            <section>
                <Stepper theme={stepperTheme} minValue={0} maxValue={10}/>
            </section>
            <section>
                <Stepper theme={stepperTheme} ValueRenderer={SomeShowView} step={1}
                         minValue={0} maxValue={10}/>
            </section>
            <section>
                <Slider images={imagesArray}/>
            </section>
        </div>
    );
}

export default App;
