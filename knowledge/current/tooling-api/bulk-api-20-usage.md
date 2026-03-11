---
title: "Bulk API 2.0 Usage"
domain: tooling-api
topic: bulk-api-20-usage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.253Z
keywords: [Bulk, API, 2.0, Usage, Additional, Information]
---

# Bulk API 2.0 Usage

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