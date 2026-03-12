---
title: "PlannedGiftPerformance"
domain: edu-cloud-dev-guide
topic: plannedgiftperformance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.333Z
estimatedTokens: 873
keywords: [PlannedGiftPerformance, performance, planned, gift, over, time, including, expenses, net, API, version, 64.0, later, Calls, Special]
---

# PlannedGiftPerformance

> The performance of a planned gift over time, including returns, expenses, and
         net value. This object is available in API version 64.0 and later.

# PlannedGiftPerformance

The performance of a planned gift over time, including returns, expenses, and net value. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Expenses | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total management expense associated with the planned gift. |
| InvestmentReturnRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe investment return rate associated with the planned gift. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the gift performance record. |
| NetValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the planned gift after accounting for expenses and payouts. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PayoutRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate at which payouts are made to beneficiaries of the planned gift. |
| PayoutStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of payouts to beneficiaries from the planned gift. |
| PlannedGiftId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe planned gift associated with the performance record.This field is a relationship field.Relationship NamePlannedGiftRefers ToPlannedGift |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date of performance tracking for the planned gift. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PlannedGiftPerformanceChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm)

Change events are available for the object.

[PlannedGiftPerformanceFeed](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[PlannedGiftPerformanceHistory](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[PlannedGiftPerformanceOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PlannedGiftPerformanceShare](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
