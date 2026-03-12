---
title: "Metric"
domain: object-reference
topic: metric
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.899Z
estimatedTokens: 1408
keywords: [Metric, components, goal, current, Calls, Associated, Objects]
---

# Metric

> The Metric object
			represents the components of a goal metric such as its name, metric type, and current
			value.

# Metric

The Metric object represents the components of a goal metric such as its name, metric type, and current value.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| CompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe completion date of the metric. |
| CurrentValue | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe current value of the metric. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the metric. The maximum length is 65,535 characters. |
| DueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe due date of the metric. |
| GoalId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the goal the metric is related to. |
| InitialValue | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe initial value of the metric. |
| IsCompletionMetric | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead only. If true, the metric measures whether or not the metric is finished. If false, the metric measures how much is finished compared to a targeted value. |
| LastComment | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA comment that provides more context about the metric, such as its status or progress. The maximum length is 255 characters. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp that indicates when a user last viewed a record that is related to this metric. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp that indicates when a user last viewed this metric. If this value is null, this record might have been only referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the metric. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the metric. |
| Progress | TypepercentPropertiesFilter, Nillable, SortDescriptionRead only. The overall progress of the metric. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the related record type. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the metric. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the metric. Possible values include:Not StartedOn TrackBehindCriticalCompletedPostponedCanceledNot Completed |
| TargetValue | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe target value of the metric. |
| Weight | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe weight of the metric. The sum of the weights should equal 100%. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[MetricFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MetricHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[MetricOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[MetricShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MetricFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- MetricHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- MetricOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- MetricShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
