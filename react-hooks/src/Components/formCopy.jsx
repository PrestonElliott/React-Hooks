import React, { useState, useEffect } from 'react'

export default function SignUpForm() {
    const name = useFormUpdate("Preston")
    const lastName = useFormUpdate("Elliott")
    const email = useFormUpdate()

    // const [name, formName] = useState()
    // const [lastName, formLastName] = useState()
    const [submit, formSubmit] = useState()

    // REFACTOR TO WORK FOR ALL FIELDS 
    // MAKES YOUR CODE DRY-(DON'T REPEAT YOURSELF) 
    function useFormUpdate(initialValue) {
        const [value, formValue] = useState(initialValue)

        function handleChange(e) {
            formValue(e.target.value)
        }

        return {
            value,
            onChange: handleChange
        }
    }

    // SHOW FOR FIRST ITERATION OF THIS CODE
    // function handleNameUpdate(e) {
    //     formName(e.target.value)
    // }

    // function handleLastNameUpdate(e) {
    //     formLastName(e.target.value)
    // }

    function handleSubmit(e) {
        formSubmit(e.target.value)
    }

    // USE EFFECT HOOK 
    useEffect(() => {
        document.title = name.value + ' ' + lastName.value
    })

    return (
        <form>
            <label>
                Name:
                <input 
                    type="text" 
                    name="name"
                    {...name} 
                    // value={...name}
                    // value={value}
                    // onChange={handleFormUpdate}

                    // onChange={handleNameUpdate} 
                />
            </label>
            <label>
                Last Name:
                <input 
                    type="text" 
                    name="last-name" 
                    {...lastName} 
                    // onChange={handleChange}

                    // value={value}
                    // onChange={handleFormUpdate}

                    // onChange={handleLastNameUpdate} 
                />
            </label>
            <label>
                Email
                <input
                    type="text"
                    name="email"
                    {...email}
                />
            </label>
            <input 
                type="submit" 
                value={submit}
                onSubmit={handleSubmit}
            />
        </form>
    )

}

// SHOW HOW TO REFACTOR FUNCTIONS DOWN HERE



// SHOW HOW TO REMOVE EFFECT AFTER ITS USED



// OPTIONAL RETURN STATEMENT IN USE EFFECT

