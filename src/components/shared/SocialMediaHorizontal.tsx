import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    href: 'https://twitter.com/yourprofile',
    label: 'Twitter',
    icon: <FaTwitter />,
  },
  {
    href: 'https://linkedin.com/in/yourprofile',
    label: 'LinkedIn',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/yourprofile',
    label: 'GitHub',
    icon: <FaGithub />,
  },
  {
    href: 'https://facebook.com/yourprofile',
    label: 'Facebook',
    icon: <FaFacebook />,
  },
];

export default function SocialMediaIcons() {
  return (
    <section className='bg-white py-16'>
    <div className="flex gap-6 justify-center items-center">
      {socialLinks.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-[#014fa7] text-2xl transition"
        >
          {icon}
        </a>
      ))}
    </div>
    </section>
  );
}
