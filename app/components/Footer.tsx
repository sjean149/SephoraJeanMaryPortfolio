const contactInfo = [
  {
    label: "Email",
    value: "sephorajeanmary@gmail.com",
    href: "mailto:sephorajeanmary@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sephora-jean-mary",
    href: "https://www.linkedin.com/in/sephora-jean-mary-4297351a5/",
  },
  {
    label: "GitHub",
    value: "github.com/sjean149",
    href: "https://github.com/sjean149",
  },
  // To show your phone number, add:
  // { label: "Phone", value: "(786) 285-0671", href: "tel:+17862850671" },
];

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-slate-800 bg-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-white">Contact</h2>

        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
          {contactInfo.map((contact) => {
            const isExternal = contact.href.startsWith("http");
            return (
              <a
                key={contact.label}
                href={contact.href}
                {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                className="flex flex-col gap-2 rounded-lg border border-slate-700 p-4 transition hover:border-indigo-400"
              >
                <span className="text-sm text-slate-400">{contact.label}</span>
                <span className="break-all text-white">{contact.value}</span>
              </a>
            );
          })}
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Sephora Jean-Mary
        </p>
      </div>
    </footer>
  );
}
