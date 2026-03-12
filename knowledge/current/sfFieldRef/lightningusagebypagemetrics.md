---
title: "LightningUsageByPageMetrics"
domain: sfFieldRef
topic: lightningusagebypagemetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.360Z
estimatedTokens: 498
keywords: [LightningUsageByPageMetrics, standard, pages, users, viewed, frequently, Lightning, Experience, API, version, 43.0, later]
---

# LightningUsageByPageMetrics

> Represents standard pages users viewed most frequently in Lightning
			Experience. This object is available in API version 43.0 and later.

# LightningUsageByPageMetrics

Represents standard pages users viewed most frequently in Lightning Experience. This object is available in API version 43.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LightningUsageByPageMetrics](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lightningusagebypagemetrics.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CoresBin2To4 | CoresBin2To4 | int | 9 |  |  |  |
| CoresBin4To8 | CoresBin4To8 | int | 9 |  |  |  |
| CoresBinOver8 | CoresBinOver8 | int | 9 |  |  |  |
| CoresBinUnder2 | CoresBinUnder2 | int | 9 |  |  |  |
| DownlinkBin3To5 | DownlinkBin3To5 | int | 9 |  |  |  |
| DownlinkBin5To8 | DownlinkBin5To8 | int | 9 |  |  |  |
| DownlinkBin8To10 | DownlinkBin8To10 | int | 9 |  |  |  |
| DownlinkBinOver10 | DownlinkBinOver10 | int | 9 |  |  |  |
| DownlinkBinUnder3 | DownlinkBinUnder3 | int | 9 |  |  |  |
| EptBin3To5 | EptBin3To5 | int | 9 |  |  |  |
| EptBin5To8 | EptBin5To8 | int | 9 |  |  |  |
| EptBin8To10 | EptBin8To10 | int | 9 |  |  |  |
| EptBinOver10 | EptBinOver10 | int | 9 |  |  |  |
| EptBinUnder3 | EptBinUnder3 | int | 9 |  |  |  |
| Id | Lightning Usage By Page Metrics ID | id |  | 18 |  |  |
| MetricsDate | Metrics Date | date |  |  |  |  |
| PageName | Page Name | string |  | 40 |  |  |
| RecordCountEPT | Record Count EPT | int | 9 |  |  |  |
| RttBin50To150 | RttBin50To150 | int | 9 |  |  |  |
| RttBinOver150 | RttBinOver150 | int | 9 |  |  |  |
| RttBinUnder50 | RttBinUnder50 | int | 9 |  |  |  |
| SumEPT | Sum EPT | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCount | Total Count | int | 9 |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
