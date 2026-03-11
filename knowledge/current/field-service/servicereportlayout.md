---
title: "ServiceReportLayout"
domain: field-service
topic: servicereportlayout
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.921Z
keywords: [ServiceReportLayout, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ServiceReportLayout

# ServiceReportLayout

Represents a service report template in field service.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Field Service must be enabled. All users with Field Service Standard user permission can view the ServiceReportLayout object via the API.

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the service report template.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language that the service report template uses. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the service report template was last viewed. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe name of the service report template. For example, Maintenance Report Template. |
| TemplateType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of the service report template. Available in API version 46.0 and later.Possible values are:DigitalFormServiceReportThe default value is ServiceReport. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ServiceReportLayoutChangeEvent

Change events are available for the object. Available in API version 55.0 and later.