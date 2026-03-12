---
title: "Voice Connector API Methods"
domain: service-connector-api-developer-guide
topic: voice-connector-api-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.342Z
estimatedTokens: 1247
keywords: [Voice, Connector, API, apply, telephony, CCaaS, vendor, systems]
---

# Voice Connector API Methods

> The Voice Connector API methods apply to telephony or CCaaS vendor
            systems.

# Voice Connector API Methods

The Voice Connector API methods apply to telephony or CCaaS vendor systems.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=service_connector_api_developer_guide)

#### Important

The Connector API is for partners who are implementing Bring Your Own Channel for CCaaS or Service Cloud Voice with Partner Telephony.

-   **[acceptCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)**
    Accept a call.
-   **[addParticipant](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_addparticipant.htm)**
    Add a participant to a call.
-   **[conference](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_conference.htm)**
    Create a conference call from multiple calls. If Multiparty Calls is enabled, this method removes a rep from a consult call and adds them to a multiparty call.
-   **[declineCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_declinecall.htm)**
    Decline a call.
-   **[dial](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_dial.htm)**
    Dial a contact.
-   **[endCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_endcall.htm)**
    End a call.
-   **[getActiveCalls](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getactivecalls.htm)**
    Get a list of active call.
-   **[getAgentConfig](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentconfig.htm)**
    Get configuration information for the rep.
-   **[getCapabilities](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getcapabilities.htm)**
    Get the partner telephony capabilities.
-   **[getPhoneContacts](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getphonecontacts.htm)**
    Get a list of phone contacts and contact types.
-   **[getSignedRecordingUrl](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getsignedrecordingurl.htm)**
    Get the signed recording URL.
-   **[getVoiceCapabilities](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm)**
    Get the partner telephony capabilities.
-   **[hold](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_holdcall.htm)**
    Put a call on hold.
-   **[mute](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_mute.htm)**
    Mute a call.
-   **[pauseRecording](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_pauserecording.htm)**
    Pause the recording of a call.
-   **[resume](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_resume.htm)**
    Resume a call that is on hold.
-   **[resumeRecording](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_resumerecording.htm)**
    Resume recording a call.
-   **[sendDigits](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_senddigits.htm)**
    Send digits on an existing call.
-   **[setAgentConfig](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentconfig.htm)**
    Set configuration information for the rep. Examples of when this method is called include when the Omni-Channel widget loads and when the user saves their Omni-Channel widget settings.
-   **[swap](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_swap.htm)**
    Swap one call with another. When a call swap occurs, the participant on hold is resumed and the resumed participant is placed on hold.
-   **[unmute](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_unmute.htm)**
    Unmute a call.
-   **[wrapUpCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_wrapupcall.htm)**
    Wrap up a call.

## Related Topics

- acceptCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_acceptcall.htm)
- addParticipant (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_addparticipant.htm)
- conference (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_conference.htm)
- declineCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_declinecall.htm)
- dial (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_dial.htm)
- endCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_endcall.htm)
- getActiveCalls (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getactivecalls.htm)
- getAgentConfig (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentconfig.htm)
- getCapabilities (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getcapabilities.htm)
- getPhoneContacts (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getphonecontacts.htm)
