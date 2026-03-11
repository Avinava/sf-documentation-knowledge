---
title: "ConnectApi.AbstractCheckoutAddressInput"
domain: apex-reference
topic: connectapiabstractcheckoutaddressinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.703Z
keywords: [ConnectApi.AbstractCheckoutAddressInput]
---

# ConnectApi.AbstractCheckoutAddressInput

# ConnectApi.AbstractCheckoutAddressInput

A checkout address.

This class is abstract.

Superclass of:

-   [ConnectApi.CartShippingAddressInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_shipping_address.htm "A cart shipping address.")

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | City of the address. | Optional | 53.0 |
| companyName | String | Company name of the address. | Optional | 59.0 |
| country | String | ISO code of the address country. Must match one of the valid ISO codes defined within the org’s State-Country picklist. | Required | 53.0 |
| firstName | String | First name of the contact. | Optional | 57.0 |
| id | String | ID of the address. | Required | 53.0 |
| lastName | String | Last name of the contact. | Optional | 57.0 |
| name | String | Name of the contact. | Required | 53.0 |
| postalCode | String | ZIP code of the address. | Optional | 53.0 |
| region | String | ISO code of the address region. Must match one of the valid ISO codes defined within the org’s State-Country picklist. | Optional | 53.0 |
| shipToPhoneNumber | String | Phone number of the contact. | Optional | 63.0 |
| street | String | Street of the address. | Required | 53.0 |