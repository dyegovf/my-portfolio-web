export function Footer({ profile }) {
  return (
    <footer className="mt-20 border-t border-slate-800 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {profile.full_name}
    </footer>
  );
}
