---
title: "setCartMessagesVisibility(webstoreId, activeCartOrId,
      effectiveAccountId, messageVisibility)"
domain: apex-reference
topic: setcartmessagesvisibilitywebstoreid-activecartorid-effectiveaccountid-messagevis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [setCartMessagesVisibility, webstoreId, activeCartOrId, effectiveAccountId, messageVisibility, Set, visibility, cart, messages., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setCartMessagesVisibility(webstoreId, activeCartOrId,
      effectiveAccountId, messageVisibility)

> Set the visibility for cart messages.

### setCartMessagesVisibility(webstoreId, activeCartOrId, effectiveAccountId, messageVisibility)

Set the visibility for cart messages.

#### API Version

50.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartMessagesVisibilityResult setCartMessagesVisibility(String webstoreId, String activeCartOrId, String effectiveAccountId, ConnectApi.CartMessagesVisibilityInput messageVisibility)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value is available in version 50.0 and later and indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

messageVisibility

Type: [ConnectApi.CartMessagesVisibilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_messages_visibility.htm "Set the visibility for cart messages.")

A ConnectApi.CartMessagesVisibilityInput object specifying the visibility setting.

#### Return Value

Type: [ConnectApi.CartMessagesVisibilityResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_messages_visibility_result.htm "Result of setting the visibility for cart messages.")