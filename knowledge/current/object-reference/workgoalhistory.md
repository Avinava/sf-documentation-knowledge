---
title: "WorkGoalHistory"
domain: object-reference
topic: workgoalhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.656Z
estimatedTokens: 360
keywords: [WorkGoalHistory, history, changes, WorkGoal, Access, read-only, deprecated, API, version, 35.0, GoalHistory, query, historical, WDC, goals]
---

# WorkGoalHistory

> Represents the history of changes to the values in the fields of a WorkGoal.
			Access is read-only. This object has been deprecated as of API version 35.0. Use
		the GoalHistory object to query historical information for WDC goals.

# WorkGoalHistory

Represents the history of changes to the values in the fields of a WorkGoal. Access is read-only. This object has been deprecated as of API version 35.0. Use the GoalHistory object to query historical information for WDC goals.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Fields

| Field Name | Details |
| --- | --- |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field that was changed. |
| NewValue | TypeAny TypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeAny TypePropertiesNillable, SortDescriptionThe latest value of the field before it was changed. |
| WorkGoalId | TypereferencePropertiesFilter, Group, SortDescriptionID of the Goal. Label is Goal ID. |
