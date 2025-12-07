import { Link } from "wouter";

export default function Footer() {
    return (
        <footer className="bg-primary text-slate-400 py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-white text-xl font-bold mb-4">BAES SOLUTIONS</h4>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
              <p className="mb-2">One Central, 9th Floor</p>
              <p className="mb-2">Trade Centre 2, Dubai, UAE</p>
              <Link href="/contact">
                <span className="text-accent hover:underline cursor-pointer">Contact Us</span>
              </Link>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
              <p className="mb-2">
                <Link href="/privacy-policy">
                  <span className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</span>
                </Link>
              </p>
              <p>
                <Link href="/kyc-aml-policy">
                  <span className="hover:text-accent transition-colors cursor-pointer">KYC/AML Policy</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2025 BAES Solutions LLC. All Rights Reserved. Past performance does not guarantee future results.</p>
          </div>
        </div>
      </footer>
    );
}