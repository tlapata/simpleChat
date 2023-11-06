import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const WebSock = () => {

    // sostoyanie = state
    const [messages, setMessages] = useState([]); // state of messages
    const [value, setValue] = useState(''); // state of input
    const socket = useRef(); // hook-reference of websocket
    const [connected, setConnected] = useState(false); // state of connection with hook useState
    const [username, setUsername] = useState(''); // state of user name 

    // function connect
    function connect() {
        socket.current = new WebSocket('ws://localhost:5001');
        
        // listeners
        socket.current.onopen = () => {
            setConnected(true);
            const message = {
                event: 'connection',
                username,
                id: Date.now()
            }
            socket.current.send(JSON.stringify(message));
            console.log("Connection is open.");
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages(prev => [message, ...prev]);
        }
        socket.current.onclose = () => {
            console.log("Socket was closed.");
        }
        socket.current.onerror = () => {
            console.log("There is an error in the Socket.");
        }

    }

    // function send message
    const sendMessage = async () => {
        const message = {
            username,
            message: value,
            id: Date.now(),
            event: 'message'
        }
        socket.current.send(JSON.stringify(message));
        setValue('');
    };

    // if not connected
    if (!connected) {
        return (
            <div>
                <div className="form">
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                        placeholder="Enter your name"/>
                    <button onClick={connect}>Login</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2>{username}</h2>
            <div className='form'>
                <input 
                    type='text' 
                    value={value} 
                    onChange={e => setValue(e.target.value)} 
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div className="messages">
                {messages.map(mess =>
                    <div className="message" key={mess.id}>
                        {mess.event === 'connection'
                            ? <div className='new-user'>New user {mess.username} is entered the chat.</div>
                            : <div><b>{mess.username}</b>: {mess.message}</div>
                        }
                    </div>
                )}
            </div>
        </div>
    );

};

export default WebSock;