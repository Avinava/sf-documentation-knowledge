---
title: "LightningUriEventStream"
domain: sfFieldRef
topic: lightningurieventstream
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.332Z
estimatedTokens: 706
keywords: [LightningUriEventStream, Detects, user, creates, accesses, updates, deletes, record, Lightning, Experience, API, version, 46.0, later]
---

# LightningUriEventStream

> Detects when a user creates, accesses, updates, or deletes a record
         in Lightning Experience only. This object is available in API version 46.0 and
      later.

# LightningUriEventStream

Detects when a user creates, accesses, updates, or deletes a record in Lightning Experience only. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LightningUriEventStream in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppName | Application Name | string |  | 255 |  |  |
| ConnectionType | Connection Type | string |  | 255 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeviceId | Device ID | string |  | 255 |  |  |
| DeviceModel | Device Model | string |  | 255 |  |  |
| DevicePlatform | Device Platform | string |  | 255 |  |  |
| DeviceSessionId | Device Session ID | string |  | 255 |  |  |
| Duration | Duration | double |  |  | 18 | 0 |
| EffectivePageTime | Effective Page Time | double |  |  | 18 | 0 |
| EffectivePageTimeDeviationErrorType | Effective Page Time Deviation Error Type | string |  | 255 |  |  |
| EffectivePageTimeDeviationReason | Effective Page Time Deviation Reason | string |  | 255 |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| HasEffectivePageTimeDeviation | Has Effective Page Time Deviation | boolean |  |  |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| Operation | Operation | picklist |  | 255 |  |  |
| OsName | OS Name | string |  | 255 |  |  |
| OsVersion | OS Version | string |  | 255 |  |  |
| PageStartTime | Page Start Time | datetime |  |  |  |  |
| PageUrl | Page URL | url |  | 255 |  |  |
| PreviousPageAppName | Previous Page App Name | string |  | 255 |  |  |
| PreviousPageEntityId | Previous Page Entity ID | string |  | 18 |  |  |
| PreviousPageEntityType | Previous Page Entity Type | string |  | 255 |  |  |
| PreviousPageUrl | Previous Page URL | url |  | 255 |  |  |
| QueriedEntities | Queried Entities | string |  | 1000 |  |  |
| RecordId | Record ID | string |  | 18 |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| SdkAppType | SDK App Type | string |  | 255 |  |  |
| SdkAppVersion | SDK App Version | string |  | 255 |  |  |
| SdkVersion | SDK Version | string |  | 255 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SessionLevel | Session Level | picklist |  | 255 |  |  |
| SourceIp | Source IP | string |  | 255 |  |  |
| UserAgent | User Agent | string |  | 512 |  |  |
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
