---
title: "Service Cloud Connector API Release Notes"
domain: service-connector-api-developer-guide
topic: service-cloud-connector-api-release-notes
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:45.355Z
estimatedTokens: 985
keywords: [Service, Cloud, Connector, API, Release, Notes, recent, changes, made, Updates, Winter, ‘26, Summer, ‘25, Spring]
---

# Service Cloud Connector API Release Notes

> This section describes recent changes that have been made to this guide.

# Service Cloud Connector API Release Notes

This section describes recent changes that have been made to this guide.

## Updates for Winter ‘26

-   Added the param.connectionId and param.callId parameters to PhoneCall.

## Updates for Summer ‘25

-   Filled gaps in reference content.
    -   Added new method topics for downloadLogs, getAgentStatus, getAudioDevices, logMessageToVendor.
    -   Added new object topics for ACWInfo, AgentVendorStatusInfo, AudioDevicesResult, ContactsFilter, HidDevice, SetAgentStateResult, ShowStorageAccessResult, StateChangeResult.
    -   Updated addParticipant topic to change a parameter name to parentCall. Signature now includes all parameters.
    -   Updated endCall topic to add agentStatus to Signature and Parameters sections.
    -   Updated getContacts topic to add filter and workItemId to Signature and Parameters sections.
    -   Updated getPhoneContacts topic to add filter to Signature and Parameters sections.
    -   Updated logout topic to chang the Return Type to LogoutResult.
    -   Updated PhoneCall topic to add the param.agentARN field.
    -   Updated setAgentStatus topic. Signature now includes statusInfo and enqueueNextState. Parameter name changed to statusInfo.
    -   Updated setAgentConfig topic to add config.hidDeviceInfo field (HidDevice) to Parameters.
    -   Updated SharedCapabilitiesResult topic to add the param.hasSFDCPendingState and param.hasAutoAcceptEnabled fields.
    -   Updated swap topic to use call1 and call2 parameters.
    -   Updated wrapUpCall topic to add call to Signature and Parameters sections.
-   Added param.listType for [Contact](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contact.htm "Represents information about a contact.").

## Updates for Spring ‘25

-   Moved content in this guide to this new location. This reference was previously available as part of the [Service Cloud Voice with Partner Telephony Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_dev_guide.htm).
-   For [Disable Call Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_disable_calls.htm) added related field updates for VoiceCapabilitiesResult, CallInfo, and publishEvent.
-   For [Headset Support](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_enable_headset.htm) added related field updates for VoiceCapabilitiesResult.
-   For updated [Desk Phone Support](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_desk_phone_support.htm) which allows reps to use a desk phone even if microphone settings are disabled in the browser, we store the selectedPhoneType value and for this release, the param.selectedPhone field of the AgentConfigResult object will be reset to default value due to this change. Added SetAgentConfigResult object.
-   Added multi-party conferencing and consult calls to the Service Cloud Connector API with updated methods and objects:
    -   CallInfo—Added param.renderContactId parameter
    -   conference—Updated the description for calls parameter
    -   dial—Added dialOptions parameter
    -   endCall—Updated the description for call parameter
    -   mute—Added call parameter
    -   MuteToggleResult—Added param.isGlobal parameter
    -   pauseRecording—Updated the description for call parameter
    -   PhoneCall—Added new param.callAttributes values and a new param.callType value
    -   PhoneCallAttributes—Added full documentation for this object.
    -   resumeRecording—Updated the description for call parameter
    -   unmute—Added call parameter
    -   VoiceCapabilitiesResult—Added param.hasConsult parameter

## Related Topics

- Contact (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contact.htm)
