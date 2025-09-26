


"use client"

import { useEffect, useRef } from "react"
import { initDraw } from "@/app/draw";


export function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(canvasRef.current) {
            initDraw(canvasRef.current);
        }

    }, [canvasRef]);


    return <div>
        <canvas ref={canvasRef} width={1080} height={1080}></canvas>
    </div>
}