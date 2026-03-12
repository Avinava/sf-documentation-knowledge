---
title: "Account"
domain: sfFieldRef
topic: account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.840Z
estimatedTokens: 1960
keywords: [Account, individual, organization, person, involved, business, customers, competitors, partners]
---

# Account

> Represents an individual account, which is an organization or person
			involved with your business (such as customers, competitors, and
		partners).

# Account

Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners).

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") in the Consumer Goods Cloud Developer Guide, Design Registration Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountNumber | Account Number | string |  | 40 |  |  |
| AccountSource | Account Source | picklist |  | 255 |  |  |
| Active__c | Active | picklist |  | 255 |  |  |
| ActivityMetricId | Activity Metric ID | reference |  | 18 |  |  |
| ActivityMetricRollupId | Activity Metric Rollup ID | reference |  | 18 |  |  |
| AnnualRevenue | Annual Revenue | currency |  |  | 18 | 0 |
| BillingAddress | Billing Address | address |  |  |  |  |
| BillingCity | Billing City | string |  | 40 |  |  |
| BillingCountry | Billing Country | string |  | 80 |  |  |
| BillingGeocodeAccuracy | Billing Geocode Accuracy | picklist |  | 40 |  |  |
| BillingLatitude | Billing Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Billing Longitude | double |  |  | 18 | 15 |
| BillingPostalCode | Billing Zip/Postal Code | string |  | 20 |  |  |
| BillingState | Billing State/Province | string |  | 80 |  |  |
| BillingStreet | Billing Street | textarea |  | 255 |  |  |
| CleanStatus | Clean Status | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Account Currency | picklist |  | 3 |  |  |
| CustomerPriority__c | Customer Priority | picklist |  | 255 |  |  |
| DandbCompanyId | D&B Company ID | reference |  | 18 |  |  |
| Description | Account Description | textarea |  | 32000 |  |  |
| DunsNumber | D-U-N-S Number | string |  | 9 |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| Fax | Account Fax | phone |  | 40 |  |  |
| FirstName | First Name | string |  | 40 |  |  |
| Id | Account ID | id |  | 18 |  |  |
| Industry | Industry | picklist |  | 255 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsCustomerPortal | Customer Portal Account | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPartner | Partner Account | boolean |  |  |  |  |
| IsPersonAccount | Is Person Account | boolean |  |  |  |  |
| Jigsaw | Data.com Key | string |  | 20 |  |  |
| JigsawCompanyId | Jigsaw Company ID | string |  | 20 |  |  |
| LastActivityDate | Last Activity | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 80 |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MasterRecordId | Master Record ID | reference |  | 18 |  |  |
| NaicsCode | NAICS Code | string |  | 8 |  |  |
| NaicsDesc | NAICS Description | string |  | 120 |  |  |
| Name | Account Name | string |  | 255 |  |  |
| NumberOfEmployees | Employees | int | 8 |  |  |  |
| NumberofLocations__c | Number of Locations | double |  |  | 3 | 0 |
| OperatingHoursId | Operating Hour ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Ownership | Ownership | picklist |  | 255 |  |  |
| ParentId | Parent Account ID | reference |  | 18 |  |  |
| PersonAssistantName | Assistant | string |  | 40 |  |  |
| PersonAssistantPhone | Asst. Phone | phone |  | 40 |  |  |
| PersonBirthdate | Birthdate | date |  |  |  |  |
| PersonContactId | Contact ID | reference |  | 18 |  |  |
| PersonDepartment | Department | string |  | 80 |  |  |
| PersonEmail | Email | email |  | 80 |  |  |
| PersonEmailBouncedDate | Email Bounced Date | datetime |  |  |  |  |
| PersonEmailBouncedReason | Email Bounced Reason | string |  | 255 |  |  |
| PersonGender | Gender | picklist |  | 255 |  |  |
| PersonGenderIdentity | Gender Identity | picklist |  | 255 |  |  |
| PersonHomePhone | Home Phone | phone |  | 40 |  |  |
| PersonIndividualId | Individual ID | reference |  | 18 |  |  |
| PersonLastCURequestDate | Last Stay-in-Touch Request Date | datetime |  |  |  |  |
| PersonLastCUUpdateDate | Last Stay-in-Touch Save Date | datetime |  |  |  |  |
| PersonLeadSource | Lead Source | picklist |  | 255 |  |  |
| PersonMailingAddress | Mailing Address | address |  |  |  |  |
| PersonMailingCity | Mailing City | string |  | 40 |  |  |
| PersonMailingCountry | Mailing Country | string |  | 80 |  |  |
| PersonMailingGeocodeAccuracy | Mailing Geocode Accuracy | picklist |  | 40 |  |  |
| PersonMailingLatitude | Mailing Latitude | double |  |  | 18 | 15 |
| PersonMailingLongitude | Mailing Longitude | double |  |  | 18 | 15 |
| PersonMailingPostalCode | Mailing Zip/Postal Code | string |  | 20 |  |  |
| PersonMailingState | Mailing State/Province | string |  | 80 |  |  |
| PersonMailingStreet | Mailing Street | textarea |  | 255 |  |  |
| PersonMobilePhone | Mobile | phone |  | 40 |  |  |
| PersonOtherAddress | Other Address | address |  |  |  |  |
| PersonOtherCity | Other City | string |  | 40 |  |  |
| PersonOtherCountry | Other Country | string |  | 80 |  |  |
| PersonOtherGeocodeAccuracy | Other Geocode Accuracy | picklist |  | 40 |  |  |
| PersonOtherLatitude | Other Latitude | double |  |  | 18 | 15 |
| PersonOtherLongitude | Other Longitude | double |  |  | 18 | 15 |
| PersonOtherPhone | Other Phone | phone |  | 40 |  |  |
| PersonOtherPostalCode | Other Zip/Postal Code | string |  | 20 |  |  |
| PersonOtherState | Other State/Province | string |  | 80 |  |  |
| PersonOtherStreet | Other Street | textarea |  | 255 |  |  |
| PersonPronouns | Pronouns | picklist |  | 255 |  |  |
| PersonTitle | Title | string |  | 80 |  |  |
| Phone | Account Phone | phone |  | 40 |  |  |
| PhotoUrl | Photo URL | url |  | 255 |  |  |
| Rating | Account Rating | picklist |  | 255 |  |  |
| RecordTypeId | Record Type ID | reference |  | 18 |  |  |
| SLAExpirationDate__c | SLA Expiration Date | date |  |  |  |  |
| SLASerialNumber__c | SLA Serial Number | string |  | 10 |  |  |
| SLA__c | SLA | picklist |  | 255 |  |  |
| Salutation | Salutation | picklist |  | 40 |  |  |
| ShippingAddress | Shipping Address | address |  |  |  |  |
| ShippingCity | Shipping City | string |  | 40 |  |  |
| ShippingCountry | Shipping Country | string |  | 80 |  |  |
| ShippingGeocodeAccuracy | Shipping Geocode Accuracy | picklist |  | 40 |  |  |
| ShippingLatitude | Shipping Latitude | double |  |  | 18 | 15 |
| ShippingLongitude | Shipping Longitude | double |  |  | 18 | 15 |
| ShippingPostalCode | Shipping Zip/Postal Code | string |  | 20 |  |  |
| ShippingState | Shipping State/Province | string |  | 80 |  |  |
| ShippingStreet | Shipping Street | textarea |  | 255 |  |  |
| Sic | SIC Code | string |  | 20 |  |  |
| SicDesc | SIC Description | string |  | 80 |  |  |
| Site | Account Site | string |  | 80 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 85 |  |  |
| SourceSystemModifiedDate | Source System Modified | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TickerSymbol | Ticker Symbol | string |  | 20 |  |  |
| Tradestyle | Tradestyle | string |  | 255 |  |  |
| Type | Account Type | picklist |  | 255 |  |  |
| UpsellOpportunity__c | Upsell Opportunity | picklist |  | 255 |  |  |
| Website | Website | url |  | 255 |  |  |
| YearStarted | Year Started | string |  | 4 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
