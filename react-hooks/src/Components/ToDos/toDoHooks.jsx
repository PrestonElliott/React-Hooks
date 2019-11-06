import React, { Fragment, useRef, useReducer } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Todos() {
    // CREATE REF FOR TEXT INPUT
    const todoText = useRef()
    
    // SET INITAL STATE TO EMPTY ARRAY
    const [todoList, dispatch] = useReducer((state, action) => { 
            switch(action.type) {
                case "ADD_ITEM": {
                    return [
                        ...state,
                        { 
                            text: action.text,
                            id: action.id
                        }
                    ]
                }
                case "DELETE_ITEM": {
                    return state.filter((todo, index) =>
                        index !== action.index
                    )
                }
                case "CLEAR_ITEMS": {
                    return []
                }
                default: 
                    return state
            }
    }, [])

    // HANDLE TO DO SUBMIT EVENT
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ 
            type: "ADD_ITEM",
            text: todoText.current.value 
        })
        todoText.current.value = ""
    }

    // RENDER COMPONENT
    return (
        <Fragment>
            <div>
                <Form id="to-do-form" onSubmit={handleSubmit}>
                    <h2> To Do List </h2> 
                    <input id="to-do-form-input" ref={todoText}/>
                    <Button onClick={() => dispatch({ type: "CLEAR_ITEMS" })}> 
                        Clear List 
                    </Button>
                </Form>

                <ul className="to-do-items">
                    {todoList.map((todo, index) => 
                        <li key={todo.id}> 
                            {todo.text}
                            <Button 
                                onClick={() => dispatch({ type: "DELETE_ITEM", index })}
                                className="to-do-delete"
                                variant="danger"
                            >
                                X
                            </Button>
                        </li> 
                    )}
                </ul>
            </div>
        </Fragment>
    )
}
