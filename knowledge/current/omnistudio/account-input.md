---
title: "Account Input"
domain: omnistudio
topic: account-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.978Z
keywords: [Account, Input]
---

# Account Input

# Account Input

Input representation of an account.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account. | Required | 58.0 |
| accountNumber | String | Account number assigned to the account. | Optional | 58.0 |
| accountSite | String | Location of the account. | Optional | 58.0 |
| accountSource | String | Source of the account record. | Optional | 58.0 |
| annualRevenue | String | Estimated annual revenue of the account. | Optional | 58.0 |
| billingAddress | Address Input | Billing address of the account. | Optional | 58.0 |
| customFields | Map<String, Object> | Custom fields associated with the account. | Optional | 58.0 |
| description | String | Text description of the account. | Optional | 58.0 |
| fax | String | Fax number of the account. | Optional | 58.0 |
| industry | String | Industry associated with the account. | Optional | 58.0 |
| jigsaw | String | References the ID of a company in Data.com. | Optional | 58.0 |
| name | String | Name of the account. | Required | 58.0 |
| numberOf​Employees | String | Number of employees working at the company represented by the account. | Optional | 58.0 |
| ownerId | String | ID of the user who currently owns the account. | Optional | 58.0 |
| ownership | String | Ownership type for the account. | Optional | 58.0 |
| parentId | String | ID of the parent object, if any. | Optional | 58.0 |
| phone | String | Phone number of the account. | Optional | 58.0 |
| rating | String | Account’s prospect rating. | Optional | 58.0 |
| recordType | String | ID of the record type assigned to the object. | Optional | 58.0 |
| shipping​Address | Address Input | Shipping address of the account. | Optional | 58.0 |
| sic | String | Standard Industrial Classification (SIC) code of the company’s main business categorization. | Optional | 58.0 |
| sicDesc | String | Brief description of the org’s line of business, based on its SIC code. | Optional | 58.0 |
| ticker​Symbol | String | Stock market symbol of the account. | Optional | 58.0 |
| tier | String | Tier type of the account. | Optional | 58.0 |
| type | String | Type of account. | Optional | 58.0 |
| website | String | Website of the account. | Optional | 58.0 |