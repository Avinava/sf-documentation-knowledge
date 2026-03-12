---
title: "Territory2ModelHistory"
domain: object-reference
topic: territory2modelhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.152Z
estimatedTokens: 322
keywords: [Territory2ModelHistory, history, changes, territory, model, Sales, Territories, enabled, Calls, Usage]
---

# Territory2ModelHistory

> Represents the history of changes to the values in the fields on a
      territory model. Available if Sales Territories has been enabled.

# Territory2ModelHistory

Represents the history of changes to the values in the fields on a territory model. Available if Sales Territories has been enabled.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field whose value was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the changed field. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe previous value of the changed field. |
| Territory2ModelId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the territory model whose history is tracked. |

## Usage

This object is automatically generated whenever any field value changes on a territory model record. Use this object it to identify those changes.
