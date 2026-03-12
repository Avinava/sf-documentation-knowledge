---
title: "PlatformEventUsageMetric"
domain: sfFieldRef
topic: platformeventusagemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.405Z
estimatedTokens: 352
keywords: [PlatformEventUsageMetric, usage, data, event, publishing, delivery, CometD, Pub, Sub, API, clients, empApi, Lightning, components, relays]
---

# PlatformEventUsageMetric

> Contains usage data for event publishing and delivery to CometD and Pub/Sub API
      clients, empApi Lightning components, and event relays. If
      Enhanced Usage Metrics isn't enabled, usage data is available for the last 24 hours, ending at
      the last hour, and for historical daily usage. In API 58.0 and later, you can enable Enhanced
      Usage Metrics to get usage data by event name and client for granular time intervals.
      PlatformEventUsageMetric contains separate usage metrics for platform events and change data
      capture events. This object is available in API version 50.0 and later.

# PlatformEventUsageMetric

Contains usage data for event publishing and delivery to CometD and Pub/Sub API clients, empApi Lightning components, and event relays. If Enhanced Usage Metrics isn't enabled, usage data is available for the last 24 hours, ending at the last hour, and for historical daily usage. In API 58.0 and later, you can enable Enhanced Usage Metrics to get usage data by event name and client for granular time intervals. PlatformEventUsageMetric contains separate usage metrics for platform events and change data capture events. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PlatformEventUsageMetric](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_platformeventusagemetric.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| EndDate | End Date | datetime |  |  |  |  |
| ExternalId | External ID | string |  | 255 |  |  |
| Id | Platform Event Usage Metric ID | id |  | 18 |  |  |
| Name | Metric Name | picklist |  | 255 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| Value | Metric Value | long | 18 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
