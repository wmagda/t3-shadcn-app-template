import Link from "next/link"
import packageJSON from "../../package.json"

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-200">
      <hr />
      <div className="p-4 text-center">
        <ul className="mb-4 p-0 list-none">
          <li className="inline-block mr-4">
            <a href="https://next-auth.js.org">Documentation</a>
          </li>
          <li className="inline-block mr-4">
            <a href="https://www.npmjs.com/package/next-auth">NPM</a>
          </li>
          <li className="inline-block mr-4">
            <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
          </li>
          <li className="inline-block mr-4">
            <Link href="/policy">Policy</Link>
          </li>
          <li className="inline-block mr-4">
            <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
          </li>
        </ul>
      </div>
    </footer>
  )
}