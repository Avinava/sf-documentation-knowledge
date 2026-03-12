---
title: "Individual"
domain: sfFieldRef
topic: individual
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.963Z
estimatedTokens: 699
keywords: [Individual, customer’s, data, privacy, protection, preferences, records, store, customers’, associated, leads, contacts, person, accounts, users]
---

# Individual

> Represents a customer’s data privacy and protection preferences. Data
			privacy records based on the Individual object store your customers’ preferences. Data
			privacy records are associated with related leads, contacts, person accounts, and
			users. This object is available in API version 42.0 and later.

# Individual

Represents a customer’s data privacy and protection preferences. Data privacy records based on the Individual object store your customers’ preferences. Data privacy records are associated with related leads, contacts, person accounts, and users. This object is available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Individual](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_individual.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BirthDate | Birth Date | date |  |  |  |  |
| CanStorePiiElsewhere | OK to Store PII Data Elsewhere | boolean |  |  |  |  |
| ChildrenCount | Number of Children | int | 9 |  |  |  |
| ConsumerCreditScore | Consumer Credit Score | int | 9 |  |  |  |
| ConsumerCreditScoreProviderName | Consumer Credit Score Provider Name | string |  | 255 |  |  |
| ConvictionsCount | Conviction Count | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeathDate | Death Date | date |  |  |  |  |
| FirstName | First Name | string |  | 40 |  |  |
| HasOptedOutGeoTracking | Block Geolocation Tracking | boolean |  |  |  |  |
| HasOptedOutProcessing | Don't Process | boolean |  |  |  |  |
| HasOptedOutProfiling | Don't Profile | boolean |  |  |  |  |
| HasOptedOutSolicit | Don't Market | boolean |  |  |  |  |
| HasOptedOutTracking | Don't Track | boolean |  |  |  |  |
| Id | Individual ID | id |  | 18 |  |  |
| IndividualsAge | Individual's Age | picklist |  | 255 |  |  |
| InfluencerRating | Influencer Rating | int | 9 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHomeOwner | Is Homeowner | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 80 |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MasterRecordId | Master Record ID | reference |  | 18 |  |  |
| MilitaryService | Military Service | picklist |  | 255 |  |  |
| Name | Name | string |  | 121 |  |  |
| Occupation | Occupation | string |  | 150 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Salutation | Salutation | picklist |  | 40 |  |  |
| SendIndividualData | Export Individual's Data | boolean |  |  |  |  |
| ShouldForget | Forget this Individual | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Website | Website | url |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
