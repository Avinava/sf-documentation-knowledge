---
title: "Step 6: Query Jobs"
domain: api-asynch
topic: step-6-query-jobs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.583Z
estimatedTokens: 368
keywords: [Step, Query, Jobs, Bulk, API, 2.0, how, job, monitor, progress, results]
---

# Step 6: Query Jobs

> This  Bulk API 2.0 example shows you how to create a query job, monitor its progress,
		and get the job results.

# Step 6: Query Jobs

This Bulk API 2.0 example shows you how to create a query job, monitor its progress, and get the job results.

1.  Create the job.

    **URI**

    ```

    ```

    **Example of creating a bulk query job**

    ```

    ```

    The response includes the job id and shows the job’s state as UploadComplete. (You use the job id to monitor the job or get its results.)

    **Example response body**

    ```

    ```

2.  Monitor the job’s state using the returned job id.

    **URI**

    ```

    ```

    **Example of monitoring the state of the query job**

    ```

    ```

    **Example response body**

    The response shows the current state of the job. Repeat this step until the state is JobComplete.

    ```

    ```

3.  Get the results of the job.

    **URI**

    ```

    ```

    **Example of getting the results of the job**

    ```

    ```

    The response shows the results of the SOQL query when you created the query job.

    **Example response body**

    ```

    ```

    This example returns a small result set, and it’s easy to see the complete results. Queries that return larger results spread them across a sequence of result sets. To see the other result sets, use the locator to fetch the next set of results. For more information, see [Get Results for a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_get_job_results.htm "Gets the results for a query job. The job must have the state JobComplete.").

## Code Examples

```
/services/data/v66.0/jobs/query
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/jobs/query -H 'Content-Type: application/json' -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' -H "X-PrettyPrint:1" --data-raw '{ "operation" : "query", "query" : "SELECT Id, Name FROM Account" } ' -X POST
```

```
{
  "id" : "7986gEXAMPLE4X2OPT",
  "operation" : "query",
  "object" : "Account",
  "createdById" : "0055fEXAMPLEtG4AAM",
  "createdDate" : "2022-01-02T17:38:59.000+0000",
  "systemModstamp" : "2022-01-02T17:38:59.000+0000",
  "state" : "UploadComplete",
  "concurrencyMode" : "Parallel",
  "contentType" : "CSV",
  "apiVersion" : 66.0,
  "lineEnding" : "LF",
  "columnDelimiter" : "COMMA"
}
```

```
/services/data/v66.0/jobs/query/queryJobId
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/jobs/query/7986gEXAMPLE4X2OPT -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' -H "X-PrettyPrint:1" -X GET
```

## Related Topics

- Get Results for a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_get_job_results.htm)
