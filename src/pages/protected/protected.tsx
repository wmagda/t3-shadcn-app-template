import { useSession } from "next-auth/react"
import Layout from "../../components/layout"
import AccessDenied from "../../components/access-denied"
import { api } from "~/utils/api";

export default function ProtectedPage() {
  const { data: session } = useSession()
  const secretMessage = api.example.getSecretMessage.useQuery();
  
  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  // If session exists, display content
  return (
    <Layout>
      <h1 className="text-center">Protected Page</h1>
      <p>
        <strong>{secretMessage.data ? secretMessage.data : "Loading tRPC query..."}</strong>
      </p>
    </Layout>
  )
}
