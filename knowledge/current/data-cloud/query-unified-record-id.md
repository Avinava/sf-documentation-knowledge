---
title: "Query Unified Record ID"
domain: data-cloud
topic: query-unified-record-id
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.508Z
estimatedTokens: 205
keywords: [Query, Unified, Record, Universal, Lookup, API, retrieve, individual, records, associated, source, IDs, data, sources]
---

# Query Unified Record ID

> Use the Universal ID Lookup API to retrieve all individual records
   associated with a unified record. You can query on an Individual ID from one source and get all
   the Individual IDs for that individual from other data sources.

# Query Unified Record ID

Use the Universal ID Lookup API to retrieve all individual records associated with a unified record. You can query on an Individual ID from one source and get all the Individual IDs for that individual from other data sources.

-   **[GET /api/v1/universalIdLookup/{entity\_name}/{DataSourceId\_\_c}/{DataSourceObjectId\_\_c}/{SourceRecordId\_\_c}](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_universalidlookup_entity_name_datasourceid.htm)**
    Retrieve all the Individual records of an individual from all the data sources. For example, if a runner’s profile information comes from three data sources retail sales, loyalty program, and mobile identity. A unified individual record for the runner gets created and all the individual records are assigned the same unified record id.

## Related Topics

- GET /api/v1/universalIdLookup/{entity_name}/{DataSourceId__c}/{DataSourceObjectId__c}/{SourceRecordId__c} (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_universalidlookup_entity_name_datasourceid.htm)
