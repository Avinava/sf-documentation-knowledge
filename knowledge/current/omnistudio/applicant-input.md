---
title: "Applicant Input"
domain: omnistudio
topic: applicant-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.005Z
keywords: [Applicant, Input]
---

# Applicant Input

# Applicant Input

Input representation of the applicant details.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account ID of the applicant. | Optional | 61.0 |
| birthDate | String | Birth date of the applicant. | Optional | 61.0 |
| contactId | String | Contact ID of the applicant. | Optional | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the applicant. | Optional | 61.0 |
| email | String | Email address of the applicant. | Optional | 61.0 |
| firstName | String | First name of the applicant. | Optional | 61.0 |
| groupExposure | Double | Sum of all loans that an applicant has with the financial institution that they are applying for a loan. | Optional | 61.0 |
| lastName | String | last name of the applicant. | Optional | 61.0 |
| middleName | String | Middle name of the applicant. | Optional | 61.0 |
| phone | String | Applicant's phone number. | Optional | 61.0 |
| phoneType | String | Type of phone number provided by the applicant. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| role | String | Role of the applicant. | Optional | 61.0 |
| salutation | String | Salutation of the applicant. | Optional | 61.0 |
| stage | String | Stage of the application for a product that’s submitted by the applicant. | Optional | 61.0 |
| suffix | String | Suffix of the applicant. | Optional | 61.0 |
| uniqueReference​Number | String | Customer reference number of the applicant. | Optional | 61.0 |