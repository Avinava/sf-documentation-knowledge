---
title: "ConnectApi.ActivationTarget"
domain: apex-reference
topic: connectapiactivationtarget
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.191Z
estimatedTokens: 606
keywords: [ConnectApi.ActivationTarget, activation, target]
---

# ConnectApi.ActivationTarget

> Represents an activation target.

# ConnectApi.ActivationTarget

Represents an activation target.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| connector | ConnectApi.DataConnector | Details about the connector that is used for the activation target. | 60.0 |
| dataSpace | String | Data space name for the activation target. | 60.0 |
| description | String | Description of the activation target. | 60.0 |
| egressProperties | ConnectApi.EgressPropertiesRepresentation | Egress properties for the activation target, which are applicable only for file-based activation targets. | 60.0 |
| historyAudienceDmoApiName | String | API name for the history audience DMO. | 60.0 |
| historyAudienceDmoLabel | String | Name of the history audience DMO. | 60.0 |
| isCappingEnabled | Boolean | Indicates whether communication capping is enabled for the activation (true) or not (false). | 60.0 |
| isEnabled | Boolean | Indicates whether the activation target is enabled (true) or not (false). | 60.0 |
| latestAudienceDmoApiName | String | API name for the latest audience DMO. | 62.0 |
| latestAudienceDmoLabel | String | Name of the latest audience DMO. | 62.0 |
| organizationId | String | Organization ID of the activation target. | 60.0 |
| platformName | String | Platform name for the activation target. | 60.0 |
| platformPrivacyType | String | Platform privacy type for the activation target. Derived from Activation Platform. | 60.0 |
| platformType | DataConnectorTypeEnum | Data connector type of the activation target.AmazonS3AzureBlobDataCloudGoogleCloudStorageSalesforceMarketingCloudSftp | 60.0 |
| status | ActivationTargetStatusEnum | Status of the activation target.ActiveProcessingErrorInactive | 60.0 |

#### See Also

-   [createActivationTarget(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_createActivationTarget_3 "Create an activation target.")

-   [getActivationTarget(activationTargetId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTarget_1 "Get an activation target by ID.")

-   [updateActivationTarget(activationTargetId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_updateActivationTarget_2 "Update an activation target.")

## Related Topics

- ConnectApi.DataConnector (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_connector.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.EgressPropertiesRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_egress_properties.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- DataConnectorTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ActivationTargetStatusEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- createActivationTarget(input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
- getActivationTarget(activationTargetId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
- updateActivationTarget(activationTargetId, input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
