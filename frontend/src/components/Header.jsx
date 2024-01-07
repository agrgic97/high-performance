const Header = ({ toggleSidebar }) => {
    return (
        <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
            <h1 className="text-2xl font-bold">High Performance Dashboard</h1>
            <button
                className="block focus:outline-none"
                onClick={toggleSidebar}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
        </header>
    );
};

export default Header;
