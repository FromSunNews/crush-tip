import { Heart, Mail, Phone } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-800 pb-16">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-playful flex items-center justify-center text-white">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-lg font-semibold">{dict.nav.logo}</span>
            </div>
            <p className="text-sm text-neutral-400">
              AI texting assistant for your crush.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">{dict.footer.product}</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {dict.footer.featuresLink}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {dict.footer.toneStyles}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {dict.footer.howItWorksLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">{dict.footer.company}</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {dict.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {dict.footer.blog}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {dict.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {dict.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">
              {dict.footer.contactInfo}
            </h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {dict.footer.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-neutral-500 text-sm gap-4">
          <p>{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
