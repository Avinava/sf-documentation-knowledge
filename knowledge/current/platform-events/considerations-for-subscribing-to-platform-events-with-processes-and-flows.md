---
title: "Considerations for Subscribing to Platform Events with Processes and Flows"
domain: platform-events
topic: considerations-for-subscribing-to-platform-events-with-processes-and-flows
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.920Z
estimatedTokens: 1299
keywords: [Considerations, Subscribing, Platform, Events, Processes, Flows, subscribe, familiarize, yourself, Event, Resumed, Flow, Interviews]
---

# Considerations for Subscribing to Platform Events with Processes and Flows

> Before you use processes or flows to subscribe to platform events,
      familiarize yourself with these considerations.

# Considerations for Subscribing to Platform Events with Processes and Flows

Before you use processes or flows to subscribe to platform events, familiarize yourself with these considerations.

Supported Platform Events

Processes and flows can subscribe to custom platform events and these standard platform events.

-   AIPredictionEvent
-   BatchApexErrorEvent
-   FlowExecutionErrorEvent
-   FOStatusChangedEvent
-   OrderSummaryCreatedEvent
-   OrderSumStatusChangedEvent
-   PlatformStatusAlertEvent

Infinite Loops and Limits

Be careful when publishing events from processes or flows because you can get into an infinite loop and exceed limits. For example, a process is associated with the Printer Status platform event. The same process includes an action that creates a Printer Status event message. The process would trigger itself.

To avoid creating an endless loop in an event process, make sure that the new event message's field values don't meet the filter criteria for the associated criteria node.

Subscriptions Related List

On the platform event’s detail page, the Subscriptions related list shows which entities are waiting to receive that platform event’s messages. The related list includes a link to each subscribed process. If flow interviews are waiting for that platform event’s messages, one “Process” subscriber appears in the Subscriptions related list.

Uninstalling Events

Before you uninstall a package that includes a platform event:

-   Delete interviews that are waiting for that platform event's messages
-   Deactivate processes that reference the event

Einstein Predictions

Results of every Einstein prediction generate AIPredictionEvents. To trigger your process or flow only by predictions on a specific object, use event condition filters. For example, if your process acts only on predictions written to Lead records, add a matching condition to check that the Lead ID field equals the AI Predicted Object ID event reference.

If your process or flow updates a field that is used by an Einstein prediction, Einstein will run the prediction again and write back new results. The new results generate a new AIPredictionEvent that could trigger your process or flow again, resulting in a loop. Avoid creating potential loops by only updating fields that aren't used in Einstein predictions.

Platform Event Triggered Flows

Platform Event Triggered flows cannot call another flow using the Subflow element.

## Event Processes

These considerations apply only to event processes.

Apex Actions

You can't use an event reference to set an sObject variable in the Apex class.

Email Alerts Actions

Email alerts can't use values from platform event messages. For the process to send an email that contains values from the platform event message that starts the process, use this workaround:

1.  Create an autolaunched flow.
2.  In the flow, create a variable for each field in the platform event. Use compatible data types and make the variables available for input.
3.  In the flow, add a Send Email action, and set the action's input variables with the flow variables.
4.  In the process, add a Flows action and specify the autolaunched flow. Use event references to assign each platform event field to its corresponding flow variable.

Flows Actions

You can't use an event reference to set a record variable in the flow, even when the platform event is specified as the record variable's object. To pass values into the flow from the platform event message that starts the process, use this workaround:

1.  In the flow, create a variable for each field in the platform event. Use compatible data types and make the variables available for input.
2.  In the process, when you add the Flows action, use event references to assign each platform event field to its corresponding flow variable.

Packaging Event Processes

When you package an event process, the associated object isn't included automatically. Advise your subscribers to create the object, or manually add the object to your package.

## Resumed Flow Interviews

These considerations apply only to flow interviews that resume when a platform event message is received.

Formulas

To reference a platform event in a flow formula, pass the event data into a record variable in the Pause element. Then reference the appropriate field in that record variable.

Event Condition Values

When you filter platform event messages, only the first 765 bytes of the condition value are used for filtering. Note that the number of characters will be smaller if you use multi-byte characters.

#### See Also

-   [Decoupled Publishing and Subscription](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm "When the publish behavior of a platform event is set to Publish Immediately, it’s published outside of a Lightning Platform database transaction. As a result, the publishing and subscription processes are decoupled—the subscription process can’t assume that an action made by the publishing transaction is committed before an event message is received. Familiarize yourself with some scenarios that can occur from the decoupled behavior.")

## Related Topics

- Decoupled Publishing and Subscription (atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm)
