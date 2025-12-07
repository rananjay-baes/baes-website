import { Link } from "wouter";
import { Button } from "./ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { APP_LOGO } from "../const";

interface NavBarProps {
    page: string;
}
export default function NavBar ({ page }: NavBarProps) {

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
                <Link href="/">
                  <span className="text-slate-300 hover:text-accent transition-colors cursor-pointer">Home</span>
                </Link>
                <Link href="/about">
                  <span className="text-slate-300 hover:text-accent transition-colors cursor-pointer">About</span>
                </Link>
                <Link href="/advantages">
                  <span className="text-slate-300 hover:text-accent transition-colors cursor-pointer">Advantages</span>
                </Link>
                <Link href="/contact">
                  <span className="text-slate-300 hover:text-accent transition-colors cursor-pointer">Contact</span>
                </Link>
                <Link href="/partner-enquiry">
                  <span className="text-slate-300 hover:text-accent transition-colors cursor-pointer">Partners</span>
                </Link>
              </div>
            </div>
            <Link href="/signup">
              <Button variant="outline" className="hidden md:block bg-transparent border-accent text-accent hover:bg-accent hover:text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
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