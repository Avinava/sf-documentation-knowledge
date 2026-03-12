---
title: "UnifiedActivityRelation"
domain: object-reference
topic: unifiedactivityrelation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.437Z
estimatedTokens: 397
keywords: [UnifiedActivityRelation, relationship, activity, record, that’s, target, topic, opportunity, account, reports, dashboards, Winter, ’24, release, later]
---

# UnifiedActivityRelation

> Represents a relationship between an activity and a related record
         that’s a target or topic of the activity. For example, a related record can be an
         opportunity, account, and so on. This object is available for reports and dashboards
      in the Winter ’24 release and later.

# UnifiedActivityRelation

Represents a relationship between an activity and a related record that’s a target or topic of the activity. For example, a related record can be an opportunity, account, and so on. This object is available for reports and dashboards in the Winter ’24 release and later.

## Supported Calls

describeSObjects(), query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is available only for reporting. It isn’t supported for SOQL queries and APIs.

## Special Access Rules

We’re retiring Einstein Activity Capture Activity 360 Reporting. Starting in Summer ’25, this object isn’t available with Einstein Activity Capture unless Activity 360 Reporting was enabled in your org in Spring ’25 or earlier. See Knowledge Article: [Einstein Activity Capture Activity 360 Reporting, Activity Metrics, Activities Dashboard Upcoming Retirement](https://help.salesforce.com/s/articleView?id=004633781&type=1&language=en_US)

## Fields

| Field | Details |
| --- | --- |
| ActivityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the activity. This field is a polymorphic relationship field.Relationship NameActivityRelationship TypeLookupRefers ToUnifiedActivity, UnifiedVideoCall, UnifiedVoiceCall |
| RelatedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the related record. This field is a polymorphic relationship field.Relationship NameRelatedRelationship TypeLookupRefers ToAccount, Contact, Contract, Lead, Opportunity, User |
