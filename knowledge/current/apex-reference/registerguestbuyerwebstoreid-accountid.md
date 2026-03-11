---
title: "registerGuestBuyer(webstoreId, accountId)"
domain: apex-reference
topic: registerguestbuyerwebstoreid-accountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.720Z
keywords: [registerGuestBuyer, webstoreId, accountId, Register, guest, buyer, webstore, account, ID., method, enables, order, behalf, another, buyer., API, Version, Requires, Chatter, Signature]
---

# registerGuestBuyer(webstoreId, accountId)

> Register a guest buyer for a webstore using an account ID. This method enables a guest
      buyer to order on behalf of another buyer.

### registerGuestBuyer(webstoreId, accountId)

Register a guest buyer for a webstore using an account ID. This method enables a guest buyer to order on behalf of another buyer.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RegisterGuestBuyerOutputRepresentation registerGuestBuyer(String webstoreId, String accountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made.

#### Return Value

Type: [ConnectApi.RegisterGuestBuyerOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_register_guest_buyer_output.htm "Indicates success or failure of a register guest buyer action.")