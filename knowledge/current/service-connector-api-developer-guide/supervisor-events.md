---
title: "Supervisor Events"
domain: service-connector-api-developer-guide
topic: supervisor-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.651Z
estimatedTokens: 847
keywords: [Supervisor, Events, softphone, sent, base, connector, automatically, publishEvent, API, desk, phone, rep, capability, isSupervisor, They’re]
---

# Supervisor Events

> These events can be used by a softphone (sent from the base
        connector automatically) or by using the publishEvent API (when on a desk phone). These
        events can only be sent if the rep has the capability isSupervisor. They’re used by Salesforce to update the Supervisor Call Monitor
        UI.

# Supervisor Events

These events can be used by a softphone (sent from the base connector automatically) or by using the publishEvent API (when on a desk phone). These events can only be sent if the rep has the capability isSupervisor. They’re used by Salesforce to update the Supervisor Call Monitor UI.

For information about publishing events, see [publishEvent()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.").

-   VOICE\_EVENT\_TYPE.CALL\_BARGED\_IN— This event notifies the rep that a supervisor has barged in. The payload is [SupervisedCallInfo](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisedcallinfo.htm "Represents information about a supervised call."). This event can only be sent if rep has the [hasSupervisorListenIn capability](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_capabilitiesresult.htm "Represents the result type for the rep capabilities.").
-   VOICE\_EVENT\_TYPE.HOLD\_TOGGLE—Can be used during Supervisor Barge In.
-   VOICE\_EVENT\_TYPE.MUTE\_TOGGLE—Can be used during Supervisor Barge In.
-   VOICE\_EVENT\_TYPE.RECORDING\_TOGGLE—Can be used during Supervisor Barge In.
-   VOICE\_EVENT\_TYPE.SUPERVISOR\_BARGED\_IN— The supervisor has barged in. This event can be called by a hardphone when a supervisor has barged in successfully. To use it, the vendor needs to perform the barge in and then publish this event when the barge in is successful. This event can only be sent if rep has the [hasSupervisorListenIn capability](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_capabilitiesresult.htm "Represents the result type for the rep capabilities.").
-   VOICE\_EVENT\_TYPE.SUPERVISOR\_CALL\_CONNECTED — The call has connected. This event is sent automatically on a softphone. It must be sent from a desk phone to connect the call.
-   VOICE\_EVENT\_TYPE.SUPERVISOR\_CALL\_STARTED — The call has started. This event is sent automatically by the base connector for desk phones.
-   VOICE\_EVENT\_TYPE.SUPERVISOR\_HANGUP — The supervisor has disconnected.

#### See Also

-   [*Service Cloud Voice for Partner Telephony Developer Guide:* Supervisor Listen In or Barge In with Service Cloud Voice for Partner Telephony](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_supervisor_listen_in.htm "Service Cloud Voice for Partner Telephony Developer Guide: Supervisor Listen In or Barge In with Service Cloud Voice for Partner Telephony - HTML (New Window)")

-   [publishEvent](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Related Topics

- publishEvent() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
- SupervisedCallInfo (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisedcallinfo.htm)
- hasSupervisorListenIn
                        capability (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_capabilitiesresult.htm)
- publishEvent (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
