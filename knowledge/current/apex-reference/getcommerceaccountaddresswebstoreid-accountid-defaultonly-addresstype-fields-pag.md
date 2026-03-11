---
title: "getCommerceAccountAddress(webstoreId, accountId,
      defaultOnly, addressType, fields, pageToken, pageSize, sortOrder)"
domain: apex-reference
topic: getcommerceaccountaddresswebstoreid-accountid-defaultonly-addresstype-fields-pag
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [getCommerceAccountAddress, webstoreId, accountId, defaultOnly, addressType, fields, pageToken, pageSize, sortOrder, Get, Commerce, account, addresses, webstore, account., API, Version, Requires, Chatter, Signature]
---

# getCommerceAccountAddress(webstoreId, accountId,
      defaultOnly, addressType, fields, pageToken, pageSize, sortOrder)

> Get Commerce account addresses for a webstore and
    account.

### getCommerceAccountAddress(webstoreId, accountId, defaultOnly, addressType, fields, pageToken, pageSize, sortOrder)

Get Commerce account addresses for a webstore and account.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceAddressCollection getCommerceAccountAddress(String webstoreId, String accountId, Boolean defaultOnly, List<String\> addressType, List<String\> fields, String pageToken, Integer pageSize, ConnectApi.CommerceAddressSort sortOrder)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account.

defaultOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicate if you want only the default address (true) or all addresses for the account (false). The default value is false.

addressType

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Type of address, for example, Billing or Shipping.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of custom fields for the address.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortOrder

Type: [ConnectApi.CommerceAddressSort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#ConnectCommerceAddressSortOrderEnum)

Sort order for Commerce addresses.

-   CreatedDateAsc—Sort in ascending order of created date.
-   CreatedDateDesc—Sort in descending order of created date.
-   NameAsc—Sort in ascending order of name.
-   NameDesc—Sort in descending order of name.

#### Return Value

Type: [ConnectApi.CommerceAddressCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_address_collection.htm "A collection of Commerce addresses.")