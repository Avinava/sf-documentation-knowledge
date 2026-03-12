---
title: "Obtain Apex Trigger Subscribers"
domain: change-data-capture
topic: obtain-apex-trigger-subscribers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.616Z
estimatedTokens: 394
keywords: [Obtain, Apex, Trigger, Subscribers, triggers, subscribed, change, events, query, EventBusSubscriber, standard, SOQL, CometD, Pub, Sub]
---

# Obtain Apex Trigger Subscribers

> To get information about the triggers that are subscribed to change events, query the
  EventBusSubscriber standard object using SOQL. EventBusSubscriber contains information about Apex
  triggers but not CometD or Pub/Sub API subscribers.

# Obtain Apex Trigger Subscribers

To get information about the triggers that are subscribed to change events, query the EventBusSubscriber standard object using SOQL. EventBusSubscriber contains information about Apex triggers but not CometD or Pub/Sub API subscribers.

## Example

This example SOQL query selects several fields from EventBusSubscriber. For more information about EventBusSubscriber fields, see [EventBusSubscriber](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventbussubscriber.htm) in the Object Reference for Salesforce and Lightning Platform.

```

```

The returned result shows that there are two Apex triggers subscribed to change events. One trigger is subscribed to AccountChangeEvent and one to ContactChangeEvent.

| ExternalId | Name | Topic | Position | Status | Tip | Type |
| --- | --- | --- | --- | --- | --- | --- |
| 01q2J000000g0kb | MyAccountChangeTrigger | AccountChangeEvent | 226751 | Running | -1 | ApexTrigger |
| 01q2J000000g0kg | MyContactChangeTrigger | ContactChangeEvent | 226752 | Running | -1 | ApexTrigger |

You can filter the query results by using a WHERE clause. For example, this query filters by the topic ContactChangeEvent.

```

```

The query returns only the trigger subscribers to ContactChangeEvent, in this case, one trigger.

| ExternalId | Name | Topic | Position | Status | Tip | Type |
| --- | --- | --- | --- | --- | --- | --- |
| 01q2J000000g0kg | MyContactChangeTrigger | ContactChangeEvent | 226752 | Running | -1 | ApexTrigger |

## Code Examples

```
SELECT ExternalId, Name, Topic, Position, Status, Tip, Type FROM EventBusSubscriber
```

```
SELECT ExternalId, Name, Topic, Position, Status, Tip, Type FROM EventBusSubscriber 
WHERE Topic='ContactChangeEvent'
```
