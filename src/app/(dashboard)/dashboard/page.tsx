"use client";

import { useAuth } from "react-oidc-context";

export default function DashboardPage() {
  const auth = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Banking Dashboard</h1>

      <p>{auth.user?.profile.email}</p>

      <button
        onClick={() =>
          auth.signoutRedirect({
            post_logout_redirect_uri: "http://localhost:3002/login",
          })
        }
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Logout
      </button>
    </div>
  );
}
