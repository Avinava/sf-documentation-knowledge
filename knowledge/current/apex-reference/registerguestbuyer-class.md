---
title: "RegisterGuestBuyer Class"
domain: apex-reference
topic: registerguestbuyer-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.544Z
estimatedTokens: 501
namespace: ConnectApi
keywords: [RegisterGuestBuyer, Register, guest, buyer, webstore, account, enabling, order, behalf, another, webstoreId, accountId, API, Version, Requires]
---

# RegisterGuestBuyer Class

> Register a guest buyer for a webstore using an account ID, enabling a guest buyer to order on behalf of another buyer.

**Namespace:** `ConnectApi`

# RegisterGuestBuyer Class

Register a guest buyer for a webstore using an account ID, enabling a guest buyer to order on behalf of another buyer.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## RegisterGuestBuyer Methods

These methods are for RegisterGuestBuyer. All methods are static. Your org must have the Order Management Growth license or Order Management as part of Connected Commerce.

-   **[registerGuestBuyer(webstoreId, accountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RegisterGuestBuyer_static_methods.htm#apex_ConnectAPI_RegisterGuestBuyer_registerGuestBuyer_1)**
    Register a guest buyer for a webstore using an account ID. This method enables a guest buyer to order on behalf of another buyer.

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- registerGuestBuyer(webstoreId, accountId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RegisterGuestBuyer_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.RegisterGuestBuyerOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_register_guest_buyer_output.htm)
