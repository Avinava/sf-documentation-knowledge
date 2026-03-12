---
title: "MessagingSessionMetrics"
domain: sfFieldRef
topic: messagingsessionmetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.259Z
estimatedTokens: 359
keywords: [MessagingSessionMetrics, metric, gathered, specific, enhanced, messaging, session, average, agent, time, starting, October, API, version, 62.0]
---

# MessagingSessionMetrics

> Represents a metric gathered about a specific enhanced messaging session,
         such as average agent response time. This object is available starting in October 2024
      in API version 62.0 and later.

# MessagingSessionMetrics

Represents a metric gathered about a specific enhanced messaging session, such as average agent response time. This object is available starting in October 2024 in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MessagingSessionMetrics](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingsessionmetrics.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Messaging Session Metrics ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MessagingSessionId | Messaging Session ID | reference |  | 18 |  |  |
| MessagingSessionMetricType | Messaging Session Metric Type | picklist |  | 255 |  |  |
| MessagingSessionMetricValue | Messaging Session Metric Value | int | 9 |  |  |  |
| Name | Messaging Session Metrics Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
