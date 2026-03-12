---
title: "Send Additional Call Information"
domain: voice-pt-developer-guide
topic: send-additional-call-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.895Z
estimatedTokens: 530
keywords: [Send, Additional, Call, disable, certain, handling, options, end, dial, pad, phone, book, softphone]
---

# Send Additional Call Information

> You can disable certain call handling options such as end call, dial pad, and phone book
  in the softphone.

# Send Additional Call Information

You can disable certain call handling options such as end call, dial pad, and phone book in the softphone.

Use the [CALL\_UPDATED](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm) event to send additional information during a call to disable certain call handling options such as end call, dial pad, and phone book in the softphone. This event uses the [CallResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callresult.htm) class object, so you can use the [CallInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_callinfo.htm) object to update the softphone controls. This event can be published during the call.

When implementing the [getVoiceCapabilities()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm), set the value of the required field of the [VoiceCapabilitiesResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_voicecapabilitiesresult.htm) to disable the corresponding option in the softphone. For example, to disable the dial pad, when implementing [getVoiceCapabilities()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm), set the value of the isDialPadDisabled field of [VoiceCapabilitiesResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_voicecapabilitiesresult.htm) to true.
