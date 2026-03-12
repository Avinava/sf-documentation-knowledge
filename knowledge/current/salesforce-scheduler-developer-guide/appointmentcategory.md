---
title: "AppointmentCategory"
domain: salesforce-scheduler-developer-guide
topic: appointmentcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.612Z
estimatedTokens: 635
keywords: [AppointmentCategory, category, work, shifts, API, version, 58.0, later, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# AppointmentCategory

> Represents the category of work types and shifts. This object is
      available in API version 58.0 and later.

# AppointmentCategory

Represents the category of work types and shifts. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| IsDropIn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the appointment mode is drop-in (true) or not (false).The default value is false. |
| IsGroup | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the appointment mode is group (true) or not (false). It also indicates whether work types and shifts support the group category.The default value is false. Available in API version 61.0 and later. |
| IsScheduled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the appointment mode is regular (true) or not (false). It also indicates whether work types and shifts support the group category.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the appointment category record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the appointment category record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the appointment category. |

## Usage

Use appointment categories to differentiate between various types of appointments, such as drop in, regular, and group. To define the work types and shifts available for these categories, assign appointment categories to work types and shifts.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppointmentCategoryFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm " HTML (New Window)")

Feed tracking is available for the object.

[AppointmentCategoryHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm " HTML (New Window)")

History is available for tracked fields of the object.
