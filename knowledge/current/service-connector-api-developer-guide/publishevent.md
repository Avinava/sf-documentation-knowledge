---
title: "publishEvent"
domain: service-connector-api-developer-guide
topic: publishevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.371Z
estimatedTokens: 994
keywords: [publishEvent, Publishes, event, Salesforce, payload, verified, ensure, it’s, correct, published, publish, desk, phone, directly, partner]
---

# publishEvent

> Publishes an event to Salesforce. The event payload is
        verified to ensure that it’s the correct type before it’s published. Use this method to
        publish an event from a desk phone or directly from the partner connector.

# publishEvent

Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionContains an event type and a payload. |
| param.eventType | TypestringPossible ValuesSHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_ENDEDSHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_STARTEDSHARED_EVENT_TYPE.ERRORSHARED_EVENT_TYPE.GET_AGENT_STATUSSHARED_EVENT_TYPE.GET_AGENT_STATUS_RESULTSHARED_EVENT_TYPE.GET_CONTACTS_RESULTSHARED_EVENT_TYPE.INFOSHARED_EVENT_TYPE.LOGIN_RESULTSHARED_EVENT_TYPE.LOGOUT_RESULTSHARED_EVENT_TYPE.LOGIN_STARTEDSHARED_EVENT_TYPE.MESSAGESHARED_EVENT_TYPE.REMOTE_CONTROLLERSHARED_EVENT_TYPE.SET_AGENT_STATUSSHARED_EVENT_TYPE.SET_AGENT_STATUS_RESULTSHARED_EVENT_TYPE.SHOW_LOGINSHARED_EVENT_TYPE.SHOW_STORAGE_ACCESSSHARED_EVENT_TYPE.STATE_CHANGESHARED_EVENT_TYPE.STORAGE_ACCESS_RESULTSHARED_EVENT_TYPE.WARNINGVOICE_EVENT_TYPE.AFTER_CALL_WORK_STARTEDVOICE_EVENT_TYPE.AGENT_CONFIG_UPDATEDVOICE_EVENT_TYPE.AGENT_ERRORVOICE_EVENT_TYPE.CALL_BARGED_INVOICE_EVENT_TYPE.CALL_CONNECTEDVOICE_EVENT_TYPE.CALL_FAILEDVOICE_EVENT_TYPE.CALL_STARTEDVOICE_EVENT_TYPE.GET_AUDIO_DEVICESVOICE_EVENT_TYPE.HANGUPVOICE_EVENT_TYPE.HOLD_TOGGLEVOICE_EVENT_TYPE.MUTE_TOGGLEVOICE_EVENT_TYPE.PARTICIPANT_ADDEDVOICE_EVENT_TYPE.PARTICIPANT_CONNECTEDVOICE_EVENT_TYPE.PARTICIPANTS_CONFERENCEDVOICE_EVENT_TYPE.PARTICIPANTS_SWAPPEDVOICE_EVENT_TYPE.PHONE_CONTACTSVOICE_EVENT_TYPE.QUEUED_CALL_STARTEDVOICE_EVENT_TYPE.RECORDING_TOGGLEVOICE_EVENT_TYPE.SIGNED_RECORDING_URLVOICE_EVENT_TYPE.SHOW_TRANSFER_VIEWVOICE_EVENT_TYPE.SOFTPHONE_ERRORVOICE_EVENT_TYPE.SUPERVISOR_BARGED_INVOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTEDVOICE_EVENT_TYPE.SUPERVISOR_CALL_STARTEDVOICE_EVENT_TYPE.SUPERVISOR_HANGUPVOICE_EVENT_TYPE.UPDATE_AUDIO_STATSVOICE_EVENT_TYPE.UPDATE_AUDIO_STATS_COMPLETEDVOICE_EVENT_TYPE.WRAP_UP_ENDEDVOICE_EVENT_TYPE.CALL_UPDATEDDescriptionEvent type to publish.If the rep status is offline, you shouldn’t publish the following events: MESSAGE, CALL_CONNECTED, CALL_STARTED, HANGUP,MUTE_TOGGLE, HOLD_TOGGLE, RECORDING_TOGGLE, UPDATE_AUDIO_STATS, PARTICIPANT_ADDED,PARTICIPANT_CONNECTED,PARTICIPANTS_CONFERENCED, PARTICIPANTS_SWAPPED, QUEUED_CALL_STARTED, CALL_UPDATED. If you publish one of these events when a rep is offline, they’re notified regardless of their status.As of Winter ‘24 and later, reps can change their Omni-Channel presence status after AgentWork is assigned but before they accept or decline the call. Partners should handle the SET_AGENT_STATUS event during this period between CALL_STARTED and CALL_CONNECTED. |
| param.payload | TypeobjectDescriptionPayload for the event. The payload must be an object with the payload class associated with the EVENT_TYPE if specified. Otherwise, the event isn’t dispatched.SHARED_EVENT_TYPE.LOGIN_RESULT—GenericResultSHARED_EVENT_TYPE.LOGOUT_RESULT—LogoutResultSHARED_EVENT_TYPE.MESSAGE—objectSHARED_EVENT_TYPE.SET_AGENT_STATUS—AgentStatusInfoVOICE_EVENT_TYPE.CALL_BARGED_IN—SuperviseCallResultVOICE_EVENT_TYPE.CALL_CONNECTED—CallResultVOICE_EVENT_TYPE..CALL_STARTED—CallResultVOICE_EVENT_TYPE.CALL_UPDATED—CallResultVOICE_EVENT_TYPE..HANGUP—HangupResultVOICE_EVENT_TYPE..HOLD_TOGGLE—HoldToggleResultVOICE_EVENT_TYPE..MUTE_TOGGLE—MuteToggleResultVOICE_EVENT_TYPE..PARTICIPANT_ADDED—ParticipantResultVOICE_EVENT_TYPE..PARTICIPANT_CONNECTED—ParticipantResultVOICE_EVENT_TYPE..PARTICIPANTS_CONFERENCED—HoldToggleResultVOICE_EVENT_TYPE..PARTICIPANTS_SWAPPED—HoldToggleResultVOICE_EVENT_TYPE..QUEUED_CALL_STARTED—CallResultVOICE_EVENT_TYPE..RECORDING_TOGGLE—RecordingToggleResultVOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED—SuperviseCallResultVOICE_EVENT_TYPE.SUPERVISOR_CALL_STARTED—SuperviseCallResultVOICE_EVENT_TYPE.SUPERVISOR_HANGUP—SuperviseCallResultVOICE_EVENT_TYPE..UPDATE_AUDIO_STATS—AudioStats |

## Example

```

```

## Code Examples

```
publishEvent({ 
  eventType: Constants.VOICE_EVENT_TYPE.CALL_CONNECTED, 
  payload: new CallResult({ call }) // "call" contain the PhoneCall object
});
```

## Related Topics

- VOICE_EVENT_TYPE.CALL_BARGED_IN (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_events.htm)
- VOICE_EVENT_TYPE.SUPERVISOR_BARGED_IN (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_events.htm)
- VOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_events.htm)
- VOICE_EVENT_TYPE.SUPERVISOR_CALL_STARTED (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_events.htm)
- VOICE_EVENT_TYPE.SUPERVISOR_HANGUP (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_events.htm)
- GenericResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_genericresult.htm)
- LogoutResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_logoutresult.htm)
- AgentStatusInfo (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_agentstatusinfo.htm)
- SuperviseCallResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_supervisor_objects_supervisecallresult.htm)
- CallResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callresult.htm)
