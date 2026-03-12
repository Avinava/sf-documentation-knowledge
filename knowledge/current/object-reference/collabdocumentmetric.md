---
title: "CollabDocumentMetric"
domain: object-reference
topic: collabdocumentmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.551Z
estimatedTokens: 517
keywords: [CollabDocumentMetric, engagement, metrics, Quip, thread, document, spreadsheet, that’s, linked, Salesforce, record, API, version, 50.0, later]
---

# CollabDocumentMetric

> Represents the engagement metrics for a Quip thread (document or
         spreadsheet) that’s linked to a Salesforce record. This object is available in API
      version 50.0 and later.

# CollabDocumentMetric

Represents the engagement metrics for a Quip thread (document or spreadsheet) that’s linked to a Salesforce record. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Document | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe Quip thread ID. |
| Site | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Quip site in which the thread is located. |
| SourceTemplate | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the template (if any) on which a Quip thread is based. |
| DocumentTitle | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe title of the thread. |
| MetricDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in your local time zone. |
| MetricDateOnly | TypedatePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in UTC. Available in API version 55.0 and later. |
| LastUpdatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the thread was created, last edited, or last shared in your local time zone. |
| LastUpdatedDateOnly | TypedatePropertiesFilter, Nillable, SortDescriptionThe date that the thread was created, last edited, or last shared in UTC. Available in API version 55.0 and later. |
| ViewerCount | TypeintPropertiesFilter, Nillable, SortDescriptionThe number of thread views by user for the specified MetricDate. |
| UpdateCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of edits made on the thread on a given day. |
| EditorCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionFor the specified MetricDate, the number of users who edited the Quip thread. |
| CommenterCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionFor the specified MetricDate, the number of users who commented on the Quip thread. |
