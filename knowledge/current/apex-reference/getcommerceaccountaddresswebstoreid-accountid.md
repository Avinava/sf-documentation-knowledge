---
title: "getCommerceAccountAddress(webstoreId, accountId)"
domain: apex-reference
topic: getcommerceaccountaddresswebstoreid-accountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [getCommerceAccountAddress, webstoreId, accountId, Get, Commerce, account, address, webstore., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommerceAccountAddress(webstoreId, accountId)

> Get a Commerce account address for a webstore.

### getCommerceAccountAddress(webstoreId, accountId)

Get a Commerce account address for a webstore.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")