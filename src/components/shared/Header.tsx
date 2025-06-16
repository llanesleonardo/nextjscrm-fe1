import MainNav from './MainNav';
import Logo from './Logo';
export default function AboutPage() {
  return (
    <div className="min-w-screen bg-[#014fa7] min-h-[80px]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <Logo/>
        {/* Menu */}
        <MainNav/>
      </div>
    </div>
  );
}
