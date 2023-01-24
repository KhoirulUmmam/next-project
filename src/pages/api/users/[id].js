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

  .get(async (req, res) => {
    try {
       const users =  await UserModel.find({_id: req.query.id})
        res.send(users)
    } catch (err) {
        console.log(err);
    }
  })
  .delete(async(req, res) => {
   try{
    await UserModel.findOneAndDelete({_id: req.query.id});
    res.send('User Deleted Success');
   } catch(err){
    console.log(err);
   }
  })
  .put(async(req, res) => {
    try {
        const user = await UserModel.findOne({_id: req.query.id});
        user.nama = req.body.nama;
        user.email = req.body.email;
        user.telepon = req.body.telepon;
        user.kelahiran = req.body.kelahiran;
        user.kelurahan = req.body.kelurahan;
        user.kecamatan = req.body.kecamatan;
        user.kota = req.body.kota;

        await user.save();
        res.send("User Updated Success")
    } catch (err) {
        console.log(err);
    }
  });

export default handler;