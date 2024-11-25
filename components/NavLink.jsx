"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink(props) {
    const pathname = usePathname()
    const active = pathname === props.path

    return ( 
        <Link className={active ? "opacity-100" : "opacity-75 hover:opacity-100"} href={props.path} >
            {props.text}
        </Link>
    )
}