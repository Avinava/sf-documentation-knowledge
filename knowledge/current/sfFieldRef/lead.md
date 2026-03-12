---
title: "Lead"
domain: sfFieldRef
topic: lead
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.154Z
estimatedTokens: 1034
keywords: [Lead, prospect]
---

# Lead

> Represents a prospect or lead.

# Lead

Represents a prospect or lead.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)") in the Design Registration Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityMetricId | Activity Metric ID | reference |  | 18 |  |  |
| ActivityMetricRollupId | Activity Metric Rollup ID | reference |  | 18 |  |  |
| Address | Address | address |  |  |  |  |
| AnnualRevenue | Annual Revenue | currency |  |  | 18 | 0 |
| City | City | string |  | 40 |  |  |
| CleanStatus | Clean Status | picklist |  | 40 |  |  |
| Company | Company | string |  | 255 |  |  |
| CompanyDunsNumber | Company D-U-N-S Number | string |  | 9 |  |  |
| ConvertedAccountId | Converted Account ID | reference |  | 18 |  |  |
| ConvertedContactId | Converted Contact ID | reference |  | 18 |  |  |
| ConvertedDate | Converted Date | date |  |  |  |  |
| ConvertedOpportunityId | Converted Opportunity ID | reference |  | 18 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Lead Currency | picklist |  | 3 |  |  |
| CurrentGenerators__c | Current Generator(s) | string |  | 100 |  |  |
| DandbCompanyId | D&B Company ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Email | Email | email |  | 80 |  |  |
| EmailBouncedDate | Email Bounced Date | datetime |  |  |  |  |
| EmailBouncedReason | Email Bounced Reason | string |  | 255 |  |  |
| Fax | Fax | phone |  | 40 |  |  |
| FirstName | First Name | string |  | 40 |  |  |
| GenderIdentity | Gender Identity | picklist |  | 255 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| Id | Lead ID | id |  | 18 |  |  |
| IndividualId | Individual ID | reference |  | 18 |  |  |
| Industry | Industry | picklist |  | 255 |  |  |
| IsConverted | Converted | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPriorityRecord | Important | boolean |  |  |  |  |
| IsUnreadByOwner | Unread By Owner | boolean |  |  |  |  |
| Jigsaw | Data.com Key | string |  | 20 |  |  |
| JigsawContactId | Jigsaw Contact ID | string |  | 20 |  |  |
| LastActivityDate | Last Activity | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 80 |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| LeadSource | Lead Source | picklist |  | 255 |  |  |
| Longitude | Longitude | double |  |  | 18 | 15 |
| MasterRecordId | Master Record ID | reference |  | 18 |  |  |
| MobilePhone | Mobile Phone | phone |  | 40 |  |  |
| Name | Full Name | string |  | 121 |  |  |
| NumberOfEmployees | Employees | int | 8 |  |  |  |
| NumberofLocations__c | Number of Locations | double |  |  | 3 | 0 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| PhotoUrl | Photo URL | url |  | 255 |  |  |
| PostalCode | Zip/Postal Code | string |  | 20 |  |  |
| Primary__c | Primary | picklist |  | 255 |  |  |
| ProductInterest__c | Product Interest | picklist |  | 255 |  |  |
| Pronouns | Pronouns | picklist |  | 255 |  |  |
| Rating | Rating | picklist |  | 255 |  |  |
| SICCode__c | SIC Code | string |  | 15 |  |  |
| Salutation | Salutation | picklist |  | 40 |  |  |
| State | State/Province | string |  | 80 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 128 |  |  |
| Website | Website | url |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
