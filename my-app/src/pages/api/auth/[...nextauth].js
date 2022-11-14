import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_KEY_SPOTIFY_CLIENT,
      clientSecret: process.env.NEXT_PUBLIC_KEY_SPOTIFY_SECRET,
      authorization: LOGIN_URL
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)