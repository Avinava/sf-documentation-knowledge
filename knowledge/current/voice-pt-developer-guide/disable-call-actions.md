---
title: "Disable Call Actions"
domain: voice-pt-developer-guide
topic: disable-call-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.025Z
estimatedTokens: 752
keywords: [Disable, Call, Actions, handling, options, end, dial, pad, phone, book, softphone, support, compliance, internal, policies]
---

# Disable Call Actions

> You can disable call handling options such as end call, dial pad, and phone book in the
  softphone to support compliance with internal policies and industry regulations.

# Disable Call Actions

You can disable call handling options such as end call, dial pad, and phone book in the softphone to support compliance with internal policies and industry regulations.

To disable the dial pad, when implementing [getVoiceCapabilities()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm), set the value of the isDialPadDisabled field of [VoiceCapabilitiesResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_voicecapabilitiesresult.htm) to true.

To disable the phone book, when implementing [getVoiceCapabilities()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm), set the value of the isPhoneBookDisabled field of [VoiceCapabilitiesResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_voicecapabilitiesresult.htm) to true.

To disable the End Call button, when implementing [getVoiceCapabilities()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm), set the value of the endCallDisabled field of [CallInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callinfo.htm) to true.

The [CALL\_UPDATED](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm) event is used to send additional information during a call. This event uses the CallResult class object and so you can use the [CallInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callinfo.htm) object to update the softphone controls. This event can be published during the call.

#### See Also

-   [VoiceCapabilitiesResult](https://developer.salesforce.com/docs/atlas.en-us.254.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_voicecapabilitiesresult.htm)

-   [CallInfo](https://developer.salesforce.com/docs/atlas.en-us.254.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callinfo.htm)

-   [publishEvent](https://developer.salesforce.com/docs/atlas.en-us.254.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
