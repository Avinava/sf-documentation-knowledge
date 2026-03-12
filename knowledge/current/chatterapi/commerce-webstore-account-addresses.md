---
title: "Commerce Webstore Account Addresses"
domain: chatterapi
topic: commerce-webstore-account-addresses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.106Z
estimatedTokens: 974
keywords: [Commerce, Webstore, Account, Addresses, address, retrieve, collection]
---

# Commerce Webstore Account Addresses

> Create a Commerce account address for a webstore, or retrieve a collection of
      addresses for a webstore account.

# Commerce Webstore Account Addresses

Create a Commerce account address for a webstore, or retrieve a collection of addresses for a webstore account.

Resource

```

```

Available version

54.0

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addressId | String | ID of the account address. | Optional | 56.0 |
| addressType | String[] | List of address types (for example, “Shipping” or “Billing”). | Optional | 54.0 |
| defaultOnly | Boolean | Indicate if you only want the default address (true) or all addresses for the account (false). The default value is false. | Optional | 54.0 |
| excludeUnsupportedCountries | Boolean | Indicate if you want to retrieve all addresses (false) or only addresses of type Shipping that are in countries included in the store’s shipToCountries list (true). The default value is false. | Optional | 57.0 |
| fields | String[] | A list of custom fields for the address. | Optional | 54.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 54.0 |
| pageToken | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response, such as currentPageToken or nextPageToken. If you don’t specify a value, the first page is returned. | Optional | 54.0 |
| sortOrder | String | Sort order for Commerce addresses. Values are:CreatedDateAsc—Sort in ascending order of created date.CreatedDateDesc—Sort in descending order of created date.NameAsc—Sort in ascending order of name.NameDesc—Sort in descending order of name. | Optional | 54.0 |

Response body for GET

[Commerce Address Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_address_collection.htm "A collection of commerce addresses.")

Request body for POST

Root XML tag

<address>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addressType | String | Type of address, for example, Shipping or Billing. | Optional | 54.0 |
| city | String | The address city. | Optional | 54.0 |
| commerceAddress​FieldInput​List | Commerce Address Field Input[] | A list of custom address fields, if any. | Optional | 54.0 |
| companyName | String | The address company name. | Optional | 57.0 |
| country | String | The address country, specified using the ISO country code. For example, US for United States. | Optional | 54.0 |
| countryCode | String | Two-character country code. For example, US for United States. | Optional | 54.0–58.0 |
| firstName | String | The address first name. | Optional | 57.0 |
| isDefault | Boolean | Indicates whether a contact’s address is the preferred method of communication (true) or not (false). The default value is false. | Optional | 54.0 |
| lastName | String | The address last name. | Optional | 57.0 |
| middleName | String | The address middle name. | Optional | 57.0 |
| name | String | Name of the contact. | Required | 54.0 |
| phoneNumber | String | The phone number associated with the address, including a valid country code. For example, +1xxxxxxxxxx (for a US number). | Optional | 57.0 |
| postalCode | String | Zip code or postal code for the address. | Optional | 54.0 |
| region | String | The address state, specified using the ISO state code. For example, CA for California state. | Optional | 54.0 |
| regionCode | String | The address state code. For example, CA for California state. | Optional | 54.0–58.0 |
| street | String | The address street. | Optional | 54.0 |

Response body for POST

[Commerce Address](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_address_output.htm "Address for a Commerce account.")

## Code Examples

```
/commerce/webstores/webstoreId/accounts/accountId/addresses
```

```
{
  "addressId":"81Wxx0000000001EAA",
  "city":"Boston",
  "country":"US",
  "isDefault":true,
  "name":"Home Address",
  "postalCode":"01234",
  "region":"MA",
  "street":"1 Milk Street",
  “addressType”: “Billing”,
  "commerceAddressFieldInputList": {
                 "fields" : [ {
                            "dataName" : "options__c",
                            "text" : "alpha"
                            } ]
  }
}
```

## Related Topics

- Commerce Address Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_address_collection.htm)
- Commerce Address Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_commerce_address_field_input.htm)
- Commerce Address (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_address_output.htm)
