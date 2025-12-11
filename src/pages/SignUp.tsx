import { APP_LOGO } from "@/const";
import { UserPlus, Shield, DollarSign, Calendar, TrendingUp, CheckCircle2, Plus, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import Disclaimer from "@/components/Disclaimer";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { signUp, sendEmailOtp as sendEmailOtpApi, sendPhoneOtp as sendPhoneOtpApi, verifyOtp as verifyOtpApi, getInvite, useInvite, validateMT5Credentials } from "@/lib/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// MT5 Server options
const MT5_SERVERS = [
  { value: "EquitiSecurities-Live", label: "Equiti Securities - Live" },
  { value: "EquitiBrokerageSC-Live", label: "Equiti Brokerage SC - Live" }
];

// Comprehensive country list with phone codes and flags
const COUNTRIES_WITH_CODES = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "Finland", code: "+358", flag: "🇫🇮" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "Greece", code: "+30", flag: "🇬🇷" },
  { name: "Hong Kong", code: "+852", flag: "🇭🇰" },
  { name: "Hungary", code: "+36", flag: "🇭🇺" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Kenya", code: "+254", flag: "🇰🇪" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "+968", flag: "🇴🇲" },
  { name: "Peru", code: "+51", flag: "🇵🇪" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Poland", code: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Romania", code: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Taiwan", code: "+886", flag: "🇹🇼" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "Ukraine", code: "+380", flag: "🇺🇦" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
];

// Extract just country names for the dropdown
const COUNTRIES = COUNTRIES_WITH_CODES.map(c => c.name).sort();

// Create mapping for auto-selecting phone code
const COUNTRY_TO_PHONE_CODE: Record<string, string> = Object.fromEntries(
  COUNTRIES_WITH_CODES.map(c => [c.name, c.code])
);

// Create phone codes list for the dropdown (deduplicated by code, prioritizing first occurrence)
const PHONE_CODES_MAP = new Map<string, { code: string; country: string; flag: string; name: string }>();
COUNTRIES_WITH_CODES.forEach(c => {
  if (!PHONE_CODES_MAP.has(c.code)) {
    PHONE_CODES_MAP.set(c.code, {
      code: c.code,
      country: c.name,
      flag: c.flag,
      name: c.name
    });
  }
});
const PHONE_CODES = Array.from(PHONE_CODES_MAP.values()).sort((a, b) => a.name.localeCompare(b.name));

export default function SignUp() {
  const [inviteToken, setInviteToken] = useState<string | null>(null);
  const [profitSharing, setProfitSharing] = useState<string>("");
  const [isLoadingInvite, setIsLoadingInvite] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    emailVerified: false,
    emailOtp: "",
    phone: "",
    phoneVerified: false,
    phoneOtp: "",
    investmentAmount: "100000",
    profitSharing: "",
    country: "",
    agreeToTerms: false,
    understandRisks: false
  });

  const [phoneCode, setPhoneCode] = useState("+971"); // Default to UAE

  const [mt5Accounts, setMt5Accounts] = useState([
    { mt5Login: "", mt5Password: "", mt5Server: "", validated: false, validating: false }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [sendingEmailOtp, setSendingEmailOtp] = useState(false);
  const [sendingPhoneOtp, setSendingPhoneOtp] = useState(false);
  const [verifyingEmailOtp, setVerifyingEmailOtp] = useState(false);
  const [verifyingPhoneOtp, setVerifyingPhoneOtp] = useState(false);
  const [emailOtpCountdown, setEmailOtpCountdown] = useState(0);
  const [phoneOtpCountdown, setPhoneOtpCountdown] = useState(0);

  // Load invite data from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const inviteParam = urlParams.get('invite');
    const profitSharingParam = urlParams.get('profitSharing');

    if (inviteParam) {
      setInviteToken(inviteParam);
      setIsLoadingInvite(true);
      
      // Load invite data from backend
      getInvite(inviteParam)
        .then((inviteData) => {
          setFormData((prev) => ({
            ...prev,
            email: inviteData.email,
            investmentAmount: inviteData.investmentAmount.toString(),
            profitSharing: inviteData.profitSharing.toString(),
          }));
          setProfitSharing(inviteData.profitSharing.toString());
          toast.success("Invite loaded successfully!");
        })
        .catch((error) => {
          console.error("Error loading invite:", error);
          toast.error(error.response?.data?.error || "Invalid or expired invite link");
        })
        .finally(() => {
          setIsLoadingInvite(false);
        });
    } else if (profitSharingParam) {
      // If profit sharing is in URL but no invite token, just set it
      setProfitSharing(profitSharingParam);
      setFormData((prev) => ({
        ...prev,
        profitSharing: profitSharingParam,
      }));
    }
  }, []);

  const handleValidateMT5 = async (index: number) => {
    const account = mt5Accounts[index];
    
    // Validate required fields
    if (!formData.email) {
      toast.error('Please enter your email first');
      return;
    }
    
    if (!account.mt5Login || !account.mt5Password || !account.mt5Server) {
      toast.error('Please fill in all MT5 account fields');
      return;
    }

    // Mark as validating
    const updatedAccounts = [...mt5Accounts];
    updatedAccounts[index] = { ...account, validating: true };
    setMt5Accounts(updatedAccounts);

    // Show info toast about potential wait time
    toast.info('Validating MT5 credentials... This may take up to 60 seconds for broker detection.', {
      duration: 5000,
    });

    try {
      const response = await validateMT5Credentials(
        formData.email,
        account.mt5Login,
        account.mt5Password,
        account.mt5Server
      );

      console.log('MT5 Validation Response:', response);

      if (response.success) {
        // Mark as validated and lock the fields
        const newAccounts = [...mt5Accounts];
        newAccounts[index] = { 
          ...newAccounts[index], 
          validated: true, 
          validating: false 
        };
        setMt5Accounts(newAccounts);
        toast.success('MT5 account validated successfully! Credentials are now locked.');
      } else {
        throw new Error(response.error || 'Validation failed');
      }
    } catch (error: any) {
      console.error('MT5 validation error:', error);
      const newAccounts = [...mt5Accounts];
      newAccounts[index] = { 
        ...newAccounts[index], 
        validated: false, 
        validating: false 
      };
      setMt5Accounts(newAccounts);
      
      // Check if it's a timeout error
      if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
        toast.error('Validation timed out. This may happen if the broker is slow to respond. Please try again.');
      } else {
        toast.error(error.response?.data?.error || error.message || 'Failed to validate MT5 credentials. Please check your login, password, and server.');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    if (!formData.understandRisks) {
      toast.error("Please confirm that you understand the risks involved");
      return;
    }

    if (!formData.emailVerified) {
      toast.error("Please verify your email address");
      return;
    }

    if (!formData.phoneVerified) {
      toast.error("Please verify your phone number");
      return;
    }

    if (parseFloat(formData.investmentAmount) < 100000) {
      toast.error("Minimum investment amount is $100,000");
      return;
    }

    // Validate MT5 accounts
    const validMt5Accounts = mt5Accounts.filter(acc => acc.mt5Login && acc.mt5Password && acc.mt5Server);
    if (validMt5Accounts.length === 0) {
      toast.error("Please add at least one complete MT5 account");
      return;
    }

    // Check all MT5 accounts are validated
    const unvalidatedAccounts = validMt5Accounts.filter(acc => !acc.validated);
    if (unvalidatedAccounts.length > 0) {
      toast.error("Please validate all MT5 accounts before submitting");
      return;
    }

    // Validate invitation token
    if (!inviteToken) {
      toast.error("Invalid or missing invitation token. Please use your unique invitation link.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await signUp({
        fullName: formData.fullName,
        email: formData.email,
        phone: `${phoneCode}${formData.phone}`, // Combine phone code with number
        investmentAmount: formData.investmentAmount,
        profitSharing: formData.profitSharing || undefined,
        country: formData.country,
        mt5Accounts: validMt5Accounts,
        emailVerified: formData.emailVerified,
        phoneVerified: formData.phoneVerified,
        inviteToken: inviteToken, // Include invitation token
      });

      if (response.success) {
        // Mark invite as used if there's an invite token
        if (inviteToken && response.data?.id) {
          try {
            await useInvite(inviteToken, response.data.id);
          } catch (inviteError) {
            console.error("Error marking invite as used:", inviteError);
            // Don't fail the signup if this fails
          }
        }

        // Redirect to thank you page with user's name
        const userName = encodeURIComponent(formData.fullName);
        window.location.href = `/thank-you?name=${userName}`;
      } else {
        toast.error(response.error || "Failed to submit registration");
      }
    } catch (error: any) {
      console.error("Signup error:", error);
      const errorMessage = error.response?.data?.error || error.message || "Failed to submit registration. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleMt5Change = (index: number, field: string, value: string) => {
    const updatedAccounts = [...mt5Accounts];
    updatedAccounts[index] = { ...updatedAccounts[index], [field]: value };
    setMt5Accounts(updatedAccounts);
  };

  const addMt5Account = () => {
    setMt5Accounts([...mt5Accounts, { mt5Login: "", mt5Password: "", mt5Server: "", validated: false, validating: false }]);
  };

  const removeMt5Account = (index: number) => {
    if (mt5Accounts.length > 1) {
      setMt5Accounts(mt5Accounts.filter((_, i) => i !== index));
    }
  };

  const sendEmailOtp = async () => {
    if (!formData.email) {
      toast.error("Please enter your email address first");
      return;
    }
    
    setSendingEmailOtp(true);
    try {
      const response = await sendEmailOtpApi(formData.email);
      if (response.success) {
        toast.success(response.message || "Verification code sent to your email");
        setEmailOtpSent(true);
        setEmailOtpCountdown(60); // Start 60 second countdown
        // In development, log the OTP if provided
        if (response.otp) {
          console.log("Email OTP (dev only):", response.otp);
        }
      } else {
        toast.error(response.error || "Failed to send verification code");
      }
    } catch (error: any) {
      console.error("Send email OTP error:", error);
      const errorMessage = error.response?.data?.error || error.message || "Failed to send verification code";
      toast.error(errorMessage);
    } finally {
      setSendingEmailOtp(false);
    }
  };

  const verifyEmailOtp = async () => {
    if (!formData.emailOtp) {
      toast.error("Please enter the verification code");
      return;
    }
    
    setVerifyingEmailOtp(true);
    try {
      const response = await verifyOtpApi(formData.email, null, formData.emailOtp, 'email');
      if (response.success && response.verified) {
        setFormData({ ...formData, emailVerified: true });
        toast.success(response.message || "Email verified successfully");
      } else {
        toast.error(response.error || "Invalid verification code");
      }
    } catch (error: any) {
      console.error("Verify email OTP error:", error);
      const errorMessage = error.response?.data?.error || error.message || "Failed to verify code";
      toast.error(errorMessage);
    } finally {
      setVerifyingEmailOtp(false);
    }
  };

  const sendPhoneOtp = async () => {
    if (!formData.phone) {
      toast.error("Please enter your phone number first");
      return;
    }
    
    setSendingPhoneOtp(true);
    try {
      const response = await sendPhoneOtpApi(`${phoneCode}${formData.phone}`);
      if (response.success) {
        toast.success(response.message || "Verification code sent to your phone");
        setPhoneOtpSent(true);
        setPhoneOtpCountdown(60); // Start 60 second countdown
        // In development, log the OTP if provided
        if (response.otp) {
          console.log("Phone OTP (dev only):", response.otp);
        }
      } else {
        toast.error(response.error || "Failed to send verification code");
      }
    } catch (error: any) {
      console.error("Send phone OTP error:", error);
      const errorMessage = error.response?.data?.error || error.message || "Failed to send verification code";
      toast.error(errorMessage);
    } finally {
      setSendingPhoneOtp(false);
    }
  };

  const verifyPhoneOtp = async () => {
    if (!formData.phoneOtp) {
      toast.error("Please enter the verification code");
      return;
    }
    
    setVerifyingPhoneOtp(true);
    try {
      const response = await verifyOtpApi(null, `${phoneCode}${formData.phone}`, formData.phoneOtp, 'phone');
      if (response.success && response.verified) {
        setFormData({ ...formData, phoneVerified: true });
        toast.success(response.message || "Phone verified successfully");
      } else {
        toast.error(response.error || "Invalid verification code");
      }
    } catch (error: any) {
      console.error("Verify phone OTP error:", error);
      const errorMessage = error.response?.data?.error || error.message || "Failed to verify code";
      toast.error(errorMessage);
    } finally {
      setVerifyingPhoneOtp(false);
    }
  };

  // Email OTP countdown timer
  useEffect(() => {
    if (emailOtpCountdown > 0) {
      const timer = setTimeout(() => {
        setEmailOtpCountdown(emailOtpCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [emailOtpCountdown]);

  // Phone OTP countdown timer
  useEffect(() => {
    if (phoneOtpCountdown > 0) {
      const timer = setTimeout(() => {
        setPhoneOtpCountdown(phoneOtpCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [phoneOtpCountdown]);

  useEffect(() => {
    if (showTermsModal) {
      // Find the ScrollArea viewport element
      const checkScroll = () => {
        const viewport = document.querySelector('[data-slot="scroll-area-viewport"]') as HTMLElement;
        if (viewport) {
          const scrollBottom = viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight;
          if (scrollBottom < 10) {
            setHasScrolledToBottom(true);
          } else {
            setHasScrolledToBottom(false);
          }
        }
      };
      
      // Use a small delay to ensure the DOM is ready
      setTimeout(() => {
        const viewport = document.querySelector('[data-slot="scroll-area-viewport"]') as HTMLElement;
        if (viewport) {
          viewport.addEventListener('scroll', checkScroll);
          checkScroll(); // Check initial state
        }
      }, 100);
      
      return () => {
        const viewport = document.querySelector('[data-slot="scroll-area-viewport"]') as HTMLElement;
        if (viewport) {
          viewport.removeEventListener('scroll', checkScroll);
        }
      };
    } else {
      setHasScrolledToBottom(false);
    }
  }, [showTermsModal]);

  const handleAcceptTerms = () => {
    setFormData({ ...formData, agreeToTerms: true, understandRisks: true });
    setShowTermsModal(false);
    setHasScrolledToBottom(false);
    toast.success("Terms and conditions accepted");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <NavBar page="signup" />

      {/* Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Investment Registration
            </h1>
            <p className="text-muted-foreground text-lg">
              Complete your registration to start automated gold trading
            </p>
          </div>

          {/* Investment Terms Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Profit Sharing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {formData.profitSharing ? (
                  <>
                    <div className="text-3xl font-bold text-accent mb-2">
                      {100 - parseFloat(formData.profitSharing)} / {formData.profitSharing}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formData.profitSharing}% to investor, {100 - parseFloat(formData.profitSharing)}% to BAES
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-3xl font-bold text-accent mb-2">70 / 30</div>
                    <p className="text-sm text-muted-foreground">30% to investor, 70% to BAES</p>
                  </>
                )}
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Settlement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent mb-2">Weekly</div>
                <p className="text-sm text-muted-foreground">Every Friday invoice day</p>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Trading Days</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent mb-2">4 Days</div>
                <p className="text-sm text-muted-foreground">Tue, Wed, Thu, Fri</p>
              </CardContent>
            </Card>
          </div>

          {/* Investment Terms Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Investment Terms & Schedule</CardTitle>
              <CardDescription>Key dates and payment information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Trading Schedule</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        <span><strong>Trading Days:</strong> Tuesday through Friday</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        <span><strong>Invoice Day:</strong> Every Friday</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        <span><strong>Payment Deadline:</strong> Monday (max limit)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Profit Distribution</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        <span>
                          <strong>Investor Share:</strong> {formData.profitSharing ? `${formData.profitSharing}%` : '30%'} of net profits
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        <span>
                          <strong>BAES Share:</strong> {formData.profitSharing ? `${100 - parseFloat(formData.profitSharing)}%` : '70%'} of net profits
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        <span><strong>Settlement:</strong> Weekly basis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle>Complete Your Registration</CardTitle>
              <CardDescription>Fill in your details and accept the agreement</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingInvite && (
                <div className="flex items-center justify-center py-8 mb-4">
                  <Spinner className="h-6 w-6 mr-2" />
                  <span className="text-muted-foreground">Loading invitation details...</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => {
                        setFormData({...formData, country: value});
                        // Auto-select phone code based on country
                        const phoneCodeForCountry = COUNTRY_TO_PHONE_CODE[value];
                        if (phoneCodeForCountry) {
                          setPhoneCode(phoneCodeForCountry);
                        }
                      }}
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <ScrollArea className="h-[200px]">
                          {COUNTRIES.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      disabled={formData.emailVerified}
                      className="mt-2"
                    />
                    {!formData.emailVerified ? (
                      <>
                        {!emailOtpSent ? (
                          <Button 
                            type="button" 
                            onClick={sendEmailOtp} 
                            variant="outline"
                            disabled={sendingEmailOtp}
                            className="mt-2 w-full"
                          >
                            {sendingEmailOtp ? (
                              <>
                                <Spinner className="mr-2 h-4 w-4" />
                                Sending...
                              </>
                            ) : (
                              "Send Verification Code"
                            )}
                          </Button>
                        ) : (
                          <div className="mt-2 space-y-2">
                            <Input
                              name="emailOtp"
                              type="text"
                              placeholder="Enter 6-digit verification code"
                              value={formData.emailOtp}
                              onChange={handleChange}
                              maxLength={6}
                              className="w-full"
                            />
                            <Button 
                              type="button" 
                              onClick={verifyEmailOtp} 
                              variant="outline"
                              disabled={verifyingEmailOtp}
                              className="w-full"
                            >
                              {verifyingEmailOtp ? (
                                <>
                                  <Spinner className="mr-2 h-4 w-4" />
                                  Verifying...
                                </>
                              ) : (
                                "Verify Code"
                              )}
                            </Button>
                            <Button 
                              type="button" 
                              onClick={sendEmailOtp} 
                              variant="ghost"
                              disabled={emailOtpCountdown > 0 || sendingEmailOtp}
                              className="w-full text-sm"
                            >
                              {sendingEmailOtp ? (
                                <>
                                  <Spinner className="mr-2 h-4 w-4" />
                                  Sending...
                                </>
                              ) : emailOtpCountdown > 0 ? (
                                `Resend Code (${emailOtpCountdown}s)`
                              ) : (
                                "Resend Code"
                              )}
                            </Button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="mt-2">
                        <Button type="button" disabled variant="outline" className="w-full bg-green-500/20 text-green-600">
                          ✓ Email Verified
                        </Button>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="flex gap-2 mt-2">
                      <Select
                        value={phoneCode}
                        onValueChange={setPhoneCode}
                        disabled={formData.phoneVerified}
                      >
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {PHONE_CODES.map((item) => (
                            <SelectItem key={item.code} value={item.code}>
                              <span>{item.flag} {item.code} ({item.name})</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                        placeholder="50 123 4567"
                      disabled={formData.phoneVerified}
                        className="flex-1"
                    />
                    </div>
                    {!formData.phoneVerified ? (
                      <>
                        {!phoneOtpSent ? (
                          <Button 
                            type="button" 
                            onClick={sendPhoneOtp} 
                            variant="outline"
                            disabled={sendingPhoneOtp}
                            className="mt-2 w-full"
                          >
                            {sendingPhoneOtp ? (
                              <>
                                <Spinner className="mr-2 h-4 w-4" />
                                Sending...
                              </>
                            ) : (
                              "Send Verification Code"
                            )}
                          </Button>
                        ) : (
                          <div className="mt-2 space-y-2">
                            <Input
                              name="phoneOtp"
                              type="text"
                              placeholder="Enter 6-digit verification code"
                              value={formData.phoneOtp}
                              onChange={handleChange}
                              maxLength={6}
                              className="w-full"
                            />
                            <Button 
                              type="button" 
                              onClick={verifyPhoneOtp} 
                              variant="outline"
                              disabled={verifyingPhoneOtp}
                              className="w-full"
                            >
                              {verifyingPhoneOtp ? (
                                <>
                                  <Spinner className="mr-2 h-4 w-4" />
                                  Verifying...
                                </>
                              ) : (
                                "Verify Code"
                              )}
                            </Button>
                            <Button 
                              type="button" 
                              onClick={sendPhoneOtp} 
                              variant="ghost"
                              disabled={phoneOtpCountdown > 0 || sendingPhoneOtp}
                              className="w-full text-sm"
                            >
                              {sendingPhoneOtp ? (
                                <>
                                  <Spinner className="mr-2 h-4 w-4" />
                                  Sending...
                                </>
                              ) : phoneOtpCountdown > 0 ? (
                                `Resend Code (${phoneOtpCountdown}s)`
                              ) : (
                                "Resend Code"
                              )}
                            </Button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="mt-2">
                        <Button type="button" disabled variant="outline" className="w-full bg-green-500/20 text-green-600">
                          ✓ Phone Verified
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="investmentAmount">Investment Amount (USD) *</Label>
                    <Input
                      id="investmentAmount"
                      name="investmentAmount"
                      type="number"
                      min="100000"
                      step="1000"
                      required
                      value={formData.investmentAmount}
                      onChange={handleChange}
                      placeholder="100000"
                      disabled={!!inviteToken}
                      className="mt-2 text-lg"
                    />
                    {inviteToken && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Investment amount is set by your invitation
                      </p>
                    )}
                    {!inviteToken && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Minimum investment: $100,000
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="profitSharing">Profit Sharing (%) *</Label>
                    <Input
                      id="profitSharing"
                      name="profitSharing"
                      type="number"
                      required
                      min="0"
                      max="100"
                      step="0.01"
                      value={formData.profitSharing}
                      onChange={handleChange}
                      placeholder="20.00"
                      disabled={!!inviteToken}
                      className="mt-2 text-lg"
                    />
                    {inviteToken && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Profit sharing is set by your invitation ({profitSharing}%)
                      </p>
                    )}
                    {!inviteToken && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Enter the percentage of profits you will share (0-100%)
                      </p>
                    )}
                  </div>

                </div>

                {/* MT5 Accounts Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-semibold">MT5 Accounts *</Label>
                    <Button
                      type="button"
                      onClick={addMt5Account}
                      variant="outline"
                      size="sm"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add MT5 Account
                    </Button>
                  </div>
                  
                  {mt5Accounts.map((account, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">MT5 Account {index + 1}</h4>
                        {mt5Accounts.length > 1 && (
                          <Button
                            type="button"
                            onClick={() => removeMt5Account(index)}
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                  <div>
                          <Label htmlFor={`mt5Login-${index}`}>MT5 Login *</Label>
                    <Input
                            id={`mt5Login-${index}`}
                      type="text"
                      required
                            value={account.mt5Login}
                            onChange={(e) => handleMt5Change(index, 'mt5Login', e.target.value)}
                      placeholder="MT5 Account Number"
                      className="mt-2"
                            disabled={account.validated}
                    />
                  </div>
                  <div>
                          <Label htmlFor={`mt5Password-${index}`}>MT5 Password *</Label>
                    <Input
                            id={`mt5Password-${index}`}
                      type="password"
                      required
                            value={account.mt5Password}
                            onChange={(e) => handleMt5Change(index, 'mt5Password', e.target.value)}
                      placeholder="MT5 Password"
                      className="mt-2"
                            disabled={account.validated}
                    />
                  </div>
                  <div>
                          <Label htmlFor={`mt5Server-${index}`}>MT5 Server *</Label>
                          <Select
                            value={account.mt5Server}
                            onValueChange={(value) => handleMt5Change(index, 'mt5Server', value)}
                      required
                            disabled={account.validated}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select MT5 Server" />
                            </SelectTrigger>
                            <SelectContent>
                              {MT5_SERVERS.map((server) => (
                                <SelectItem key={server.value} value={server.value}>
                                  {server.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                  </div>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-4">
                        {account.validated ? (
                          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-md">
                            <CheckCircle2 className="h-5 w-5" />
                            <span className="text-sm font-medium">Validated</span>
                          </div>
                        ) : (
                          <Button
                            type="button"
                            onClick={() => handleValidateMT5(index)}
                            disabled={account.validating || !account.mt5Login || !account.mt5Password || !account.mt5Server || !formData.email}
                            variant="outline"
                            className="flex items-center gap-2"
                          >
                            {account.validating ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Validating... (up to 60s)
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="h-4 w-4" />
                                Validate Credentials
                              </>
                            )}
                          </Button>
                        )}
                        {!account.validated && (
                          <p className="text-xs text-muted-foreground">
                            {account.validating 
                              ? 'Please wait... Broker detection in progress'
                              : 'Click validate to verify your MT5 credentials before submitting'
                            }
                          </p>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Your Investment Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Investment Amount:</span>
                      <span className="font-semibold text-foreground">${parseFloat(formData.investmentAmount || "0").toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Your Profit Share:</span>
                      <span className="font-semibold text-accent">
                        {formData.profitSharing ? `${formData.profitSharing}%` : 'Not set'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Settlement Frequency:</span>
                      <span className="font-semibold text-foreground">Weekly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Trading Days:</span>
                      <span className="font-semibold text-foreground">Tue-Fri</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t pt-6">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="agreeToTerms" className="text-sm font-normal cursor-pointer">
                        I have read and agree to the{" "}
                        <button
                          type="button"
                          onClick={() => setShowTermsModal(true)}
                          className="text-accent hover:underline font-semibold"
                        >
                          Terms and Conditions
                        </button>
                        .
                      </Label>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="understandRisks"
                      checked={formData.understandRisks}
                      onCheckedChange={(checked) => setFormData({ ...formData, understandRisks: checked as boolean })}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="understandRisks" className="text-sm font-normal cursor-pointer">
                        I understand the risks involved in automated trading and accept full responsibility for my investment decisions.
                      </Label>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg"
                  disabled={isSubmitting || !formData.agreeToTerms || !formData.understandRisks}
                >
                  {isSubmitting ? "Processing..." : "Complete Registration"}
                </Button>

                <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>Your information is secure and confidential</span>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Need assistance? Contact our support team at{" "}
              <a href="mailto:support@baessolutions.com" className="text-accent hover:underline">
                support@baessolutions.com
              </a>
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-12">
            <Disclaimer />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Terms and Conditions Modal */}
      <Dialog open={showTermsModal} onOpenChange={setShowTermsModal}>
        <DialogContent className="max-w-4xl w-[95vw] flex flex-col p-0 gap-0" style={{ maxHeight: '90vh', height: '90vh' }}>
          <DialogHeader className="px-6 pt-6 pb-4 border-b flex-shrink-0">
            <DialogTitle>Terms and Conditions</DialogTitle>
            <p className="text-sm text-muted-foreground mb-4 text-left">
              Please scroll to the bottom to accept the terms and conditions
            </p>
          </DialogHeader>
          <ScrollArea className="flex-1 min-h-0">
            <div className="space-y-6 px-6 py-4">
              {/* Privacy Policy */}
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Policy</CardTitle>
                  <CardDescription>Last Updated: November 26, 2025</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    BAES Solutions LLC ("Company", "we", "us", or "our") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                    you use our website, www.baessolutions.com (the "Site"), and the BAES BOT software platform (the "Service").
                  </p>
                  <p className="font-semibold text-foreground">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                    please do not access the service.
                  </p>
                  
                  <h4 className="font-semibold text-foreground mt-4">1. Information We Collect</h4>
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

                  <h4 className="font-semibold text-foreground mt-4">2. How We Use Your Information</h4>
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

                  <h4 className="font-semibold text-foreground mt-4">3. Data Security</h4>
                  <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we 
                    have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our 
                    efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against 
                    any interception or other type of misuse.
                  </p>

                  <h4 className="font-semibold text-foreground mt-4">4. Contact Us</h4>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at <strong>support@baessolutions.com</strong>.
                  </p>
                </CardContent>
              </Card>

              {/* Risk Disclosure */}
              <Card>
                <CardHeader>
                  <CardTitle>Risk Disclosure</CardTitle>
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

              {/* Client Software Licence Agreement */}
              <Card>
                <CardHeader>
                  <CardTitle>Client Software Licence Agreement</CardTitle>
                  <CardDescription>BAES Solutions LLC SaaS Agreement</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
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

                  <h4 className="font-semibold text-foreground mt-4">1. Definitions</h4>
                  <p><strong>1.1 "Software"</strong> - The Company's proprietary algorithmic trading software, expert advisors (EAs), bots, indicators, scripts, documentation, executable files, updates, and related components.</p>
                  <p><strong>1.2 "MT5 Platform"</strong> - MetaTrader 5 or any compatible trading platform operated by third-party regulated brokers.</p>
                  <p><strong>1.3 "Services"</strong> - Technical support, installation assistance, updates, and software maintenance, expressly excluding financial services.</p>

                  <h4 className="font-semibold text-foreground mt-4">2. Nature of Service (Technology Provider Only)</h4>
                  <p>The Company provides algorithmic trading software tools only. The Company does NOT:</p>
                  <ul>
                    <li>access Client trading accounts</li>
                    <li>request or receive MT5 login credentials or API keys</li>
                    <li>execute trades on behalf of the Client</li>
                    <li>provide discretionary portfolio management</li>
                    <li>provide investment advice or recommendations</li>
                    <li>handle or manage Client funds</li>
                    <li>guarantee profits or performance</li>
                  </ul>

                  <h4 className="font-semibold text-foreground mt-4">3. Licence Grant</h4>
                  <p>The Company grants the Client a non-exclusive, non-transferable, revocable licence to use the Software strictly for personal use in accordance with this Agreement.</p>

                  <h4 className="font-semibold text-foreground mt-4">4. No Financial Services or Advice</h4>
                  <p>The Company does not engage in investment management, portfolio management, trade execution, investment advisory, fund management, or proprietary trading with client funds.</p>

                  <h4 className="font-semibold text-foreground mt-4">5. Client Obligations</h4>
                  <p>The Client agrees to:</p>
                  <ul>
                    <li>maintain exclusive control of their MT5 account</li>
                    <li>secure all credentials and passwords</li>
                    <li>monitor all trades executed by the Software</li>
                    <li>configure appropriate risk parameters</li>
                    <li>use the Software in compliance with broker rules</li>
                    <li>ensure proper functioning of their VPS/device</li>
                  </ul>

                  <h4 className="font-semibold text-foreground mt-4">6. Limitation of Liability</h4>
                  <p>To the maximum extent permitted by UAE law:</p>
                  <ul>
                    <li>The Company is not liable for any loss arising from trading activity or market movements.</li>
                    <li>The Company is not liable for indirect, incidental, special, or consequential damages.</li>
                    <li>Total liability, if any, shall not exceed the subscription fees paid by the Client in the preceding three (3) months.</li>
                  </ul>

                  <h4 className="font-semibold text-foreground mt-4">7. Governing Law & Dispute Resolution</h4>
                  <p>
                    This Agreement is governed by the laws of the United Arab Emirates. Disputes shall be resolved by the competent courts of Sharjah, UAE.
                  </p>

                  <h4 className="font-semibold text-foreground mt-4">8. Client Acknowledgement</h4>
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
          </ScrollArea>
          <DialogFooter className="px-6 pb-6 pt-4 border-t flex-shrink-0">
            <Button
              onClick={handleAcceptTerms}
              disabled={!hasScrolledToBottom}
              className="w-full bg-accent hover:bg-accent/90"
            >
              I Accept the Terms and Conditions
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
