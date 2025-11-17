
export function NavSocialBtn({ children, link, isOnlyIcon }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button type="button" 
                className={`btn btn-ghost btn-circle text-gray-50 w-10
                    sm:w-auto md:w-10 lg:w-auto
                    hover:text-purple-400  ${isOnlyIcon ? 'p-1 lg:p-2' : 'p-2'}`}>
                {children}
            </button>
        </a>
    );
}