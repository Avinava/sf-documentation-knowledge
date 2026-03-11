---
title: "preserveGuestCart(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)"
domain: apex-reference
topic: preserveguestcartwebstoreid-effectiveaccountid-activecartorid-currencyisocode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [preserveGuestCart, webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode, Preserve, cart, contents, guest, logs, authenticated, customer., Sets, status, PendingDelete, B2B, store, Closed, D2C, store.]
---

# preserveGuestCart(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)

> Preserve cart contents when a guest logs in as an authenticated
  customer. Sets the guest cart status to PendingDelete in a B2B store or Closed in a D2C store.

### preserveGuestCart(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)

Preserve cart contents when a guest logs in as an authenticated customer. Sets the guest cart status to PendingDelete in a B2B store or Closed in a D2C store.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PreserveCart preserveGuestCart(String webstoreId, String effectiveAccountId, String activeCartOrId, String currencyIsoCode)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value is available in version 50.0 and later and indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The currency ISO code of the cart.

#### Return Value

Type: [ConnectApi.PreserveCart](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preserve_cart_output.htm "Represents a preserved cart.")