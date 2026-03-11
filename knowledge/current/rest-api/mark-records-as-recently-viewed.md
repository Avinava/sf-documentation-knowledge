---
title: "Mark Records as Recently Viewed"
domain: rest-api
topic: mark-records-as-recently-viewed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:24.927Z
keywords: [Mark, Records, Recently, Viewed, See]
---

# Mark Records as Recently Viewed

# Mark Records as Recently Viewed

To mark a record as recently viewed using REST API, use the Query resource with a FOR VIEW or FOR REFERENCE clause. Use SOQL to mark records as recently viewed to ensure that information such as the date and time the record was viewed is correctly set.

Use FOR VIEW to notify Salesforce when a record is viewed from a custom interface, such as a mobile application or from a custom page. Use FOR REFERENCE when a record is referenced from a custom interface. A record is referenced every time a related record is viewed. For more information, see “FOR VIEW” and “FOR REFERENCE” in the SOQL and SOSL Reference.

Example usage for executing a query that marks one Account record as recently viewed

```

```

Example request body for executing a query

none required

Example response body for executing a query

```

```

#### See Also

-   [Query](atlas.en-us.api_rest.meta/api_rest/resources_query.htm "Runs the specified SOQL query.")