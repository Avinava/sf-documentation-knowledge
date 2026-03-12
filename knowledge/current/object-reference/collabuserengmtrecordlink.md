---
title: "CollabUserEngmtRecordLink"
domain: object-reference
topic: collabuserengmtrecordlink
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.623Z
estimatedTokens: 398
keywords: [CollabUserEngmtRecordLink, association, CollabUserEngagementMetric, Salesforce, record, tracks, Account, Contact, associated, user, engagement, metric, API, version, 50.0]
---

# CollabUserEngmtRecordLink

> Represents an association between a CollabUserEngagementMetric and a Salesforce
      record. It tracks which Salesforce record, such as an Account or Contact, is associated
    with the user engagement metric. This object is available in API version 50.0 and
    later.

# CollabUserEngmtRecordLink

Represents an association between a CollabUserEngagementMetric and a Salesforce record. It tracks which Salesforce record, such as an Account or Contact, is associated with the user engagement metric. This object is available in API version 50.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The CollabUserEngmtRecordLink object is now deprecated. You can still access user engagement metrics for metric dates before August 12, 2021. To obtain user engagement metric for dates starting from August 12, 2021, follow the instructions in the [Quip Engagement Metrics documentation](https://help.salesforce.com/articleView?id=xcloud.quip_template_metrics.htm&type=5&language=en_US).

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| MetricDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date of the gathered metric. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique name of the CollabUserEngmtRecordLink object. |
| ObjectType | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe object type of the Salesforce record, such as Account or Contact. |
| ParentRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Salesforce record. |
| UserEngagementMetricId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the CollabUserEngagementMetric record. |

## Related Topics

- CollabUserEngagementMetric (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collabuserengagementmetric.htm)
