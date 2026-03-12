---
title: "Insurance Quote"
domain: insurance-developer-guide
topic: insurance-quote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.665Z
estimatedTokens: 201
keywords: [Insurance, Quote, Output, representation]
---

# Insurance Quote

> Output representation of the details of the insurance quote.

# Insurance Quote

Output representation of the details of the insurance quote.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| configMessages | Insurance Configurator Message[] | List of insurance quote configurator messages. | Small, 63.0 | 63.0 |
| contextId | String | ID of the context. | Small, 63.0 | 63.0 |
| errors | Error Response | List of errors encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| quoteDetails | Map<String, Object> | Details of the insurance quote. | Small, 63.0 | 63.0 |
| quoteId | String | ID of the quote. | Small, 63.0 | 63.0 |
| success | Boolean | Indicates whether the API request is successful ( true) or not ( false). | Small, 63.0 | 63.0 |

## Code Examples

```
{
    "quoteId" : "0Q0xx0000004E2mCAE",
    "contextId" : "98977d60d58a614485280fe430afded87290baa9a6ad6bfec889df75ef11008e"
    "errors" : [],
    "success" : true
 }
```

## Related Topics

- Insurance Configurator Message (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_config_message_output.htm)
