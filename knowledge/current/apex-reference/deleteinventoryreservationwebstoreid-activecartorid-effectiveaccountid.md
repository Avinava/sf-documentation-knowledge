---
title: "deleteInventoryReservation(webstoreId, activeCartOrId,
      effectiveAccountId)"
domain: apex-reference
topic: deleteinventoryreservationwebstoreid-activecartorid-effectiveaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [deleteInventoryReservation, webstoreId, activeCartOrId, effectiveAccountId, Delete, inventory, reservation., Pilot, API, Version, Note, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteInventoryReservation(webstoreId, activeCartOrId,
      effectiveAccountId)

> Delete an inventory reservation.

### deleteInventoryReservation(webstoreId, activeCartOrId, effectiveAccountId) (Pilot)

Delete an inventory reservation.

#### API Version

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This feature is not generally available and is being piloted with certain Customers subject to additional terms and conditions. It is not part of your purchased Services. This feature is subject to change, may be discontinued with no notice at any time in Salesforce’s sole discretion, and Salesforce may never make this feature generally available. Make your purchase decisions only on the basis of generally available products and features. This feature is made available on an AS IS basis and use of this feature is at your sole risk.

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static Void deleteInventoryReservation(String webstoreId, String activeCartOrId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

#### Return Value

Type: Void