const Layout = ({children}) => {
    return (
        <div className="min-h-screen flex">
            <div className="flex-1 bg-gray-200 ">
                {children}
            </div>
        </div>
    );
};

export default Layout;
