import { APP_LOGO } from "@/const";
import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <NavBar page="privacy" />

      {/* Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last Updated: November 26, 2025
            </p>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-sm max-w-none">
              <p>
                BAES Solutions LLC ("Company", "we", "us", or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you use our website, www.baessolutions.com (the "Site"), and the BAES BOT software platform (the "Service").
              </p>
              <p className="font-semibold text-foreground">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the service.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We may collect information about you in a variety of ways. The information we may collect via the Service includes:</p>
                
                <h4 className="font-semibold text-foreground mt-4">1.1. Personal Data</h4>
                <p>
                  Personally identifiable information, such as your name, shipping address, email address, and telephone number, 
                  and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us 
                  when you register with the Service.
                </p>

                <h4 className="font-semibold text-foreground mt-4">1.2. Financial Data</h4>
                <p>
                  Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, 
                  expiration date) that we may collect when you purchase, order, return, exchange, or request information about our 
                  services from the Service. We store only very limited, if any, financial information that we collect. Otherwise, 
                  all financial information is stored by our payment processor.
                </p>

                <h4 className="font-semibold text-foreground mt-4">1.3. MT5 Account Credentials</h4>
                <p>
                  To connect your MT5 account to our Service, we will require your MT5 account number and read-only investor password. 
                  We will never ask for your master trading password. We are committed to the security of your credentials and employ 
                  industry-standard encryption and security measures.
                </p>

                <h4 className="font-semibold text-foreground mt-4">1.4. Derivative Data</h4>
                <p>
                  Information our servers automatically collect when you access the Service, such as your IP address, your browser type, 
                  your operating system, your access times, and the pages you have viewed directly before and after accessing the Service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. 
                  Specifically, we may use information collected about you via the Service to:
                </p>
                <ul>
                  <li>Create and manage your account</li>
                  <li>Process your payments and refunds</li>
                  <li>Email you regarding your account or order</li>
                  <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Service</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Service</li>
                  <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity</li>
                  <li>Request feedback and contact you about your use of the Service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. How We Share Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

                <h4 className="font-semibold text-foreground mt-4">3.1. By Law or to Protect Rights</h4>
                <p>
                  If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy 
                  potential violations of our policies, or to protect the rights, property, and safety of others, we may share your 
                  information as permitted or required by any applicable law, rule, or regulation.
                </p>

                <h4 className="font-semibold text-foreground mt-4">3.2. Third-Party Service Providers</h4>
                <p>
                  We may share your information with third parties that perform services for us or on our behalf, including payment 
                  processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </p>

                <h4 className="font-semibold text-foreground mt-4">3.3. Business Transfers</h4>
                <p>
                  We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company 
                  assets, financing, or acquisition of all or a portion of our business to another company.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we 
                  have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our 
                  efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against 
                  any interception or other type of misuse.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. 
                  We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, 
                  and enforce our policies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Your Data Protection Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul>
                  <li><strong>The right to access</strong> — You have the right to request copies of your personal data</li>
                  <li><strong>The right to rectification</strong> — You have the right to request that we correct any information you believe is inaccurate</li>
                  <li><strong>The right to erasure</strong> — You have the right to request that we erase your personal data, under certain conditions</li>
                  <li><strong>The right to restrict processing</strong> — You have the right to request that we restrict the processing of your personal data, under certain conditions</li>
                  <li><strong>The right to object to processing</strong> — You have the right to object to our processing of your personal data, under certain conditions</li>
                  <li><strong>The right to data portability</strong> — You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions</li>
                </ul>
                <p>
                  If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, 
                  please contact us at our support email: <strong>support@baessolutions.com</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We do not knowingly solicit information from or market to children under the age of 18. If you become aware of any 
                  data we have collected from children under age 18, please contact us using the contact information provided below.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                  Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at <strong>support@baessolutions.com</strong>.
                </p>
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
      <Footer />
    </div>
  );
}
