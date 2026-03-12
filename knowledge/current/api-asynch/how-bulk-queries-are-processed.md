---
title: "How Bulk Queries Are Processed"
domain: api-asynch
topic: how-bulk-queries-are-processed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.098Z
estimatedTokens: 506
keywords: [How, Bulk, Queries, Processed, query, workflow, begins, job, add, batches, Salesforce, attempts, execute, doesn’t, standard]
---

# How Bulk Queries Are Processed

> The bulk query workflow begins when you create a bulk query job and add one or more
    batches to the query job. When a bulk query is processed, Salesforce attempts to execute the
    query. If the query doesn’t execute within the standard 2-minute timeout limit, the job fails
    and a QUERY_TIMEOUT error is returned. In this case, rewrite a simpler query, and resubmit the
    batch.

# How Bulk Queries Are Processed

The bulk query workflow begins when you create a bulk query job and add one or more batches to the query job. When a bulk query is processed, Salesforce attempts to execute the query. If the query doesn’t execute within the standard 2-minute timeout limit, the job fails and a QUERY\_TIMEOUT error is returned. In this case, rewrite a simpler query, and resubmit the batch.

If the query succeeds, Salesforce attempts to retrieve the results. If the results exceed the 1GB file size limit or take longer than 5 minutes to retrieve, the completed results are cached and another attempt is made. After 30 attempts, the job fails and the error message “Retried more than thirty times” is returned. In this case, consider using the PK Chunking header to split the query results into smaller chunks. If the attempts succeed, the results are returned and stored for 7 days.

This flowchart depicts how bulk queries are processed.

![How bulk queries are processed](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_asynch%2Fimages%2Fbulk_query_process_flow0.png&folder=api_asynch)

#### See Also

-   [Use Bulk Query](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_using_bulk_query.htm "When you add a batch to a bulk query job, the Content-Type in the header for the request must be text/csv, application/xml, or application/json, depending on the content type specified when the job was created. The actual SOQL statement supplied for the batch is in plain text format.")

-   [PK Chunking](atlas.en-us.api_asynch.meta/api_asynch/async_api_headers_enable_pk_chunking.htm "Use the primary key (PK) chunking request header to enable automatic PK chunking for a bulk query job. PK chunking splits bulk queries on large tables into chunks based on the record IDs, or primary keys, of the queried records.")

-   [Walk Through a Bulk Query Sample](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough.htm "This code sample uses cURL to query several account records.")

## Related Topics

- Use Bulk Query (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_using_bulk_query.htm)
- PK Chunking (atlas.en-us.api_asynch.meta/api_asynch/async_api_headers_enable_pk_chunking.htm)
- Walk Through a Bulk Query Sample (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough.htm)
