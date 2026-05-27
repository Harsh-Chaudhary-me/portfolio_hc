import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, User, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Web3Forms Access Key: Replace with your key from https://web3forms.com to receive emails instantly!
  const WEB3FORMS_ACCESS_KEY = "c5443875-eded-4d52-ba2a-a4af57b50d84";

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Harsh Portfolio Contact Form"
        })
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }

    setTimeout(() => setSubmitStatus(null), 6000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 sm:px-12 md:px-24 bg-app-bg border-b border-border-main transition-colors duration-300 reveal-element flex justify-center w-full"
    >
      <div className="w-full max-w-[900px]">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="font-mono text-sm text-primary mb-2 tracking-widest"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-main pb-4 border-b border-border-main flex items-center gap-3">
            <span>Get In Touch</span>
            <span className="h-[1px] flex-1 bg-border-main"></span>
          </h2>
        </div>

        {/* Content Container (Adapts layout borders & backgrounds dynamically) */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-border-main bg-app-surface overflow-hidden shadow-2xl relative">
          
          {/* Left Column: Connect Info */}
          <div className="p-8 sm:p-10 flex flex-col justify-between text-left gap-8 border-b md:border-b-0 md:border-r border-border-main bg-app-bg/30">
            <div>
              <h3 className="font-sans font-bold text-2xl text-text-main tracking-tight">
                Connect With Me
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
                Whether you have an internship opportunity, a project proposal, or just want to chat, my inbox is always open. I will get back to you as soon as possible!
              </p>
            </div>

            {/* Connect Details Rows */}
            <div className="flex flex-col gap-6 font-mono text-xs sm:text-sm">
              {/* Email Row */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-app-surface border border-border-main group/row">
                <div className="flex items-center gap-3 truncate">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-text-main truncate">chauharsh09@gmail.com</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('chauharsh09@gmail.com', 'email')}
                  className="p-1.5 rounded bg-app-bg border border-border-main hover:border-primary text-text-muted hover:text-primary transition-all duration-300 shrink-0 cursor-none"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone Row */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-app-surface border border-border-main group/row">
                <div className="flex items-center gap-3 truncate">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-text-main truncate">+91 88028 76042</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('+91 8802876042', 'phone')}
                  className="p-1.5 rounded bg-app-bg border border-border-main hover:border-primary text-text-muted hover:text-primary transition-all duration-300 shrink-0 cursor-none"
                  title="Copy Phone"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location Row */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-app-surface border border-border-main">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-text-main font-mono">Ghaziabad, India</span>
              </div>
            </div>

            {/* Subtle Terminal Decorative Log */}
            <div className="hidden sm:block text-[10px] text-text-muted/30 font-mono select-none">
              harsh_chaudhary:~/connect$  2026<br/>
             
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 flex flex-col gap-6 text-left bg-app-surface"
          >
            {/* Name Field */}
            <div className="relative w-full">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                <User className="w-4 h-4" />
              </span>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder=" "
                className="peer w-full pl-10 pr-4 py-3 bg-app-bg/40 border border-border-main focus:border-primary focus:shadow-[0_0_12px_rgba(16,185,129,0.15)] rounded-lg text-sm text-text-main placeholder-transparent focus:outline-none transition-all duration-300"
                id="name-input"
              />
              <label 
                htmlFor="name-input"
                className="absolute left-10 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-text-muted transition-all duration-300 pointer-events-none origin-left
                  peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:bg-app-surface peer-focus:px-1.5 peer-focus:text-primary
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:bg-app-surface peer-[:not(:placeholder-shown)]:px-1.5"
              >
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative w-full">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                <Mail className="w-4 h-4" />
              </span>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder=" "
                className="peer w-full pl-10 pr-4 py-3 bg-app-bg/40 border border-border-main focus:border-primary focus:shadow-[0_0_12px_rgba(16,185,129,0.15)] rounded-lg text-sm text-text-main placeholder-transparent focus:outline-none transition-all duration-300"
                id="email-input"
              />
              <label 
                htmlFor="email-input"
                className="absolute left-10 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-text-muted transition-all duration-300 pointer-events-none origin-left
                  peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:bg-app-surface peer-focus:px-1.5 peer-focus:text-primary
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:bg-app-surface peer-[:not(:placeholder-shown)]:px-1.5"
              >
                Your Email
              </label>
            </div>

            {/* Subject Field */}
            <div className="relative w-full">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                <MessageSquare className="w-4 h-4" />
              </span>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder=" "
                className="peer w-full pl-10 pr-4 py-3 bg-app-bg/40 border border-border-main focus:border-primary focus:shadow-[0_0_12px_rgba(16,185,129,0.15)] rounded-lg text-sm text-text-main placeholder-transparent focus:outline-none transition-all duration-300"
                id="subject-input"
              />
              <label 
                htmlFor="subject-input"
                className="absolute left-10 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-text-muted transition-all duration-300 pointer-events-none origin-left
                  peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:bg-app-surface peer-focus:px-1.5 peer-focus:text-primary
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:bg-app-surface peer-[:not(:placeholder-shown)]:px-1.5"
              >
                Subject Title
              </label>
            </div>

            {/* Message Area */}
            <div className="relative w-full">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                placeholder=" "
                className="peer w-full px-4 py-3 bg-app-bg/40 border border-border-main focus:border-primary focus:shadow-[0_0_12px_rgba(16,185,129,0.15)] rounded-lg text-sm text-text-main placeholder-transparent focus:outline-none transition-all duration-300 resize-none"
                id="message-input"
              ></textarea>
              <label 
                htmlFor="message-input"
                className="absolute left-4 top-4 text-xs sm:text-sm text-text-muted transition-all duration-300 pointer-events-none origin-left
                  peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:bg-app-surface peer-focus:px-1.5 peer-focus:text-primary
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:bg-app-surface peer-[:not(:placeholder-shown)]:px-1.5"
              >
                Write Your Message...
              </label>
            </div>

            {/* Submit Button - Standardized theme gradient transition */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-text-main text-app-bg font-extrabold cursor-none select-none tracking-wide text-xs sm:text-sm uppercase shadow-md transition-all duration-300
                hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-400 hover:text-black hover:shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Transmitting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Submission Status Message */}
            {submitStatus === 'success' && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs sm:text-sm text-center font-mono animate-[fadeIn_0.3s_ease-out]">
                ✓ Message transmitted successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs sm:text-sm text-center font-mono animate-[fadeIn_0.3s_ease-out]">
                ✗ Transmission failed. Please verify your internet connection or Web3Forms Access Key.
              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
}
