import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProvider from "./AuthProvider";
import { getCurrentUser } from "@/lib/session";
import { signOut } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";
const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav>
      <div className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
          <Link href="/">
            <Image src="/logo.svg" width={115} height={43} alt="flexible" />
          </Link>
          <ul className="xl:flex hidden text-sm gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flexCenter gap-4">
          {session?.user ? (
            <>
              <ProfileMenu session={session} />

              <Link href="/create-project">Share Work</Link>
            </>
          ) : (
            <AuthProvider />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
