import React from 'react';

export default function contact (){
    return (
        <form>
            <label>
                Name: 
                <input type="text" name="name" />
            </label>
            <label>
                Email: 
                <input type="text" name="email" />
            </label>
            <label>
                Message: 
                <input type="text" name="message" />
            </label>
        </form>
    )
}