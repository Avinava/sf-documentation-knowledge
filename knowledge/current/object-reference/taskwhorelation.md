---
title: "TaskWhoRelation"
domain: object-reference
topic: taskwhorelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.748Z
estimatedTokens: 430
keywords: [TaskWhoRelation, relationship, task, lead, contacts, API, version, 29.0, later, Calls, Usage]
---

# TaskWhoRelation

> Represents the relationship between a task and a lead or contacts.
        This object is available in API version 29.0 and later.

# TaskWhoRelation

Represents the relationship between a task and a lead or contacts. This object is available in API version 29.0 and later.

TaskWhoRelation allows a variable number of relationships: one lead or up to 50 contacts. Available only if you’ve enabled Shared Activities for your organization.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the Account ID of the relation.For information on IDs, see ID Field Type. |
| RelationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the contacts or lead related to the task. |
| TaskId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the ID of the task. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates whether the person related to the task is a lead or contact. |

## Usage

Here's a Java example that queries contacts associated with a task.

```

```

#### See Also

-   [Task](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_task.htm "Represents a business activity such as making a phone call or other to-do items. In the user interface, Task and Event records are collectively referred to as activities.")

-   [TaskRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taskrelation.htm "Represents the relationship between a task and a lead, contacts, and other objects related to the task. If Shared Activities is enabled, this object doesn’t support triggers, workflow, or data validation rules. This object is available in API version 24.0 and later.")

## Code Examples

```apex
public void queryWhosOfTaskSample() {
    String soqlQuery = "SELECT Id, Subject, (SELECT RelationId, Relation.Name, IsWhat from TaskWhoRelations) FROM Task WHERE Id = '00Tx0000005OKEN'";
    QueryResult qResult = null;
    try {
        qResult = connection.query(soqlQuery);
        TaskWhoRelation relation1 = (TaskWhoRelation)qResult.getRecords()[0].getTaskWhoRelations().getRecords()[0];
    } catch (ConnectionException ce) {
        ce.printStackTrace();
    }
}
```

## Related Topics

- ID Field Type (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- Task (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_task.htm)
- TaskRelation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taskrelation.htm)
