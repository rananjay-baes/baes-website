import { APP_LOGO } from "@/const";
import { Link } from "wouter";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function KycAmlPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <NavBar page="kyc-aml" />

      {/* Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              KYC & AML Policy
            </h1>
            <p className="text-muted-foreground">
              Know Your Customer and Anti-Money Laundering Policy
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last Updated: November 26, 2025
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  BAES Solutions LLC ("Company", "we", "us", or "our") is committed to preventing the use of its services 
                  for money laundering, terrorist financing, and other illicit activities. This Know Your Customer (KYC) and 
                  Anti-Money Laundering (AML) Policy outlines our procedures for customer identification, verification, and monitoring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Policy Statement</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  It is the policy of BAES Solutions LLC to comply with all applicable laws and regulations regarding AML and KYC. 
                  We will take all reasonable and appropriate steps to prevent our services from being used for illegal purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Customer Identification Program (CIP)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We will collect and verify the identity of all our customers before providing them with access to our services. 
                  The CIP includes the following steps:
                </p>

                <h4 className="font-semibold text-foreground mt-4">3.1. Information Collection</h4>
                <p>We will collect the following information from each customer:</p>
                <ul>
                  <li>Full legal name</li>
                  <li>Date of birth</li>
                  <li>Residential address</li>
                  <li>Nationality</li>
                  <li>A government-issued identification document (e.g., passport, national ID card, driver's license)</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">3.2. Identity Verification</h4>
                <p>We will verify the identity of each customer by:</p>
                <ul>
                  <li>Reviewing the government-issued identification document</li>
                  <li>Using third-party verification services to confirm the authenticity of the documents and the customer's identity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Customer Due Diligence (CDD)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We will conduct ongoing due diligence on our customers to ensure that their activities are consistent with their 
                  risk profile. CDD measures include:
                </p>
                <ul>
                  <li>Monitoring customer transactions for unusual or suspicious activity</li>
                  <li>Periodically reviewing and updating customer information</li>
                  <li>Assessing the customer's risk profile based on factors such as their location, transaction volume, and the nature of their business</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Enhanced Due Diligence (EDD)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  For customers who are identified as high-risk, we will conduct Enhanced Due Diligence (EDD). EDD measures may include:
                </p>
                <ul>
                  <li>Obtaining additional information about the customer's source of funds and wealth</li>
                  <li>Conducting more frequent and detailed transaction monitoring</li>
                  <li>Obtaining approval from senior management before establishing or continuing a business relationship</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Sanctions Screening</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We will screen all customers against applicable sanctions lists, including those issued by the United Nations, 
                  the European Union, the U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC), and other 
                  relevant authorities. We will not provide services to any individual or entity on a sanctions list.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Record Keeping</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We will maintain records of all customer identification documents, transaction data, and other relevant information 
                  for a minimum of five years after the business relationship has ended. These records will be made available to 
                  regulatory authorities upon request.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Reporting of Suspicious Activities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We will report any suspicious activities to the relevant authorities in accordance with applicable laws and regulations. 
                  All employees are required to report any suspicious activity they observe to the designated Compliance Officer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Staff Training</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We will provide ongoing training to our employees to ensure they are aware of their responsibilities under this 
                  AML/KYC Policy and applicable laws and regulations. Training will cover topics such as identifying suspicious activities, 
                  customer due diligence procedures, and record-keeping requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Policy Review</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  This AML/KYC Policy will be reviewed and updated on an annual basis, or more frequently if there are changes in 
                  applicable laws or regulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If you have any questions about this AML/KYC Policy, please contact us at <strong>support@baessolutions.com</strong>.
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
