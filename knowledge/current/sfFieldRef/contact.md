---
title: "Contact"
domain: sfFieldRef
topic: contact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.784Z
estimatedTokens: 1196
keywords: [Contact, person, associated, account]
---

# Contact

> Represents a contact, which is a person associated with an
			account.

# Contact

Represents a contact, which is a person associated with an account.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivityMetricId | Activity Metric ID | reference |  | 18 |  |  |
| ActivityMetricRollupId | Activity Metric Rollup ID | reference |  | 18 |  |  |
| AssistantName | Assistant's Name | string |  | 40 |  |  |
| AssistantPhone | Asst. Phone | phone |  | 40 |  |  |
| Birthdate | Birthdate | date |  |  |  |  |
| BuyerAttributes | Buyer Attributes | multipicklist |  | 4099 | 0 |  |
| CleanStatus | Clean Status | picklist |  | 40 |  |  |
| ContactSource | Creation Source | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Contact Currency | picklist |  | 3 |  |  |
| Department | Department | string |  | 80 |  |  |
| DepartmentGroup | Department Group | picklist |  | 40 |  |  |
| Description | Contact Description | textarea |  | 32000 |  |  |
| Email | Email | email |  | 80 |  |  |
| EmailBouncedDate | Email Bounced Date | datetime |  |  |  |  |
| EmailBouncedReason | Email Bounced Reason | string |  | 255 |  |  |
| Fax | Business Fax | phone |  | 40 |  |  |
| FirstName | First Name | string |  | 40 |  |  |
| GenderIdentity | Gender Identity | picklist |  | 255 |  |  |
| HomePhone | Home Phone | phone |  | 40 |  |  |
| Id | Contact ID | id |  | 18 |  |  |
| IndividualId | Individual ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEmailBounced | Is Email Bounced | boolean |  |  |  |  |
| IsPersonAccount | Is Person Account | boolean |  |  |  |  |
| IsPriorityRecord | Important | boolean |  |  |  |  |
| Jigsaw | Data.com Key | string |  | 20 |  |  |
| JigsawContactId | Jigsaw Contact ID | string |  | 20 |  |  |
| Languages__c | Languages | string |  | 100 |  |  |
| LastActivityDate | Last Activity | date |  |  |  |  |
| LastCURequestDate | Last Stay-in-Touch Request Date | datetime |  |  |  |  |
| LastCUUpdateDate | Last Stay-in-Touch Save Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 80 |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadSource | Lead Source | picklist |  | 255 |  |  |
| Level__c | Level | picklist |  | 255 |  |  |
| MailingAddress | Mailing Address | address |  |  |  |  |
| MailingCity | Mailing City | string |  | 40 |  |  |
| MailingCountry | Mailing Country | string |  | 80 |  |  |
| MailingGeocodeAccuracy | Mailing Geocode Accuracy | picklist |  | 40 |  |  |
| MailingLatitude | Mailing Latitude | double |  |  | 18 | 15 |
| MailingLongitude | Mailing Longitude | double |  |  | 18 | 15 |
| MailingPostalCode | Mailing Zip/Postal Code | string |  | 20 |  |  |
| MailingState | Mailing State/Province | string |  | 80 |  |  |
| MailingStreet | Mailing Street | textarea |  | 255 |  |  |
| MasterRecordId | Master Record ID | reference |  | 18 |  |  |
| MobilePhone | Mobile Phone | phone |  | 40 |  |  |
| Name | Full Name | string |  | 121 |  |  |
| OtherAddress | Other Address | address |  |  |  |  |
| OtherCity | Other City | string |  | 40 |  |  |
| OtherCountry | Other Country | string |  | 80 |  |  |
| OtherGeocodeAccuracy | Other Geocode Accuracy | picklist |  | 40 |  |  |
| OtherLatitude | Other Latitude | double |  |  | 18 | 15 |
| OtherLongitude | Other Longitude | double |  |  | 18 | 15 |
| OtherPhone | Other Phone | phone |  | 40 |  |  |
| OtherPostalCode | Other Zip/Postal Code | string |  | 20 |  |  |
| OtherState | Other State/Province | string |  | 80 |  |  |
| OtherStreet | Other Street | textarea |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Phone | Business Phone | phone |  | 40 |  |  |
| PhotoUrl | Photo URL | url |  | 255 |  |  |
| Pronouns | Pronouns | picklist |  | 255 |  |  |
| ReportsToId | Reports To ID | reference |  | 18 |  |  |
| Salutation | Salutation | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 128 |  |  |
| TitleType | Seniority Level | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
