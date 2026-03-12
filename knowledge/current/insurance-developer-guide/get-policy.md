---
title: "Get Policy"
domain: insurance-developer-guide
topic: get-policy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.483Z
estimatedTokens: 280
keywords: [Policy, Output, representation]
---

# Get Policy

> Output representation of policy details.

# Get Policy

Output representation of policy details.

JSON example

This example shows a sample response when you pass a policy ID in the get policy request.

```

```

This example shows a sample response when you pass the contextOnly query parameter as true in the request. When the contextOnly parameter is true, the API returns a context ID along with the insurance policy details.

```

```

This example shows a sample response when expand\[attributes\] query parameter is set to true.

```

```

This example shows a sample response for the get policy request with additional fields. The request returns a list of field-set IDs when the operator is $in and a single field-set ID when the operator is $eq.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context. | Small, 63.0 | 63.0 |
| error | Error Response | List of errors encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| insurancePolicy | Map<String, Object> | Details of insurance policy. | Small, 63.0 | 63.0 |

## Code Examples

```
{  
   “insurancepolicy” : {
      “id” : “xxxxxxxXxx”,
      “policyName” : “policyName”,
      “policyNumber” : “PN-10012”,
      “universalPolicyNumber” : “TNS-123981”,
      “effectiveFromDate” : “2023/01/01”, //ISO format - yyyy-mm-dd
      “effectiveToDate” : “2023/12/31”,
      ..
      ..
      “insurancePolicyCoverages” : [
                        {
                            “coverageName” : “Collision”,
                            “effectiveFromDate” : “2023/01/01”,
                            “effectiveToDate” : “2023/12/31”,
                            ..
                            ..
                        },
                        {
                            “coverageName” : “Theft Protection”,
                            “effectiveFromDate” : “2023/01/01”,
                            “effectiveToDate” : “2023/12/31”,
                            ..
                            ..
                        }
                  ]
      “insurancePolicyAssets” : [
            {
                  “assetName” : “Audi A3”,
                  “effectiveFromDate” : “2023/01/01”,
                  “effectiveToDate” : “2023/12/31”,
                  ..
                  ..
                  “insurancePolicyCoverages” : [
                        {
                            “coverageName” : “Collision”,
                            “effectiveFromDate” : “2023/01/01”,
                            “effectiveToDate” : “2023/12/31”,
                            ..
                            ..
                        },
                        {
                            “coverageName” : “Theft Protection”,
                            “effectiveFromDate” : “2023/01/01”,
                            “effectiveToDate” : “2023/12/31”,
                            ..
                            ..
                        }
                  ]
            },
            {
                  “assetName” : “Audi A4”,
                  “effectiveFromDate” : “2023/01/01”,
                  “effectiveToDate” : “2023/12/31”,
                  ..
                  ..
                  “insurancePolicyCoverages” : [
                        {
                            “coverageName” : “Collision”,
                            “effectiveFromDate” : “2023/01/01”,
                            “effectiveToDate” : “2023/12/31”,
                            ..
                            ..
                        },
                        {
                            “coverageName” : “Theft Protection”,
                            “effectiveFromDate” : “2023/01/01”,
                            “effectiveToDate” : “2023/12/31”,
                            ..
                            ..
                        }
                  ]
            }
      ]
   }                                                                  
}
```

```
{
    "contexId": "e02036acf464f323f197c200895fec48a6a62ae3c711b3603609f08817c4af48
",
    "insurancePolicy": {}
}
```

