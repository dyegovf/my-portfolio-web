export function Footer({ profile }) {
  return (
    <footer className="mt-16 border-t border-slate-200 py-8 text-center text-sm text-slate-500 transition-colors dark:border-slate-800 dark:text-slate-400">
      © {new Date().getFullYear()} {profile.full_name}
    </footer>
  );
}
