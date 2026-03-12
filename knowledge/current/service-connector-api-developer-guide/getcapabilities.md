---
title: "getCapabilities"
domain: service-connector-api-developer-guide
topic: getcapabilities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.400Z
estimatedTokens: 246
keywords: [getCapabilities, partner, telephony, capabilities, Availability]
---

# getCapabilities

> Get the partner telephony capabilities.

# getCapabilities

Get the partner telephony capabilities.

## Availability

This method is available in API version 61.0 and earlier. In API version 62.0 and later, use [getSharedCapabilities](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getsharedcapabilities.htm "Get the capabilities that are shared across partner telephony and Messaging channels for Bring Your Own Channel and Bring Your Own Channel for CCaaS.") or [getVoiceCapabilities](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm "Get the partner telephony capabilities.") instead.

## Signature

getCapabilities() → Promise.<[CapabilitiesResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_capabilitiesresult.htm "Represents the result type for the rep capabilities.")\>

## Related Topics

- getSharedCapabilities (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getsharedcapabilities.htm)
- getVoiceCapabilities (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getvoicecapabilities.htm)
- CapabilitiesResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_capabilitiesresult.htm)
