import bcrypt from "bcrypt"
import mongoose from "mongoose"
import User from "../lib/models/User"

const MONGODB_URI = process.env.MONGODB_URI!

async function seed() {
  await mongoose.connect(MONGODB_URI)

  const existing = await User.findOne({ email: "manzz" })
  if (existing) {
    console.log("❗ Admin sudah ada")
    process.exit(0)
  }

  const hashedPassword = await bcrypt.hash("112233", 10)

  await User.create({
    name: "manzz",
    email: "manzz@gmail.com",
    password: hashedPassword,
    role: "admin",
  })

  console.log("✅ Admin user berhasil dibuat")
  process.exit(0)
}

seed()
