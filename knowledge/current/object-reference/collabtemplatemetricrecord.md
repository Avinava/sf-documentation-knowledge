---
title: "CollabTemplateMetricRecord"
domain: object-reference
topic: collabtemplatemetricrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.396Z
estimatedTokens: 292
keywords: [CollabTemplateMetricRecord, association, CollabTemplateMetric, Salesforce, record.It, tracks, record, Account, Contact, linked, Quip, template, metrics, were, gathered]
---

# CollabTemplateMetricRecord

> Represents an association between a CollabTemplateMetric and a
         Salesforce record.It tracks which Salesforce record, such as an Account or Contact, is
      linked to a Quip template for which metrics were gathered using CollabTemplateMetric.
      CollabTemplateMetricRecord is available in API version 50.0 and later.

# CollabTemplateMetricRecord

Represents an association between a CollabTemplateMetric and a Salesforce record.It tracks which Salesforce record, such as an Account or Contact, is linked to a Quip template for which metrics were gathered using CollabTemplateMetric. CollabTemplateMetricRecord is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ParentRecord | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Salesforce record. |
| QuipDocumentMetric | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the CollabTemplateMetric record. |
| MetricDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in your local time zone. |
| MetricDateOnly | TypedatePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in UTC. Available in API version 55.0 and later. |
| EntityType | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe object type of the Salesforce record, such as Account or Contact. |
