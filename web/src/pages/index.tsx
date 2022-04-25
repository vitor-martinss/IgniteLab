import { getAccessToken } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"

export default function Home() {
  return (
    <div >
      hi
      <a href="/api/auth/login">login</a>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({res, req}) => {
  const token = getAccessToken(req, res)
  console.log(token)
  return {
    props: {}
  }

}