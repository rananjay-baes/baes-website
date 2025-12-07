import { APP_LOGO } from "@/const";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Disclaimer from "@/components/Disclaimer";
import { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    formRef.current!.submit();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar page="contact" />

      {/* Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team to learn more about BAES Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-accent" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  ref={formRef}
                  action="https://formsubmit.co/baes.solutions@gmail.com" 
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                  <input type="hidden" name="_next" value="https://baes-website.web.app/contact" />
                  <input type="hidden" name="_captcha" value="true" />
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your investment goals..."
                      rows={5}
                    />
                  </div>

                  <Button type="button" onClick={handleClick} className="w-full bg-accent hover:bg-accent/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Visit us at our Dubai office or reach out through the contact form.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">BAES Solutions LLC</p>
                    <p>One Central, 9th Floor</p>
                    <p>Trade Centre 2</p>
                    <p>Dubai, United Arab Emirates</p>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 max-w-5xl mx-auto">
            <Disclaimer />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
