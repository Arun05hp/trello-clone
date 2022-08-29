const dbConnect = require("../../../lib/mongodb");
const bcrypt = require("bcrypt");
const { User, validate } = require("../../../models/user");

async function handler(req, res) {
  try {
    if (req.method !== "POST") return;
    const { email, password } = req.body;
    const { error } = validate({ email, password });
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    user = new User({ email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    return res.status(200).send("User Registered Successfully!");
  } catch (error) {
    res.status(400).send(error?.message ?? "Something Went Wrong");
  }
}

export default handler;
