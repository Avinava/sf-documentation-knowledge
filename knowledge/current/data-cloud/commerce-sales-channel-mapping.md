---
title: "Commerce: Sales Channel Mapping"
domain: data-cloud
topic: commerce-sales-channel-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:52.714Z
estimatedTokens: 215
keywords: [Commerce, Sales, Channel, Mapping, stream, deployed, starter, bundle, automatically, maps, Cloud, model, DMO, sell, goods, web, store, retail, DLO]
---

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Sales Channel data is the channel used to sell
         goods. For example, a web store or a retail store.

# Commerce: Sales Channel Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Sales Channel data is the channel used to sell goods. For example, a web store or a retail store.

## DLO to DMO Mapping

These data mappings relate to the SalesChannel object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | SalesChannel | id |
| SalesChannelName | string | SalesChannel | Name |
| Description | textarea | SalesChannel | Description |
| Type | picklist | SalesChannel | SalesChannelTypeId |
| TypeCategory | picklist | SalesChannel | BusinessModelId |
| ExternalChannelNumber | string | SalesChannel | ExternalRecordId |
