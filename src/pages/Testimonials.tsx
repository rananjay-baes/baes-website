import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Quote, Star } from "lucide-react";
import Disclaimer from "@/components/Disclaimer";
import NavBar from "../components/NavBar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mohammed Al-Rashid",
      role: "Business Owner, Dubai",
      rating: 5,
      text: "BAES Solutions transformed how I approach gold investing. The weekly profit sharing is fantastic, and I love that everything is automated. I can focus on my business while the platform handles my gold trading professionally.",
      results: "Consistent weekly returns since joining 3 months ago"
    },
    {
      name: "Sarah Chen",
      role: "Investment Manager, Singapore",
      text: "The transparency and risk management impressed me from day one. Unlike other platforms, BAES provides daily performance reports and their fail-safe mechanism gives me peace of mind. The 69% win rate speaks for itself.",
      rating: 5,
      results: "Achieved 18% ROI in first 3 months"
    },
    {
      name: "Rajesh Patel",
      role: "Tech Entrepreneur, Bangalore",
      rating: 5,
      text: "As someone who understands technology, I appreciate the institutional-grade infrastructure. The algorithms are sophisticated yet the platform is simple to use. Best decision I made for passive income generation.",
      results: "Earning consistent weekly profits for 4 months"
    },
    {
      name: "Abdullah Hassan",
      role: "Financial Consultant, Abu Dhabi",
      rating: 5,
      text: "I've recommended BAES to several clients. The combination of advanced hedging strategies and weekly settlements is unique in the market. The team is responsive and professional.",
      results: "Managing multiple client accounts successfully"
    },
    {
      name: "Priya Sharma",
      role: "Business Consultant, Delhi",
      rating: 5,
      text: "After researching multiple platforms, BAES stood out for its transparency and risk management. The weekly payments help with my cash flow, and I sleep well knowing my capital is protected with their fail-safe mechanism.",
      results: "Reliable income stream for 4 months"
    },
    {
      name: "Somchai Wong",
      role: "Investment Advisor, Bangkok",
      rating: 5,
      text: "The tax advantages of gold trading combined with BAES's algorithmic approach make this a smart investment. I've diversified my portfolio into gold trading and the results have exceeded my expectations.",
      results: "Strong portfolio diversification in 3 months"
    },
    {
      name: "Vikram Reddy",
      role: "Software Executive, Hyderabad",
      rating: 5,
      text: "BAES's automated trading platform is perfect for busy professionals like me. The daily performance reports keep me informed, and the weekly profit settlements provide excellent cash flow. Highly recommended!",
      results: "Consistent returns for 2 months"
    },
    {
      name: "James Mitchell",
      role: "Financial Planner, Sydney",
      rating: 5,
      text: "I've evaluated many trading platforms for my clients, and BAES stands out for its transparency and risk management. The combination of algorithmic precision and fail-safe mechanisms makes it a solid choice.",
      results: "Positive experience over 3 months"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar page="testimonials" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Investors Say
            </h1>
            <p className="text-xl text-muted-foreground">
              Real experiences from investors who trust BAES Solutions for their gold trading
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Active Investors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">$2M+</div>
              <div className="text-sm text-muted-foreground">Assets Under Management</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="h-8 w-8 text-accent flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4">
                        <p className="text-sm font-semibold text-accent">
                          {testimonial.results}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Proven Results</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">69.27%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Based on 963 total trades
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">87.66%</div>
                    <div className="text-sm text-muted-foreground">ROI (2 Years)</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      On $100K initial capital
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">3.52</div>
                    <div className="text-sm text-muted-foreground">Recovery Factor</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Strong risk-adjusted returns
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-6">
                  *Based on backtested data. Past performance does not guarantee future results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your journey to consistent gold trading returns with BAES Solutions
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Start Investing Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Speak with Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="container py-8">
        <Disclaimer />
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/20 mt-auto">
        <div className="container py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">BAES SOLUTIONS</h3>
              <p className="text-sm text-muted-foreground">
                Trading Made Simple - Sophisticated algorithmic gold trading platform
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                One Central, 9th Floor<br />
                Trade Centre 2<br />
                Dubai, UAE
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2 text-sm">
                <Link href="/privacy-policy" className="block text-muted-foreground hover:text-accent">
                  Privacy Policy
                </Link>
                <Link href="/kyc-aml-policy" className="block text-muted-foreground hover:text-accent">
                  KYC/AML Policy
                </Link>
                <Link href="/saas-agreement" className="block text-muted-foreground hover:text-accent">
                  SaaS Agreement
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 BAES Solutions LLC. All Rights Reserved. Past performance does not guarantee future results.
          </div>
        </div>
      </footer>
    </div>
  );
}
