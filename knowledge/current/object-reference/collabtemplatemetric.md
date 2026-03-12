---
title: "CollabTemplateMetric"
domain: object-reference
topic: collabtemplatemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.610Z
estimatedTokens: 591
keywords: [CollabTemplateMetric, engagement, metrics, Quip, template.This, API, version, 50.0, later, Calls, Associated, Objects]
---

# CollabTemplateMetric

> Represents the engagement metrics for a Quip template.This
      object is available in API version 50.0 and later.

# CollabTemplateMetric

Represents the engagement metrics for a Quip template.This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Template | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the template. |
| TemplateTitle | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe title of the template. |
| Site | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Quip site on which the template is available. |
| MetricDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in your local time zone. |
| MetricDateOnly | TypedatePropertiesFilter, Nillable, SortDescriptionThe date that the metric was gathered in UTC. Available in API version 55.0 and later. |
| LastUpdatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the thread was created, last edited, or last shared in your local time zone. |
| LastUpdatedDateOnly | TypedatePropertiesFilter, Nillable, SortDescriptionThe date that the thread was created, last edited, or last shared in UTC. Available in API version 55.0 and later. |
| TotalDocumentCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of documents created based on the template. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CollabTemplateMetricChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- CollabTemplateMetricChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
