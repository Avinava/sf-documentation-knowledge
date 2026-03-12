---
title: "CPQ API QuoteProposalModel"
domain: cpq-dev-api
topic: cpq-api-quoteproposalmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.706Z
estimatedTokens: 154
keywords: [CPQ, API, QuoteProposalModel, QuoteProposal, model, quote, document, Salesforce]
---

# CPQ API QuoteProposalModel

> The QuoteProposal model represents a quote document in Salesforce CPQ.

# CPQ API QuoteProposalModel

The QuoteProposal model represents a quote document in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| name | String | The document name. |
| paperSize | String | The paper size. Possible values are:DefaultLetterLegalA4Defaults to Default. |
| outputFormat | String | The output format. Possible values are:pdfwordDefaults to pdf. |
| quoteId | Id | The ID of your quote. |
| templateId | Id | The ID of your quote template. |
| language | String | The language code. Defaults to en_US. |

```

```

## Code Examples

```apex
public class QuoteProposalModel {
    public String name;
    public Id quoteId;
    public Id templateId;
    public String language;
    public String outputFormat;
    public String paperSize;
}
```
