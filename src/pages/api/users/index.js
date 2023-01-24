import nc from "next-connect";
import UserModel from '../../../../models/UserModel';
import connectDb from "../../../../utils/connectDb";

connectDb();
const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .get(async(req, res) => {
    try{
        const users = await UserModel.find({})
        res.send(users)
    }catch(err){
        console.log(err);
    }
  })
  .post(async(req, res) => {
    const { nama, email, telepon, kelahiran, kelurahan, kecamatan, kota, timestamps } = req.body
    const newUser = new UserModel({nama, email, telepon, kelahiran, kelurahan, kecamatan, kota})
    try{
        await newUser.save();
        res.send('New User Created Success')
    } catch(err){
        console.log(err);
    }
  });

export default handler;