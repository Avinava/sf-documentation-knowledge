---
title: "TaskStatus"
domain: object-reference
topic: taskstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.738Z
estimatedTokens: 675
keywords: [TaskStatus, status, task, Started, Completed, Closed, Calls, Special, Access, Rules, Usage]
---

# TaskStatus

> Represents the status of a task, such as Not Started, Completed, or
   Closed.

# TaskStatus

Represents the status of a task, such as Not Started, Completed, or Closed.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an ID or master label. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this task status value represents a closed task (true) or not (false). Multiple task status values can represent a closed task. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the status is the default task status value (true) or not (false) in the picklist. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaster label for this task status value. This display value is the internal label that doesn’t get translated. Limit: 255 characters. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the task status picklist. These numbers aren’t guaranteed to be sequential, as some previous task status values might have been deleted. |

## Usage

This object represents a value in the task status picklist. The task status picklist provides additional information about the status of a task , such as whether a given status value represents an open or closed task. Your client application can query this object to retrieve the set of values in the task status picklist, and then use that information while processing task records to determine more information about a given task. For example, the application could test whether a given task is open or closed based on the task Status value and the value of the IsClosed property in the associated TaskStatus record.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
