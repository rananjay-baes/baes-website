import { APP_LOGO } from "@/const";
import { Link } from "wouter";
import { ArrowLeft, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SaasAgreement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border shadow-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <img src={APP_LOGO} alt="BAES Solutions" className="h-10 cursor-pointer" />
          </Link>
          <Link href="/">
            <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client Software Licence Agreement
            </h1>
            <p className="text-muted-foreground">
              BAES Solutions LLC SaaS Agreement
            </p>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-sm max-w-none">
              <p>
                This Client Software Licence Agreement ("Agreement") is entered into between:
              </p>
              <ol>
                <li><strong>BAES Solutions LLC</strong>, a company incorporated in Sharjah Free Zone/Mainland, United Arab Emirates ("Company", "Licensor"), and</li>
                <li>The end-user ("Client", "Licensee").</li>
              </ol>
              <p>Together, the "Parties."</p>
              <p className="font-semibold text-foreground">
                By purchasing, downloading, installing, accessing, or using the Software, the Client agrees to be bound by this Agreement.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Definitions</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="font-semibold text-foreground">1.1 "Software"</h4>
                <p>The Company's proprietary algorithmic trading software, expert advisors (EAs), bots, indicators, scripts, documentation, executable files, updates, and related components.</p>

                <h4 className="font-semibold text-foreground mt-4">1.2 "MT5 Platform"</h4>
                <p>MetaTrader 5 or any compatible trading platform operated by third-party regulated brokers.</p>

                <h4 className="font-semibold text-foreground mt-4">1.3 "Services"</h4>
                <p>Technical support, installation assistance, updates, and software maintenance, expressly excluding financial services.</p>

                <h4 className="font-semibold text-foreground mt-4">1.4 "Trading Account"</h4>
                <p>The brokerage account solely owned and operated by the Client.</p>

                <h4 className="font-semibold text-foreground mt-4">1.5 "Subscription Tier(s)"</h4>
                <p>Different levels, plans, or packages offered by the Company with varying features, usage limits, or pricing.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Nature of Service (Technology Provider Only)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="font-semibold text-foreground">2.1 Software-Only Model</h4>
                <p>The Company provides algorithmic trading software tools only.</p>
                <p className="font-semibold">The Company does NOT:</p>
                <ul>
                  <li>access Client trading accounts</li>
                  <li>request or receive MT5 login credentials or API keys</li>
                  <li>execute trades on behalf of the Client</li>
                  <li>provide discretionary portfolio management</li>
                  <li>provide investment advice or recommendations</li>
                  <li>handle or manage Client funds</li>
                  <li>modify risk settings or trading parameters</li>
                  <li>guarantee profits or performance</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">2.2 Client Control</h4>
                <p>The Client retains exclusive control over:</p>
                <ul>
                  <li>their MT5 account</li>
                  <li>risk settings, parameters, and leverage</li>
                  <li>starting, stopping, and monitoring trades</li>
                  <li>broker selection and account configuration</li>
                  <li>VPS or local device setup</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Licence Grant</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="font-semibold text-foreground">3.1 Limited Licence</h4>
                <p>The Company grants the Client a non-exclusive, non-transferable, revocable licence to use the Software strictly for personal use in accordance with this Agreement.</p>

                <h4 className="font-semibold text-foreground mt-4">3.2 Restrictions</h4>
                <p>The Client shall not:</p>
                <ul>
                  <li>copy, distribute, or resell the Software</li>
                  <li>reverse engineer, decompile, or replicate the Software</li>
                  <li>provide account management services to third parties using the Software</li>
                  <li>share licence keys with others</li>
                  <li>alter or remove proprietary notices</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">3.3 Subscription Term and Tier Structure</h4>
                <p>The licence is provided on a subscription basis, which may include multiple subscription tiers defined by the Company. Each tier may differ in pricing, features, or usage limits. Details of available tiers will be communicated to the Client at purchase or whenever updated by the Company.</p>
                <p>Subscriptions renew automatically according to the applicable billing cycle (monthly, quarterly, or annual), unless cancelled by the Client prior to renewal.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Installation & Technical Support</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="font-semibold text-foreground">4.1 Client Installation</h4>
                <p>The Client installs the Software independently on their own device or VPS and links their MT5 account themselves.</p>

                <h4 className="font-semibold text-foreground mt-4">4.2 Technical Assistance</h4>
                <p>The Company may provide non-financial technical support, including guidance on:</p>
                <ul>
                  <li>installation</li>
                  <li>EA configuration</li>
                  <li>MT5 setup</li>
                  <li>VPS deployment</li>
                  <li>troubleshooting software-related issues</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">4.3 No Credential Access</h4>
                <p>Even during support sessions, the Company will never request or accept:</p>
                <ul>
                  <li>MT5 login</li>
                  <li>broker passwords</li>
                  <li>investor passwords</li>
                  <li>API keys</li>
                  <li>trading account access</li>
                </ul>
                <p>Support is strictly limited to the Software interface.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. No Financial Services or Advice</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="font-semibold text-foreground">5.1 Not a Regulated Activity</h4>
                <p>The Company does not engage in:</p>
                <ul>
                  <li>investment management</li>
                  <li>portfolio management</li>
                  <li>trade execution</li>
                  <li>investment advisory</li>
                  <li>fund management</li>
                  <li>proprietary trading with client funds</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">5.2 No Recommendations</h4>
                <p>The Company does not provide:</p>
                <ul>
                  <li>trading signals</li>
                  <li>asset allocation guidance</li>
                  <li>leverage or lot-size recommendations</li>
                  <li>financial planning</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">5.3 Client Responsibility</h4>
                <p>All trading decisions, including enabling/disabling automated functions, are made solely by the Client.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Client Obligations</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>The Client agrees to:</p>
                <ul>
                  <li>maintain exclusive control of their MT5 account</li>
                  <li>secure all credentials and passwords</li>
                  <li>monitor all trades executed by the Software</li>
                  <li>configure appropriate risk parameters</li>
                  <li>use the Software in compliance with broker rules</li>
                  <li>ensure proper functioning of their VPS/device</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Risk Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>The Client acknowledges and agrees that:</p>
                <ol>
                  <li><strong>Trading Risk:</strong> Trading financial instruments involves substantial risk of loss. Automated trading may increase volatility exposure. Losses may equal or exceed deposited funds.</li>
                  <li><strong>No Guarantees:</strong> The Company does not guarantee profitability, performance, uptime, accuracy, or specific outcomes.</li>
                  <li><strong>Automated Execution:</strong> The Software executes trades automatically based on user-defined parameters. Market conditions, slippage, or broker execution delays may cause unexpected results.</li>
                  <li><strong>Technology Risks:</strong> Failures in MT5, VPS, internet, hardware, or third-party broker systems may result in financial losses. The Company is not responsible for such events.</li>
                  <li><strong>No Financial Advice:</strong> The Company provides no investment advice, strategy recommendations, or risk guidance.</li>
                  <li><strong>Client Responsibility:</strong> All trades generated by the Software are deemed to be placed by the Client. The Client is fully responsible for all outcomes and for monitoring their account regularly.</li>
                </ol>
                <p className="font-semibold text-foreground mt-4">
                  By using the Software, the Client accepts full responsibility for all trading decisions and potential losses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>To the maximum extent permitted by UAE law:</p>
                <ul>
                  <li>The Company is not liable for any loss arising from trading activity or market movements.</li>
                  <li>The Company is not liable for indirect, incidental, special, or consequential damages.</li>
                  <li>Total liability, if any, shall not exceed the subscription fees paid by the Client in the preceding three (3) months.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>The Company may terminate the licence if:</p>
                <ul>
                  <li>the Client breaches any term of this Agreement</li>
                  <li>unauthorized copying, distribution, or key-sharing is detected</li>
                  <li>the subscription expires or is not renewed</li>
                </ul>
                <p>Upon termination, the Client must immediately cease use of and delete the Software.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  All intellectual property rights in the Software, algorithms, code, branding, documentation, and related materials 
                  remain the exclusive property of the Company. No rights are transferred except the limited licence granted herein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Governing Law & Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  This Agreement is governed by the laws of the United Arab Emirates.
                </p>
                <p>
                  Disputes shall be resolved by the competent courts of Sharjah, UAE, unless otherwise designated by the Company.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Entire Agreement</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  This Agreement constitutes the entire understanding between the Parties and supersedes all prior agreements or representations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Client Acknowledgement</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>By purchasing, installing, or using the Software, the Client confirms that they:</p>
                <ul>
                  <li>have read and understood this Agreement</li>
                  <li>understand the risks of automated trading</li>
                  <li>assume full responsibility for all trading outcomes</li>
                  <li>consent to the subscription terms and licence limitations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <button className="text-accent hover:underline">
                ← Return to Homepage
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-slate-400 py-8">
        <div className="container text-center">
          <p className="text-sm">
            © 2025 BAES Solutions LLC. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
