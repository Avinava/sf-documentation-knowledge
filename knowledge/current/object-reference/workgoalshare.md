---
title: "WorkGoalShare"
domain: object-reference
topic: workgoalshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.667Z
estimatedTokens: 698
keywords: [WorkGoalShare, sharing, entry, WorkGoal, deprecated, API, version, 35.0, GoalShare, query, WDC, goals, Calls]
---

# WorkGoalShare

> Represents a sharing entry on a WorkGoal
			object. This object has been deprecated as of API version 35.0. Use the GoalShare
		object to query information about sharing for WDC goals.

# WorkGoalShare

Represents a sharing entry on a WorkGoal object. This object has been deprecated as of API version 35.0. Use the GoalShare object to query information about sharing for WDC goals.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

The properties available for some fields depend on the default organization-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe user’s or group’s level of access to the goal. The possible values are:ReadEditAll: This value is not valid when you create, update, or delete recordsThis field must be set to an access level that is higher than the organization’s default access level for goals. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the WorkGoal object that is associated with this sharing entry. |
| RowCause | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Valid values include:Owner—The User is the owner of the WorkGoal or is in a user role above the WorkGoal owner in the role hierarchy.Manual—The User or Group has access, because a user with “All” access manually shared the WorkGoal with the user or group.Rule—The User or Group has access via a WorkGoal sharing rule.GuestRule—The User or Group has access via a WorkGoal guest user sharing rule. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user or group that was given access to the goal. This field can’t be updated. |
