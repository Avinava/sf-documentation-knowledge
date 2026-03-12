---
title: "init"
domain: service-connector-api-developer-guide
topic: init
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.424Z
estimatedTokens: 156
keywords: [init, Initialize, Connector, API]
---

# init

> Initialize the Connector API Interface.

# init

Initialize the Connector API Interface.

## Signature

init(connectorConfig) → Promise.<[InitResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_initresult.htm "Represents the result type for the init call.")\>

## Parameters

| Field | Details |
| --- | --- |
| connectorConfig | TypeobjectDescriptionThis object includes the entire call center configuration along with the following values:scvVendorLoginUrlisACWAllowedcallCenterIdorganizationIdscrtUrlphoneServiceChannelNamecallCenterTypephoneServiceChannelIdorgDomainNameuserNameuserId |

## Related Topics

- InitResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_initresult.htm)
