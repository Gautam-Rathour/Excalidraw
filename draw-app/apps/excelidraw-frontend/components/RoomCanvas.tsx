


"use client"

import { WS_URL } from "@/config";
import { initDraw } from "@/app/draw";
import { useEffect, useRef, useState } from "react"


export function RoomCanvas({roomId}: {roomId: string}) {
    const [socket, setSocket] = useState<WebSocket | null>(null);


    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NjRkYWI0My04MzYyLTRkZjgtOTBmMi1hZDExMTk0MDBlNmUiLCJpYXQiOjE3NTkyMzA1MzJ9.yhMBtBe-AolzQ43SSZL_0EhZBJ6MIsKM5WiYsFu_gJs`)

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