export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="glass inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-text-primary">
      {children}
    </span>
  );
}
