---
title: "EventBusSubscriber"
domain: object-reference
topic: eventbussubscriber
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.823Z
estimatedTokens: 1321
keywords: [EventBusSubscriber, trigger, process, flow, that’s, subscribed, platform, event, change, data, capture, Doesn’t, include, CometD, Pub]
---

# EventBusSubscriber

> Represents a trigger, process, or flow that’s subscribed to a
         platform event or a change data capture event. Doesn’t include CometD or Pub/Sub API
         subscribers.

# EventBusSubscriber

Represents a trigger, process, or flow that’s subscribed to a platform event or a change data capture event. Doesn’t include CometD or Pub/Sub API subscribers.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

EventBusSubscriber is read only and can only be queried. As of Summer ’20 and later, only your Salesforce org's internal users can access this object.

## Fields

| Field | Details |
| --- | --- |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the subscriber. For example, the trigger ID. |
| IsPartitioned | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the platform event Apex trigger is configured with parallel subscriptions (true) or not (false). The default value is false. See Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers in the Platform Events Developer Guide.This field is available in API version 62.0 and later. |
| LastError | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe error message that the last thrown EventBus.RetryableException contains. This field applies to Apex triggers only. Available in API version 43.0 and later. |
| LastProcessed | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe replay ID of the last event that the subscriber processed. This field replaces Position as of API level 66.0. |
| LastPublished | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe replay ID of the last published event. This field replaces Tip as of API level 66.0.NoteFor high-volume platform events and change events, the value for Tip isn’t available and is always -1. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the subscribed item, such as the trigger or process name. If the subscribed item’s name is “Process”, at least one flow Pause element is subscribed to the event. |
| Position | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe replay ID of the last event that the subscriber processed. This field has been deprecated as of API level 66.0 and should no longer be used. Use LastProcessed instead. This field may not be properly represented if the value exceeds the maximum integer size. |
| Retries | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times the trigger was retried due to throwing the EventBus.RetryableException. This field applies to Apex triggers only. Available in API version 43.0 and later. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the status of the subscriber. Can be one of these values:Error— The subscriber was disconnected and stopped receiving published events. A trigger reaches this state when it exceeds the number of maximum retries with the EventBus.RetryableException. Trigger assertion failures and unhandled exceptions don’t cause the error state. We recommend limiting the retries to fewer than nine times to avoid reaching this state. When you fix and save the trigger, or for a managed package trigger, if you redeploy the package, the trigger resumes automatically from the tip, starting from new events. Also, you can resume a trigger subscription in the subscription detail page that you access from the platform event page.Repartitioning—The system is in the process of modifying the trigger's parallel subscription configuration.Running—The subscriber is actively listening to events. If you modify the subscriber, the subscription continues to process events.Suspended—The subscriber is disconnected and can’t receive events because a Salesforce admin suspended it or due to an internal error. You can resume a trigger subscription in the subscription detail page that you access from the platform event page. To resume a process, deactivate it and then reactivate it. If you modify the subscriber, the subscription resumes automatically from the tip, starting from new events.For more information, see View and Manage an Event’s Subscribers on the Platform Event’s Detail Page in the Platform Events Developer Guide. |
| Tip | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe replay ID of the last published event. This field has been deprecated as of API level 66.0 and should no longer be used. Use LastPublished instead. This field may not be properly represented if the value exceeds the maximum integer size.NoteFor high-volume platform events and change events, the value for Tip isn’t available and is always -1. |
| Topic | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the subscription channel that corresponds to a platform event or change event. For a platform event, the topic name is the event name appended with __e, such as MyEvent__e. For a change event, the topic is the name of the change event, such as AccountChangeEvent. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe subscriber type (ApexTrigger). If the subscriber is a process or flow Pause element, the type is blank. |

## Usage

Use EventBusSubscriber to query details about subscribers to a platform event. You can get all subscribers for a particular event by filtering on the Topic field, as follows.

```

```

## Code Examples

```
SELECT ExternalId, Name, Position, Status, Tip, Type
FROM EventBusSubscriber
WHERE Topic='Low_Ink__e'
```
