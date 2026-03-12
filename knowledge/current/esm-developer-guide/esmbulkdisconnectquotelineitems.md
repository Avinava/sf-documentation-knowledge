---
title: "ESM_BulkDisconnectQuoteLineItems"
domain: esm-developer-guide
topic: esmbulkdisconnectquotelineitems
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.990Z
estimatedTokens: 54
keywords: [ESM_BulkDisconnectQuoteLineItems, Enable, bulk, disconnect, quote, line, items, configurable, pricing, validation, options, ESM, _BulkDisconnectQuoteLineItems, URI, HTTP]
---

# ESM_BulkDisconnectQuoteLineItems

> Enable bulk disconnect of quote line items with
        configurable pricing and validation options.

# ESM\_BulkDisconnectQuoteLineItems

Enable bulk disconnect of quote line items with configurable pricing and validation options.

## URI

```

```

## HTTP Method

POST

## Request

```

```

## Response

```

```

## Code Examples

```
/services/apexrest/vlocity_cmt/v1/integrationprocedure/ESM_BulkDisconnectQuoteLineItems
```

```
{
    "quoteId": "0Q0Hs000003odTpKAI",
    "RootItemIds": [
        "0QLHs00000880GsOAI",
        "0QLHs00000880GwOAI"
    ]
}
```

```
{
    "IPResult": {
        "asyncProcessId": "a0YHs00000HXrzGMAT",
        "asyncProcessName": "Bulk Disconnect for 0Q0Hs000003odTpKAI",
        "referenceId": "0Q0Hs000003odTpKAI_bulk_disconnect_QLIs",
        "code": 202,
        "statusMessage": "Job accepted.",
        "technicalMessage": null,
        "errorCode": "INVOKE-200",
        "error": "OK"
    },
    "errorCode": "INVOKE-200",
    "error": "OK"
}
```
