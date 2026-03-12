---
title: "Service Cloud Supervisor API"
domain: service-connector-api-developer-guide
topic: service-cloud-supervisor-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.638Z
estimatedTokens: 789
keywords: [Service, Cloud, Supervisor, API, part, Connector, intended, functionality, Voice, Partner, Telephony, Bring, Own, Channel, CCaaS]
---

# Service Cloud Supervisor API

> This section describes the Supervisor API, which is a part of the Connector API that is
  intended for supervisor functionality. Use this API for Service Cloud Voice for Partner Telephony
  and Bring Your Own Channel for CCaaS.

# Service Cloud Supervisor API

This section describes the Supervisor API, which is a part of the Connector API that is intended for supervisor functionality. Use this API for Service Cloud Voice for Partner Telephony and Bring Your Own Channel for CCaaS.

-   **[superviseCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisecall.htm)**
    Supervise a call. The supervised call is connected and muted. No other call controls exist other than “Leave Call”.
-   **[supervisorBargeIn](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisorbargein.htm)**
    Barge in on a call as a supervisor. The supervisor becomes a new participant in the call. The supervisor is unmuted and has the usual call controls (mute, hold, and recording toggles).
-   **[supervisorDisconnect](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisordisconnect.htm)**
    Disconnect a supervised call.
-   **[SuperviseCallResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisecallresult.htm)**
    Represents the result when supervising a call.
-   **[SupervisedCallInfo](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisedcallinfo.htm)**
    Represents information about a supervised call.
-   **[SupervisorHangupResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisorhangupresult.htm)**
    Represents a result type for an ended supervisor call.
-   **[Supervisor Events](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_events.htm)**
    These events can be used by a softphone (sent from the base connector automatically) or by using the publishEvent API (when on a desk phone). These events can only be sent if the rep has the capability isSupervisor. They’re used by Salesforce to update the Supervisor Call Monitor UI.

#### See Also

-   [*Service Cloud Voice for Partner Telephony Developer Guide:* Supervisor Listen In or Barge In with Service Cloud Voice for Partner Telephony](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_supervisor_listen_in.htm "Service Cloud Voice for Partner Telephony Developer Guide: Supervisor Listen In or Barge In with Service Cloud Voice for Partner Telephony - HTML (New Window)")

-   [publishEvent](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Related Topics

- superviseCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisecall.htm)
- supervisorBargeIn (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisorbargein.htm)
- supervisorDisconnect (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_api_supervisordisconnect.htm)
- SuperviseCallResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisecallresult.htm)
- SupervisedCallInfo (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisedcallinfo.htm)
- SupervisorHangupResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisorhangupresult.htm)
- Supervisor Events (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_events.htm)
- publishEvent (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
