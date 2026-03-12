---
title: "Priming Record Collection"
domain: chatterapi
topic: priming-record-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.401Z
estimatedTokens: 213
keywords: [Priming, Record, Collection, records, offline]
---

# Priming Record Collection

> Collection of records for offline priming.

# Priming Record Collection

Collection of records for offline priming.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| primingRecords | Map<String, Map<String, List<Priming Record>>> | List of records that match the briefcase rules grouped by object type and by record type within an object. The top-level map key is object API name (Account or MyCustomObject__c). The second-level map key is record type ID. | Small, 54.0 | 54.0 |
| relayToken | String | Returned only if processing was incomplete (results returned only for a subset of rules). | Small, 54.0 | 54.0 |
| ruleErrors | List<Priming Rule Error | List of rules with errors. | Small, 54.0 | 54.0 |
| stats | Priming Records Stats | Summary of record counts for the priming request or relay. | Small, 54.0 | 54.0 |

## Related Topics

- Priming Record (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_priming_record.htm)
- Priming Rule Error (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_priming_rule_error.htm)
- Priming Records Stats (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_priming_records_stats.htm)
