import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer className="w-full bg-background/95 border-t">
            <div className="container flex flex-col items-center gap-8 px-4 py-10 mx-auto md:px-8 lg:px-12 xl:px-16 2xl:px-24">
                {/* Top section with logo and links */}
                <div className="flex flex-col items-center w-full gap-8 md:flex-row md:justify-between">
                    <Link href="/">
                        <Image
                            alt="logo"
                            className="w-32 cursor-pointer dark:invert md:w-40"
                            src="/images/logo.png"
                            height={100}
                            width={170}
                        />
                    </Link>
                    <div className="flex flex-col gap-4 text-center md:flex-row md:gap-8">
                        <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                            Home
                        </Link>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                            About
                        </Link>
                        <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                <div className="text-sm text-center text-muted-foreground">
                    MADE BY <Link href="https://github.com/vrushab123" className="font-bold text-purple-500 hover:text-primary">VRUSHAB</Link>
                </div>

                {/* Bottom section with copyright */}
                <div className="flex flex-col items-center gap-4 pt-8 mt-8 border-t w-full">
                    <p className="text-sm text-center text-muted-foreground">
                        © {new Date().getFullYear()} Converto. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
