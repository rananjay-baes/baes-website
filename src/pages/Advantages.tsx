import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, TrendingUp, Clock, BarChart3, Zap, Lock, Receipt, Bot, LineChart, Building2 } from "lucide-react";
import Disclaimer from "@/components/Disclaimer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Advantages() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
        <NavBar page="advantages" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose BAES Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the competitive advantages that set us apart in algorithmic gold trading
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-accent/20">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Advanced Hedging Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't just trade direction. Our dual-position hedging strategy protects your capital by maintaining both long and short positions, capturing profits in volatile markets while limiting downside risk.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <Lock className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Fail-Safe Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our proprietary fail-safe mechanism ensures your full capital is never eroded. Automated stop-losses, position sizing, and drawdown limits protect your investment 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <Bot className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Institutional-Grade Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hosted on advanced AWS servers with 99.99% uptime, our platform delivers the same execution speed and reliability used by major financial institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <Receipt className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Tax Savings & Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This proposition can be significantly tax beneficial. Consult with your BAES Partner & tax advisor to understand how to optimize your tax strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our backtested results show 69.27% win rate with 87.66% ROI over 2 years on $100K capital. Recovery factor of 3.52 demonstrates strong risk-adjusted returns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <Clock className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Weekly Profit Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlike traditional funds with quarterly distributions, you receive 30% of profits every week. Invoices on Friday, payments by Monday—you get paid when we get paid.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Zero Emotional Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Algorithms don't panic, get greedy, or make impulsive decisions. Every trade follows mathematical rules tested across thousands of market scenarios.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Complete Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full access to performance metrics, trade history, and risk parameters. No hidden fees, no surprises—just clear, honest reporting of your investment performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <LineChart className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Gold Market Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We specialize exclusively in gold trading. This focused approach allows us to optimize strategies for gold's unique characteristics and capitalize on its predictable technical patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <Building2 className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Regulated Broker Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We partner with SCA Category 1 Licensed brokers. Your capital is held in segregated accounts with strict regulatory oversight, ensuring maximum security and investor protection beyond our algorithmic safeguards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Compare</h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-accent">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold text-accent">BAES Solutions</th>
                    <th className="text-center p-4 font-semibold">Traditional Stocks</th>
                    <th className="text-center p-4 font-semibold">Mutual Funds</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Win Rate</td>
                    <td className="text-center p-4 text-accent font-bold">69.27% ✓</td>
                    <td className="text-center p-4 text-muted-foreground">Variable</td>
                    <td className="text-center p-4 text-muted-foreground">Variable</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-4 font-medium">Max Drawdown</td>
                    <td className="text-center p-4 text-accent font-bold">15.44% ✓</td>
                    <td className="text-center p-4 text-muted-foreground">Variable</td>
                    <td className="text-center p-4 text-muted-foreground">Variable</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Client Required</td>
                    <td className="text-center p-4 text-accent font-bold">100% Automated ✓</td>
                    <td className="text-center p-4 text-muted-foreground">High Effort</td>
                    <td className="text-center p-4 text-muted-foreground">Quarterly Reports</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-4 font-medium">Transparency</td>
                    <td className="text-center p-4 text-accent font-bold">Daily Reporting ✓</td>
                    <td className="text-center p-4 text-muted-foreground">Self-Managed</td>
                    <td className="text-center p-4 text-muted-foreground">Quarterly Reports</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              *Based on backtested data. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the BAES Advantage</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join sophisticated investors who demand institutional-grade performance with retail accessibility
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Schedule Consultation
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
