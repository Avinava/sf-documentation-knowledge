---
title: "Deploy Data Kit Components Action"
domain: api-action
topic: deploy-data-kit-components-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.992Z
estimatedTokens: 1211
keywords: [Deploy, Data, Kit, Components, Action, sequentially, subscriber, org, deployDataKitComponents, invocable, Component, flow, invoke, deployment, flows]
---

# Deploy Data Kit Components Action

> Deploy data kit components sequentially in a subscriber org. The
                deployDataKitComponents invocable action is
            used in the Deploy Data Kit Component flow to invoke the deployment
            of each data kit component. This action is available for flows in API version 61.0 and
            later.

# Deploy Data Kit Components Action

Deploy data kit components sequentially in a subscriber org. The deployDataKitComponents invocable action is used in the Deploy Data Kit Component flow to invoke the deployment of each data kit component. This action is available for flows in API version 61.0 and later.

## Inputs

| Input | Details |
| --- | --- |
| dataKitComponentDeployInput | TypeApex-defined sfdatakit__DeployComponentInputDescriptionRequired. An Apex sfdatakit__DeployComponentInput payload that contains details about the components to deploy and their metadata. |
| dataKitName | TypetextDescriptionRequired. The data kit name that contains the components to get the status for. |
| dataSpaceName | TypetextDescriptionThe name of the data space to deploy the data kit to. If a data space isn't defined, the system deploys the components in the default data space. |

## Outputs

None.

## Example

The following example shows a sample input payload for the different data kit components.

| Input | Details |
| --- | --- |
| sfdatakit__DeployComponentInput.bundleConfig | TypeApex-definedInput Payload{ "inputs": [ { "dataKitComponentsInput": [ { "componentType": "DataStreamBundle", "bundleConfig": { "connectorType": "CRM", "bundleName": "hello", #full Qualified Bundle Name with namespace in datakit "forceNoRefresh": true, "bundleCRMConfig": { "orgId": "org123" #Data Org Id } } } ], "dataKitNameInput": "datakit1", "dataKitDataSpaceInput" : "default" } ] } |
| sfdatakit__DeployComponentBundleConfig.bundleConnectorFrameworkConfig | TypeApex-definedInput Payload{ "inputs": [ { "dataKitComponentsInput": [ { "componentType": "DataStreamBundle", "bundleConfig": { "connectorType": "MORECONNECTORS", "bundleName": "hello", #full Qualified Bundle Name with namespace in datakit "forceNoRefresh": true, "bundleConnectorFrameworkConfig": { "connectionName": "name" } } } ], "dataKitNameInput": "datakit1", "dataKitDataSpaceInput" : "default" } ] } |
| sfdatakit__DeployComponentBundleConfig.bundleIngestApiConfig | TypeApex-definedInput Payload{ "inputs": [ { "dataKitComponentsInput": [ { "componentType": "DataStreamBundle", "bundleConfig": { "connectorType": "INGESTAPI", "bundleName": "hello", #full Qualified Bundle Name with namespace in datakit "forceNoRefresh": true, "bundleIngestApiConfig": { "connectorName": "name" #ingestion API connector name } } } ], "dataKitNameInput": "datakit1", "dataKitDataSpaceInput" : "default" } ] } |
| sfdatakit__DeployComponentBundleConfig.bundleStreamingAppConfig | TypeApex-definedInput Payload{ "inputs": [ { "dataKitComponentsInput": [ { "componentType": "DataStreamBundle", "bundleConfig": { "connectorType": "STREAMINGAPP", "bundleName": "hello", #full Qualified Bundle Name with namespace in datakit "forceNoRefresh": true, "bundleStreamingAppConfig": { "connectorName": "name", #Streaming app connector name "streamingAppDataConnectorType": "MobileApp" #MobileApp,WebApp } } } ], "dataKitNameInput": "datakit1", "dataKitDataSpaceInput" : "default" } ] } |
| sfdatakit__DeployComponentInput.calculatedInsightsConfig | TypeApex-definedInput Payload{     "inputs": [         {             "dataKitComponentsInput": [                 {                     "componentType": "CalculatedInsight",                     "calculatedInsightsConfig": {                         "apiName": "crm",#full Qualified CI Name with namespace in datakit                         "apiNameOverride": "hello", #api name of CI to be created on org                         "label": "lab", #label of CI to be created on org                         "publishInterval":"NotScheduled" #NotScheduled,One,Six,Twelve,TwentyFour                     }                 }             ],             "dataKitNameInput": "datakit1",             "dataKitDataSpaceInput" : "default"         }     ] } |
| sfdatakit__DeployComponentInput.dloConfig | TypeApex-definedInput Payload{ "inputs": [ { "dataKitComponentsInput": [ { "componentType": "DataLakeObject", "dloConfig": { "dataSourceObjectDevName": "crm",#full Qualified DLO Name with namespace in datakit "apiName": "hello",#api name of DLO to be created on org "label": "lab"#label of DLO to be created on org } } ], "dataKitNameInput": "datakit1", "dataKitDataSpaceInput" : "default" } ] } |
| sfdatakit__DeployComponentInput.dataTransformConfig | TypeApex-definedInput Payload{ "inputs": [ { "dataKitComponentsInput": [ { "componentType": "DataTransform", "dataTransformConfig": { "dataTransformType": "BATCH", #STREAMING,BATCH "dataTransformDevName": "BatchTransformAccount",#full Qualified Transform Name with namespace in datakit "apiName":"BatchTransformAccount",#api name of Transform to be created on org "label" : "BatchTransformAccount"#label of Transform to be created on org } } ], "dataKitNameInput": "datakit1", "dataKitDataSpaceInput" : "default" } ] } |

## Code Examples

```
{
    "inputs": [
        {
            "dataKitComponentsInput": [
                {
                    "componentType": "CalculatedInsight",
                    "calculatedInsightsConfig": {
                        "apiName": "crm",#full Qualified CI Name with namespace in datakit
                        "apiNameOverride": "hello", #api name of CI to be created on org
                        "label": "lab", #label of CI to be created on org
                        "publishInterval":"NotScheduled" #NotScheduled,One,Six,Twelve,TwentyFour
                    }
                }
            ],
            "dataKitNameInput": "datakit1",
            "dataKitDataSpaceInput" : "default"
        }
    ]
}
```
