---
title: "ServiceResourceCapacityHistory"
domain: object-reference
topic: serviceresourcecapacityhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.903Z
estimatedTokens: 341
keywords: [ServiceResourceCapacityHistory, history, changes, made, tracked, service, resource, capacity, record, API, version, 38.0, later, Calls, Special]
---

# ServiceResourceCapacityHistory

> Represents the history of changes made to tracked fields on a service
   resource capacity record. This object is available in API version 38.0 and
  later.

# ServiceResourceCapacityHistory

Represents the history of changes made to tracked fields on a service resource capacity record. This object is available in API version 38.0 and later.

## Supported Calls

getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

Field Service must be enabled in your organization, and field tracking for service resource capacity fields must be configured.

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field that was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe value of the field before it was changed. |
| ServiceResourceCapacityId | TypereferencePropertiesFilter, Group, SortDescriptionID of the service resource capacity being tracked. The history is displayed on the detail page for this record. |
