---
title: "MetricDataLink"
domain: object-reference
topic: metricdatalink
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.905Z
estimatedTokens: 528
keywords: [MetricDataLink, link, metric, data, source, report, Calls, Associated, Objects]
---

# MetricDataLink

> The link between the metric and the data source, such as a
			report.

# MetricDataLink

The link between the metric and the data source, such as a report.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| DatasourceFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe field name of the data source, such as a report summary field. |
| DataSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the data source. |
| LastSynchronizationTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last time the data was synchronized. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe name given to the data link record. |
| TargetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the metric that the data is linked to. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[MetricDataLinkHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Related Topics

- MetricDataLinkHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
