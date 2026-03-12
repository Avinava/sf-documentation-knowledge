---
title: "CollabDocumentMetricRecord"
domain: object-reference
topic: collabdocumentmetricrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.555Z
estimatedTokens: 292
keywords: [CollabDocumentMetricRecord, association, CollabDocumentMetric, Salesforce, record.It, tracks, record, Account, Contact, linked, Quip, thread, metrics, were, gathered]
---

# CollabDocumentMetricRecord

> Represents an association between a CollabDocumentMetric and a
         Salesforce record.It tracks which Salesforce record, such as an Account or Contact, is
      linked to a Quip thread for which metrics were gathered using CollabDocumentMetric.
      CollabDocumentMetricRecord is available in API version 50.0 and later.

# CollabDocumentMetricRecord

Represents an association between a CollabDocumentMetric and a Salesforce record.It tracks which Salesforce record, such as an Account or Contact, is linked to a Quip thread for which metrics were gathered using CollabDocumentMetric. CollabDocumentMetricRecord is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ParentRecord | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Salesforce record. |
| QuipDocumentMetric | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the CollabDocumentMetric record. |
| MetricDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in your local time zone. |
| MetricDateOnly | TypedatePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in UTC. Available in API version 55.0 and later. |
| EntityType | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe object type of the Salesforce record, such as Account or Contact. |
