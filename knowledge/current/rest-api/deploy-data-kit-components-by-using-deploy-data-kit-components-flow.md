---
title: "Deploy Data Kit Components by Using Deploy Data Kit Components Flow"
domain: rest-api
topic: deploy-data-kit-components-by-using-deploy-data-kit-components-flow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.190Z
estimatedTokens: 315
keywords: [Deploy, Data, Kit, Components, Flow, Deploys, sequentially, call, Flow_InterviewGuid, REST, API, version, 61.0, later, URI]
---

# Deploy Data Kit Components by Using Deploy Data Kit Components Flow

> Deploys data kit components sequentially in one call. The response body contains the
      Flow_InterviewGuid. This flow is available by using the REST API version
    61.0 and later.

# Deploy Data Kit Components by Using Deploy Data Kit Components Flow

Deploys data kit components sequentially in one call. The response body contains the Flow\_InterviewGuid. This flow is available by using the REST API version 61.0 and later.

## URI

/services/data/v61.0/actions/custom/flow/sfdatakit\_\_DeployDataKitComponents

## Formats

JSON, XML

## HTTP Methods

POST

## Authentication

Authorization: Bearer token

## Properties

| Name | Type | Description |
| --- | --- | --- |
| dataKitComponentsInput | Array of sfdatakit__DeployComponentInput | Required. A collection of data kit components to deploy. The collection list contains the payload details about the components. |
| dataKitNameInput | Text | Required. The data kit name that contains the components. |
| dataKitDataSpaceInput | Text | Optional. The name of the data space to deploy the data kit. If a data space isn’t defined, the system deploys the components in the default data space. |

## Example

This example request triggers the Deployed Data Kit Components flow to deploy the data stream bundle, data lake objects, and data transforms components from the MyTestDatakit data kit.

Example Request

```

```

Example Request Body

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/actions/custom/flow/sfdatakit__DeployDataKitComponents
```

```
{
  "inputs": [
    {
      "dataKitComponentsInput": [
        {
          "componentType": "DataStreamBundle",
          "bundleConfig": {
            "connectorType": "CRM",
            "bundleName": "CRMBundleTest",
            "forceNoRefresh": true,
            "bundleCRMConfig": {
              "orgId": "00DU200000051Q5"
            }
          }
        },
        {
          "componentType": "DataLakeObject",
          "dloConfig": {
            "dataSourceObjectDevName": "Account_A_New_DLO",
            "apiName": "Account_A_New_DLO",
            "label": "Account A New DLO"
          }
        },
        {
          "componentType": "DataLakeObject",
          "dloConfig": {
            "dataSourceObjectDevName": "Account_P_New_DLO",
            "apiName": "Account_P_New_DLO",
            "label": "Account P New DLO"
          }
        },
        {
          "componentType": "DataTransform",
          "dataTransformConfig": {
            "dataTransformType": "BATCH",
            "dataTransformDevName": "BatchTransformAccount",
            "apiName": "BatchTransformAccount",
            "label": "BatchTransformAccount"
          }
        }
      ],
      "dataKitNameInput": "MyTestDatakit",
      "dataKitDataSpaceInput": "default"
    }
  ]
}
```

```
{
        "actionName": "sfdatakit__DeployDataKitComponents",
        "errors": null,
        "invocationId": null,
        "isSuccess": true,
        "outputValues": {
            "Flow__InterviewGuid": "43c0ccb801784ff02fa0c8a1919b1877f5-605b",
            "Flow__InterviewStatus": "Waiting"
        },
        "sortOrder": -1,
        "version": 1
    }
```
