import React from 'react';
import Task1JSX from './task_1/task_1_jsx';
import Task1CreateElement from './task_1/task_1_cr_elem';

const App1 = () => {
    return (
        <fieldset>
            <legend>TASK 1</legend>
            <Task1JSX />
            <Task1CreateElement />
        </fieldset>
    );
}

export default App1;
