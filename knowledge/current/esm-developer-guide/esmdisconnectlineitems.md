---
title: "ESM_DisconnectLineItems"
domain: esm-developer-guide
topic: esmdisconnectlineitems
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:32.245Z
estimatedTokens: 44
keywords: [ESM_DisconnectLineItems, Disconnects, quote, line, items, sales, ESM, _DisconnectLineItems, URI, HTTP]
---

> Disconnects one or more quote line items from the sales
        quote.

# ESM\_DisconnectLineItems

Disconnects one or more quote line items from the sales quote.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/ESM_DisconnectLineItems
```

```
{
    "RootItemIds": [
        {
            "Id": "0QLHs00000880GnOAI"
        }
    ],
    "SalesQuoteId": "0Q0Hs000003odTpKAI",
    "actionType": "Disconnect"
}
```
