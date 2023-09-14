import { useSession } from "next-auth/react"
import Layout from "../../components/layout"
import AccessDenied from "../../components/access-denied"
import { api } from "~/utils/api";

export default function AdminPage() {
  const { data: session } = useSession()

	if (!session) {
		return (
			<Layout>
				<AccessDenied />
			</Layout>
	)}

	const secretMessage = api.example.getAdminContent.useQuery();
	
	if(secretMessage.error) {
		console.log("AdminSecretMessageError:", secretMessage.error)
    return (
			<Layout>
				<AccessDenied />
			</Layout>
    )
	}

  // If session exists and no errors, display content
  return (
    <Layout>
      <h1>Admin Page - only checking in the backend...</h1>
      <p>
        <strong>{secretMessage.data ? secretMessage.data : "Loading tRPC query..."}</strong>
      </p>
    </Layout>
  )
}
