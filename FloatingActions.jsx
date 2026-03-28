import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';

const actions = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    icon: FaWhatsapp,
    color: 'bg-emerald-500',
  },
  {
    label: 'Call',
    href: 'tel:+919876543210',
    icon: FiPhone,
    color: 'bg-sky-500',
  },
  {
    label: 'Email',
    href: 'mailto:support@ravindriais.co.in',
    icon: FiMail,
    color: 'bg-violet-500',
  },
];

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-4">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className={`group relative inline-flex h-14 w-14 items-center justify-center rounded-full ${action.color} text-white shadow-2xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-105`}
          >
            <Icon className="h-6 w-6" />
            <span className="pointer-events-none absolute -right-2 top-1 hidden rounded-full bg-slate-950/95 px-2 py-1 text-xs font-semibold text-white shadow-lg transition-all duration-300 group-hover:block">
              {action.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
