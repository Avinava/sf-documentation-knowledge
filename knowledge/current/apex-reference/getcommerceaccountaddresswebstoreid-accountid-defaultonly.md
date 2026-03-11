---
title: "getCommerceAccountAddress(webstoreId, accountId, defaultOnly)"
domain: apex-reference
topic: getcommerceaccountaddresswebstoreid-accountid-defaultonly
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [getCommerceAccountAddress, webstoreId, accountId, defaultOnly, Get, Commerce, account, addresses, webstore, account., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommerceAccountAddress(webstoreId, accountId, defaultOnly)

> Get Commerce account addresses for a webstore and account.

### getCommerceAccountAddress(webstoreId, accountId, defaultOnly)

Get Commerce account addresses for a webstore and account.

#### API Version

You can get the default address by itself, or you can get all of the addresses for the account.

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId, Boolean defaultOnly)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

defaultOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you only want the default address (true) or all addresses for the account (false). The default value is false.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")