import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-neutral-800 flex flex-row">
      <div>
        <Link href="/">Open Canary</Link>
      </div>
    </nav>
  );
}
