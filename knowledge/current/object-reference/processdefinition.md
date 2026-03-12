---
title: "ProcessDefinition"
domain: object-reference
topic: processdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.157Z
estimatedTokens: 468
keywords: [ProcessDefinition, definition, approval, process, Calls, Usage]
---

# ProcessDefinition

> Represents the definition of a single approval process.

# ProcessDefinition

Represents the definition of a single approval process.

## Supported Calls

describeSObjects(), query(), retrieve(), search()

Portal and communities users with the Customer Community Plus and Partner Community licenses can access this object. All users in org with approvals enabled have read access to ProcessDefinition.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionA description of this process, with a maximum of 3,000 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique process name, used internally. |
| LockType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of lock applied to the record being approved. When a record is in the approval process, it’s always locked, and only an administrator can edit it. However, the currently assigned approver can also be allowed to edit the record.TotalAdminOwnerWorkitemNodenone |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe external name of the process; the name seen by users. |
| State | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe current state of this process.ActiveInactiveObsolete |
| TableEnumOrId | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the object associated with the approval process, such as Account or Contact. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of this process.Approval Process—Used to control the action taken for a record.State-based Process—Used internally to track various control processes, such as for developing Salesforce Knowledge articles. |

## Usage

Use this object to read the description of an approval process. The definition is read-only.
