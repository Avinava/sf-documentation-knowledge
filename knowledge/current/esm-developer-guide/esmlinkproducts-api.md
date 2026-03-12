---
title: "ESM_LinkProducts API"
domain: esm-developer-guide
topic: esmlinkproducts-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.943Z
estimatedTokens: 36
keywords: [ESM_LinkProducts, API, Saves, QLI, product, relationship, ESM, _LinkProducts, URI, HTTP]
---

# ESM_LinkProducts API

> Saves QLI product relationship.

# ESM\_LinkProducts API

Saves QLI product relationship.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/ESM_LinkProducts/
```

```
{
“LineItemLinkage”: {
“0QLRN0000001DyI4AU”: {
“07c087bf-a89b-98e0-8d70-a70318f7462f”: [
{
“id”: “0QLRN0000001DyD4AU”,
“assetReferenceId”: “afa9aa70-532b-84c9-7c9d-431d61134084”
}
]
}
},
“cartId”: “0Q0RN0000000q9P0AQ”
}
```

```
{
“error”: “OK”,
“errorCode”: “INVOKE-200",
“relationsDeleted”: {},
“relationsAdded”: [
{
“vlocity_rud236__RelatedQuoteLineItemId__r”: {
“Product2": {
“Id”: “01tRN000000KVzrYAG”,
“Name”: “iPhone 12",
“attributes”: {
“url”: “/services/data/v55.0/sobjects/Product2/01tRN000000KVzrYAG”,
“type”: “Product2”
}
},
“Id”: “0QLRN0000001DyD4AU”,
“Product2Id”: “01tRN000000KVzrYAG”,
“attributes”: {
“url”: “/services/data/v55.0/sobjects/QuoteLineItem/0QLRN0000001DyD4AU”,
“type”: “QuoteLineItem”
}
},
“Id”: “a3bRN0000000ClAYAU”,
“vlocity_rud236__RelatedAssetReferenceId__c”: “afa9aa70-532b-84c9-7c9d-431d61134084",
“vlocity_rud236__RelationshipType__c”: “ReliesOn”,
“vlocity_rud236__RelatedQuoteLineItemId__c”: “0QLRN0000001DyD4AU”,
“vlocity_rud236__QuoteLineItemId__c”: “0QLRN0000001DyI4AU”,
“vlocity_rud236__QuoteId__c”: “0Q0RN0000000q9P0AQ”,
“vlocity_rud236__ProductRelationshipIdentifier__c”: “07c087bf-a89b-98e0-8d70-a70318f7462f”,
“Name”: “a3bRN0000000ClA”,
“attributes”: {
“url”: “/services/data/v55.0/sobjects/vlocity_rud236__QuoteLineItemRelationship__c/a3bRN0000000ClAYAU”,
“type”: “vlocity_rud236__QuoteLineItemRelationship__c”
}
}
]
}
```
