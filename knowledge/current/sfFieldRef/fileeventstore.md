---
title: "FileEventStore"
domain: sfFieldRef
topic: fileeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.971Z
estimatedTokens: 546
keywords: [FileEventStore, Tracks, user, downloads, previews, uploads, file, big, stores, event, data, FileEvent, API, version, 57.0]
---

# FileEventStore

> Tracks when a user downloads, previews, or uploads a file.
         FileEventStore is a big object that stores the event data of FileEvent. This object is
         available in API version 57.0 and later.

# FileEventStore

Tracks when a user downloads, previews, or uploads a file. FileEventStore is a big object that stores the event data of FileEvent. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FileEventStore in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CanDownloadPdf | Can Download PDF | boolean |  |  |  |  |
| ContentSize | Content Size | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DocumentId | Content Document ID | reference |  | 18 |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| FileAction | File Action | string |  | 20 |  |  |
| FileName | File Name | string |  | 10000 |  |  |
| FileSource | File Source | string |  | 10000 |  |  |
| FileType | File Type | string |  | 10000 |  |  |
| Id | File Event Store ID | id |  | 18 |  |  |
| IsLatestVersion | Is Latest Version | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| ProcessDuration | Process Duration | double |  |  | 18 | 0 |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SessionLevel | Session Level | picklist |  | 255 |  |  |
| SourceIp | Source IP | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 255 |  |  |
| VersionId | Content Version ID | reference |  | 18 |  |  |
| VersionNumber | Version Number | string |  | 10000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
