import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
// import styles from "./header.module.css"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "./ui/dropdown-menu"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header >
      <div className="fixed top-0 right-0">
        <p
          className={`nojs-show ${
            !session && loading ? "relative top-0 opacity-100 rounded-b-lg p-2.5 bg-opacity-5 transition-all duration-200 ease-in" : "loaded relative top-0 opacity-100 rounded-b-lg p-2.5 bg-opacity-5 transition-all duration-200 ease-in"
          }`}
        >
        <DropdownMenu>
          {!session && (
            <>
              <DropdownMenuTrigger asChild>
              <Button variant="outline" onClick={(e) => {
                e.preventDefault()
                void signIn()
              }}>SignIn</Button></DropdownMenuTrigger>
            </>
          )}
          {session?.user && (
            <>  
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{session.user.name ?? "Menu"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Home</Link>
                  <DropdownMenuShortcut>⇧⌘H</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/me">Profile</Link>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/admin/admin">Admin</Link>
                  <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/public/public">Public API Data</Link>
                  <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/protected/protected">Protected</Link>
                  <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
                </DropdownMenuItem>  
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={(e) => {
                    e.preventDefault()
                    void signOut()
                  }}>
                    SignOut
                </DropdownMenuItem>
              </DropdownMenuContent>
            </>
          )}
        </DropdownMenu>
        </p>
      </div>


      {/* <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="min-h-16 w-full top-0">
        <p
          className={`nojs-show ${
            !session && loading ? "relative top-0 opacity-100 overflow-hidden rounded-b-lg p-2.5 bg-opacity-5 transition-all duration-200 ease-in" : "loaded relative top-0 opacity-100 overflow-hidden rounded-b-lg p-2.5 bg-opacity-5 transition-all duration-200 ease-in"
          }`}
        >
          {!session && (
            <>
              <span className="absolute pt-3 whitespace-no-wrap overflow-hidden leading-5">
                You are not signed in
              </span>
              <Button asChild onClick={(e) => {
                  e.preventDefault()
                  void signIn()
                }}>
                <Link href="/api/auth/signin">SignIn</Link>
              </Button>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className="rounded-full float-left h-11 w-11 bg-white bg-cover bg-no-repeat"
                />
              )}
              <span className="absolute left-4.5 right-28 truncate z-10 leading-4">
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <Button asChild onClick={(e) => {
                  e.preventDefault()
                  void signOut()
                }}>
                <Link href="/api/auth/signout">SignOut</Link>
                </Button>
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className="mb-8 list-none">
          <li className="inline-block mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/client">Client</Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/server">Server</Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/protected/protected">Protected</Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/api-example">API</Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/admin">Admin</Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="/me">Me</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}