import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { FirebaseAdapter } from 'next-auth/adapters';
import { db } from '../../../firebase';

export default NextAuth({
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		})
	],
	adapter: firebaseAdapter(db),
	// Optional SQL or MongoDB database to persist users
	database: process.env.DATABASE_URL
});
