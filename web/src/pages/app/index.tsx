import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"

export default function Home() {
  return (<>helloooo</>)
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired()