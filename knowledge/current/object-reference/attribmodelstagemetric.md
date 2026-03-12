---
title: "AttribModelStageMetric"
domain: object-reference
topic: attribmodelstagemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.205Z
estimatedTokens: 753
keywords: [AttribModelStageMetric, engagement, signal, metrics, select, configure, funnel, stage, attribution, configuration, API, version, 63.0, later, Calls]
---

# AttribModelStageMetric

> Represents the engagement signal metrics that you select when you configure a funnel
      stage for an attribution configuration. Available in API version 63.0 and later.

# AttribModelStageMetric

Represents the engagement signal metrics that you select when you configure a funnel stage for an attribution configuration. Available in API version 63.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| Alias | TypestringPropertiesFilter, Group, SortDescriptionIndicates the name of the output data metric. This name appears as the column name for the metric on the attribution output table. |
| AttribModelStageId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the attribution configuration stage that uses this metric.Relationship NameAttribModelStageRelationship TypePrimary-detailRefers ToAttribModelStage (the primary object) |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThree letter ISO currency codes for supported currencies. The default value is USD. This is an optional field. |
| EngagementSignalMetricId | TypereferencePropertiesFilter, Group, SortDescriptionUnique identifier that refers to the engagement signal that defines this stage.Relationship NameEngagementSignalMetricRefers ToEngagementSignalMetric |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe text label that identifies the attribution model stage metric. |

## Usage

An engagement signal metric is an aggregation of an engagement signal data field. These metrics are reported in the attribution model dashboard. For example, sum of clicks on a link, number of products added to a cart, email sends, or distinct article downloads.

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AttribModelStageMetricChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AttribModelStageMetricFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AttribModelStageMetricHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AttribModelStageMetricOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountownersharingrule.htm)

Sharing rules are available for the object.

[AttribModelStageMetricShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountshare.htm)

Sharing is available for the object.
