---
title: "updateCommerceAccountAddress(webstoreId, accountId, addressId, addressInput)"
domain: apex-reference
topic: updatecommerceaccountaddresswebstoreid-accountid-addressid-addressinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [updateCommerceAccountAddress, webstoreId, accountId, addressId, addressInput, Update, Commerce, account, address, webstore., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateCommerceAccountAddress(webstoreId, accountId, addressId, addressInput)

> Update a Commerce account address for a webstore.

### updateCommerceAccountAddress(webstoreId, accountId, addressId, addressInput)

Update a Commerce account address for a webstore.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressOutput updateCommerceAccountAddress(String webstoreId, String accountId, String addressId, ConnectApi.commerceAddressInput addressInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

addressId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the address.

addressInput

Type: [ConnectApi.commerceAddressInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_commerce_address.htm "Commerce address input.")

Information about the address fields you want to update.

#### Return Value

Type: [ConnectApi.CommerceAddressOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_output.htm "Address for a Commerce account.")