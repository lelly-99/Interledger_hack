import { createAuthenticatedClient, isPendingGrant } from "@interledger/open-payments";
import dotenv from "dotenv";

dotenv.config()

export default async function incomingGrant(res, req) {

    try{
        const KEY_ID = process.env.KEY_ID;
        const WALLET_ADDRESS = process.env.WALLET_ADDRESS
        const PRIVATE_KEY = process.env.PRIVATE_KEY_PATH;

        const client = await createAuthenticatedClient({
            walletAddressUrl: WALLET_ADDRESS,
            privateKey: PRIVATE_KEY,
            keyId: KEY_ID,
          });
          
        const grant = await client.grant.request(
            {
              url: WALLET_ADDRESS.authServer,
            },
            {
              access_token: {
                access: [
                  {
                    type: "incoming-payment",
                    actions: ["list", "read", "read-all", "complete", "create"],
                  },
                ],
              },
            },
          );

          if (isPendingGrant(grant)) {
            throw new Error("Expected non-interactive grant");
          }
          res.status(200).json({
            accessToken: grant.access_token.value,
            manageUrl: grant.access_token.manage,
        });


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}