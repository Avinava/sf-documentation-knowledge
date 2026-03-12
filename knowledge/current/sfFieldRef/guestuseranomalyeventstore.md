---
title: "GuestUserAnomalyEventStore"
domain: sfFieldRef
topic: guestuseranomalyeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.013Z
estimatedTokens: 516
keywords: [GuestUserAnomalyEventStore, Tracks, data, access, anomalies, caused, guest, user, permission, misconfiguration, stores, event, GuestUserAnomalyEvent, API, version]
---

# GuestUserAnomalyEventStore

> Tracks data access anomalies that are caused by guest user permission
         misconfiguration. GuestUserAnomalyEventStore is an object that stores the event data of
         GuestUserAnomalyEvent. This object is available in API version 60.0 and
      later.

# GuestUserAnomalyEventStore

Tracks data access anomalies that are caused by guest user permission misconfiguration. GuestUserAnomalyEventStore is an object that stores the event data of GuestUserAnomalyEvent. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GuestUserAnomalyEventStore in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event ID | string |  | 80 |  |  |
| GuestUserAnomalyEventNumber | Event Name | string |  | 255 |  |  |
| Id | Guest User Anomaly Event Store ID | id |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| RequestedEntities | Requested Entities | textarea |  | 131000 |  |  |
| Score | Score | double |  |  | 12 | 6 |
| SecurityEventData | Security Event Data | textarea |  | 131000 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SoqlCommands | SOQL Commands | textarea |  | 131000 |  |  |
| SourceIp | Source IP Address | string |  | 255 |  |  |
| Summary | Summary | textarea |  | 1000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalControllerEvents | Total Controller Events | int | 9 |  |  |  |
| UserAgent | Current User Agent | string |  | 1000 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| UserType | Current User Type | string |  | 255 |  |  |
| Username | Username | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
