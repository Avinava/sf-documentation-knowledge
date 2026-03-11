---
title: "Update a Record and Get Its Field Values in a Single
        Request"
domain: rest-api
topic: update-a-record-and-get-its-field-values-in-a-single-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:24.849Z
keywords: [Update, Record, Get, Its, Field, Values, Single, Request, See]
---

# Update a Record and Get Its Field Values in a Single
        Request

# Update a Record and Get Its Field Values in a Single Request

Use the Composite Batch resource to execute multiple requests in a single API call.

The following example updates the name on an account and gets some of the account’s field values in a single request. The batch.json file contains the subrequest data.

Update a record and query its name and billing postal code in a single request

```

```

Request body batch.json file

```

```

Response body after successfully executing the subrequests

```

```

#### See Also

-   [Composite Batch](atlas.en-us.api_rest.meta/api_rest/resources_composite_batch.htm "Executes up to 25 subrequests in a single request. The response bodies and HTTP statuses of the subrequests in the batch are returned in a single response body. Each subrequest counts against rate limits.")