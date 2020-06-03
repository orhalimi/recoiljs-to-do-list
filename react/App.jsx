import React from 'react'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import TodoList from 'react/TodoList';


const App = props => {

    return (
        <RecoilRoot>
            <TodoList />
        </RecoilRoot>
    );
}


export default App;