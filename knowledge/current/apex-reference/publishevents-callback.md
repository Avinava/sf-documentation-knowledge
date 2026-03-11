---
title: "publish(events, callback)"
domain: apex-reference
topic: publishevents-callback
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.599Z
keywords: [publish, events, callback, Publishes, given, list, platform, specified, callback., track, asynchronous, failures, implement, Apex, Signature, Parameters, Return, Value, Usage]
---

# publish(events, callback)

> Publishes the given list of platform events using the specified callback. To track
    asynchronous publish failures, you can implement an Apex publish callback.

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