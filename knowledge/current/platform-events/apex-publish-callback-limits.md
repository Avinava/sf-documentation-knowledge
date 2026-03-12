---
title: "Apex Publish Callback Limits"
domain: platform-events
topic: apex-publish-callback-limits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.047Z
estimatedTokens: 749
keywords: [Apex, Publish, Callback, Limits, Keep, mind, limit, callbacks]
---

# Apex Publish Callback Limits

> Keep in mind this limit for Apex publish callbacks.

# Apex Publish Callback Limits

Keep in mind this limit for Apex publish callbacks.

| Description | Limit |
| --- | --- |
| Maximum cumulative usage of all publish callbacks in the last 30 minutes | 5 MB |
| Maximum number of times a publish callback method implementation can call EventBus.publish with a callback recursively. | 10 |

The publish callback size used in the callback allocation is the size of the objects contained in a callback class instance, such as the class variable objects. It isn’t the length of the Apex class in characters, although overhead related to serializing and storing the class does contribute to the publish callback size. The publish callback size is calculated at event publish time, not at callback method invocation time. Therefore, each time that a callback class instance is passed into EventBus.publish, it counts against the limit, regardless of whether the callback methods are executed.

For example, in the FailureCallbackWithCorrelation class in [Example: Publish Callback Class That Correlates Callback Results with Event Messages](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_example_correlate.htm "This example callback class implementation shows how to retry publishing failed events. It’s based on a trigger on the Order object."), the objects that contribute to the size counted in the allocation are these class variables: MAX\_RETRIES, retryCounter, and uuidMap. The overhead of the class instance also contributes to the size counted in the allocation. Whenever a FailureCallbackWithCorrelation class instance is passed into EventBus.publish, it counts against the limit even if the event is published successfully.

The cumulative usage is the sum of the sizes of callback instances that were executed in the last 30 minutes. If you hit the callback size limit, try to reduce the size of the objects stored in your callback class through the class variables. Alternatively, limit the number of retried callback executions or wait before using callbacks again. The callback limit is a rolling limit and counts usage in the last 30 minutes, so usage can decrease after some time has passed. Usage is updated every time you publish an event with a callback.

To monitor the usage of all publish callbacks in the last 30 minutes, make a REST API call to the limits resource, and inspect the PublishCallbackUsageInApex value in the returned response. Make a GET request to:

```

```

The PublishCallbackUsageInApex value in the returned response looks similar to this example. The PublishCallbackUsageInApex value returns the maximum usage and the remaining usage size in bytes.

```

```

#### See Also

-   [*REST API Developer Guide*: Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm)

-   [*REST API Developer Guide*: List Organization Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm)

## Code Examples

```
/services/data/v66.0/limits
```

```
"PublishCallbackUsageInApex" : {
    "Max" : 5242880,
    "Remaining" : 4011396
  }
```

## Related Topics

- Example: Publish Callback Class That Correlates Callback Results with Event Messages (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_example_correlate.htm)
