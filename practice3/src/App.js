import React from 'react'


/*
*   Challenge #2:
*   - If there are no unread messages. display "You're all caught up!"
*   - If there are > 0 unread messages, display "You have <n> unread message(s)"
*       - If there's exactly 1 unread message, it should read "message" (singular)
*/
export default function App() {
    const [messages, setMessages] = React.useState(['a', 'b'])
    
    return (
        <div>
            {
                messages.length === 0 ? 
                <h1>You're all caught up!</h1> : 
                <h1>You have {messages.length} unread {messages.length > 1 ? 'messages' : 'message'}</h1> 
                
            }
        </div>
    )
}
















/*   Challenge #1:
*   - Only display the <h1> below if there are unread messages
*/
// export default function App() {
//     const [messages, setMessages] = React.useState(['a', 'b'])
    
//    return   (
//         <div>
//             {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
//         </div>
//    )
// }