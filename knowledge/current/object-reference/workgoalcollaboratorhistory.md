---
title: "WorkGoalCollaboratorHistory"
domain: object-reference
topic: workgoalcollaboratorhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.652Z
estimatedTokens: 398
keywords: [WorkGoalCollaboratorHistory, history, changes, WorkGoalCollaborator, Access, read-only, Calls]
---

# WorkGoalCollaboratorHistory

> Represents the history of changes to the values in the fields in
				a WorkGoalCollaborator object. Access is read-only.

# WorkGoalCollaboratorHistory

Represents the history of changes to the values in the fields in a WorkGoalCollaborator object. Access is read-only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object has been deprecated as of API version 35.0. Use the [Goal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goal.htm#sforce_api_objects_Goal "The Goal object represents the components of a goal such as its name, description, and status.") object to query information about WDC goals in API version 35.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the standard or custom field. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionNew value of the modified field. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionPrevious value of the modified field. |
| WorkGoalCollaboratorId | TypereferencePropertiesFilter, Group, SortDescriptionID of the WorkGoalCollaborator object that is associated with this history entry. |

## Related Topics

- Goal (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goal.htm)
