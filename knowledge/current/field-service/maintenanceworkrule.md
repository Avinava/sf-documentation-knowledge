---
title: "MaintenanceWorkRule"
domain: field-service
topic: maintenanceworkrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.214Z
estimatedTokens: 818
keywords: [MaintenanceWorkRule, Represents, recurrence, pattern, maintenance, record., API, version, 49.0, later., Supported, Calls, Fields, Associated, Objects]
---

# MaintenanceWorkRule

> Represents the recurrence pattern for a maintenance record. This object
    is available in API version 49.0 and later.

# MaintenanceWorkRule

Represents the recurrence pattern for a maintenance record. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DoesFloatingWorkOrder | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the maintenance plan uses the floating work order adjustment. The default is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the line item was last modified. Its label in the user interface is Last Modified Date. |
|  |  |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the line item was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this maintenance work rule. |
| NextSuggestedMaintenanceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe next date on which this rule will generate maintenance items. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe assigned owner of the maintenance work rule. |
| ParentMaintenancePlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maintenance plan associated with the maintenance work rule. |
| ParentMaintenanceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maintenance record this work rule applies to. |
| RecordsetFilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the recordset filter criteria associated with this maintenance work rule. Available in API version 52.0 and later. |
| RecurrencePattern | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe RRULE that defines the pattern of recurrence for this work order rule. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sort order that applies to this work order rule. |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe title of this work order rule. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of maintenance work rule. Available values are:Criteria-basedCalendar-based (default)Available in API version 52.0 and later. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the work type that this work order rule generates. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

MaintenanceWorkRuleChangeEvent

Change events are available for the object.

MaintenanceWorkRuleFeed

Feed tracking is available for the object.

MaintenanceWorkRuleHistory

History is available for tracked fields of the object.

MaintenanceWorkRuleOwnerSharingRule

Sharing rules are available for the object.

MaintenanceWorkRuleShare

Sharing is available for the object.
