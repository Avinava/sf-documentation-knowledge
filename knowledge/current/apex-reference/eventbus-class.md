---
title: "EventBus Class"
domain: apex-reference
topic: eventbus-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.858Z
estimatedTokens: 4796
namespace: System
keywords: [EventBus, publishing, platform, events, getOperationId, result, Usage, publish, event, callback]
---

# EventBus Class

> Contains methods for publishing platform events.

**Namespace:** `System`

# EventBus Class

Contains methods for publishing platform events.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

-   **[EventBus Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm#apex_System_eventbus_methods)**


#### See Also

-   [*Platform Events Developer Guide*: Publishing Platform Events](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_publish.htm "Platform Events Developer Guide: Publishing Platform Events - HTML (New Window)")


## EventBus Methods

The following are methods for EventBus. All methods are static.

-   **[getOperationId(result)](atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm#apex_System_eventbus_getOperationId)**
    Returns the event UUID, which identifies a published event message.
-   **[publish(event)](atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm#apex_System_eventbus_publish_2)**
    Publishes the given platform event.
-   **[publish(events)](atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm#apex_System_eventbus_publish)**
    Publishes the given list of platform events.
-   **[publish(event, callback)](atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm#apex_System_eventbus_publish_3)**
    Publishes the given platform event using the specified callback. To track asynchronous publish failures, you can implement an Apex publish callback.
-   **[publish(events, callback)](atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm#apex_System_eventbus_publish_4)**
    Publishes the given list of platform events using the specified callback. To track asynchronous publish failures, you can implement an Apex publish callback.

### getOperationId(result)

Returns the event UUID, which identifies a published event message.

#### Signature

public static String getOperationId(Object result)

#### Parameters

result

Type: Object

The SaveResult that is returned by the EventBus.publish call.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

-   If the event publish request fails to be enqueued in Salesforce, and EventBus.publish returns a synchronous error, getOperationId returns null. Also in this case, getOperationId returns null even when the event was created using the [newSObject(recordTypeId, loadDefaults)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_Schema_SObjectType_newSObject_3 "Constructs a new sObject of this type, and optionally, of the specified record type ID and with default custom field values.") method and contains a prepopulated UUID.

### publish(event)

Publishes the given platform event.

#### Signature

public static Database.SaveResult publish(SObject event)

#### Parameters

event

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

An instance of a platform event. For example, an instance of MyEvent\_\_e. You must first define your platform event object in your org.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

The result of publishing the given event. Database.SaveResult contains information about whether the operation was successful and the errors encountered. If the isSuccess() method returns true, the publish request is queued in Salesforce and the event message is published asynchronously. For more information, see [High-Volume Platform Event Persistence](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_considerations.htm#pe_async_publish_errors). If isSuccess() returns false, the event publish operation resulted in errors, which are returned in the Database.Error object. This method doesn’t throw an exception due to an unsuccessful publish operation.

Database.SaveResult also contains the Id system field. The Id field value isn’t included in the event message delivered to subscribers. It isn’t used to identify an event message, and isn’t always unique.

This method returns a System.UnexpectedException if you attempt to publish an SObject that represents an object that isn’t a platform event.

#### Usage

-   The platform event message is published either immediately or after a transaction is committed, depending on the publish behavior you set in the platform event definition. For more information, see [Platform Event Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_define_ui.htm) in the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm).
-   Apex governor limits apply. For events configured with the **Publish After Commit** behavior, each method execution is counted as one DML statement against the Apex DML statement limit. You can check limit usage using the [Limits.getDMLStatements()](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_System_Limits_getDMLStatements "Returns the number of DML statements (such as insert, update or the database.EmptyRecycleBin method) that have been called.") method. For events configured with the **Publish Immediately** behavior, each method execution is counted against a separate event publishing limit of 150 EventBus.publish() calls. You can check limit usage using the [Limits.getPublishImmediateDML()](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_System_limits_getPublishImmediateDML "Returns the number of EventBus.publish calls that have been made for platform events configured to publish immediately.") method.

### publish(events)

Publishes the given list of platform events.

#### Signature

public static List<Database.SaveResult> publish(List<SObject> events)

#### Parameters

events

Type: List<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

A list of platform event instances. For example, a list of MyEvent\_\_e objects. You must first define your platform event object in your Salesforce org.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

A list of results, each corresponding to the result of publishing one event. For each event, Database.SaveResult contains information about whether the operation was successful and the errors encountered. If the isSuccess() method returns true, the publish request is queued in Salesforce and the event message is published asynchronously. For more information, see [High-Volume Platform Event Persistence](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_considerations.htm#pe_async_publish_errors "HTML (New Window)"). If isSuccess() returns false, the event publish operation resulted in errors, which are returned in the Database.Error object. EventBus.publish() can publish some passed-in events, even when other events can’t be published due to errors. The EventBus.publish() method doesn’t throw exceptions caused by an unsuccessful publish operation. It’s similar in behavior to the Apex Database.insert method when called with the partial success option.

Database.SaveResult also contains the Id system field. The Id field value isn’t included in the event message delivered to subscribers. It isn’t used to identify an event message, and isn’t always unique.

If an empty list is passed in for the events parameter, no event is published, and an empty List<Database.SaveResult> is returned.

This method returns a System.UnexpectedException if you attempt to publish a list of type List<SObject> that contains objects that aren’t platform events.

#### Usage

-   The platform event message is published either immediately or after a transaction is committed, depending on the publish behavior you set in the platform event definition. For more information, see [Platform Event Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_define_ui.htm) in the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm).
-   Apex governor limits apply. For events configured with the **Publish After Commit** behavior, each method execution is counted as one DML statement against the Apex DML statement limit. You can check limit usage using the [Limits.getDMLStatements()](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_System_Limits_getDMLStatements "Returns the number of DML statements (such as insert, update or the database.EmptyRecycleBin method) that have been called.") method. For events configured with the **Publish Immediately** behavior, each method execution is counted against a separate event publishing limit of 150 EventBus.publish() calls. You can check limit usage using the [Limits.getPublishImmediateDML()](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_System_limits_getPublishImmediateDML "Returns the number of EventBus.publish calls that have been made for platform events configured to publish immediately.") method.

### publish(event, callback)

Publishes the given platform event using the specified callback. To track asynchronous publish failures, you can implement an Apex publish callback.

#### Signature

public static Database.SaveResult publish(SObject event, Object callback)

#### Parameters

event

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

An instance of a platform event. For example, an instance of MyEvent\_\_e. You must first define your platform event object in your Salesforce org.

callback

Type: Object

An Apex class that implements the [EventPublishFailureCallback Interface](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishFailureCallback.htm#apex_interface_eventbus_EventPublishFailureCallback "Implement this interface to track platform event messages that failed to publish. The onFailure() method in this interface is called when the final result of the asynchronous publish operation becomes available.") or [EventPublishSuccessCallback Interface](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishSuccessCallback.htm#apex_interface_eventbus_EventPublishSuccessCallback "Implement this interface to track platform event messages that were published successfully. The onSuccess() method in this interface is called when the final result of the asynchronous publish operation becomes available.").

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

The result of publishing the given event. Database.SaveResult contains information about whether the operation was successful and the errors encountered. If the isSuccess() method returns true, the publish request is queued in Salesforce and the event message is published asynchronously. For more information, see [High-Volume Platform Event Persistence](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_considerations.htm#pe_async_publish_errors). If isSuccess() returns false, the event publish operation resulted in errors, which are returned in the Database.Error object. This method doesn’t throw an exception due to an unsuccessful publish operation.

This method returns a System.UnexpectedException if you attempt to publish an SObject that represents an object that isn’t a platform event.

#### Usage

-   Use this method with Apex publish callbacks. For more information, see [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_publish_callbacks.htm) in the Platform Events Developer Guide.
-   The platform event message is published either immediately or after a transaction is committed, depending on the publish behavior you set in the platform event definition. For more information, see [Platform Event Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_define_ui.htm) in the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm).
-   Apex governor limits apply. For events configured with the **Publish After Commit** behavior, each method execution is counted as one DML statement against the Apex DML statement limit. You can check limit usage using the [Limits.getDMLStatements()](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_System_Limits_getDMLStatements "Returns the number of DML statements (such as insert, update or the database.EmptyRecycleBin method) that have been called.") method. For events configured with the **Publish Immediately** behavior, each method execution is counted against a separate event publishing limit of 150 EventBus.publish() calls. You can check limit usage using the [Limits.getPublishImmediateDML()](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_System_limits_getPublishImmediateDML "Returns the number of EventBus.publish calls that have been made for platform events configured to publish immediately.") method.

### publish(events, callback)

Publishes the given list of platform events using the specified callback. To track asynchronous publish failures, you can implement an Apex publish callback.

#### Signature

public static List<Database.SaveResult> publish(List<SObject> sobjects, Object callback)

#### Parameters

sobjects

Type: List<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

A list of platform event instances. For example, a list of MyEvent\_\_e objects. You must first define your platform event object in your Salesforce org.

callback

Type: Object

An Apex class that implements the [EventPublishFailureCallback Interface](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishFailureCallback.htm#apex_interface_eventbus_EventPublishFailureCallback "Implement this interface to track platform event messages that failed to publish. The onFailure() method in this interface is called when the final result of the asynchronous publish operation becomes available.") or [EventPublishSuccessCallback Interface](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishSuccessCallback.htm#apex_interface_eventbus_EventPublishSuccessCallback "Implement this interface to track platform event messages that were published successfully. The onSuccess() method in this interface is called when the final result of the asynchronous publish operation becomes available.").

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

A list of results, each corresponding to the result of publishing one event. For each event, Database.SaveResult contains information about whether the operation was successful and the errors encountered. If the isSuccess() method returns true, the publish request is queued in Salesforce and the event message is published asynchronously. For more information, see [High-Volume Platform Event Persistence](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_considerations.htm#pe_async_publish_errors "HTML (New Window)"). If isSuccess() returns false, the event publish operation resulted in errors, which are returned in the Database.Error object. EventBus.publish() can publish some passed-in events, even when other events can’t be published due to errors. The EventBus.publish() method doesn’t throw exceptions caused by an unsuccessful publish operation. It’s similar in behavior to the Apex Database.insert method when called with the partial success option.

If an empty list is passed in for the events parameter, no event is published, and an empty List<Database.SaveResult> is returned.

This method returns a System.UnexpectedException if you attempt to publish a list of type List<SObject> that contains objects that aren’t platform events.

#### Usage

-   Use this method with Apex publish callbacks. For more information, see [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_publish_callbacks.htm) in the Platform Events Developer Guide.
-   The platform event message is published either immediately or after a transaction is committed, depending on the publish behavior you set in the platform event definition. For more information, see [Platform Event Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_define_ui.htm) in the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm).
-   Apex governor limits apply. For events configured with the **Publish After Commit** behavior, each method execution is counted as one DML statement against the Apex DML statement limit. You can check limit usage using the [Limits.getDMLStatements()](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_System_Limits_getDMLStatements "Returns the number of DML statements (such as insert, update or the database.EmptyRecycleBin method) that have been called.") method. For events configured with the **Publish Immediately** behavior, each method execution is counted against a separate event publishing limit of 150 EventBus.publish() calls. You can check limit usage using the [Limits.getPublishImmediateDML()](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_System_limits_getPublishImmediateDML "Returns the number of EventBus.publish calls that have been made for platform events configured to publish immediately.") method.

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- EventBus Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm)
- getOperationId(result) (atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm)
- publish(event) (atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm)
- publish(events) (atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm)
- publish(event, callback) (atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm)
- publish(events, callback) (atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- newSObject(recordTypeId, loadDefaults) (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
