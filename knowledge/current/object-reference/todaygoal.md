---
title: "TodayGoal"
domain: object-reference
topic: todaygoal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.231Z
estimatedTokens: 702
keywords: [TodayGoal, quarterly, sales, goal, performance, chart, API, version, 35.0, later, Calls, Usage, Associated, Objects]
---

# TodayGoal

> Sets the quarterly sales goal on the performance chart. This object is available in API version 35.0 and later.

# TodayGoal

Sets the quarterly sales goal on the performance chart. This object is available in API version 35.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReturns true if the goal is locked, or false if it’s not.The default value is false. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the goal can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the goal. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the creator of the goal.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the user of the goal.This field is unique within your organization.This field is a relationship field.Relationship NameUserRefers ToUser |
| Value | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe customizable sales goal for the quarter. |

## Usage

This object is specific to the performance chart and has no impact on forecast quotas or any other type of goal. The performance chart is available on the home page when Seller Home is not enabled.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TodayGoalChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TodayGoalShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TodayGoalChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TodayGoalShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
