export function Navbar(){
    return (
     <div className="w-full flex flex-col md:flex-row justify-center md:items-center gap-8 py-5 bg-slate-900 mb-7"> 
    
     <a href=" ./.tsx" className="text-slate-300 transition hover:text-white">Skills</a>
        <a href="./Projects.tsx" className="text-slate-300 transition hover:text-white">Projects</a>
        <a href="./About.tsx" className="text-slate-300 transition hover:text-white">About</a>
        <a href=" ./Footer.tsx" className="text-slate-300 transition hover:text-white">Contact</a>

     </div>

    );
}