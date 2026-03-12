---
title: "Recent Changes to the Service Cloud Voice for Partner Telephony Developer Guide"
domain: voice-pt-developer-guide
topic: recent-changes-to-the-service-cloud-voice-for-partner-telephony-developer-guide
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.983Z
estimatedTokens: 6375
keywords: [Recent, Changes, Service, Cloud, Voice, Partner, Telephony, Developer, made, Updates, Spring, ’26, Winter, Summer, ’25]
---

# Recent Changes to the Service Cloud Voice for Partner Telephony Developer Guide

> This section describes recent changes that have been made to this guide.

# Recent Changes to the Service Cloud Voice for Partner Telephony Developer Guide

This section describes recent changes that have been made to this guide.

## Updates for Spring ’26

-   Added End a Consult Call During an Ongoing Multiparty Call section for [Manage Multiparty Calls and Consult Calls](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiparty_consult_calls.htm "Include up to six participants on a voice call, including the rep and customer. In addition to the six participants, a supervisor can listen in or barge in. While on a call with a customer, a rep can make a separate consult call before merging the calls together or ending the consult call. During the consult call, multiparty call participants are on a type of hold. Telephony partners specify whether to disable hold music so that call group participants can continue their conversation.").
-   Added [Unified Routing for Desk Phone](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_unifiedrouting_deskphone.htm).
-   Added [Map Telephony Error Codes to Salesforce Outbound Call Errors](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_outbound_error.htm).
-   Added multiparty calls and consult calls diagrams to [Call Scenario Diagrams](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_call_scenario_diagrams.htm "Understand different call scenarios, such as a rep receiving or declining an inbound call or multiparty and consult calls.").
-   Updated [Develop a Telephony System Login Page](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_telephony_login_page.htm "If needed, create a telephony system login page that appears in the Omni-Channel utility in the Lightning service console.") for the current file and field location to specify a login URL.

## Updates for Winter ’26

-   Added [Configure Multiple Connector URLs](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiurl.htm) to add multiple connector URLs and the corresponding login URLs in the managed package.
-   Updated [Service Cloud Voice for Partner Telephony Apex Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm) to include the new service\_cloud\_voice.VendorConfigProvider Apex interface.
-   Updated content for [Manage Multiparty Calls and Consult Calls](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiparty_consult_calls.htm "Include up to six participants on a voice call, including the rep and customer. In addition to the six participants, a supervisor can listen in or barge in. While on a call with a customer, a rep can make a separate consult call before merging the calls together or ending the consult call. During the consult call, multiparty call participants are on a type of hold. Telephony partners specify whether to disable hold music so that call group participants can continue their conversation."), including prerequisites, limitations and considerations, Add Participants section, and Merge a Consult Call and a Multiparty Call section.
-   Updated references to Contact Trace Record (CTR) to be Contact Record, to reflect more current terminology for telephony partners.
-   Clarified support for [custom demo connector](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm "The demo connector is a sample application for partner telephony systems that integrate with Service Cloud Voice. It demonstrates an optimal Voice implementation based on a group of telephony API mocks. It also includes a voice call simulation tool that you can use to test call actions such as making and answering calls and using phone controls.") development.

## Updates for Summer ’25

-   Updated [Unified Routing (Beta)](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_unified_routing.htm "Unified routing lets Salesforce handle the routing of inbound and outbound voice calls, skills-based call routing, and call transfers to the reps. Configure unified routing so that the admins can enable the feature. You can choose whether to include this feature in the managed package.") because unified routing now supports outbound calls, skills-based routing, and call transfers.
-   Added [Manage Multiparty Calls and Consult Calls](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiparty_consult_calls.htm "Include up to six participants on a voice call, including the rep and customer. In addition to the six participants, a supervisor can listen in or barge in. While on a call with a customer, a rep can make a separate consult call before merging the calls together or ending the consult call. During the consult call, multiparty call participants are on a type of hold. Telephony partners specify whether to disable hold music so that call group participants can continue their conversation.").

## Updates for Spring ’25

