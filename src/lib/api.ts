import axios from 'axios';

// Backend API base URL
// Defaults to localhost:5000 for development
// Set VITE_API_BASE_URL in .env file to override
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout
});

// Add request interceptor for logging (development only)
api.interceptors.request.use(
  (config) => {
    if (import.meta.env.DEV) {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('[API Error]', {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url,
      });
    } else if (error.request) {
      // Request was made but no response received
      console.error('[API Error]', 'No response from server. Is the backend running at', API_BASE_URL, '?');
    } else {
      // Something else happened
      console.error('[API Error]', error.message);
    }
    return Promise.reject(error);
  }
);

// Log API base URL on initialization (development only)
if (import.meta.env.DEV) {
  console.log(`[API] Backend API configured at: ${API_BASE_URL}`);
}

export interface SignUpData {
  fullName: string;
  email: string;
  phone: string;
  investmentAmount: string;
  profitSharing?: string;
  country: string;
  mt5Login: string;
  mt5Password: string;
  mt5Server: string;
  emailVerified: boolean;
  phoneVerified: boolean;
}

export interface SignUpResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    email: string;
    fullName: string;
  };
  error?: string;
}

export const signUp = async (data: SignUpData): Promise<SignUpResponse> => {
  const response = await api.post<SignUpResponse>('/api/signup', data);
  return response.data;
};

export interface SendOtpResponse {
  success: boolean;
  message: string;
  otp?: string; // Only in development
  error?: string;
}

export const sendEmailOtp = async (email: string): Promise<SendOtpResponse> => {
  const response = await api.post<SendOtpResponse>('/api/send-email-otp', { email });
  return response.data;
};

export const sendPhoneOtp = async (phone: string): Promise<SendOtpResponse> => {
  const response = await api.post<SendOtpResponse>('/api/send-phone-otp', { phone });
  return response.data;
};

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  verified?: boolean;
  error?: string;
}

export const verifyOtp = async (
  email: string | null,
  phone: string | null,
  otp: string,
  type: 'email' | 'phone'
): Promise<VerifyOtpResponse> => {
  const response = await api.post<VerifyOtpResponse>('/api/verify-otp', {
    email,
    phone,
    otp,
    type,
  });
  return response.data;
};

// Invite API
export interface InviteData {
  email: string;
  investmentAmount: number;
  profitSharing: number;
}

export const getInvite = async (token: string): Promise<InviteData> => {
  const response = await api.get<{ success: boolean; data: InviteData }>(`/api/invites/${token}`);
  return response.data.data;
};

export const useInvite = async (token: string, userId: string): Promise<void> => {
  await api.post(`/api/invites/${token}/use`, { userId });
};

export default api;

