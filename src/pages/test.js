import React from 'react';
import { useInput, useBoolean, useNumber, useArray, useOnMount, useOnUnmount } from 'react-hanger';


function Test () {

    const newTodo = useInput('');
    const showCounter = useBoolean(true);
    const limitedNumber = useNumber(3, { lowerLimit: 0, upperLimit: 5 });
    const counter = useNumber(0);
    const todos = useArray(['hi there', 'sup', 'world']);

    const rotatingNumber = useNumber(0, {
      lowerLimit: 0,
      upperLimit: 4,
      loop: true,
    });

    return (
      <div>
        <button onClick={showCounter.toggle}> toggle counter </button>
        <button onClick={() => counter.increase()}> increase </button>
        {showCounter.value && <span> {counter.value} </span>}
        <button onClick={() => counter.decrease()}> decrease </button>
        <button onClick={todos.clear}> clear todos </button>
        <input type="text" value={newTodo.value} onChange={newTodo.onChange} />
      </div>
    );



}

export default Test;