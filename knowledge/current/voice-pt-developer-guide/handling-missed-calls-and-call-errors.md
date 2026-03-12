---
title: "Handling Missed Calls and Call Errors"
domain: voice-pt-developer-guide
topic: handling-missed-calls-and-call-errors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.051Z
estimatedTokens: 921
keywords: [Handling, Missed, Calls, Call, Errors, voice, typically, ends, rep, hangs, end, misses, error, state, topic]
---

# Handling Missed Calls and Call Errors

> A voice call typically ends when a rep hangs up. Voice calls can also end when an
    rep misses the call or when the call is in an error state. This topic shows you how missed
    voice calls, including inbound, outbound, transfer, and callback calls, and call errors are
    handled.

# Handling Missed Calls and Call Errors

A voice call typically ends when a rep hangs up. Voice calls can also end when an rep misses the call or when the call is in an error state. This topic shows you how missed voice calls, including inbound, outbound, transfer, and callback calls, and call errors are handled.

To end a call, call.reason must be set to ended or error, and call.closeCallOnError must be set to true or false.

Calls usually end when a rep clicks the **End Call** button, invoking the vendor’s Connector API endCall() method. In such cases, configure the connector to raise a HANGUP event with call.reason set to ended to mark the voice call as completed.

However, calls can also end when a rep misses or declines the call, or when the call fails and is in an error state.

For missed, declined, or failed calls, configure the connector to:

-   Raise a HANGUP event type with call.reason set to error in the Connector API publishEvent() method.
-   Set call.closeCallOnError to false to keep the conversation open and leave the voice call in a “new” state. Don’t set call.closeCallOnError to true unless you want to close the conversation and mark the voice call as completed.

For missed, declined, or failed calls, also set the following for inbound or callback calls:

-   When a rep misses a call, set call.agentStatus to MissedCallAgent.
-   When a rep declines a call, set call.agentStatus to DeclinedByAgent.
-   When a call fails due to the rep, set call.agentStatus to FailedConnectAgent.
-   When a call fails due to any reason that’s unrelated to the rep, set call.agentStatus to FailedConnectCustomer.

To set the rep’s status automatically when the call is declined, go to **Setup | Presence Configuration Settings | Update Status on Decline**, and choose a presence status for when the rep declines a work item.

To set the rep’s status automatically when the call is missed or if there’s any error that isn’t due to call declined, go to **Setup | Presence Configuration Settings | Update Status on Push Time-Out** and choose a presence status.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: Get Started with the Service Cloud Connector API](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_get_started.hm "Service Cloud Connector API Reference: Get Started with the Service Cloud Connector API - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: publishEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.hm "Service Cloud Connector API Reference: publishEvent - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: CallResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callresult.hm "Service Cloud Connector API Reference: CallResult - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: PhoneCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.hm "Service Cloud Connector API Reference: PhoneCall - HTML (New Window)")
