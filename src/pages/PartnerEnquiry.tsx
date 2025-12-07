import { APP_LOGO } from "@/const";
import { Link } from "wouter";
import { ArrowLeft, Handshake, Building2, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import Disclaimer from "@/components/Disclaimer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function PartnerEnquiry() {
  const [formData, setFormData] = useState({
    partnershipType: "",
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    website: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.partnershipType) {
      toast.error("Please select a partnership type");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Partnership enquiry submitted successfully! We'll contact you within 48 hours.");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        partnershipType: "",
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
        website: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <NavBar page="partner-enquiry" />

      {/* Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Handshake className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partner With BAES
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our network of strategic partners and grow your business with cutting-edge algorithmic trading technology
            </p>
          </div>

          {/* Partnership Benefits */}
          <div className="max-w-md mx-auto mb-12">
            <Card className="border-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Referral Program</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earn weekly commissions on referred investors - you get paid when we get paid
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Partner Enquiry Form */}
          <Card>
            <CardHeader>
              <CardTitle>Partnership Enquiry Form</CardTitle>
              <CardDescription>
                Tell us about your organization and partnership interests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="partnershipType">Partnership Type *</Label>
                  <Select
                    value={formData.partnershipType}
                    onValueChange={(value) => setFormData({ ...formData, partnershipType: value })}
                  >
                    <SelectTrigger id="partnershipType">
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="referral">Referral/Affiliate Program</SelectItem>
                      <SelectItem value="reseller">Reseller Partnership</SelectItem>
                      <SelectItem value="strategic">Strategic Alliance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United States"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Company Website</Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://www.yourcompany.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Your Partnership Interest *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your organization, target market, and how you envision partnering with BAES Solutions..."
                    rows={6}
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Include information about your business model, client base, and expected partnership volume
                  </p>
                </div>

                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">What Happens Next?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></span>
                      <span>Our partnership team will review your enquiry within 48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></span>
                      <span>We'll schedule a consultation call to discuss opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></span>
                      <span>Qualified partners receive a customized partnership proposal</span>
                    </li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Partnership Enquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>



          {/* Disclaimer */}
          <div className="mt-12">
            <Disclaimer />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