```
{
    "insurancePolicy": {
        "effectiveFromDate": "2024-01-01",
        "effectiveToDate": "2024-09-29",
        "originalEffectiveFromDate": "2024-01-01",
        "originalEffectiveToDate": "2024-12-31",
        "active": true,
		....
....
        "grossWrittenPremium": 1678.28,
        "insurancePolicyAssets": [
            {
                "effectiveFromDate": "2024-01-01",
                "effectiveToDate": "2024-09-29",
                "assetName": "Auto Bundle",
                "id": "0YWSG0000000N4f4AE",
			....
			....
                "insurancePolicyAssets": [],
                "insurancePolicyParticipants": [
                    {
                        "effectiveFromDate": "2024-01-01",
                        "effectiveToDate": "2024-09-29",
                        "id": "0aoSG000000sNvhYAE",
				....
				....
                        "insurancePolicyAssets": [],
                        "insurancePolicyCoverages": [],
                        "insurancePolicyParticipants": [],
                        "insurancePolicyParticipantAttributes": [
                            {
                                "id": "19USG0000004r382AA",
                                "attributeDefinitionId": "0tjSG00000049D8YAI",
                                "attributeName": "DriverAccidents",
                                "attributeValue": "2.0",
                                "insurancePolicyParticipantId": "0aoSG000000sNvhYAE"                            }
                        ],
                        "additionalFields": {}
                    }
                ],
                "insurancePolicyCoverages": [
                    {
                        "coverageName": "Comprehensive",
                        "id": "0cYSG0000005gt32AA",
                        "insurancePolicyAssetId": "0YWSG0000000N4f4AE",
                        "insurancePolicyId": "0YTSG000000233R4AQ",
                        "name": "IPC-00000034",
				....
				....
                        "insurancePolicyCoverageAttributes": [
                            {
                                "id": "19VSG0000004r2w2AA",
                                "attributeDefinitionId": "0tjSG00000049DjYAI",
                                "attributeName": "LimitBI",
                                "attributeValue": "100",
                                "insurancePolicyCoverageId": "0cYSG0000005gt32AA"
                            },
				....
				....
                            {
                                "id": "19VSG0000004r342AA",
                                "attributeDefinitionId": "0tjSG00000049DXYAY",
                                "attributeName": "RentalNumDays",
                                "attributeValue": "10",
                                "insurancePolicyCoverageId": "0cYSG0000005gt32AA"
                            } 
                        ],
                        "additionalFields": {}
                    }
                ],
                "insurancePolicyAssetAttributes": [
                    {
                        "id": "19QSG0000004r2X2AQ",
                        "attributeDefinitionId": "0tjSG00000049E4YAI",
                        "attributeName": "Body Type",
                        "attributeValue": "NA",
                        "insurancePolicyAssetId": "0YWSG0000000N4f4AE"
                    },
			....
			....
                    {
                        "id": "19QSG0000004r2Y2AQ",
                        "attributeDefinitionId": "0tjSG00000049DIYAY",
                        "attributeName": "Alternative Fuel",
                        "attributeValue": "NA",
                        "insurancePolicyAssetId": "0YWSG0000000N4f4AE"
                    }
                ],
                "additionalFields": {}
            }
        ],
        "additionalFields": {}
    }
}
```

```
// GET /connect/insurance/policies/0YTSG000000233R4AQ?_qs=expand[additionalFields][fieldSet][$in]=0IXSG000001ADt34AG,0IXSG000001AUqf4AG,0IXSG000001AUp34AG,0IXSG000001AUsH4AW
                                  

{
    "insurancePolicy": {
        "effectiveFromDate": "2024-01-01",
        "effectiveToDate": "2024-09-29",
        ....
        ....
        "insurancePolicyAssets": [
            {
                "effectiveFromDate": "2024-01-01",
                "effectiveToDate": "2024-09-29",
                "assetName": "Auto Bundle",
                "id": "0YWSG0000000N4f4AE",
                "assetCode": "BMW",
			....
                "insurancePolicyAssets": [],
                "insurancePolicyParticipants": [
                    {
                        "effectiveFromDate": "2024-01-01",
                        "effectiveToDate": "2024-09-29",
                        "id": "0aoSG000000sNvhYAE",
                        "insurancePolicyId": "0YTSG000000233R4AQ",
                        "name": "IPP-00000032",  
				....
				....

                        "insurancePolicyParticipantAttributes": [],
                        "additionalFields": {
                            "InsurancePolicyId": "0YTSG000000233R4AQ",
                            "EffectiveFromDate": "2024-01-01",
                            "Id": "0aoSG000000sNvhYAE"
                        },                       
                    }
                ],
                "insurancePolicyCoverages": [
                    {
                        "coverageName": "Comprehensive",
                        "id": "0cYSG0000005gt32AA",
                        "insurancePolicyAssetId": "0YWSG0000000N4f4AE",
				....

                        },
                        "insurancePolicyCoverageAttributes": [],
                        "additionalFields": {
                            "CoverageName": "Comprehensive",
                            "Id": "0cYSG0000005gt32AA"
                        }
                    }
                ],
                "insurancePolicyAssetAttributes": [],
                "additionalFields": {
                    "Name": "IPA-00000035"
                } 
            }
        ],
        "additionalFields": {
            "CheckboxField__c": true,
            "EffectiveFromDate": "2024-01-01",
            "Name": "Admin User Policy001"
        }
    }
}
```
