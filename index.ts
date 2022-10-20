import express, { response } from "express"
import ws from "express-ws"

const app = ws(express()).app

app.ws("/", (ws, request) => {
    ws.on("message", msg => {
        console.log(msg)
    })
})

app.listen(8080, () => {
    console.log("Server is running at port 8080!")
})