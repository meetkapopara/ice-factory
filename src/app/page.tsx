"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Gem,
  ShieldCheck,
  Truck,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe,
  Lock,
  Scale,
  Phone,
  Mail,
  Menu,
  X,
  Watch,
} from "lucide-react";

// --- Utility Components ---
const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium bg-white/50 backdrop-blur-sm">{children}</span>
);

const Feature = ({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="shrink-0 rounded-2xl p-3 border shadow-sm bg-white">
      <Icon className="w-6 h-6 text-slate-700" />
    </div>
    <div>
      <h4 className="font-semibold text-lg text-slate-900">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{children}</p>
    </div>
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-slate-900">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

// --- Main Page ---
export default function IceFactoryWholesale() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll review your application and send you our private catalog. For immediate access, contact us on WhatsApp.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl border-2 border-slate-200 shadow-sm grid place-items-center bg-gradient-to-br from-slate-50 to-white">
              <Watch className="w-5 h-5 text-slate-700" />
            </div>
            <span className="font-bold tracking-tight text-xl text-slate-900">Ice Factory</span>
            <Badge variant="secondary" className="ml-2 text-xs font-medium">Wholesale</Badge>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#products" className="hover:text-slate-600 transition-colors">Products</a>
            <a href="#services" className="hover:text-slate-600 transition-colors">Services</a>
            <a href="#process" className="hover:text-slate-600 transition-colors">Process</a>
            <a href="#policy" className="hover:text-slate-600 transition-colors">Policy</a>
            <a href="#contact" className="hover:text-slate-600 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex">
              <a href="#contact">Request Catalog</a>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm"
          >
            <nav className="px-4 py-4 space-y-3">
              <a href="#products" className="block py-2 text-sm font-medium hover:text-slate-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#services" className="block py-2 text-sm font-medium hover:text-slate-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#process" className="block py-2 text-sm font-medium hover:text-slate-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#policy" className="block py-2 text-sm font-medium hover:text-slate-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Policy</a>
              <a href="#contact" className="block py-2 text-sm font-medium hover:text-slate-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <div className="pt-2">
                <Button asChild className="w-full">
                  <a href="#contact">Request Catalog</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <Section className="pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Pill className="mb-6">Trade-Only • Direct from India</Pill>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Iced-Out Watches & Moissanite Jewelry
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              Direct from our manufacturing unit in India. Premium bust-down watches and jewelry with handset moissanite (D/VVS). Built for jewelers, resellers, and retailers who want shine, margins, and fast turnaround.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="px-8 py-6 text-base font-semibold">
                <a href="#contact">Request B2B Access</a>
              </Button>
              <Button variant="outline" asChild size="lg" className="px-8 py-6 text-base font-semibold">
                <a href="#policy">Read our Policy</a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <Stat value="D/VVS" label="Stone Spec" />
              <Stat value="5–10d" label="Typical Lead Time" />
              <Stat value=">60" label="Partner Retailers" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Card className="rounded-3xl shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900">Top Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 p-5 bg-white hover:shadow-md transition-shadow">
                    <div className="font-semibold text-slate-900 mb-2">Bust Down Presidential</div>
                    <p className="text-sm text-slate-600">Classic round with full pavé setting.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5 bg-white hover:shadow-md transition-shadow">
                    <div className="font-semibold text-slate-900 mb-2">Skeleton Iced</div>
                    <p className="text-sm text-slate-600">Open dial, handset moissanite across case & bezel.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5 bg-white hover:shadow-md transition-shadow">
                    <div className="font-semibold text-slate-900 mb-2">Classic Round</div>
                    <p className="text-sm text-slate-600">Timeless iced design, pavé dial & strap options.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5 bg-white hover:shadow-md transition-shadow">
                    <div className="font-semibold text-slate-900 mb-2">Custom Orders</div>
                    <p className="text-sm text-slate-600">Client-requested patterns, colors, or stone layouts.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Separator className="my-12" />

      {/* Products */}
      <Section id="products" className="py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Manufactured Products</h2>
          <Badge className="px-4 py-2 text-sm font-medium">MOQ from 10 units</Badge>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            title: "Bust Down Presidential",
            desc: "Full pavé setting, premium moissanite stones, multiple color options available.",
          },{
            title: "Skeleton Iced Collection",
            desc: "Open dial designs with handset moissanite across case, bezel, and strap.",
          },{
            title: "Classic Round Iced",
            desc: "Timeless designs with pavé dial, bezel options, and premium finishing.",
          }].map((item, i) => (
            <Card key={i} className="rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Sparkles className="w-4 h-4 text-slate-500" /> Hand‑set
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href="#contact">Get Price Sheet</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Custom Icing & Stone-Setting Services</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              For authorized jewelers and resellers only. We provide custom icing services on client-owned timepieces and manufacture complete iced-out watches. All work is done with premium D/VVS moissanite stones and professional finishing.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Feature icon={ShieldCheck} title="Quality Control">
                Every piece undergoes strict quality inspection with photos shared before shipment.
              </Feature>
              <Feature icon={Gem} title="Premium Stones">
                D color, VVS clarity moissanite with tight size tolerances for consistent pavé.
              </Feature>
              <Feature icon={Clock} title="Fast Turnaround">
                Typical turnaround 7–14 business days after approval depending on complexity.
              </Feature>
              <Feature icon={Truck} title="Secure Shipping">
                Insured shipping with tamper-evident packaging and tracking provided.
              </Feature>
            </div>
          </div>
          <Card className="rounded-2xl border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl font-bold text-slate-900">Service Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm">
                {[
                  "Signed work order & service terms",
                  "Business verification and trade references",
                  "Clear specifications and design requirements",
                  "Payment terms agreed before work begins",
                  "Quality photos shared for approval before shipment",
                ].map((li, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 leading-relaxed">{li}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How We Work</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Globe, title: "Apply", desc: "Submit trade application and get access to our private catalog." },
            { icon: Lock, title: "Quote", desc: "Send specs or reference images; receive quote and timeline." },
            { icon: Scale, title: "Produce", desc: "We manufacture/ice your pieces, perform QC, share photos for approval." },
            { icon: Truck, title: "Deliver", desc: "Securely ship with documentation and care instructions." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-2xl p-3 border border-slate-200 bg-slate-50"><Icon className="w-6 h-6 text-slate-700" /></div>
              </div>
              <div className="font-semibold text-lg text-slate-900 mb-3">{title}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Policy */}
      <Section id="policy" className="py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Wholesale Policy</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We work exclusively B2B with jewelers, resellers, and retailers. Catalog access is restricted to approved trade partners. Our products are sold under neutral descriptors only. Private catalogs available on request.
            </p>
            <div className="space-y-6">
              <Feature icon={ShieldCheck} title="Trade-Only Access">
                We work exclusively with verified business accounts and trade partners.
              </Feature>
              <Feature icon={Scale} title="Quality Guarantee">
                All products come with quality assurance and photos shared before shipment.
              </Feature>
              <Feature icon={Lock} title="Private Catalog">
                Full product catalog available only to approved trade partners.
              </Feature>
              <Feature icon={Globe} title="Secure Transactions">
                All transactions conducted through secure business channels with proper documentation.
              </Feature>
            </div>
          </div>
          <Card className="rounded-2xl border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl font-bold text-slate-900">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm">
                {[
                  "Trade-only; not for direct consumer purchase",
                  "Catalog access requires business verification",
                  "All products sold under neutral descriptions",
                  "Quality photos shared before shipment",
                  "Secure payment methods only",
                ].map((li, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 leading-relaxed">{li}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Request Trade Access</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Tell us about your business and what you&apos;re looking for. We&apos;ll review your application and send you our private catalog once approved.
            </p>
            <form onSubmit={handleInquiry} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Name" required className="h-12" />
                <Input type="email" placeholder="Email" required className="h-12" />
              </div>
              <Textarea placeholder="What products/services are you interested in?" rows={5} className="resize-none" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button type="submit" className="group px-8 py-3 text-base font-semibold">
                  Submit Application <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition" />
                </Button>
                <div className="flex flex-wrap gap-3">
                  <Pill><Phone className="w-4 h-4 mr-2" /> +44 74420 83245</Pill>
                  <Pill><Mail className="w-4 h-4 mr-2" /> sales@icefactory.store</Pill>
                </div>
              </div>
            </form>
          </div>
          <Card className="rounded-2xl border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl font-bold text-slate-900">What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-5 space-y-3 text-sm">
                <li className="text-slate-700 leading-relaxed">We review your application within 1–2 business days.</li>
                <li className="text-slate-700 leading-relaxed">Approved accounts receive our private catalog & pricing.</li>
                <li className="text-slate-700 leading-relaxed">We can sample initial products or quote custom work.</li>
              </ol>
              <div className="mt-8 p-5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm">
                <strong className="text-slate-900">Note:</strong> For immediate access to our catalog, contact us directly on WhatsApp or call our sales team.
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <Section className="py-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} IceFactory Ltd. All rights reserved.
          </div>
          <div className="text-center text-sm">
            <a href="#policy" className="hover:text-slate-900 transition-colors">Policy</a> · <a className="hover:text-slate-900 transition-colors" href="#">Privacy</a> · <a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
          </div>
          <div className="md:text-right text-sm text-slate-600">
            Built for brilliance..❤️
          </div>
        </Section>
      </footer>
    </div>
  );
}
