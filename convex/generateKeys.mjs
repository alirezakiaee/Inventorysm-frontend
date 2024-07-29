// File: convex/generateKeys.js
import { action } from "./_generated/server";
import { exportJWK, exportPKCS8, generateKeyPair } from "jose";

export default action(async () => {
  const keys = await generateKeyPair("RS256");
  const privateKey = await exportPKCS8(keys.privateKey);
  const publicKey = await exportJWK(keys.publicKey);
  const jwks = JSON.stringify({ keys: [{ use: "sig", ...publicKey }] });

  return {
    privateKey: privateKey.replace(/\n/g, "\\n"),
    jwks,
  };
});
