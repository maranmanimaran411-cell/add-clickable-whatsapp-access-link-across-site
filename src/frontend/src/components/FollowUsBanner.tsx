import { FaLinkedinIn } from "react-icons/fa";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/papadixfoods?igsh=aTNpemFoMThkYWY5",
    icon: SiInstagram,
    hoverClass: "hover:text-pink-500",
    bgHoverClass: "hover:bg-pink-50",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18Renuqkzo/",
    icon: SiFacebook,
    hoverClass: "hover:text-blue-600",
    bgHoverClass: "hover:bg-blue-50",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manimaran-m-31b4aa359?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: FaLinkedinIn,
    hoverClass: "hover:text-blue-700",
    bgHoverClass: "hover:bg-blue-50",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@papadixfoods?si=efjDh8qFBFi4E43f",
    icon: SiYoutube,
    hoverClass: "hover:text-red-600",
    bgHoverClass: "hover:bg-red-50",
  },
];

export function FollowUsBanner() {
  return (
    <section
      className="py-14 md:py-16"
      style={{ background: "oklch(0.97 0.018 75)" }}
      data-ocid="follow_us.section"
    >
      <div className="container text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2 text-brand-dark">
          Follow Us on Social Media
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-base">
          Stay connected with PAPADIX FOODS for updates, product launches, and
          export news.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map(
            ({ label, href, icon: Icon, hoverClass, bgHoverClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`follow_us.${label.toLowerCase()}_link`}
                className={`flex flex-col items-center gap-2 group transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl px-5 py-4 ${bgHoverClass}`}
                aria-label={`Follow PAPADIX FOODS on ${label}`}
              >
                <span
                  className={`text-brand-primary ${hoverClass} transition-colors duration-200`}
                >
                  <Icon className="w-9 h-9" />
                </span>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {label}
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
