---
title: "Checkout Address"
domain: chatterapi
topic: checkout-address
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.663Z
estimatedTokens: 303
keywords: [Checkout, Address, Contact, Commerce, store]
---

# Checkout Address

> Contact address for a Commerce store checkout.

# Checkout Address

Contact address for a Commerce store checkout.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| city | String | City of the address. | Small, 55.0 | 55.0 |
| country | String | ISO code of the address country. Must match one of the valid ISO codes defined within the org’s State-Country picklist. | Small, 55.0 | 55.0 |
| firstName | String | First name of the contact. | Small, 57.0 | 57.0 |
| id | String | ID of the address. | Small, 55.0 | 55.0 |
| is​Default | Boolean | Indicates if the address is the contact's default address (true) or not (false). Default value is false. | Small, 55.0 | 55.0 |
| lastName | String | Last name of the contact. | Small, 57.0 | 57.0 |
| name | String | Name of the contact. | Small, 55.0 | 55.0 |
| postal​Code | String | ZIP code of the address. | Small, 55.0 | 55.0 |
| region | String | ISO code of the address region. Must match one of the valid ISO codes defined within the org’s State-Country picklist. | Small, 55.0 | 55.0 |
| shipToPhoneNumber | String | Phone number of the contact. | Small, 63.0 | 63.0 |
| street | String | Street of the address. | Small, 55.0 | 55.0 |
