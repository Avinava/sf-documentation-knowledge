---
title: "cloneCart(webstoreId, activeCartOrId, targetEffectiveAccountId, targetType)"
domain: apex-reference
topic: clonecartwebstoreid-activecartorid-targeteffectiveaccountid-targettype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [cloneCart, webstoreId, activeCartOrId, targetEffectiveAccountId, targetType, Clones, existing, cart, create, secondary, read-only, support, Pay, Now, functionality., Sets, guest, status, PendingDelete, B2B]
---

# cloneCart(webstoreId, activeCartOrId, targetEffectiveAccountId, targetType)

> Clones an existing cart to create a secondary, read-only cart to
      support Pay Now functionality. Sets the guest cart status to PendingDelete in a B2B store.

### cloneCart(webstoreId, activeCartOrId, targetEffectiveAccountId, targetType)

Clones an existing cart to create a secondary, read-only cart to support Pay Now functionality. Sets the guest cart status to PendingDelete in a B2B store.

#### API Version

60.0

#### Available to Guest Users

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartSummary cloneCart(String webstoreId, String activeCartOrId, String targetEffectiveAccountId, String targetType)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value is available in version 50.0 and later and indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

targetEffectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Effective Account ID associated with the cloned cart.

targetType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of the cloned cart. Value is PayNowReadOnly.

#### Return Value

Type: [ConnectApi.CartSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_summary.htm "A cart summary.")

#### Usage

The cloneCart method is valid only for the Pay Now feature. See [Salesforce Pay Now for Embedded Payment Solutions](https://help.salesforce.com/s/articleView?language=en_US&id=sf.pay_now_intro_prereqs.htm).