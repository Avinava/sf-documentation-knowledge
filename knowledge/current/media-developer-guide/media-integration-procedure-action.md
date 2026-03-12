---
title: "Media Integration Procedure Action"
domain: media-developer-guide
topic: media-integration-procedure-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.846Z
estimatedTokens: 488
keywords: [Media, Integration, Procedure, Action, Call, Salesforce, Flow, process, content, Special, Access, Rules, REST, HTTP, Inputs]
---

# Media Integration Procedure Action

> Call an Integration Procedure from a Salesforce Flow to process media
   content.

# Media Integration Procedure Action

Call an Integration Procedure from a Salesforce Flow to process media content.

This action is available in API version 61.0 and later.

## Special Access Rules

To access this action, ensure that you have the Media Cloud Base user permission set enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/custom/apex/vlocity\_cmt\_\_MediaIntegrationProcedureInvocable

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

The input list can contain multiple key-value pairs as needed while you invoke the Integration Procedure.

Ensure that the procedure​APIName follows the Type\_SubType format.

| Input | Details |
| --- | --- |
| input | TypestringDescriptionRequired. Specifies a list of key-value pairs passed to the Integration Procedure. |
| procedure​APIName | TypestringDescriptionRequired. Specifies the name of the Integration Procedure to execute. The default format is Type_SubType. For example, sfiAds_ProcessOrderActivation. |

## Outputs

| Output | Details |
| --- | --- |
| output | TypestringDescriptionThe output returned by the Integration Procedure. The output of this action depends on the input Integration Procedure. |

## Usage

**JSON Sample Request**

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=media_developer_guide)

#### Note

The procedure​APIName must match the name of an existing Integration Procedure in your org.

In a real scenario, replace the valid key value pairs from your Salesforce org.

**JSON Sample Response**

```

```

#### See Also

-   [*Salesforce Help*: Integration Procedure Invocation from Salesforce Flow](https://help.salesforce.com/s/articleView?id=xcloud.os_integration_procedure_invocation_from_salesforce_flow_55876.htm&type=5&language=en_US "Salesforce Help: Integration Procedure Invocation from Salesforce Flow - HTML (New Window)")

## Code Examples

```
{
  "inputs": [
    {
      "procedureAPIName": "sfiAds_ProcessOrderActivation",
      "input": [
        {
          "key": "orderIds",
          "value": "801Hu000003g4J9IAI"
        }
      ]
    }
  ]
}
```

```
[
  {
    "actionName": "vlocity_cmt__MediaIntegrationProcedureInvocable",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outputValues": {
      "output": "{"Quote_2":[{"UpsertSuccess":true,"Status":"Modified","OpportunityId":"006Hu00001atbpBIAQ","Id":"0Q0Hu000007qUxVKAU"},{"UpsertSuccess":true,"Status":"Modified","OpportunityId":"006Hu00001atbpBIAQ","Id":"0Q0Hu000007qUjzKAE"},{"UpsertSuccess":true,"Status":"Modified","OpportunityId":"006Hu00001atbpBIAQ","Id":"0Q0Hu000007qUqzKAE"},{"UpsertSuccess":true,"Status":"Modified","OpportunityId":"006Hu00001atbpBIAQ","Id":"0Q0Hu000007qUxSKAU"}],"Opportunity_1":[{"UpsertSuccess":true,"SyncedQuoteId":"0Q0Hu000007qXUfKAM","Id":"006Hu00001atbpBIAQ"}],"error":"OK","responseType":"SObject"}"
    },
    "sortOrder": 0,
    "version": 1
  }
]
```
