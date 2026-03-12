---
title: "Record"
domain: omnistudio
topic: record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:55.083Z
estimatedTokens: 353
keywords: [Record, field, data, API, name, child, relationship, record, information, record.]
---

# Record

> The field data, API name, child relationship data, and record type
      information for a record.

# Record

The field data, API name, child relationship data, and record type information for a record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The API name for this record. | Small, 41.0 | 41.0 |
| childRelationships | Map<String, Record Collection> | The child relationship data for this record. | Small, 41.0 | 41.0 |
| fields | Map<String, Field Value> | The field data for this record, matching the requested layout and mode. | Small, 41.0 | 41.0 |
| id | String | The ID of this record. | Small, 41.0 | 41.0 |
| lastModifiedById | String | The ID of the user who last updated this record. | Small, 44.0 | 44.0 |
| lastModifiedDate | String | The date and time when a user last modified this record. Date and time information is in ISO 8601 format. | Small, 44.0 | 44.0 |
| recordTypeId | String | The record type ID for this record. | Small, 48.0 | 48.0 |
| recordTypeInfo | Record Type Info | The record type info for this record, if any.This property is returned for only two levels of nested records. Instead, use recordTypeId, which is returned for every record in a response. | Small, 41.0 | 41.0 |
| systemModstamp | String | The date and time when a user or an automated process (such as a trigger) last modified this record. Date and time information is in ISO 8601 format. | Small, 44.0 | 44.0 |

## Related Topics

- Field Value (atlas.en-us.industries_reference.meta/industries_reference/ui_api_responses_field_value.htm)
