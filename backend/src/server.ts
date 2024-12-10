import express from "express";
import cors from "cors"
import { games,users } from "./data";
import jwt from "jsonwebtoken"

const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}))

app.get("/create", (req, res)=> {
    
})

app.post('/login', (req, res) => {
    const body = req.body;
    const user = users.find(user => user.email === body.email && 
        user.password === body.password)

        if(user){
            res.send(generateTokenResponse(user))
        }
        else{
            res.status(400).send("email or password is not valid")
        }
})

const generateTokenResponse = (user:any) =>
{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "somerandom", {expiresIn: "2d"})
    user.token = token 
    return user
}

app.get("/catalog", (req, res)=> {
    res.send(games)
})

app.get("/catalog/:gameId", (req, res)=> {
    const gameId = req.params.gameId
    const game = games.find(game => game.id == gameId)
    res.send(game)
})

const port = 5000
app.listen(port, ()=>{
    console.log("Wbsite served on http://localhost:" + port);
    
})