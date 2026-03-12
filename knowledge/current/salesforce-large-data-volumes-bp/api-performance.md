---
title: "API Performance"
domain: salesforce-large-data-volumes-bp
topic: api-performance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.974Z
estimatedTokens: 416
keywords: [API, Performance, customer, designed, custom, integration, synchronize, Salesforce, data, external, applications, Situation, Solution]
---

# API Performance

> The customer designed a custom integration to synchronize Salesforce data with external customer
    applications.

# API Performance

## Situation

The customer designed a custom integration to synchronize Salesforce data with external customer applications.

The integration process involved:

-   Querying Salesforce for all data in a given object
-   Loading this data into the external systems
-   Querying Salesforce again to get IDs of all the data, so the integration process could determine what data had been deleted from Salesforce

The objects contained several million records. The integration also used a specific API user that was part of the sharing hierarchy to limit the records retrieved. The queries were taking minutes to complete.

In Salesforce, sharing is a very powerful mechanism for making certain records visible to a certain user, and it works very well for UI interactions. However, when used as a high-volume data filter in a SOQL query, performance can suffer because data access is more complex and difficult to process when you use sharing as a filter, especially if you are trying to filter out records in a large data volume situation.

## Solution

The solution was to give the query access to all the data, and then to use selective filters to get the appropriate records. For example, using an administrator as the API user would have provided access to all of the data and prevented sharing from being considered in the query.

An additional solution would have been to create a delta extraction, lowering the volume of data that needed to be processed.

You can find more information about how sharing can affect performance in [Platform Sharing Architecture](https://architect.salesforce.com/fundamentals/platform-sharing-architecture).
