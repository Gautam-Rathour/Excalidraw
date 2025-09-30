


"use client"

import { WS_URL } from "@/config";
import { initDraw } from "@/app/draw";
import { useEffect, useRef, useState } from "react"


export function RoomCanvas({roomId}: {roomId: string}) {
    const [socket, setSocket] = useState<WebSocket | null>(null);


    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token${}`)

        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type: "join_room",
                roomId
            }))
        }
    }, [])


    if(!socket) {
        return <div>
            Connecting to server..........
        </div>
    }


    return <div>
        <Canvas />
        <canvas ref={canvasRef} width={1080} height={1080}></canvas>
    </div>
}