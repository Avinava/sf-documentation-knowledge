---
title: "deleteCart(webstoreId, effectiveAccountId,
      activeCartOrId)"
domain: apex-reference
topic: deletecartwebstoreid-effectiveaccountid-activecartorid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [deleteCart, webstoreId, effectiveAccountId, activeCartOrId, Delete, cart., Sets, guest, cart, status, PendingDelete, B2B, store, Closed, D2C, store., API, Version, Available, Guest]
---

# deleteCart(webstoreId, effectiveAccountId,
      activeCartOrId)

> Delete a cart. Sets the guest cart status to PendingDelete in a B2B store or Closed in a D2C store.

### deleteCart(webstoreId, effectiveAccountId, activeCartOrId)

Delete a cart. Sets the guest cart status to PendingDelete in a B2B store or Closed in a D2C store.

#### API Version

49.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static Void deleteCart(String webstoreId, String effectiveAccountId, String activeCartOrId)

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

#### Return Value

Type: Void

#### Usage

Buyers with read access to carts can create and delete carts.