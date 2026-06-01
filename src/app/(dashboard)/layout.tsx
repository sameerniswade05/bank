"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "react-oidc-context";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      router.push("/login");
    }
  }, [auth, router]);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (!auth.isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
