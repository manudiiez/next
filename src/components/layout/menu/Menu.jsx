"use client"
import { useState } from 'react'
import Link from 'next/link'
// fontawesome
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// next components
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import styles from './menu.module.scss'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "PS4",
        "PC",
        "Nintendo",
        "Xbox",
        "Mi cuenta"
    ];

    return (
        <Navbar className={styles.menu} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <p className="font-bold text-xl">SP-GAMES</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="#" className='text-base'>
                        PS4
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" className='text-base' >
                        PC
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" className='text-base'>
                        Nintendo
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" className='text-base'>
                        Xbox
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className={styles.right}>
                <NavbarItem  >
                    <button className='sm:hidden text-xl pe-4 '>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <Link href="/" className='text-xl'>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden sm:flex ">
                    <Link href="#" className='text-base'>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-gray-900 backdrop-blur-xl">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default Menu