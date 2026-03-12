---
title: "Content Type Header"
domain: api-asynch
topic: content-type-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.028Z
estimatedTokens: 289
keywords: [Content, specify, match, contentType, job, you’re, working, Content-Type, Bulk, API, 2.0]
---

# Content Type Header

> Use the Content Type header to specify the format for your request and response. Set the
  value of this header to match the contentType of the job you’re working
  with.

# Content Type Header

Use the Content Type header to specify the format for your request and response. Set the value of this header to match the contentType of the job you’re working with.

For jobs with a contentType of CSV, XML is used as the response format except in the case of bulk query results, which are returned in CSV. To ensure that you retrieve responses in JSON, create a job with a contentType of JSON and use JSON for your batch payloads. To ensure that you retrieve responses in XML, create a job with a contentType of XML or CSV, and use the same format for your batch payloads.

If the job’s contentType is unavailable, for example, when you create a job or when you submit a request with a bad job ID, the response respects the value of this header. If this header isn’t included, the response defaults to XML.

## Header Field Name and Values

Field name

Content-Type

Field values

-   application/json (JSON is the preferred format.)
-   application/xml (XML is the preferred format.)
-   text/csv (CSV is the preferred format. Except for bulk query results, responses are returned in XML.)

Example

Content-Type: application/json
