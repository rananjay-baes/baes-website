import { useState } from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { AlertTriangle, ArrowLeft, Menu } from "lucide-react";
import { APP_LOGO } from "../const";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

interface NavBarProps {
    page: string;
}
export default function NavBar ({ page }: NavBarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/advantages", label: "Advantages" },
      { href: "/contact", label: "Contact" },
      { href: "/partner-enquiry", label: "Partners" },
    ];

    return (
        <div className="sticky top-0 z-50 bg-background">
            <div className="bg-destructive/10 border-b border-destructive/20 py-3">
        <div className="container">
          <div className="flex items-center justify-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <p className="text-foreground">
              <strong>Risk Warning:</strong> Trading involves substantial risk. Past performance does not guarantee future results. Please review our disclaimers below.
            </p>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-accent/20">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-8">
                <div className="h-14 overflow-hidden flex items-center">
              <img src={APP_LOGO} alt="BAES Solutions" className="h-32 w-auto overflow-hidden" />
              </div>
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span className="text-slate-300 hover:text-accent transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-accent hover:text-accent/80"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="bg-primary text-primary-foreground border-l border-accent/30 w-[280px] sm:w-[320px]">
          <SheetHeader className="border-b border-accent/20 pb-4">
            <SheetTitle className="text-accent text-2xl font-bold">BAES Solutions</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-2 mt-6">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <div 
                  className="text-slate-200 hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer text-base font-medium px-4 py-3 rounded-md border border-transparent hover:border-accent/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="absolute bottom-6 left-4 right-4">
            <div className="flex items-center justify-center">
              <img src={APP_LOGO} alt="BAES Solutions" className="h-20 w-auto opacity-50" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      {page !== "home" && (
        <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>
      )}
        </div>
    )
}