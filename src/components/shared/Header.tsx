import MainNav from './MainNav';
import Logo from './Logo';
export default function AboutPage() {
  return (
    <div className="bg-slate-800 min-h-[80px]">
      <div className="max-w-7xl mx-auto  flex items-center justify-end h-[80px]">
        {/* Menu */}
        <MainNav/>
      </div>
    </div>
  );
}
