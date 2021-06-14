import {getSession} from "next-auth/client";
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home({ session }) {
  if(!session) return <Login />;
  
  return (
    <div>
      <Head>
        <title>Facebook | NL</title>
      </Head>

        <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}
//to allow for server side rendering in nextjs app
export async function getServerSideProps (context) {
  //get user
  const session = await getSession(context);

  return{
    props: {
      session
    }
  }
}