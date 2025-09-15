// components/layout/footer.tsx
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container max-w-screen-2xl mx-auto py-6 not-md:mb-18 px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Vinay Reddy. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Built with{" "}
            <Link href="https://nextjs.org" target="_blank" className="underline hover:text-primary">
              Next.js
            </Link>{" "}
            &{" "}
            <Link href="https://tailwindcss.com" target="_blank" className="underline hover:text-primary">
              Tailwind CSS
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}