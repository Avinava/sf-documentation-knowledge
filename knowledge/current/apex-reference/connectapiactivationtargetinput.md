---
title: "ConnectApi.ActivationTargetInput"
domain: apex-reference
topic: connectapiactivationtargetinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.742Z
keywords: [ConnectApi.ActivationTargetInput, See]
---

# ConnectApi.ActivationTargetInput

# ConnectApi.ActivationTargetInput

Input details for the activation target.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| connector | ConnectApi.DataConnectorInput | Details about the connector for the activation target. | Required | 60.0 |
| dataSpaceName | String | Data space name for the activation target. | Required | 60.0 |
| description | String | Description of the activation target. | Required | 60.0 |
| egressProperties | ConnectApi.EgressPropertiesInput | Egress properties for the activation target, which are applicable only for file-based activation targets. | Optional | 60.0 |
| isCappingEnabled | Boolean | Indicates whether communication capping is enabled for the activation target (true) or not (false). | Required | 60.0 |
| name | String | Name of the activation target. | Required | 60.0 |
| platformType | DataConnectorTypeEnum | Data connector type of the activation target.AmazonS3AzureBlobDataCloudGoogleCloudStorageSalesforceMarketingCloudSftp | Required | 60.0 |

#### See Also

-   [createActivationTarget(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_createActivationTarget_3 "Create an activation target.")
    
-   [updateActivationTarget(activationTargetId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_updateActivationTarget_2 "Update an activation target.")