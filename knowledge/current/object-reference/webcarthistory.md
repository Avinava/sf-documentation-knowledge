---
title: "WebCartHistory"
domain: object-reference
topic: webcarthistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.387Z
estimatedTokens: 301
keywords: [WebCartHistory, history, changes, WebCart, Calls, Special, Access, Rules]
---

# WebCartHistory

> WebCartHistory represents the history of changes to the values in
			the fields of the WebCart object.

# WebCartHistory

WebCartHistory represents the history of changes to the values in the fields of the WebCart object.

For specific version information, see the documentation for WebCart.

## Supported Calls

describeSObjects(), query, replicate, retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

For specific special access rules, if any, see the documentation for WebCart.

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the field that was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionNew value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionOld value of the field that was changed. |
| WebCartId | TypereferencePropertiesFilter, Group, SortDescriptionThe unique ID of the WebCart. |
