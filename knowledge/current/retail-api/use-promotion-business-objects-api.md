---
title: "Use Promotion Business Objects API"
domain: retail-api
topic: use-promotion-business-objects-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.811Z
estimatedTokens: 383
keywords: [Promotion, Business, Objects, API, accessed, REST, Aura, Components, Lightning, Web, Component]
---

# Use Promotion Business Objects API

> Promotion Business Object API can be accessed through REST API, Aura Components, and
        Lightning Web Component.

# Use Promotion Business Objects API

Promotion Business Object API can be accessed through REST API, Aura Components, and Lightning Web Component.

## REST API

To process records with Promotion BO API, you need to use the provided REST endpoints in the defined process:

1.  Initialize a transaction with the number of records to process:
    1.  URL: <ORG INSTANCE>/services/apexrest/cgcloud/promotions/initialize

        METHOD: POST

        PAYLOAD:

        ```

        ```

    2.  This request returns an import ID that should be passed to every subsequent requests.
2.  Queue the records to process in blocks of 50 records.
    1.  URL: <ORG INSTANCE>/services/apexrest/cgcloud/promotions/ingest

        METHOD: POST

        PAYLOAD:

        ```

        ```

    2.  Each call can contain up to 50 records.
    3.  You can send as many requests to fill the “nrOfItems” defined in the request sent to initialize a transaction.
3.  Monitor the process.
    1.  URL: <ORG INSTANCE>/services/apexrest/cgcloud/promotions/status?importId=<import Id>

        METHOD: GET

    2.  This returns the status for all records part of the transaction.

## Aura

You can send requests to the Promotion BO API from an Aura Component.

Component markup

```

```

Component controller

```

```

## Lightning Web Component

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

Only available when Lightning Web Security is enabled in the organization.

Component controller

```

```

## Code Examples

```
{
    “nrOfItems” : 500, // Number of records for the transaction
    “salesOrg”: “0001” // Sales Org of the records
}
```

```
{
    “importId” : ”3121b14e-f370-4c1b-8b09-b9323ea38216”, // Import Id received from previous request.
    “workflow”: “create” // Workflow name to execute
    “salesOrg” : “0001” // Sales org
    “promotions”: [...] // Array of up to 50 records where each record represents a Promotion.
}
```

```
...
<cgcloud:PromotionBoApi aura:id="bo-api"></cgcloud:PromotionBoApi>
...
```

```
...
const boApi = component.find("bo-api");

// Receives a workflow name and a list of promotion objects
// Supports up to 10000 records
boApi.queue(workflowName, promotionList) 
.then((result) => {
    // Resolves after the promotions have been enqueued for BO API processing
    // returns the import id
    // Promotions are processed asynchronously
});

// Receives a workflow name and a single promotion
boApi.process(workflowName, promotion) 
.then((result) => {
    // Resolves after the promotion has been processed and committed to database (synchronous)
    // Result contains the processed promotion id 
});
...
```

```
import { process, queue } from 'cgcloud/tpmBoApi';

...
// Receives a workflow name and a list of promotion objects
// Supports up to 10000 records
queue('Promotion', workflowName, promotionList) 
.then((result) => {
    // Resolves after the promotions have been enqueued for BO API processing
    // returns the import id
    // Promotions are processed asynchronously
});

// Receives a workflow name and a single promotion
process('Promotion', workflowName, promotion) 
.then((result) => {
    // Resolves after the promotion has been processed and committed to database (synchronous)
    // Result contains the processed promotion id 
});
...
```
