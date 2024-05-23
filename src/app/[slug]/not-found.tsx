import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <h2 className="text-2xl font-bold text-indigo-500">Not Found</h2>
      <p className="text-lg my-4">Could not find requested resource.</p>

      <Link
        href="/"
        className="inline-block px-6 py-3 text-md font-medium text-center text-white bg-indigo-600 rounded-md "
      >
        Return Home
      </Link>
    </Container>
  );
}
