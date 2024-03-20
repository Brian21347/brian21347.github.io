export default function ThemeSwitch() {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-11 h-6 bg-slate2 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue2 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-slate0 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-slate0 after:border-slate2 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue5" />
    </label>
  );
}
