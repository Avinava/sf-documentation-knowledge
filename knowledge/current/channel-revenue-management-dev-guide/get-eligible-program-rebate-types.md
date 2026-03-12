---
title: "Get Eligible Program Rebate Types"
domain: channel-revenue-management-dev-guide
topic: get-eligible-program-rebate-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.803Z
estimatedTokens: 692
keywords: [Eligible, Program, Rebate, Retrieve, mapped, REST, HTTP, Inputs, Outputs, Usage]
---

# Get Eligible Program Rebate Types

> Retrieve the eligible program rebate types for a mapped
  object.

# Get Eligible Program Rebate Types

Retrieve the eligible program rebate types for a mapped object.

For more information about how to use the getEligibleProgramRebateTypes action in Flow Builder, see [Configure the Output Parameter for the Get Eligible Program Rebate Types Flow Action in Flow Builder](https://help.salesforce.com/s/articleView?id=xcloud.admin_rebates_add_output_variable.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

This object is available in API version 52.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/getEligibleProgramRebateTypes

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| appliedRebateTypesLimit | TypeintegerDescriptionThe maximum number of search results to be returned for the applied rebate types. The input value is passed through to the output parameter.This field is available in API version 54.0 and later. |
| appliedRebateTypesOffset​Input | TypeintegerDescriptionThe input offset for the applied rebate types search results plus the number of applied rebates types processed. Used to process applied rebate types in a loop. When all applied rebate types have been processed, zero is returned.This field is available in API version 54.0 and later. |
| limit | TypeintegerDescriptionThe maximum number of search results to be returned for the eligible rebate types. |
| measureTypeFilter | TypearrayDescriptionFilters the eligible rebate types by the specified measure type. |
| offset | TypeintegerDescriptionThe offset for the eligible rebate types search results. The offset parameter specifies the end of the last batch retrieved. For example, to retrieve 100 rebate types at a time:Request the first 100 with an offset of 0.Request the second 100 with an offset of 100.Request the third 100 with an offset of 200. |
| queryOnlyIntegrableProgram​​​RebateTypes | TypebooleanDescriptionIndicates whether only integrable program rebate types must be queried. |
| referenceObjectIds | TypearrayDescriptionRequired. The list of IDs of the mapped object for which to get the eligible rebate types. |
| searchByRebateTypeName | TypestringDescriptionSearches the eligible rebate types by the specified name. |

## Outputs

| Output | Details |
| --- | --- |
| resultantRebateTypes | TypestringDescriptionThe list of eligible and applied rebate type IDs for the mapped object. Use with API calls. |
| resultantRebateTypes​ForFlow | TypestringDescriptionThe list of eligible and applied rebate type IDs for the mapped object. Use with Flow Builder. This field is available in API version 54.0 and later. |

## Usage

**JSON Sample Request**

```

```

**JSON Sample Response**

```

```

## Code Examples

```
{
   "inputs":[{
      "referenceObjectIds":["0lcxx00004000002AAA","0lcxx00004000002AAB"],
      "queryOnlyIntegratableProgramRebateTypes": true,
      "limit": 10,
      "offset": 5
   }]
}
```

```
{  
   resultantRebateTypes: {
      "isSuccess":true,
      "programRebateTypeIDs":[
          {ReferenceObjectID: "0lcxx00004000002AAA", eligibleRebateTypes: [0lcxx00004000003AAA,0lcxx00004000003AAB], appliedRebateTypes: [0lcxx00004000004AAA,0lcxx00004000004AAB]},
          {ReferenceObjectID: "0lcxx00004000002AAB", eligibleRebateTypes: [0lcxx00004000003AAC,0lcxx00004000003AAD], appliedRebateTypes: [0lcxx00004000005AAA,0lcxx00004000005AAB]}
      ],
      "limit": 10,
      "offset": 13,
      "appliedRebateTypesLimit": 5,
      "appliedRebateTypesOffset" 9,
      "errors":null
   },
   resultantRebateTypesV2:{
      "isSuccess":true,
      "programRebateTypeIDs":[
          {ReferenceObjectID: "0lcxx00004000002AAA", eligibleRebateTypes: [0lcxx00004000003AAA,0lcxx00004000003AAB], appliedRebateTypes: [0lcxx00004000004AAA,0lcxx00004000004AAB]},
          {ReferenceObjectID: "0lcxx00004000002AAB", eligibleRebateTypes: [0lcxx00004000003AAC,0lcxx00004000003AAD], appliedRebateTypes: [0lcxx00004000005AAA,0lcxx00004000005AAB]}
      ],
      "limit": 10,
      "offset": 13,
      "appliedRebateTypesLimit": 5,
      "appliedRebateTypesOffset": 9,
      "errors":null
   }
}
```
