---
title: "WorkGoalLink"
domain: object-reference
topic: workgoallink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.660Z
estimatedTokens: 343
keywords: [WorkGoalLink, relationship, two, goals, deprecated, API, version, 35.0, GoalLink, query, WDC, Calls]
---

# WorkGoalLink

> Represents the relationship between two goals (many to many
			relationship). This object has been deprecated as of API version 35.0. Use the
				GoalLink object to query
			information about the relationship between two WDC goals.

# WorkGoalLink

Represents the relationship between two goals (many to many relationship). This object has been deprecated as of API version 35.0. Use the [GoalLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goallink.htm#sforce_api_objects_GoalLink "Represents the relationship between two goals. This is a many-to-many relationship, meaning that each goal can link to many other goals.") object to query information about the relationship between two WDC goals.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update() , upsert()

## Fields

| Field Name | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the WorkGoalLink is active (true) or not (false) |
| LinkType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of link |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated name of the goal link |
| SourceGoalId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the source WorkGoal object |
| TargetGoalId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the target WorkGoal object |

## Related Topics

- GoalLink (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goallink.htm)
