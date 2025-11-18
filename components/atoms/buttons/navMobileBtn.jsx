export function NavMobileBtn({ children, link }) {
    return (
        <a href={link} className="w-full">
            <button type="button" 
                className="btn bg-inherit w-full rounded-none p-2 text-h6 shadow-none text-gray-50 border-t-2 border-x-0 border-b-0 border-transparent
                    md:text-p lg:text-h6 
                    hover:text-purple-300 hover:bg-inherit hover:border-purple-300 
                     focus:border-purple-300 focus:text-purple-300">
                {children}
            </button>
        </a>
    );
}