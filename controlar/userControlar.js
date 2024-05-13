import { UserData } from "../server.js";


export const getUsers = async (req, res) => {

    // console.log("helllo")

    try {
        const users = await UserData.find({})
            .then((data) => {
                res.send(data);
            })
    } catch (error) {
        res.send("users not found");
    }
}