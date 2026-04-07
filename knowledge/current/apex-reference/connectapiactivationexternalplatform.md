---
title: "ConnectApi.ActivationExternalPlatform"
domain: apex-reference
topic: connectapiactivationexternalplatform
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:07.078Z
estimatedTokens: 392
keywords: [ConnectApi.ActivationExternalPlatform, activation, external, platform]
---

> Represents information about an activation external platform.

# ConnectApi.ActivationExternalPlatform

Represents information about an activation external platform.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributeConfig | ConnectApi.ActivationExternalPlatformAttributeConfig | Attribute configuration for the external platform. | 64.0 |
| createdBy | ConnectApi.CdpUser | User who created the external platform. | 57.0 |
| createdDate | String | When the external platform was created. | 57.0 |
| creationType | ActivationPlatformCreationTypeEnum | Creation type of the external platform.JsonManual | 64.0 |
| id | String | The 18-character ID of the external platform. | 57.0 |
| keyPrefixName | String | Namespace prefix of the external platform. | 64.0 |
| label | String | Label of the external platform. | 57.0 |
| lastModifiedBy | ConnectApi.CdpUser | User who last modified the external platform. | 57.0 |
| lastModifiedDate | String | When the external platform was last modified. | 57.0 |
| name | String | Name of the external platform. | 57.0 |
| namespace | String | Name space of the external platform. | 57.0 |
| privacyType | ActivationPlatformPrivacyTypeEnum | Privacy type of the external platform.NotApplicableServiceProviderThirdPartyUpdateFailed | 64.0 |
| status | ActivationPlatformStatusEnum | Status of the external platform.ActiveErrorInactiveProcessing | 64.0 |
| type | ActivationPlatformTypeEnum | Platform type of the external platform.AdvertisingAnalyticsMarketingPublishingTechnology | 64.0 |
| url | String | URL of the external platform. | 57.0 |

## Related Topics

- ConnectApi.ActivationExternalPlatformAttributeConfig (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_external_platform_attribute_config.htm)
- ConnectApi.CdpUser (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_user.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ActivationPlatformCreationTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ActivationPlatformPrivacyTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ActivationPlatformStatusEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ActivationPlatformTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
