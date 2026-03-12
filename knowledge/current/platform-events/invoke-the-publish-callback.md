---
title: "Invoke the Publish Callback"
domain: platform-events
topic: invoke-the-publish-callback
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.043Z
estimatedTokens: 293
keywords: [Invoke, Publish, Callback, system, final, result, pass, instance, second, EventBus.publish, call, Status, Code]
---

# Invoke the Publish Callback

> To have the system invoke the callback when the final publish result is available, pass
  in an instance of the callback class as the second parameter in the EventBus.publish call.

# Invoke the Publish Callback

To have the system invoke the callback when the final publish result is available, pass in an instance of the callback class as the second parameter in the EventBus.publish call.

First, create an instance of the callback class. For example, we use the FailureCallback class that we implemented earlier.

```

```

This publish call publishes a list of events and passes in a callback instance.

```

```

This publish call publishes one event and passes in a callback instance.

```

```

## Callback Status Code

When you publish an event with a callback instance of EventBus.EventPublishFailureCallback or EventBus.EventPublishSuccessCallback and the publish call is successful, the returned Database.SaveResult contains a status code of OPERATION\_WITH\_CALLBACK\_ENQUEUED in the StatusCode field of Database.Error. Also, the event universally unique identifier (UUID) is returned in the Message field.

```

```

If the Apex publish callbacks feature is disabled in your Salesforce org, the EventBus.publish calls that use callbacks still execute but don’t invoke the callbacks. Also, the returned status code is OPERATION\_ENQUEUED.

## Code Examples

```
FailureCallback cb = new FailureCallback();
```

```apex
List<Database.SaveResult> results = EventBus.publish(eventList, cb);
```

```apex
Database.SaveResult sr = EventBus.publish(myEvent, cb);
```

```apex
Database.SaveResult[getErrors=(
  Database.Error[
  getFields=();
  getMessage=d473406e-0922-432a-9088-b8c95ef8b548;
  getStatusCode=OPERATION_WITH_CALLBACK_ENQUEUED;]
  );
  getId=e02xx0000000001AAA;
  isSuccess=true;]
```
