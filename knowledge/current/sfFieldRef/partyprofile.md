---
title: "PartyProfile"
domain: sfFieldRef
topic: partyprofile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:06.947Z
estimatedTokens: 1249
keywords: [PartyProfile, profile, party, account, API, version, 62.0, later]
---

# PartyProfile

> Represents information about the profile of a party, such as an
         account. This object is available in API version 62.0 and later.

# PartyProfile

Represents information about the profile of a party, such as an account. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyProfile in the Financial Services Cloud Developer Guide, Public Sector Solutions Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| BusLicIssAuthorityName | Business License Issuing Authority Name | string |  | 255 |  |  |
| BusinessEntityCtryofInc | Business Entity Country of Incorporation | picklist |  | 40 |  |  |
| BusinessEntityCtryofRgstr | Business Entity Country of Registration | picklist |  | 40 |  |  |
| BusinessEntityIncDate | Business Entity Incorporation Date | date |  |  |  |  |
| BusinessEntityIncNumber | Business Entity Incorporation Number | string |  | 255 |  |  |
| BusinessEntityPreviousNames | Business Entity Previous Names | string |  | 255 |  |  |
| BusinessEntityRgstrDate | Business Entity Registration Date | date |  |  |  |  |
| BusinessEntityRgstrNumber | Business Entity Registration Number | string |  | 255 |  |  |
| BusinessEntityTradeName | Business Entity Trade Name | string |  | 255 |  |  |
| BusinessEntityType | Business Entity Type | picklist |  | 40 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CountryOfDomicile | Domicile Country | picklist |  | 40 |  |  |
| CountryofBirth | Birth Country | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditScore | Credit Score | double |  |  | 18 | 0 |
| CreditScoreProvider | Credit Score Agency Name | picklist |  | 40 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DateOfBirth | Date of Birth | date |  |  |  |  |
| EmploymentIndustry | Employment Industry | picklist |  | 40 |  |  |
| EmploymentType | Employment Type | picklist |  | 40 |  |  |
| Ethnicity | Ethnicity | picklist |  | 40 |  |  |
| FirstName | First Name | string |  | 255 |  |  |
| FullName | Full Name | string |  | 255 |  |  |
| FundSource | Fund Source | multipicklist |  | 4099 | 0 |  |
| Gender | Gender | picklist |  | 40 |  |  |
| HouseholdAccountId | Account ID | reference |  | 18 |  |  |
| Id | Party Profile ID | id |  | 18 |  |  |
| Industry | Industry | picklist |  | 40 |  |  |
| IndustryClassificationCode | Industry Classification Code | picklist |  | 40 |  |  |
| IsBusEntyListonStockExch | BE Listed on Stock Exchange | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsNetWorthHigh | High Net Worth | boolean |  |  |  |  |
| IsOffBoarded | Off-Boarded | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 255 |  |  |
| LastProfileReviewDate | Last Profile Review Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadId | Lead ID | reference |  | 18 |  |  |
| LegalEntityIdentifier | Legal Entity Identifier | string |  | 255 |  |  |
| MiddleName | Middle Name | string |  | 255 |  |  |
| Name | Party Profile Name | string |  | 255 |  |  |
| Nationality | Nationality | picklist |  | 40 |  |  |
| NextProfileReviewDate | Next Profile Review Date | datetime |  |  |  |  |
| OffBoardingComments | Off-Boarding Comment | textarea |  | 1000 |  |  |
| OffBoardingReason | Off-Boarding Reason | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PreferredCommunicationMethod | Preferred Communication Method | picklist |  | 40 |  |  |
| Prefix | Prefix | string |  | 255 |  |  |
| PrimaryEmail | Primary Email | string |  | 255 |  |  |
| PrimaryIdentificationName | Primary Identification Name | string |  | 255 |  |  |
| PrimaryIdentifier | Primary Identifier | string |  | 255 |  |  |
| PrimaryIdentifierType | Primary Identification Type | picklist |  | 40 |  |  |
| PrimaryPhone | Primary Phone | phone |  | 40 |  |  |
| RelatedPartyProfileId | Party Profile ID | reference |  | 18 |  |  |
| ResidentType | Resident Type | picklist |  | 40 |  |  |
| ReviewDecision | Review Decision | picklist |  | 40 |  |  |
| Stage | Stage | picklist |  | 40 |  |  |
| StockExchangeName | Stock Exchange Name | multipicklist |  | 4099 | 0 |  |
| Suffix | Suffix | string |  | 255 |  |  |
| SurnameAtBirth | Birth Surname | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxpayerIdentificationNumber | Taxpayer Identification Number | string |  | 255 |  |  |
| TaxpayerIdentificationType | Taxpayer Identification Type | picklist |  | 40 |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
