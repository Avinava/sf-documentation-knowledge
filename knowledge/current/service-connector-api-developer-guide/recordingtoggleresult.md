---
title: "RecordingToggleResult"
domain: service-connector-api-developer-guide
topic: recordingtoggleresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.601Z
estimatedTokens: 428
keywords: [RecordingToggleResult, result, toggling, recording, call, Functions]
---

# RecordingToggleResult

> Represents the result when toggling the recording for a
        call.

# RecordingToggleResult

Represents the result when toggling the recording for a call.

## Constructor

new RecordingToggleResult(param)

## Functions Where Used

-   [pauseRecording()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_pauserecording.htm "Pause the recording of a call.")
-   [resumeRecording()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_resumerecording.htm "Resume recording a call.")
-   [publishEvent()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm "Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe recording toggle result. |
| param.isRecordingPaused | TypebooleanDescriptionIndicates whether the recording is paused. |
| param.call | TypePhoneCallDescriptionThe call associated with this result. |
| param.contactId | TypestringDescriptionFor multiparty or consult calls, pass the callId as part of contactId, so that Salesforce can determine which call is being paused or resumed. |
| param.initialContactId | TypestringDescriptionNot needed for Service Cloud Voice with Partner Telephony. |
| param.instanceId | TypestringDescriptionNot needed for Service Cloud Voice with Partner Telephony. |
| param.region | TypestringDescriptionNot needed for Service Cloud Voice with Partner Telephony. |

## Related Topics

- pauseRecording() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_pauserecording.htm)
- resumeRecording() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_resumerecording.htm)
- publishEvent() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)
