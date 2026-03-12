---
title: "Unified Routing"
domain: voice-pt-developer-guide
topic: unified-routing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.213Z
estimatedTokens: 1633
keywords: [Unified, Routing, lets, Salesforce, handle, inbound, outbound, voice, calls, skills-based, call, transfers, reps, Configure, admins]
---

# Unified Routing

> Unified routing lets Salesforce handle the routing of inbound and outbound voice
        calls, skills-based call routing, and call transfers to the reps. Configure unified routing
        so that the admins can enable the feature. You can choose whether to include this feature in
        the managed package.

# Unified Routing

Unified routing lets Salesforce handle the routing of inbound and outbound voice calls, skills-based call routing, and call transfers to the reps. Configure unified routing so that the admins can enable the feature. You can choose whether to include this feature in the managed package.

To configure unified routing, set the CapabilitiesSupportsUnifiedRouting field of the [ConversationVendorInfo](https://developer.salesforce.com/docs/atlas.en-us.254.0.object_reference.meta/object_reference/sforce_api_objects_conversationvendorinfo.htm) object to true, and invoke the [omni flow](https://developer.salesforce.com/docs/atlas.en-us.252.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm). The admins can then enable unified routing for the contact centers from the contact center details page. Once the [supportsUnifiedRouting](https://developer.salesforce.com/docs/atlas.en-us.254.0.object_reference.meta/object_reference/sforce_api_objects_conversationvendorinfo.htm) field is set to true, it can’t be changed to false.

When unified routing is enabled, Salesforce handles the inbound and outbound voice call routing, skills-based call routing, and call transfers to the reps. When unified routing is enabled, place the calls in a holding or temporary queue.

If you want to use the sample implementation in the Demo Connector, select the Unified Routing capability in the Routing Settings to enable unified routing. Also provide the omni flow dev name and the Salesforce fallback queue id in the Demo Connector.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

Unified routing doesn’t support transfer by flow.

## Unified Routing Flow

Only if you provide unified routing support in the managed package, Salesforce can handle call routing.

The high-level unified routing flow is:

![Unified routing flow](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_unified_routing.png&folder=voice_pt_developer_guide)

-   Receive incoming call: A customer initiates a call, which the telephony provider server receives.
-   Create voice call: The telephony provider server sends a request to create a voice call to the Salesforce telephony service. The Salesforce telephony service processes the request and returns a Voice Call ID.
-   Execute Omni-Channel flow: The telephony provider server executes the Omni-Channel Flow by invoking the [Salesforce Telephony Service's Execute an Omni Flow API Call](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm).
-   Route Call and notify rep: Salesforce Omni-Channel executes the necessary flow to identify and route the call to the most appropriate rep. A PendingServiceRouting (PSR) record is created to track the routing process. Voice pushes the work to the rep’s Omni-Channel widget in Salesforce, notifying the rep of an incoming call.
-   Accept or decline the call.
    -   Rep accepts the call: The rep’s browser publishes a CALL\_ACCEPTED event to the third-party vendor connector. The third-party vendor connector ‌must assign the audio stream to the given rep.
        -   Audio stream establishment: The vendor connector attempts to establish the audio stream between the customer and the rep. If successful, it resolves the promise for the ACCEPT\_CALL event. With Unified Routing enabled, you must start audio stream establishment as part of the ACCEPT\_CALL event. If the audio stream connection fails, the telephony provider server triggers the reroute API (a server-to-server call). In this case, Salesforce cancels the rep’s existing work and reroutes the call to another available rep.
    -   Rep misses or declines the call: If the rep doesn't accept the call, Salesforce pushes rep work to a new rep. The call routing process is reinitiated to find the next best available rep.
-   Drop the call: When the customer drops the call, the telephony provider server calls the [clearRouting](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_clear_routing.htm) API to delete the PSR.

For example, see this sample implementation to support unified routing for inbound voice calls or skills-based routing of voice calls. The startInboundCall function handles the initiation of an inbound call and routes it based on configuration settings. It sets the default values for callInfo and flowConfig if not provided. If no rep is available, it logs an error and returns a rejected promise. Otherwise, it creates a Contact record with a unique ID and a VoiceCall record with the call type, contact, and attributes. If unified routing is enabled, it invokes the executeOmniFlowForUnifiedRouting method to handle the call. Otherwise, it publishes a CALL\_STARTED event. The function returns a promise that resolves with the callResult object.

```

```

For example, see this sample addParticipant implementation to support unified routing for call transfers. The addParticipant function is designed to add a new participant to an ongoing call. The function takes three parameters: contact (the contact to be added), call (the current call object), and isBlindTransfer (a boolean indicating whether the transfer is blind transfer). In the example code, contact.id refers to the transfer target ID which can be the Salesforce rep ID or the Salesforce Queue ID. After the executeOmnifFlow API call, the remaining transfer flow is the same as that of the inbound flow.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

To route voicemails to reps, see [Send Voicemails to Reps](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicemail.htm).

-   **[Unified Routing for Desk Phone](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_unifiedrouting_deskphone.htm)**
    To route a voice call to a rep’s desk phone, configure unified routing for desk phone in a managed package.

#### See Also

-   [Salesforce Object Reference for the Salesforce Platform: ConversationVendorInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversationvendorinfo.htm "Salesforce Object Reference for the Salesforce Platform:
    ConversationVendorInfo - HTML (New Window)")

## Code Examples

```
startInboundCall(phoneNumber, callInfo, flowConfig) {
        callInfo = callInfo || { isOnHold: false };
        flowConfig = flowConfig || { isUnifiedRoutingEnabled: false };
        callInfo.callStateTimestamp = new Date();
        if (!this.state.agentAvailable) {
            const message = `Rep is not available for a inbound call from phoneNumber - ${phoneNumber}`;
            this.log(message);
            return Promise.reject(new Error(message));
        }
        let callAttributes = { participantType: Constants.PARTICIPANT_TYPE.INITIAL_CALLER };
        const id = Math.random().toString(36).substring(5);
        let contact = new Contact({ phoneNumber, id, name: 'Customer '+ id });
        return this.createVoiceCall(undefined, Constants.CALL_TYPE.INBOUND, phoneNumber, callInfo && callInfo.additionalFields).then((data) => {
            callAttributes.voiceCallId = data.voiceCallId;
            const call = new Call(Constants.CALL_TYPE.INBOUND.toLowerCase(), contact, callAttributes, new CallInfo(callInfo), data.vendorCallKey || this.generateCallId());
            this.addCall(call);
            const callResult = new CallResult({
                call
            });
            //When Unified Routing is enabled, we need to invoke OmniFlow, otherwise regular flow to publish CALL_STARTED event.
            if(flowConfig.isUnifiedRoutingEnabled) {
                console.log('Inside isUnifiedRoutingEnabled ' + flowConfig.isUnifiedRoutingEnabled);
                var response = this.executeOmniFlowForUnifiedRouting(data, flowConfig);
                console.log('response From execute onmi flow' + response);
            } else {
                console.log('Non UnifiedRouting flow');
                publishEvent({ eventType: Constants.VOICE_EVENT_TYPE.CALL_STARTED, payload: callResult });
            }
            return this.executeAsync('startInboundCall', callResult);
        });
    }
```

```
async addParticipant(contact, call, isBlindTransfer) {
...
let transferTo = contact.id;
if(this.state?.flowConfig?.isUnifiedRoutingEnabled) {
let callInfoData = {
transferTo,
voiceCallId : newCall.callId
};
let flowConfigData = {
dialedNumber : this.state.flowConfig.dialedNumber
}
await this.executeOmniFlowForUnifiedRouting(callInfoData,flowConfigData);
}
...
}
executeOmniFlowForUnifiedRouting(call, flowConfig) {
...
if(call?.transferTo){
requestObject.transferTarget = call.transferTo;
}
...
return fetch('/api/executeOmniFlow', {
method: 'PATCH',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(requestObject)
}).then(response => response.json()).then((payload) => {
return payload;
}).catch((err) => {
console.log('ERR ',err);
return Promise.reject(err);
});
}
```

## Related Topics

- Unified Routing for Desk Phone (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_unifiedrouting_deskphone.htm)
