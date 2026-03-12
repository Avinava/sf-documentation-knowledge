---
title: "TrackedCommunication"
domain: sfFieldRef
topic: trackedcommunication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.443Z
estimatedTokens: 428
keywords: [TrackedCommunication, Stores, communication, sent, payer, provider, member’s, authorization]
---

# TrackedCommunication

> Stores information request or communication details sent from payer to
         provider on a member’s authorization request.

# TrackedCommunication

Stores information request or communication details sent from payer to provider on a member’s authorization request.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see TrackedCommunication in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CommunicatorReferenceId | Communicator Reference ID | reference |  | 18 |  |  |
| ContextReferenceId | Context Reference ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Tracked Communication ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OccurrenceEndDateTime | Occurrence End Date | datetime |  |  |  |  |
| OccurrenceStartDateTime | Occurrence Start Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| RequesterReferenceId | Requester Reference ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusReason | Status Reason | picklist |  | 40 |  |  |
| SubjectId | Subject ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
