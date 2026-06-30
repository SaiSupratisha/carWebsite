import { NavLink, Outlet } from "react-router-dom";
 
function Dashboard() {
 
    return (
 
        <div

            style={{

                display: "flex",

                minHeight: "80vh"

            }}
>
 
            <div

                style={{

                    width: "250px",

                    background: "#111827",

                    color: "white",

                    padding: "20px"

                }}
>
 
                <h2>Dashboard</h2>
 
                <hr />
 
                <br />
 
                <NavLink

                    to="profile"

                    style={{ display: "block", margin: "15px 0", color: "white" }}
>

                    Profile
</NavLink>
 
                <NavLink

                    to="test-drives"

                    style={{ display: "block", margin: "15px 0", color: "white" }}
>

                    Test Drives
</NavLink>
 
                <NavLink

                    to="settings"

                    style={{ display: "block", margin: "15px 0", color: "white" }}
>

                    Settings
</NavLink>
 
            </div>
 
            <div

                style={{

                    flex: 1,

                    padding: "40px"

                }}
>
 
                <Outlet />
 
            </div>
 
        </div>
 
    );
 
}
 
export default Dashboard;
 