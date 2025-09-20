


import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";


export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNTNjN2E1YS0yYWJkLTQwM2MtYjQ4Zi1jOWYzZTVjNjNjNzIiLCJpYXQiOjE3NTc5OTgwMjR9.sCDPYwHl0cJmeB-nQsFfNMLvYrHIPLrce_xaiqT4b8M`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }
}