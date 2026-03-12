---
title: "TaskRelation"
domain: object-reference
topic: taskrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.733Z
estimatedTokens: 779
keywords: [TaskRelation, relationship, task, lead, contacts, objects, Shared, Activities, enabled, doesn’t, support, triggers, workflow, data, validation]
---

# TaskRelation

> Represents the relationship between a task and a lead, contacts, and
            other objects related to the task. If Shared Activities is enabled, this object doesn’t
            support triggers, workflow, or data validation rules. This object is available in
        API version 24.0 and later.

# TaskRelation

Represents the relationship between a task and a lead, contacts, and other objects related to the task. If Shared Activities is enabled, this object doesn’t support triggers, workflow, or data validation rules. This object is available in API version 24.0 and later.

TaskRelation is only available if you’ve enabled Shared Activities in your organization.

TaskRelation allows the following relationships:

-   A task can be related to one lead or up to 50 contacts.
-   A task can also be related to one account, asset, campaign, case, contract, opportunity, product, solution, or custom object.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), queryAll(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the Account ID of the relation.For information on IDs, see ID Field Type. |
| IsWhat | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the relation is an Account, Opportunity, Campaign, Case, other standard object, or a custom object. Value is false if RelationId is a contact or lead and true otherwise. |
| RelationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionIndicates the WhatId or WhoId in the relationship. For more information, see Task.For information on IDs, see ID Field Type. |
| TaskId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents the ID of the associated Task.For information on IDs, see ID Field Type. |

## Usage

See contacts associated with a task

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TaskRelationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

#### See Also

-   [Task](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_task.htm "Represents a business activity such as making a phone call or other to-do items. In the user interface, Task and Event records are collectively referred to as activities.")

-   [TaskWhoRelation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taskwhorelation.htm "Represents the relationship between a task and a lead or contacts. This object is available in API version 29.0 and later.")

## Code Examples

```apex
public void queryWhosOfTaskSample() {
     String soqlQuery = "SELECT Id, Subject, (SELECT RelationId, Relation.Name, IsWhat from TaskRelations WHERE isWhat = false) FROM Task WHERE Id = '00T x0000005OKEN'";
    QueryResult qResult = null;
    try {
        qResult = connection.query(soqlQuery);
        TaskRelation relation1 = (TaskRelation)qResult.getRecords()[0].getTaskRelations().getRecords()[0];
    }catch (ConnectionException ce) {
        ce.printStackTrace();
     }
 }
```

## Related Topics

- ID Field Type (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- TaskRelationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Task (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_task.htm)
- TaskWhoRelation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taskwhorelation.htm)
