---
title: "Application Form Account Input"
domain: omnistudio
topic: application-form-account-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.016Z
keywords: [Application, Form, Account, Input]
---

# Application Form Account Input

# Application Form Account Input

Input representation of the account related to the application form.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountNumber | String | Account number assigned to the account. | Optional | 61.0 |
| accountSite | String | Name of the account’s location. | Optional | 61.0 |
| accountSource | String | Source of the account record. | Optional | 61.0 |
| annualRevenue | Integer | Estimated annual revenue of the account. | Optional | 61.0 |
| billingAddress | Address Input | Compound form of the billing address. | Optional | 61.0 |
| currencyIsoCode | String | Currency ISO code details. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the application form account. | Optional | 61.0 |
| description | String | Text description of the account. | Optional | 61.0 |
| fax | String | Fax number for the account. | Optional | 61.0 |
| firstName | String | First name of the account. | Optional | 61.0 |
| industry | String | Industry associated with the account. | Optional | 61.0 |
| jigsaw | String | References the ID of a company in Data.com. | Optional | 61.0 |
| lastName | String | Last name of the account. | Required if Person Account is enabled. | 61.0 |
| middleName | String | Middle name of the account. | Optional | 61.0 |
| name | String | Name of the account. | Required | 61.0 |
| numberOf​Employees | Integer | Number of employees working at the company represented by this account. | Optional | 61.0 |
| ownerId | String | ID of the user who currently owns this account. | Optional | 61.0 |
| ownership | String | Ownership type for the account. | Optional | 61.0 |
| parentId | String | ID of the parent object, if any. | Optional | 61.0 |
| personBirthDate | String | Birth date of the account. | Optional | 61.0 |
| personContactId | String | Contact ID of the account. | Optional | 61.0 |
| personEmail | String | Email address of the applicant. | Optional | 61.0 |
| personGender​Identity | String | Gender identity of the account. | Optional | 61.0 |
| personHome​Phone | String | Home phone number of the account. | Optional | 61.0 |
| personMailing​Address | Address Input | Mailing address of the account. | Optional | 61.0 |
| personMobile​Phone | String | Mobile phone number of the account. | Optional | 61.0 |
| personOther​Address | Address Input | Other address of the account. | Optional | 61.0 |
| personOther​Phone | String | Other phone number of the account. | Optional | 61.0 |
| phone | String | Phone number for the account. | Optional | 61.0 |
| rating | String | Account’s prospect rating. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to the object. | Optional | 61.0 |
| salutation | String | Salutation of the account. | Optional | 61.0 |
| shippingAddress | Address Input | Compound form of the shipping address. | Optional | 61.0 |
| sic | String | Standard Industrial Classification code of the company’s main business categorization. | Optional | 61.0 |
| sicDesc | String | A brief description of the line of business, based on its SIC code. | Optional | 61.0 |
| suffix | String | Suffix of the account. | Optional | 61.0 |
| tickerSymbol | String | Stock market symbol for the account. | Optional | 61.0 |
| type | String | Type of account. | Optional | 61.0 |
| website | String | Website of the account. | Optional | 61.0 |