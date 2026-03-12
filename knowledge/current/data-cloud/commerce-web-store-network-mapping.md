---
title: "Commerce: Web Store Network Mapping"
domain: data-cloud
topic: commerce-web-store-network-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.157Z
estimatedTokens: 210
keywords: [Commerce, Web, Store, Network, Mapping, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects]
---

# Commerce: Web Store Network Mapping

> After a data stream is deployed, the Commerce starter data bundle
   automatically maps data from Commerce Cloud to data model objects (DMOs) in Data Cloud.
   WebStoreNetwork data represents the relationship between a web store and an experience
  site.

# Commerce: Web Store Network Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMOs) in Data Cloud. WebStoreNetwork data represents the relationship between a web store and an experience site.

## DLO to DMO Mapping

These data mappings relate to the WebStoreNetwork object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Created Date | date | WebStoreNetwork | Created Date |
| Last Modified Date | date | WebStoreNetwork | Last Modified Date |
| Site ID | reference | WebStoreNetwork | Website |
| Store ID | reference | WebStoreNetwork | Web Store |
| Store Site ID | reference | WebStoreNetwork | Website Web Store ID |
