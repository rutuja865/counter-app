import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increament } from '../redux/slices/CounterSlice';

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(increament())}>Increament</button><br /><br />
            <div>{count}</div><br /><br />
            <button onClick={() => dispatch(decrement())}>Decreament</button>
        </>
    )
}
