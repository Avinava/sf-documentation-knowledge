---
title: "PlatformStatusAlertEvent"
domain: sfFieldRef
topic: platformstatusalertevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.411Z
estimatedTokens: 415
keywords: [PlatformStatusAlertEvent, event]
---

# PlatformStatusAlertEvent

> An event related to the PlatformStatusAlertEvent object.

# PlatformStatusAlertEvent

An event related to the PlatformStatusAlertEvent object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PlatformStatusAlertEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_platformstatusalertevent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiErrorCode | API Error Code | string |  | 200 |  |  |
| ComponentName | Component Name | string |  | 200 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| EventUuid | Platform Event UUID | string |  | 36 |  |  |
| ExtendedErrorCode | Extended Error Code | string |  | 200 |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| ReplayId | Replay ID For Platform Event | string |  | 1000 |  |  |
| RequestId | Jetty Request ID | string |  | 22 |  |  |
| ServiceJobId | Service Job Id | string |  | 100 |  |  |
| ServiceName | Service Name | string |  | 200 |  |  |
| StatusType | Status Type | string |  | 50 |  |  |
| SubComponentName | Sub Component Name | string |  | 200 |  |  |
| Subject | Subject | string |  | 1000 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
