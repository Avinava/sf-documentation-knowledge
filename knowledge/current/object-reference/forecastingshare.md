---
title: "ForecastingShare"
domain: object-reference
topic: forecastingshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.708Z
estimatedTokens: 352
keywords: [ForecastingShare, forecasts, shared, forecast, manager, user, API, version, 44.0, later, Calls, Special, Access, Rules, Usage]
---

# ForecastingShare

> Represents forecasts shared between a forecast manager and a user.
		Available in API version 44.0 and later.

# ForecastingShare

Represents forecasts shared between a forecast manager and a user. Available in API version 44.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionWhether the user you’re sharing your forecasts with can view and adjust the forecasts or view only. This field is new since the pilot.Picklist values:ViewAndEditViewOnly |
| SharedForecastManagerRoleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of either:The role of the manager whose forecasts you want to share.The territory whose forecasts you want to share. |
| RoleType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of hierarchy associated with the forecast share.R - Role-basedT - Territory-basedY - Territory2-based |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user with whom the forecast is shared. |

## Usage

Use this object to let any stakeholder at your company view and adjust forecast managers’ forecasts.