-   Moved the Service Cloud Contact Center Connector API reference to a standalone reference guide and removed Contact Center from the title. Access the [Service Cloud Connector API Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm) in its new location.
-   Added [Disable Call Actions](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_disable_calls.htm "You can disable call handling options such as end call, dial pad, and phone book in the softphone to support compliance with internal policies and industry regulations."), and related field updates for VoiceCapabilitiesResult, CallInfo, and publishEvent.
-   Added [Headset Support](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_enable_headset.htm "Enable headset support so that reps can control call actions such as accept, mute, unmute, and decline calls from their headsets.") which allows reps to control call handling actions using headset, and related field updates for VoiceCapabilitiesResult.
-   Updated [Desk Phone Support](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_desk_phone_support.htm "If the telephony provider supports desk phones, reps can make outbound calls or answer inbound calls from their desk phone. Reps can also decline calls and initiate transfers from their desk phone. By default, the softphone is enabled for all reps. To use a deskphone, reps should enable the deskphone from the Omni-Channel utility.") which allows reps to use a desk phone even if microphone settings are disabled in the browser. With this change, we store the selectedPhoneType value and for this release, the param.selectedPhone field of the AgentConfigResult object will be reset to default value due to this change. Added SetAgentConfigResult object.
-   Added [Unified Routing (Beta)](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_unified_routing.htm "Unified routing lets Salesforce handle the routing of inbound and outbound voice calls, skills-based call routing, and call transfers to the reps. Configure unified routing so that the admins can enable the feature. You can choose whether to include this feature in the managed package.") so that Salesforce handles the routing of the inbound voice calls in the voice channels.

## Updates for Winter ’25

-   Updated the event type and error type (eventType) values in various code samples and pages of the Connector API Reference to reflect backend changes. For example, changed VOICE.CALL\_CONNECTED to VOICE\_EVENT\_TYPE.CALL\_CONNECTED and changed LOGIN\_REQUIRED to SHARED\_ERROR\_TYPE.LOGIN\_REQUIRED.
-   Added the customIcon field in the Conversation Channel Definition record in [Create a Salesforce DX Project](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm "Allow Service Cloud Voice to communicate with your telephony provider. The package you’re creating includes a connector, contact center, settings metadata, and more."). This new field helps admins identify the contact center partner during setup.
-   Added the getContacts method to the Connector API Reference under the Common API Methods section. The getContacts method returns a new ContactsResult object.
-   Reorganized capabilities into shared and voice categories, resulting in these changes:
    -   Removed support for the CapabilitiesResult object in the Connector API Reference. Use the SharedCapabilitiesResult object or VoiceCapabilitiesResult object instead.
    -   Removed support for the getCapabilities method in the Connector API Reference. Use the getSharedCapabilities method or getVoiceCapabilities method instead.

## Updates for Summer ’24

-   Added instructions for how to [Let Reps Control the Callback Experience](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_click_to_dial_callbacks.htm "Customize the way reps handle callbacks.").

## Updates for Spring ’24

-   Moved the ConversationVendorInfo topic to the [Object Reference for the Salesforce Platform Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversationvendorinfo.htm).
-   Updated the Connector API Reference with the following changes: separated the Connector API Methods into a Common API Methods section and a Voice API Methods section; and updated the event type (eventType) values in various code samples and pages to reflect backend changes, for example, changed CALL\_CONNECTED to VOICE.CALL\_CONNECTED.
-   Added the getTelephonyConnector method to the Connector API Reference. The getTelephonyConnector method returns an object of the TelephonyConnector class.
-   Added the onAgentWork method to the Connector API Reference. The onAgentWork method sends non-Voice related AgentWork events to the partner contact center
-   Added the AgentWork object to the Connector API Reference. The AgentWork object stores information about an AgentWork record.

## Updates for Winter ’24

