---
title: "LinkedArticleHistory"
domain: object-reference
topic: linkedarticlehistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.882Z
estimatedTokens: 311
keywords: [LinkedArticleHistory, history, changes, made, tracked, linked, article, API, version, 37.0, later, Calls, Special, Access, Rules]
---

# LinkedArticleHistory

> Represents the history of changes made to tracked fields on a linked
			article. This object is available in API
		version 37.0 and later.

# LinkedArticleHistory

Represents the history of changes made to tracked fields on a linked article. This object is available in API version 37.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

Knowledge must be enabled in your org.

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field that was changed. |
| LinkedArticleId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the tracked linked article. The history is displayed on the detail page for this record. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe value of the field before it was changed. |
