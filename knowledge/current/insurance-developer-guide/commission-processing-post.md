---
title: "Commission Processing (POST)"
domain: insurance-developer-guide
topic: commission-processing-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.058Z
estimatedTokens: 184
keywords: [Commission, Processing, POST, Process, statements, asynchronous, manner, preconfigured, batch, job]
---

# Commission Processing (POST)

> Process commission statements in an asynchronous manner using a preconfigured batch
    job.

# Commission Processing (POST)

Process commission statements in an asynchronous manner using a preconfigured batch job.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| commissionStatementIds | Object | List of commission statement IDs to be processed. | Required | 63.0 |

Response body for POST

[Insurance Commission Processing](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_commission_processing_output.htm "Output representation details of the commission processing.")

## Code Examples

```
/connect/insurance/brokerage/commission/process
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/brokerage/commission/process
```

```
{
  "commissionStatementIds": [
    "199TC0000003kxZYAQ"
  ]
}
```

## Related Topics

- Insurance Commission Processing (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_commission_processing_output.htm)
