---
title: "EngagementSignalMetric"
domain: object-reference
topic: engagementsignalmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.676Z
estimatedTokens: 521
keywords: [EngagementSignalMetric, measurable, quantity, that’s, derived, engagement, signal, sum, revenue, count, clicks, track, user, tests, machine]
---

# EngagementSignalMetric

> Represents a measurable quantity that’s derived from an engagement signal,
         such as the sum of revenue or a count of clicks. Use this object to track user engagement
         for A/B tests, machine learning model training, and attribution configurations. This object
         is available in API version 62.0 and later.

# EngagementSignalMetric

Represents a measurable quantity that’s derived from an engagement signal, such as the sum of revenue or a count of clicks. Use this object to track user engagement for A/B tests, machine learning model training, and attribution configurations. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AggregateFunction | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionDefines the type of calculation used on the metric field.Possible values are:AvgCountDistinctSelectSumThe default value is Count. |
| EngagementSignalId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Represents the ID of the engagement signal that’s associated with the metric.This field is a relationship field.Relationship NameEngagementSignalRelationship TypeMaster-detailRefers ToEngagementSignal (the master object) |
| IsRemote | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the engagement signal metric object is owned by a different org in Data 360.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the engagement signal metric was referenced by the current user. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the current user viewed the engagement signal metric record. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. Text label that identifies the engagement signal metric. |

## Usage

These derived metrics serve as the core unit of measurement across the personalization platform. Use them to train machine learning models, measure performance in A/B tests, track outcomes in attribution models, and define custom objectives or compound metrics.
