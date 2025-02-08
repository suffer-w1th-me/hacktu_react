"use client";
import { useState } from "react";
import { HoveredLink, Menu, Navbar, ProductItem } from "./ui/Navbar.jsx";

// Utility function for conditional class names (if needed)
const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center text-black bg-white">
            <Nav className="top-2" />
            <p className="text-black dark:text-white">The Navbar will show on top of the page</p>
        </div>
    );
}

function Nav({ className }) {
    const [active, setActive] = useState(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
            <Menu setActive={setActive}>
                <Navbar setActive={setActive} active={active} item="About Us">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                </Navbar>

                <Navbar setActive={setActive} active={active} item="Loks">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production-ready Tailwind CSS components for your next project."
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs, and RFQs 10x faster using AI."
                        />
                    </div>
                </Navbar>

                <Navbar setActive={setActive} active={active} item="Sign Up ">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </Navbar>
            </Menu>
        </div>
    );
}
