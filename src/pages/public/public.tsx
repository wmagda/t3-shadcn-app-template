import Layout from "../../components/layout"
import { api } from "~/utils/api";

export default function PublicPage() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  
  return (
    <Layout>
      <h1 className="text-center">Public Page</h1>
      <p>
        <strong>{hello.data ? hello.data.greeting : "Loading tRPC query..."}</strong>
      </p>
    </Layout>
  )
}