import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { APP_LOGO, APP_TITLE } from "../const";
import { Shield, TrendingDown, Zap, AlertTriangle, Receipt, Building2 } from "lucide-react";
import GoldPriceChart from "../components/GoldPriceChart";
import GoldNewsFeed from "../components/GoldNewsFeed";
import Disclaimer from "../components/Disclaimer";
import { Link } from "wouter";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar page="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-[oklch(0.35_0.02_0)] text-white py-24 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Exceptional Returns Through <br />
            <span className="text-accent">Algorithmic Precision</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Advanced SaaS platform for automated gold trading. Sophisticated algorithms targeting 2-5% monthly ROI 
            with strict risk management. Technology-driven precision for serious investors.
          </p>
          <Link href="/signup">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-[oklch(0.75_0.20_135)] text-white font-bold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Start Your Investment Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-10">
        <div className="container">
          <div className="bg-card rounded-lg shadow-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">69.27%</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Win Rate*</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">$87.66K</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Net Profit*</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">3.52</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Recovery Factor*</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">3.55</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Sharpe Ratio*</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                *Backtested results on $100,000 initial deposit over 9 months. Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container text-center">
          <span className="inline-block text-accent font-bold uppercase tracking-widest text-sm mb-4">
            Market Outlook
          </span>          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            The Golden Era: JP Morgan Forecasts $5,000/oz
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Leading financial institutions are projecting gold to reach $5,000/oz as the $4,000 milestone has already been achieved. Our algorithm is positioned to capture these gains with precision.
          </p>
          <div className="max-w-6xl mx-auto">
            <GoldPriceChart />
          </div>
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-xl font-semibold text-accent">
              📈 Projected Growth: $4,079 (Current) ➔ $5,000+ (2026)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Data source: Yahoo Finance Gold Futures (GC=F)
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-bold uppercase tracking-widest text-sm mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why BAES Outperforms
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Hedging Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't just guess direction. Our dual-direction positioning captures profits in both 
                  rising and falling markets while maintaining neutrality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your capital is protected by dynamic position sizing and a hard 15-25% drawdown limit. 
                  We prioritize capital preservation above all.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Institutional Tech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hosted on dedicated AWS servers with 99.99% uptime. Ultra-low latency execution ensures 
                  we enter and exit trades with precision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Receipt className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Tax Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This proposition can be significantly tax beneficial. Consult with your BAES Partner & tax advisor to understand how to optimize your tax strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow w-[300px] h-[400px]">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Regulated Broker Partners</CardTitle>
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

      {/* Gold Market News Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-bold uppercase tracking-widest text-sm mb-4">
              Market Intelligence
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Latest Gold Market News
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Stay informed with the latest headlines and insights from the gold market
            </p>
          </div>
          <GoldNewsFeed />
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
            Superior Returns. Better Liquidity.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left py-6 px-6 font-semibold">Feature</th>
                  <th className="text-left py-6 px-6 font-semibold">BAES Gold EA</th>
                  <th className="text-left py-6 px-6 font-semibold">Traditional Stocks</th>
                  <th className="text-left py-6 px-6 font-semibold">Mutual Funds</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-accent/5 border-b border-border">
                  <td className="py-6 px-6 font-semibold">ROI Potential</td>
                  <td className="py-6 px-6 font-bold text-accent">2-5% Monthly* ✔</td>
                  <td className="py-6 px-6 text-muted-foreground">8-12% Annually</td>
                  <td className="py-6 px-6 text-muted-foreground">6-10% Annually</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-6 px-6 font-semibold">Win Rate</td>
                  <td className="py-6 px-6 font-bold text-accent">69.27%* ✔</td>
                  <td className="py-6 px-6 text-muted-foreground">Varies</td>
                  <td className="py-6 px-6 text-muted-foreground">Varies</td>
                </tr>
                <tr className="bg-accent/5 border-b border-border">
                  <td className="py-6 px-6 font-semibold">Max Drawdown</td>
                  <td className="py-6 px-6 font-bold text-accent">15.44%* ✔</td>
                  <td className="py-6 px-6 text-muted-foreground">Variable</td>
                  <td className="py-6 px-6 text-muted-foreground">Variable</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-6 px-6 font-semibold">Effort Required</td>
                  <td className="py-6 px-6 font-bold text-accent">100% Automated ✔</td>
                  <td className="py-6 px-6 text-muted-foreground">High Effort</td>
                  <td className="py-6 px-6 text-muted-foreground">Passive</td>
                </tr>
                <tr>
                  <td className="py-6 px-6 font-semibold">Transparency</td>
                  <td className="py-6 px-6 font-bold text-accent">Daily Reporting ✔</td>
                  <td className="py-6 px-6 text-muted-foreground">Quarterly Reports</td>
                  <td className="py-6 px-6 text-muted-foreground">Quarterly Reports</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              *Based on backtested results. Past performance does not guarantee future results. 

            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <Disclaimer />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
