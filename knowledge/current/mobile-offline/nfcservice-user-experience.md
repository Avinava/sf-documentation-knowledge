---
title: "NFCService User Experience"
domain: mobile-offline
topic: nfcservice-user-experience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:16.014Z
estimatedTokens: 107
keywords: [NFCService, User, Experience, deliver, any, desire, there’s, common, flow, interacts, NFCs]
---

> Your component can deliver any user experience you desire, but there’s a common flow
    for any component that interacts with NFCs.

# NFCService User Experience

Your component can deliver any user experience you desire, but there’s a common flow for any component that interacts with NFCs.

-   User initiates an NFC operation (read, erase, or write).
-   OS prompts the user to hold their device near the NFC tag to be interacted with.
-   OS provides a success message when the operation completed successfully, or an error message if something went wrong.
