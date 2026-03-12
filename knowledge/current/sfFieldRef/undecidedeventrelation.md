---
title: "UndecidedEventRelation"
domain: sfFieldRef
topic: undecidedeventrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.576Z
estimatedTokens: 332
keywords: [UndecidedEventRelation, event, participants, invitees, attendees, status, Responded, API, versions, 29.0, later]
---

# UndecidedEventRelation

> Represents event participants (invitees or attendees) with the status Not Responded for a
		given event. This object is available in API versions 29.0 and later.

# UndecidedEventRelation

Represents event participants (invitees or attendees) with the status Not Responded for a given event. This object is available in API versions 29.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UndecidedEventRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_undecidedeventrelation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventId | Event ID | reference |  | 18 |  |  |
| Id | Event Relation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| RelationId | Relation ID | reference |  | 18 |  |  |
| RespondedDate | Response Date | datetime |  |  |  |  |
| Response | Response | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | string |  | 50 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
