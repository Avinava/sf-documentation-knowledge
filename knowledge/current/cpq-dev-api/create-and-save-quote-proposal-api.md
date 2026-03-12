---
title: "Create and Save Quote Proposal API"
domain: cpq-dev-api
topic: create-and-save-quote-proposal-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.685Z
estimatedTokens: 387
keywords: [Save, Quote, Proposal, API, CPQ, REST, Examples, Apex]
---

# Create and Save Quote Proposal API

> Create and save a CPQ quote proposal.

# Create and Save Quote Proposal API

Create and save a CPQ quote proposal.

| Available in: Salesforce CPQ Winter ’19 and later |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

Salesforce CPQ doesn’t support attaching Additional Document records through API.

Formats

JSON, Apex

HTTP Method

POST

Authentication

Authorization: Bearer token

**REQUEST**

Parameter 1

Name: name

Type: String

Required: No

Description: The document name

Parameter 2

Name: paperSize

Type: String

Required: No

Description: Options: Default, Letter, Legal, A4

Parameter 3

Name: outputFormat

Type: String

Required: No

Description: Options: pdf, word. Defaults to pdf.

Parameter 4

Name: quoteID

Type: Id

Required: Yes

Description: The quote ID

Parameter 5

Name: templateId

Type: Id

Required: Yes

Description: The quote template ID

Parameter 6

Name: language

Type: String

Required: No

Description: Defaults to en\_US

**RESPONSE**

Type

jobId

Description

Apex queueable job Id

## REST Examples

```

```

The request body data.json file generates and saves a quote proposal.

```

```

An example response body after creating the Apex job for generating the quote proposal.

```

```

## Apex Examples

Before saving the GenerateQuoteProposal example class, make sure that the CPQ model classes are added as individual Apex classes in your org.

```

```

Run the following code in anonymous Apex to get Apex job ID for generating and saving the quote proposal.

```

```

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter?saver=QuoteDocumentAPI.SaveProposal" -H "Content-Type: application/json" -H
    "Authorization: Bearer token" -X PATCH -d @data.json
```

```
"{"saver":"SBQQ.QuoteDocumentAPI.Save","model":"{\\"name\\":\\"test\\",\\\
"quoteId\\":\\"a0n0R000000jhVC\\",\\"templateId\\":\\"a0l0R000000vahe\\",
\\"outputFormat\\":\\"PDF\\",\\"language\\":\\"en_US\\",\\"paperSize\\":\\"Default\\"}"}"
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
