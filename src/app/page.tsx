import ThemeShowcase from "@/components/theme-showcase";

export default function Home() {
  return (
    <div className="space-y-8">
      <ThemeShowcase theme="light" />
      <ThemeShowcase theme="dark" />
    </div>
  );
}
