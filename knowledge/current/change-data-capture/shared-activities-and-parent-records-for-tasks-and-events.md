---
title: "Shared Activities and Parent Records for Tasks and Events"
domain: change-data-capture
topic: shared-activities-and-parent-records-for-tasks-and-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.723Z
estimatedTokens: 371
keywords: [Shared, Activities, Parent, Records, Tasks, Events, enabled, relationships, task, contacts, lead, correspond, TaskRelation, objects, tracked]
---

# Shared Activities and Parent Records for Tasks and Events

> If Shared Activities is enabled, the relationships between a task and its parent
    records (for example, contacts and lead), which correspond to TaskRelation objects, are tracked
    through change events.

# Shared Activities and Parent Records for Tasks and Events

If Shared Activities is enabled, the relationships between a task and its parent records (for example, contacts and lead), which correspond to TaskRelation objects, are tracked through change events.

Similarly, the relationships between a calendar event and its parent records, which correspond to EventRelation objects, are tracked. You can receive change events for task relationships on the /data/TaskRelationChangeEvent channel, and for event relationships on the /data/EventRelationChangeEvent channel.

When Shared Activities is not enabled, EventRelation objects associate a calendar event with invitees only.

#### See Also

-   [*Salesforce Help*: Enable Shared Activities](https://help.salesforce.com/articleView?id=activities_enable_shared_activities.htm&type=5&language=en_US "Salesforce Help: Enable Shared Activities - HTML (New Window)")

-   [*Object Reference for Salesforce and Force.com*: EventRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm "Object Reference for Salesforce and Force.com: EventRelation - HTML (New Window)")

-   [*Object Reference for Salesforce and Force.com*: TaskRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_taskrelation.htm "Object Reference for Salesforce and Force.com: TaskRelation - HTML (New Window)")
