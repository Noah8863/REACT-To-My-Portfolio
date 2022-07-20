import React from 'react';

export default function contact (){
    return (
        <main className="contactPage">
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
        </main>
    )
}