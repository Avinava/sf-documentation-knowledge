---
title: "Generate Quote Document API"
domain: cpq-dev-api
topic: generate-quote-document-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.658Z
estimatedTokens: 701
keywords: [Generate, Quote, Document, API, Creates, saves, CPQ, REST, Examples, APEX]
---

# Generate Quote Document API

> Creates and saves a CPQ quote document.

# Generate Quote Document API

Creates and saves a CPQ quote document.

| Available in: Salesforce CPQ Winter ’19 and later |
| --- |


Name

QuoteDocumentAPI.SaveProposal

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

“Proposal” refers to Salesforce CPQ’s Quote Document object.

Formats

JSON, Apex

HTTP Method

POST

Authentication

Authorization: Bearer token

Request

| Name | Type | Required | Definition |
| --- | --- | --- | --- |
| Name | String | No | The document name |
| paperSize | String | No | Values are Default, Letter, Legal, A4. Defaults to “Default.” |
| outputFormat | String | No | Values are PDF, Word. Defaults to “PDF.” |
| quoteId | ID | Yes | The quote’s ID |
| templateId | ID | Yes | The quote template’s ID |
| language | String | No | Defaults to “en_US.” |

Response

| Name | Type | Description |
| --- | --- | --- |
| jobID | ID | Apex queueable job ID |

## REST Examples

```

```

Example request body data.json file for generating and saving a quote document.

```

```

Example response body after creating the APEX job for creating the quote document.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

If the Bearer token contains special characters, enclose the Authorization header in single quotes instead of double quotes.

## APEX Examples

Before saving the GenerateQuoteProposal example class, make sure that the CPQ model classes are added as individual APEX classes in your org.

```

```

Run the following code in anonymous Apex to get the Apex job ID for generating and saving the quote proposal.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

-   Attachments marked Required are ignored when you’re using the API. In contrast, when you’re using the Preview and Generate document buttons, the attachments are automatically generated as part of the document.
-   An attachment in the Template section is always included regardless of whether it’s marked Required. This behavior is also observed when you’re using Preview and Generate document buttons.
-   Guest users can’t create quote documents in the Documents folder. See *Salesforce Help* and *SOAP API Developer Guide* for details.

#### See Also

-   [*Salesforce Help*: Guest User Security Policies and Timelines](https://help.salesforce.com/s/articleView?id=platform.networks_guest_policies_timelines.htm&type=5&language=en_US "Salesforce Help: Guest User Security Policies and Timelines - HTML (New Window)")

-   [*SOAP API Developer Guide*: Folder](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_folder.htm "SOAP API Developer Guide: Folder - HTML (New Window)")

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter?saver=QuoteDocumentAPI.SaveProposal" 
-H "Content-Type: application/json" -H "Authorization: Bearer token" -X POST -d @data.json
```

```
"{"saver":"SBQQ.QuoteDocumentAPI.Save","model":"{\\"name\\":\\"test\\",\\"quoteId\\"
:\\"a0n0R000000jhVC\\",\\"templateId\\":\\"a0l0R000000vahe\\",\\"outputFormat\\":
\\"PDF\\",\\"language\\":\\"en_US\\",\\"paperSize\\":\\"Default\\"}"}"
```

```
"7070R00000Nj8mjQAB"
```

```apex
public with sharing class GenerateQuoteProposal {
    
    public String save(QuoteProposalModel context) {
        return SBQQ.ServiceRouter.save('SBQQ.QuoteDocumentAPI.Save', JSON.serialize(context));
    }
}
```

```apex
QuoteProposalModel model = new QuoteProposalModel();
model.quoteId = 'a0n0R000000jhVC';
model.templateId = 'a0l0R000000vahe';
GenerateQuoteProposal proposalGenerator = new GenerateQuoteProposal();
String jobId = proposalGenerator.save(model);
System.debug(jobId);
```
