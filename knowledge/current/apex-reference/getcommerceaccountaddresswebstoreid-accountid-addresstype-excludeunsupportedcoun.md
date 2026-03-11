---
title: "getCommerceAccountAddress(webstoreId, accountId,
      addressType, excludeUnsupportedCountries)"
domain: apex-reference
topic: getcommerceaccountaddresswebstoreid-accountid-addresstype-excludeunsupportedcoun
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [getCommerceAccountAddress, webstoreId, accountId, addressType, excludeUnsupportedCountries, Get, Commerce, account, addresses, webstore, account., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommerceAccountAddress(webstoreId, accountId,
      addressType, excludeUnsupportedCountries)

> Get Commerce account addresses for a webstore and
    account.

### getCommerceAccountAddress(webstoreId, accountId, addressType, excludeUnsupportedCountries)

Get Commerce account addresses for a webstore and account.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId, List<String\> addressType, Boolean excludeUnsupportedCountries)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

addressType

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Type of address, for example, Billing or Shipping.

excludeUnsupportedCountries

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you want to retrieve all addresses (false) or only addresses of type Shipping that are in countries included in the store’s shipToCountries list (true). The default value is false.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")