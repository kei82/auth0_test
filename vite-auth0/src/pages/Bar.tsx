import React from "react";
import { useLoaderData } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Bar: React.FC = () => {
  const { text } = useLoaderData() as LoaderData;
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <h1>Current page Bar</h1>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>

      {isAuthenticated && (
        <div>
          <p>login info</p>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <pre>{JSON.stringify(user, undefined, 2)}</pre>
        </div>
      )}

      <p style={{ color: "red" }}>{text}</p>
    </>
  );
};

export default Bar;

type LoaderData = { text: string };

export async function loader(): Promise<LoaderData> {
  const contacts = await fetch(
    "https://hacker-news.firebaseio.com/v0/item/2921983.json"
  );
  const text = await contacts.text();
  return { text };
}
