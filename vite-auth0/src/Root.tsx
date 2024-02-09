import { NavLink, Outlet } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Root: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foo"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              Foo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bar"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              Bar
            </NavLink>
          </li>
        </ul>
      </nav>

      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_ISSUER_BASE_URL}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        cacheLocation="localstorage"
      >
        <Outlet />
      </Auth0Provider>
    </>
  );
};

export default Root;
