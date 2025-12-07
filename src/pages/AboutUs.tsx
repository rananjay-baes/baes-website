import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, TrendingUp, Shield } from "lucide-react";
import Disclaimer from "@/components/Disclaimer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar page="about" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About BAES Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Pioneering algorithmic gold trading technology to deliver consistent returns with institutional-grade risk management
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To democratize access to sophisticated algorithmic trading strategies, enabling investors to benefit from gold market opportunities with the precision and discipline of institutional-grade technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the world's most trusted SaaS platform for automated gold trading, setting new standards for transparency, performance, and risk management in algorithmic trading.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                BAES Solutions was founded with a singular vision: to bridge the gap between institutional trading capabilities and individual investors. Our team of quantitative analysts, software engineers, and trading veterans recognized that while sophisticated algorithmic strategies existed in major financial institutions, retail investors lacked access to these powerful tools.
              </p>
              <p>
                We spent years developing and refining our proprietary trading algorithms, backtesting them across diverse market conditions and optimizing for consistent performance. Our focus on gold trading stems from its unique characteristics as a stable store of value with predictable technical patterns, making it ideal for algorithmic strategies.
              </p>
              <p>
                Today, BAES Solutions operates as a technology-first company, providing a Software-as-a-Service platform that executes sophisticated hedging strategies, advanced risk management, and institutional-grade technology—all automated and accessible through our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in complete transparency. Our performance metrics, risk parameters, and trading methodology are openly shared with our investors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every trade is executed with mathematical precision, eliminating emotional decision-making and maintaining disciplined adherence to our proven strategies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Investor-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our success is measured by our investors' success. We've implemented fail-safe mechanisms and weekly profit sharing to align our interests with yours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    BAES Solutions is built on cutting-edge technology infrastructure designed for reliability, speed, and precision:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Proprietary Algorithms:</strong> Years of research and development have produced trading algorithms optimized for gold market dynamics</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Real-Time Execution:</strong> Low-latency infrastructure ensures trades are executed at optimal prices</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Risk Management Systems:</strong> Multi-layered risk controls including position sizing, stop-losses, and fail-safe mechanisms</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>24/7 Monitoring:</strong> Automated systems continuously monitor market conditions and adjust strategies accordingly</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join investors who trust BAES Solutions for consistent, algorithmic gold trading returns
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Start Investment Journey
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
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
      <Footer />
    </div>
  );
}
