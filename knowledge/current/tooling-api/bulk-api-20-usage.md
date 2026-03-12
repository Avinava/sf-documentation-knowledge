---
title: "Bulk API 2.0 Usage"
domain: tooling-api
topic: bulk-api-20-usage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.045Z
estimatedTokens: 426
keywords: [Bulk, API, 2.0, Usage, query, MetadataComponentDependency, Tooling, retrieve, 100, 000, records, single, query., SOQL, queries, list, relationships, between, metadata, components]
---

# Bulk API 2.0 Usage

> Using Bulk API 2.0, you can query the MetadataComponentDependency Tooling API object and
  retrieve up to 100,000 records in a single query. Use SOQL queries to list the relationships
  between the metadata components in
  your
  org.

# Bulk API 2.0 Usage

Using Bulk API 2.0, you can query the MetadataComponentDependency Tooling API object and retrieve up to 100,000 records in a single query. Use SOQL queries to list the relationships between the metadata components in your org.

Bulk API 2.0 requests are returned in CSV format.

You can use the WHERE clause to filter your query.

```

```

**Create a Bulk API 2.0 Query Job**

| Description | URI | HTTP Method |
| --- | --- | --- |
| Creates a query job. | /services/data/vXX.X/tooling/jobs/query | POST |

This example creates a job that queries the Tooling API object MetadataComponentDependency.

```

```

The response is:

```

```

**Get Information About a Query Job**

| Description | URI | HTTP Method |
| --- | --- | --- |
| Gets information about all query jobs in the org. | /services/data/vXX.X/tooling/jobs/query | GET |
| Gets information about one query job. | /services/data/vXX.X/tooling/jobs/query/queryJobId | GET |
| Gets the results for a query job. | /services/data/vXX.X/tooling/jobs/query/queryJobId/results | GET |

This example gets information about the job with ID 750R0000000$H8AAU.

```

```

The response is:

```

```

**Abort or Delete a Query Job**

| Description | URI | HTTP Method |
| --- | --- | --- |
| Aborts a query job. | /services/data/vXX.X/tooling/jobs/query/queryJobId | PATCH |
| Deletes a query job. | /services/data/vXX.X/tooling/jobs/query/queryJobId | DELETE |

This example aborts the job with ID 750R0000000$H8AAU:

```

```

The response is:

```

```

## Additional Information

For more information, see [Bulk API 2.0](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/ "HTML (New Window)").

## Code Examples

```
{
"operation": "query",
"query": "select RefMetadataComponentName, RefMetadataComponentType, RefMetadataComponentId 
    FROM MetadataComponentDependency
    WHERE RefMetadataComponentId = '01p0U000001ONbgQAG'"
}
```

```
curl --include --request POST \
--header "Authorization: OAuth token " \
--header "Accept: application/json " \
--header "Content-Type: application/json" \
--data '{
    "operation": "query",
    "query": "select MetadataComponentType FROM MetadataComponentDependency“
}' \
"https://instance.salesforce.com/services/data/v49.0/tooling/jobs/query"
```

```
HTTP/1.1 200 OK
{
    "id" : "750R0000000$H8AAU",
    "operation" : "query",
    "object" : "MetadataComponentDependency",
    "createdById" : "005xx000001X9JAAS",
    "createdDate" : "2020-04-09T17:51:02.000+0000",
    "systemModstamp" : "2020-04-09T17:51:02.000+0000",
    "state" : "UploadComplete",
    "concurrencyMode" : "Parallel",
    "contentType" : "CSV",
    "apiVersion" : 49.0,
    "lineEnding" : "LF",
    "columnDelimiter" : "COMMA"
}
```

```
curl --include --request GET \
--header "Authorization: OAuth token" \
"https://instance.salesforce.com/services/data/v49.0/tooling/jobs/query/750R0000000$H8AAU"
```

```
{
    "id" : "750R0000000$H8AAU",
    "operation" : "query",
    "object" : "MetadataComponentDependency",
    "createdById" : "005xx000001X9JAAS",
    "createdDate" : "2020-04-09T17:51:02.000+0000",
    "systemModstamp" : "2020-04-09T17:51:02.000+0000",
    "state" : "JobComplete",
    "concurrencyMode" : "Parallel",
    "contentType" : "CSV",
    "apiVersion" : 49.0,
    "jobType" : "V2Query",
    "lineEnding" : "LF",
    "columnDelimiter" : "COMMA",
    "numberRecordsProcessed" : 145,
    "retries" : 0,
    "totalProcessingTime" : 272}
```
