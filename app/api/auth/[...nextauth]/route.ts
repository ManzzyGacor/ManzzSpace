import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { connectDB } from "../../../../../lib/mongodb"
import User from "../../../../../lib/models/User"
import bcrypt from "bcrypt"

const handler = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        await connectDB()
        const user = await User.findOne({
          email: credentials?.email,
        })
        if (!user) return null

        const valid = await bcrypt.compare(
          credentials!.password,
          user.password
        )
        if (!valid) return null

        return {
          id: user._id,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role
      return token
    },
    async session({ session, token }) {
      ;(session.user as any).role = token.role
      return session
    },
  },
})

export { handler as GET, handler as POST }

