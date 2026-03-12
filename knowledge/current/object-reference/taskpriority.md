---
title: "TaskPriority"
domain: object-reference
topic: taskpriority
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.727Z
estimatedTokens: 704
keywords: [TaskPriority, importance, urgency, task, High, Normal, Low, Calls, Special, Access, Rules, Usage]
---

# TaskPriority

> Represents the importance or urgency of a task, such as High, Normal,
   or Low.

# TaskPriority

Represents the importance or urgency of a task, such as High, Normal, or Low.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Customer and Partner Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an ID or master label. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the status is the default task priority value (true) or not (false) in the picklist. Only one value in the picklist can be the default value. |
| IsHighPriority | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this task priority value represents a high priority task (true) or not (false). Multiple task priority values can represent a high-priority task. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaster label for this task priority value. This display value is the internal label that doesn’t get translated. Limit: 255 characters. |
| SortOrder | TypeintPropertiesFilter, Nillable, Group, SortDescriptionNumber used to sort this value in the task priority picklist. These numbers aren’t guaranteed to be sequential, as some previous task priority values might have been deleted. |

## Usage

This object represents a value in the task priority picklist. The task priority picklist provides additional information about the importance of a task , such as whether a given priority value represents a high priority. Your client application can query on this object to retrieve the set of values in the task priority picklist, and then use that information while processing task objects to determine more information about a given task. For example, the application could test whether a given task is high priority based on its Priority value and the value of the IsHighPriority field in the associated TaskPriority object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
