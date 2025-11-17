

export function NavSectionBtn({ children, link }) {
    return (
        <a href={link}>
            <button 
                className={`w-auto h-1/3 btn bg-inherit text-gray-50 border-b-2 border-x-0 border-t-0 border-transparent rounded-none p-2 shadow-none 
                    sm:text-[0.9rem] md:h-auto lg:text-h6 
                    hover:border-b-2 hover:border-purple-300 hover:text-purple-300 hover:bg-inherit 
                    focus:border-b-2 focus:border-purple-300 focus:text-purple-300`}
                type="button">
                    {children}
            </button>
        </a>
    );
}