---
title: "Datacloud Class"
domain: apex-reference
topic: datacloud-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.133Z
estimatedTokens: 2132
namespace: ConnectApi
keywords: [Datacloud, Purchase, Data.com, contact, company, records, retrieve, purchase, information., Note, getCompaniesFromOrder, orderId, pageSize, page, API, Version, Requires, Chatter, getCompany, companyId]
---

# Datacloud Class

> Purchase Data.com contact or company records, and retrieve purchase information.

**Namespace:** `ConnectApi`

# Datacloud Class

Purchase Data.com contact or company records, and retrieve purchase information.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

-   **[Datacloud Methods](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_methods)**
    These methods are for Datacloud. All methods are static.

## Datacloud Methods

These methods are for Datacloud. All methods are static.

-   **[getCompaniesFromOrder(orderId, pageSize, page)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getCompaniesFromOrder_1)**
    Get a list of purchased company records for an order.
-   **[getCompany(companyId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getCompany_1)**
    Get a company record.
-   **[getContact(contactId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getContact_1)**
    Get a contact.
-   **[getContactsFromOrder(orderId, page, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getContactsFromOrder_1)**
    Get a list of purchased contacts for an order.
-   **[getOrder(orderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getOrder_1)**
    Get an order.
-   **[getUsage(userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_getUsage_1)**
    Get purchase usage information for a user.
-   **[postOrder(orderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm#apex_ConnectAPI_Datacloud_postOrder_1)**
    Purchase records that are listed in an input file.

### getCompaniesFromOrder(orderId, pageSize, page)

Get a list of purchased company records for an order.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudCompanies getCompaniesFromOrder(String orderId, String pageSize, String page)

#### Parameters

orderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an order.

page

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page that you want returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of companies to show on a page. The default pageSize is 25.

#### Return Value

Type: [ConnectApi.DatacloudCompanies](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_company_collection.htm#apex_connectapi_output_datacloud_company_collection "Lists all companies that were purchased in a specific order, page URLs, and the number of companies in the order.")

### getCompany(companyId)

Get a company record.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudCompany getCompany(String companyId)

#### Parameters

companyId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a company in the Data.com database.

#### Return Value

Type: [ConnectApi.DatacloudCompany](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_company.htm#apex_connectapi_output_datacloud_company "Information about a Data.com company.")

### getContact(contactId)

Get a contact.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudContact getContact(String contactId)

#### Parameters

contactId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a contact in the Data.com database.

#### Return Value

Type: [ConnectApi.DatacloudContact](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_contact.htm#apex_connectapi_output_datacloud_contact "Information about a Data.com contact.")

### getContactsFromOrder(orderId, page, pageSize)

Get a list of purchased contacts for an order.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudContacts getContactsFromOrder(String orderId, String page, String pageSize)

#### Parameters

orderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an order.

page

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page that you want returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of contacts to show on a page. The default pageSize is 25.

#### Return Value

Type: [ConnectApi.DatacloudContacts](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_contact_collection.htm#apex_connectapi_output_datacloud_contact_collection "Lists all contacts that were purchased in the specific order, page URLs, and the number of contacts in the order.")

### getOrder(orderId)

Get an order.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudOrder getOrder(String orderId)

#### Parameters

orderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an order.

#### Return Value

Type: [ConnectApi.DatacloudOrder](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_order.htm#apex_connectapi_output_datacloud_order "Represents a Datacloud order.")

### getUsage(userId)

Get purchase usage information for a user.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudPurchaseUsage getUsage(String userId)

#### Parameters

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a user.

#### Return Value

Type: [ConnectApi.DatacloudPurchaseUsage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_purchase_usage.htm#apex_connectapi_output_datacloud_purchase_usage "Information about Data.com point usage for monthly and list pool users.")

### postOrder(orderInput)

Purchase records that are listed in an input file.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudOrder postOrder(ConnectApi.DatacloudOrderInput orderInput)

#### Parameters

orderInput

Type: [ConnectApi.DatacloudOrderInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_datacloud_order.htm#apex_connectapi_input_datacloud_order "Input representation for a Datacloud order to purchase contacts or companies and retrieve purchase information.")

A list that contains IDs for the contacts or companies that you want to see.

#### Return Value

Type: [ConnectApi.DatacloudOrder](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_order.htm#apex_connectapi_output_datacloud_order "Represents a Datacloud order.")

#### Example

```

```

## Code Examples

```apex
ConnectApi.DatacloudOrderInput inputOrder=new ConnectApi.DatacloudOrderInput();
List<String> ids=new List<String>();
ids.add('1234');
inputOrder.companyIds=ids;
ConnectApi.DatacloudOrder datacloudOrderRep = ConnectApi.Datacloud.postOrder(inputOrder);
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- Datacloud Methods (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm)
- getCompaniesFromOrder(orderId, pageSize, page) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm)
- getCompany(companyId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm)
- getContact(contactId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm)
- getContactsFromOrder(orderId, page, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm)
- getOrder(orderId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm)
- getUsage(userId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm)
- postOrder(orderInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Datacloud_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
