import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header/>
          <main className="flex-grow">{children}</main>
        <Footer/>
      </div>
    </>
  )
}