---
title: "UriEvent"
domain: sfFieldRef
topic: urievent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.683Z
estimatedTokens: 398
keywords: [UriEvent, Detects, user, creates, accesses, updates, deletes, record, Salesforce, Classic, Doesn't, detect, operations, Visualforce, views]
---

# UriEvent

> Detects when a user creates, accesses, updates, or deletes a record
			in Salesforce Classic only. Doesn't detect record operations done through a Visualforce
			page or Visualforce page views. UriEvent and is a big object that stores the event
		data of UriEventStream. This object is available in API version 46.0 and later.

# UriEvent

Detects when a user creates, accesses, updates, or deletes a record in Salesforce Classic only. Doesn't detect record operations done through a Visualforce page or Visualforce page views. UriEvent and is a big object that stores the event data of UriEventStream. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see UriEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| Id | URI Event ID | id |  | 18 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| Message | Message | string |  | 10000 |  |  |
| Name | Name | string |  | 255 |  |  |
| Operation | Operation | picklist |  | 255 |  |  |
| OperationStatus | Operation Status | picklist |  | 255 |  |  |
| QueriedEntities | Queried Entities | string |  | 1000 |  |  |
| RecordId | Record ID | reference |  | 18 |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SessionLevel | Session Level | picklist |  | 255 |  |  |
| SourceIp | Source IP | string |  | 255 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| UserType | User Type | picklist |  | 255 |  |  |
| Username | Username | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
