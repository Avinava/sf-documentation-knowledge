---
title: "UnifiedActivityInsight"
domain: object-reference
topic: unifiedactivityinsight
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.428Z
estimatedTokens: 503
keywords: [UnifiedActivityInsight, insight, unified, activity, reports, dashboards, Winter, ’24, release, later, Calls, Special, Access, Rules]
---

# UnifiedActivityInsight

> Represents an insight related to a unified activity. This object
      is available for reports and dashboards in the Winter ’24 release and later.

# UnifiedActivityInsight

Represents an insight related to a unified activity. This object is available for reports and dashboards in the Winter ’24 release and later.

## Supported Calls

describeSObjects(), query()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available only for reporting. It isn’t supported for SOQL queries and APIs.

## Special Access Rules

We’re retiring Einstein Activity Capture Activity 360 Reporting. Starting in Summer ’25, this object isn’t available with Einstein Activity Capture unless Activity 360 Reporting was enabled in your org in Spring ’25 or earlier. See Knowledge Article: [Einstein Activity Capture Activity 360 Reporting, Activity Metrics, Activities Dashboard Upcoming Retirement](https://help.salesforce.com/s/articleView?id=004633781&type=1&language=en_US)

## Fields

| Field | Details |
| --- | --- |
| ActivityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the unified activity that this insight is associated with.This field is a polymorphic relationship field.Relationship NameActivityRelationship TypeLookupRefers ToUnifiedActivity, UnifiedEmail, UnifiedMeeting, UnifiedTask, UnifiedVideoCall, UnifiedVoiceCall |
| AggregatedKeywordOccurrences | TypeintPropertiesFilter, Nillable, SortDescriptionThe number of keyword occurrences that triggered this insight. This field is the sum of occurrences for all the attached UnifiedActivityInsightKeyword objects. |
| InsightType | TypestringPropertiesFilter, Nillable, SortDescriptionType of the insight. |
| OwnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionOptional. ID of the owner of the insight. Only user-scoped insights have owners (Scope=USER).This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Scope | TypepicklistPropertiesFilter, Nillable, Restricted picklist, SortDescriptionThe scope of the insight.Possible values are:ORGUSER |
