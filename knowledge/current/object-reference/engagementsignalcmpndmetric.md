---
title: "EngagementSignalCmpndMetric"
domain: object-reference
topic: engagementsignalcmpndmetric
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.670Z
estimatedTokens: 961
keywords: [EngagementSignalCmpndMetric, rate, metric, measures, ratio, two, engagement, signal, metrics, product, orders, views, calculate, conversion, email]
---

# EngagementSignalCmpndMetric

> Represents a rate metric that measures the ratio between two engagement
         signal metrics, such as product orders and product views to calculate a conversion rate, or
         email clicks and email opens to determine a click-through rate. Use this object to create
         complex measurements for A/B testing and web experimentation. This object is available in
         API version 62.0 and later.

# EngagementSignalCmpndMetric

Represents a rate metric that measures the ratio between two engagement signal metrics, such as product orders and product views to calculate a conversion rate, or email clicks and email opens to determine a click-through rate. Use this object to create complex measurements for A/B testing and web experimentation. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CompoundMetricFormula | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA read-only formula field that concatenates the three core components of a Compound Metric—the primary metric, the operator, and the secondary metric—into a single string. This field is unique within your Salesforce org.This field is a calculated field. |
| DenomEngmtSignalMetricId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionPoints to the EngagementSignalMetric record that serves as the denominator of the compound metric.This field is a relationship field.Relationship NameDenomEngmtSignalMetricRefers ToEngagementSignalMetric |
| IsRemote | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the engagement signal compound metric object is owned by a different org in Data 360.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the engagement signal compound metric was referenced by the current user. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the current user viewed the engagement signal compound metric record. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. Text label that identifies the engagement signal compound metric. |
| NumerEngmtSignalMetricId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPoints to the EngagementSignalMetric record that serves as the numerator of the compound metric.This field is a relationship field.Relationship NameNumerEngmtSignalMetricRefers ToEngagementSignalMetric |
| Operator | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the mathematical operation that combines the numerator and denominator metrics in the compound metric formula.Possible values are:RatioThe default value is Ratio. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRepresents the ID of the user or group that owns the engagement signal compound metric.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Usage

Use this object to create rate metrics for A/B testing and web experimentation. To measure the effectiveness of personalization experiences, divide the numerator metric by the denominator metric. These metrics help you make data-driven decisions to compare content performance. This object is used for measurement and isn’t used for machine learning model training.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EngagementSignalCmpndMetricShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EngagementSignalCmpndMetricShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
