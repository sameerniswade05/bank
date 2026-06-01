"use client";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://ap-south-10vxpw4ofr.auth.ap-south-1.amazoncognito.com",

  client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,

  redirect_uri: process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI!,

  post_logout_redirect_uri: process.env.NEXT_PUBLIC_COGNITO_LOGOUT_URI!,

  response_type: "code",

  scope: "openid email phone",

  metadataUrl: "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_0VXPw4oFr/.well-known/openid-configuration",
};

export default function Provider({ children }: { children: React.ReactNode }) {
  return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>;
}
