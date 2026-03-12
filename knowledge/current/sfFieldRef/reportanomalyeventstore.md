---
title: "ReportAnomalyEventStore"
domain: sfFieldRef
topic: reportanomalyeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.255Z
estimatedTokens: 438
keywords: [ReportAnomalyEventStore, Tracks, anomalies, how, users, run, export, reports, including, unsaved, stores, event, data, ReportAnomalyEvent, API]
---

# ReportAnomalyEventStore

> Tracks anomalies in how users run or export reports, including
			unsaved reports. ReportAnomalyEventStore is an object that stores the event data of
		ReportAnomalyEvent. This object is available in API version 49.0 and later.

# ReportAnomalyEventStore

Tracks anomalies in how users run or export reports, including unsaved reports. ReportAnomalyEventStore is an object that stores the event data of ReportAnomalyEvent. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ReportAnomalyEventStore in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event ID | string |  | 80 |  |  |
| Id | Report Anomaly Event Store ID | id |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| Report | Report ID | string |  | 18 |  |  |
| ReportAnomalyEventNumber | Event Name | string |  | 255 |  |  |
| Score | Score | double |  |  | 12 | 6 |
| SecurityEventData | Event Data | textarea |  | 10000 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SourceIp | Source IP Address | string |  | 255 |  |  |
| Summary | Summary | textarea |  | 1000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
