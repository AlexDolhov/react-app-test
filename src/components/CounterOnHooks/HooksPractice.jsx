import {useState, useEffect} from "react";

export const CounterOnHooks = () => {
    const [value, setValue] = useState(0);
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    const sumValue = firstValue + secondValue;

    useEffect(() => {document.title = `Clicked ${value} times`}, [value]);
    // useEffect(sumValue, [firstValue, secondValue]);

    //useEffect(() => {firstValue + secondValue}, [firstValue])

    return (
        <>
        <h2>Counter on hooks</h2>
        <p>You clicked {value} times</p>
        <button type="button" onClick = {() => setValue(value +1)}>Click</button>
        <h2>Sum value {sumValue}</h2>
        <button onClick = {() => setFirstValue(firstValue + 1)}>First value {firstValue}</button>
        <button onClick = {() => setSecondValue(secondValue + 1)}>Second value {secondValue}</button>
        </>
    )

}

export default CounterOnHooks;