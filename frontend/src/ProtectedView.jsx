import Navbar from "./components/Navbar.jsx";

const ProtectedView = ({user,children}) => {
    return (
        <div>
            <Navbar user={user}/>
            {children}
        </div>
    )
}

export default ProtectedView;