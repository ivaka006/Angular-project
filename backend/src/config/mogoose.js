import mongoose, { connect } from "mongoose";

const dbUrl = 'mongodb://localhost:27017/gameRoom'


export default async function mongooseInit ( )
{
    try {
        await connect(dbUrl)
        console.log('Succesfully connected to DB');
    } catch (error) {
        console.log('cannot connect to db ' + error);
    }
}
