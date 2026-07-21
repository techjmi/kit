"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, Drawer, Button, Divider } from "tektokit";
import ThemeToggle from "tektokit";
import { NAVBAR_CONFIG } from "@/constants/layout/navbar.constant";
import CallbackButton from "../shared/CallbackButton";

const MOBILE_DRAWER_CONFIG = {
  position: "right",
  width: "w-64",
  showOverlay: true,
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b backdrop-blur-2xl bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo config={NAVBAR_CONFIG.logo} size="md" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAVBAR_CONFIG.navItems.map((item) => (
                <div key={item.key} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href) ? "text-primary" : "text-foreground/70 hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* <ThemeToggle /> */}
              <CallbackButton />
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center space-x-2">
              {/* <ThemeToggle /> */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileOpen(true)}
                icon="menu"
                iconSize={24}
                aria-label="Open menu"
              />
            </div>
          </div>
        </div>
      </nav>

      <Drawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        position={MOBILE_DRAWER_CONFIG.position}
        size={MOBILE_DRAWER_CONFIG.width}
        showBackdrop={MOBILE_DRAWER_CONFIG.showOverlay}
        config={{
          header: <Logo config={NAVBAR_CONFIG.logo} size="md" />,
          body: (
            <nav className="space-y-1 border-t-2">
              {NAVBAR_CONFIG.navItems.map((item) => (
                <div key={item.key}>
                  <Link
                    href={item.href}
                    data-drawer-close="true"
                    className={`block px-4 py-3 rounded-md text-base font-medium ${isActive(item.href) ? "text-primary" : "text-foreground/70 hover:text-primary hover:bg-muted"}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          ),
              footer: (
            <Button
              variant="solid"
              color="primary"
              fullWidth
              onClick={() => {
                // window.open(NAVBAR_CONFIG.cta.href, "_blank");
                setMobileOpen(false);
              }}
            >
              {NAVBAR_CONFIG.cta.label}
            </Button>
          ),
        }}
      />
    </>
  );
}