-   Added the ability to [Set the Voice Call Record Type](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voice_call_record_type.htm "Customize the page layout of a voice call record.") to determine the page layout of a voice call record.
-   Added a disconnectReason parameter to the [Update a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm) Telephony Integration API to pass in the reason why a voice call was disconnected.
-   Added the ability to [Send Real-Time Conversation Events](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm "Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.") generated from intelligence sources to the rep console. Also added Apex classes and interfaces to the [Apex Reference](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.") section to support real-time signals.

## Updates for Summer ’23

-   Added the [Create Transcripts in Bulk](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript_bulk.htm) Telephony Integration API to support bulk transcriptions in real time.
-   Added steps on how to [Customize Error Messages](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_custom_messages.htm). Also added the [CustomError](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_connector_objects_customerror.htm) Connector API object to support the feature.
-   Added steps on how to [Enable Agent-to-Agent Calls](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_enable_agent_to_agent_calls.htm). Also added the hasPhoneBook parameter to the [CapabilitiesResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_connector_objects_capabilitiesresult.htm) Connector API object.
-   Added the [Service Cloud Voice Lightning Web Component Toolkit API Telephony Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_lwc_telephony_actions.htm) page to support LWC telephony actions.
-   Added the addParticipant, endCall, merge, sendDigits, and swap Toolkit API telephony actions to automate softphone call control events. The actions are supported for both [Lightning Web Component](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_lwc_telephony_actions.htm) and [Aura](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_aura_telephony_actions.htm) components.
-   Updated the [Create a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm) Telephony Integration API to state that callAttributes now supports call transfers and callbacks.

## Updates for Spring ’23

-   Added more guidelines regarding call transcription: [Transcribe Calls in Real Time](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_transcribe_calls.htm "To see transcriptions in real time, add the Enhanced Conversation component to the Voice Call record page through the Lightning App Builder. You can add this component for orgs that use Service Cloud Voice with Amazon Connect. For orgs that use Service Cloud Voice with Partner Telephony, add this component only if your telephony provider supports transcription.").
-   Added [Hide Call Controls](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_hide_call_controls.htm "You can hide many of the call control buttons that appear to the rep in the Omni-Channel widget. These buttons can be hidden or shown for each call. By default, buttons are visible.") and the associated new show methods in CallInfo.
-   Added UpdateOrgDomainProvider to the list of supported Apex interfaces. Implement this interface to get notified of My Domain changes in your org, which require updates to Service Cloud Voice. See [Service Cloud Voice for Partner Telephony Apex Reference](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.").
-   Added steps on how to [Configure Estimated Wait Times for Queues](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_estimated_wait_times.htm "Reps can see estimated wait times for a given queue or skill before transferring a call.") and associated fields to the CallInfo, CapabilitiesResult, and Contact objects.
-   Added steps on how to [Enable the Voice Extension Page in Lightning App Builder](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voice_extension_flexipage.htm "Configure this feature to let administrators add custom voice controls to their Omni-Channel softphones using the Voice Extension FlexiPage in the Lightning App Builder."). Also introduced a VoiceExtension metadata type to support the Voice Extension FlexiPage.
-   Added [Associate Partner Telephony Users and Groups with Queues](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_users_groups_queues.htm "Set up queue management to associate partner telephony users and groups with Service Cloud Voice queues.").

## Updates for Winter ’23

-   This guide has been reorganized so that it’s easier to find information.
-   Updated information in the [Outbound Dialers](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_outbound_dialers.htm "You can use a preview dialer or a progressive dialer with Service Cloud Voice for Partner Telephony.") section about how to use a preview dialer. Related updates:
    -   Added the startPreviewCall method to the [Toolkit API Lightning component](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_lc_toolkit_aura_telephony_actions.htm).
    -   Added the CallOrigin field to the [VoiceCall object](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm) (in the Object Reference Guide).
-   New topic: [Send Voicemails to Reps](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicemail.htm "Let customers send your reps voicemails that reps can review along with a transcription."). Related updates:
    -   Added a callOrigin parameter to [Create a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm) Telephony Integration API.
    -   Added a callOrigin parameter to [Update a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm) Telephony Integration API.
-   New topic: [Transfer Calls to a Queue](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_transfer_queue.htm "Transfer a call to a Salesforce queue so that a supervisor can see the transferred call waiting in the queue."). Related updates:
    -   Added a queue parameter to [Create a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm) Telephony Integration API.
-   New topic: [Change Status While on a Call](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_pending_status_change.htm "With the pending status change feature, reps can change their Omni-Channel status while on a call.").

## Updates for Summer ’22

New topics:

-   [Perform a Blind Transfer](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_blind_transfer.htm "With the blind transfer feature, vendors can use the addParticipant Connector API method to hang up and transfer a call rather than add a caller to an existing conversation.")
-   [Use Click-to-Dial for Transfers](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_click_to_dial_transfer.htm "Enable click-to-dial for phone numbers so that a rep can call or transfer to that number.")
-   [Customize the Destination List for Call Transfers in Omni-Channel](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_customize_transfer_destination.htm "Customize the list of transfer destinations to only show the destination types that apply when transferring calls for Omni-Channel.")
-   [Enable Voice Call Transfers via Salesforce Omni-Channel Flows](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_enable_voice_call_transfers.htm "Configure this feature to enable voice call transfers via Salesforce Omni-Channel flows.")
-   Connector & Supervisor API
    -   CapabilitiesResult—Moved existing capabilities from AgentConfigResult to this new object. Added capabilities for new features (supervisor barge in, blind transfer, transfer to Omni-Channel flow, filter by transfer category).
    -   getCapabilities
    -   supervisorBargeIn
    -   SupervisedCallInfo
    -   [hasTransferToOmniFlow](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_enable_voice_call_transfers.htm "Configure this feature to enable voice call transfers via Salesforce Omni-Channel flows.")

Changes to existing topics:

-   [Quick Start Partner Telephony Package](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_quick_start_package.htm "You can explore the partner telephony features in your partner telephony-enabled org. We’ve published a sample quick start package that you can install in your org, create a contact center, and get started."). Added the ServiceCloudVoice component, which is automatically enabled when the quick-start-partner-telephony package is installed.
-   [Supervisor Listen In or Barge In](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_supervisor_listen_in.htm "When a rep belongs to a supervised group, a supervisor can monitor their active calls using the Supervisor Panel.")—Added info about Supervisor Barge In and changed all references from AgentConfigResult to the new CapabilitiesResult.
-   [Troubleshooting](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_troubleshooting.htm "Review tips for troubleshooting common problems.")—Added info about the possible causes when the Omni-Channel widget doesn't show AgentWork.
-   Connector & Supervisor API
    -   AgentConfigResult—Moved some of the params to CapabilitiesResult.
    -   getPhoneContacts—Added a mention to contact types (not just contacts).
    -   PhoneContactsResults—Added a parameter for contact types.
    -   publishEvent—Added new events for Supervisor Barge In.
    -   SupervisorEvents—Added new events for Supervisor Barge In.

## Updates for Spring ’22

New topics:

-   [Add Contact Center Channels to Enable Routing](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_automated_phone_list.htm "To let customers configure call routing for voice calls and to determine when to create an End User record, create a phone channel. After creating a phone channel, you can set up a caller ID tool to create or reuse an End User record. You can also choose whether to associate the End User record with the number dialed.")
-   [Add a Partner Settings UI to Omni-Channel](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_partner_settings_ui.htm "Partners can launch a Lightning component from the Omni-Channel widget with their own additional settings. This Lightning component is shown in the Additional Settings section along with other common rep settings.")
-   [Two-Way Rep Status Syncing](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_agent_status_syncing.htm "Rep status (that is, rep presence) can be changed from the Omni-Channel widget, which sends status information to the partner connector. We added the ability to change the rep status from the connector, which passes status information back to Salesforce.")
-   [Automated Key Provisioning](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_key_provisioning.htm "When a contact center is created and connected with the partner telephony system, the public key for the contact center can be provisioned automatically with an Apex call to the partner system.")
-   [Supervisor Listen In](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_supervisor_listen_in.htm "When a rep belongs to a supervised group, a supervisor can monitor their active calls using the Supervisor Panel.")
-   [Outbound Dialers](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_outbound_dialers.htm "You can use a preview dialer or a progressive dialer with Service Cloud Voice for Partner Telephony.")
-   [Line-Specific Controls](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_line_specific_controls.htm "We now support enabling and disabling the Remove Participant UI control for each participant during a conference call. For example, you can disable the Remove Participant UI control for the primary caller.")
-   Supervisor API
-   Universal Call Recording Playback in [Call Recordings](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_record_calls.htm "Each voice call supports one call recording. If a participant is added to the call, each of the component voice calls can be updated to list the recording URL and duration details.")

Changes to existing topics:

-   [Apex Reference](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.")—Added KeyProvider and PhoneNumberProvider.
-   ConversationVendorInfo—Added keyProvisioningSupported, partnerPhoneNumberSupported, and universalCallRecordingAccessSupported.
-   Connector API
    -   publishEvent—Added supervisor events.
    -   AgentStatusInfo—New class.
    -   CallInfo—New class.
-   [Troubleshooting](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_troubleshooting.htm "Review tips for troubleshooting common problems.")—Added a Download Connector Logs section.

## Related Topics

- Manage Multiparty Calls and Consult Calls (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_multiparty_consult_calls.htm)
- Call Scenario Diagrams (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_call_scenario_diagrams.htm)
- Develop a Telephony System Login Page (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_telephony_login_page.htm)
- custom demo
                        connector (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_demo_connector.htm)
- Unified Routing (Beta) (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_unified_routing.htm)
- Disable Call Actions (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_disable_calls.htm)
- Headset Support (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_enable_headset.htm)
- Desk Phone
                        Support (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_desk_phone_support.htm)
- Create a Salesforce DX Project (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm)
- Let Reps Control the Callback Experience (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_click_to_dial_callbacks.htm)
