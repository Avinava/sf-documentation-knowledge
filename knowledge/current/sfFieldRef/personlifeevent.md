---
title: "PersonLifeEvent"
domain: sfFieldRef
topic: personlifeevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.180Z
estimatedTokens: 628
keywords: [PersonLifeEvent, life, events, individual, marriage, birth, child, birthday, engagement]
---

# PersonLifeEvent

> Represents the life events of an individual, such as marriage, birth of a
			child, birthday, engagement.

# PersonLifeEvent

Represents the life events of an individual, such as marriage, birth of a child, birthday, engagement.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PersonLifeEvent in the Education Cloud Developer Guide, Financial Services Cloud Developer Guide, Public Sector Solutions Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventDescription | Event Description | textarea |  | 32000 |  |  |
| EventLocation | Event Location | address |  |  |  |  |
| EventLocationCity | Event Location City | string |  | 40 |  |  |
| EventLocationCountry | Event Location Country | string |  | 80 |  |  |
| EventLocationGeocodeAccuracy | Event Location Geocode Accuracy | picklist |  | 40 |  |  |
| EventLocationLatitude | Event Location Latitude | double |  |  | 18 | 15 |
| EventLocationLongitude | Event Location Longitude | double |  |  | 18 | 15 |
| EventLocationPostalCode | Event Location Postal Code | string |  | 20 |  |  |
| EventLocationState | Event Location State | string |  | 80 |  |  |
| EventLocationStreet | Event Location Street | textarea |  | 255 |  |  |
| EventType | Event Type | picklist |  | 40 |  |  |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| ExpirationDescription | Expiration Description | textarea |  | 32000 |  |  |
| Id | Person Life Event ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsExpired | Expired | boolean |  |  |  |  |
| IsTentative | Tentative | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Event Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrimaryPersonId | Contact ID | reference |  | 18 |  |  |
| RelatedPersonId | Contact ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
