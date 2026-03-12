---
title: "Replay Active Calls on Refresh"
domain: voice-pt-developer-guide
topic: replay-active-calls-on-refresh
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.928Z
estimatedTokens: 640
keywords: [Replay, Active, Calls, Refresh, rep, refreshes, Salesforce, middle, call, getActiveCalls, restore, state, VoiceCall, record, attempt]
---

# Replay Active Calls on Refresh

> When a rep refreshes the Salesforce page in the middle of a call, getActiveCalls() is called to restore the state of the VoiceCall
    record page and to attempt to replay the call with the same payload.

# Replay Active Calls on Refresh

When a rep refreshes the Salesforce page in the middle of a call, getActiveCalls() is called to restore the state of the VoiceCall record page and to attempt to replay the call with the same payload.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

This section assumes that you’ve implemented the [getActiveCalls()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getactivecalls.htm) API in the connector.

For example, if an active call is refreshed while it’s connected, a CALL\_CONNECTED event is replayed with the same call. If an active call is refreshed while it’s ringing, a CALL\_STARTED event is replayed with the same call.

The getActiveCalls() method is implemented in the [demo connector](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm "The demo connector is a sample application for partner telephony systems that integrate with Service Cloud Voice. It demonstrates an optimal Voice implementation based on a group of telephony API mocks. It also includes a voice call simulation tool that you can use to test call actions such as making and answering calls and using phone controls.") using JS local storage, but it’s best that you implement it on the server side rather than in local storage. We recommend storing the active calls in a server-side database as soon as a call starts, and updating the database on subsequent events. This way, Salesforce receives the most current data when getActiveCalls() is called.

In case you want to replay the calls yourself, we recommend that you set the isReplayable field in callInfo attribute of the call object to false so that the base connector doesn’t replay the calls when the rep becomes available.

```

```

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: getActiveCalls](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getactivecalls.hm "Service Cloud Connector API Reference: getActiveCalls - HTML (New Window)")

## Code Examples

```
getActiveCalls() {
   // Get the current calls in progress
   const callsInProgress = getCallsInProgress();

   // Create active calls and set isReplayable to false
    const activeCalls = callsInProgress.map((call) => {
        call.callInfo = new CallInfo({ isReplayable: false });
        return new PhoneCall(call);
    });

    // Return the active calls back in ActiveCallsResult
    const activeCallsResult = new ActiveCallsResult({ activeCalls });
    return activeCallsResult;
}
```

## Related Topics

- demo connector (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm)
