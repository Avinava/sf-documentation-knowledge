---
title: "Execute Dependent Requests in a Single API Call"
domain: rest-api
topic: execute-dependent-requests-in-a-single-api-call
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:24.856Z
keywords: [Execute, Dependent, Requests, Single, API, Call]
---

# Execute Dependent Requests in a Single API Call

# Execute Dependent Requests in a Single API Call

The following example uses the Composite resource to execute several dependent requests all in a single call. First, it creates an account and retrieves its information. Next it uses the account data and the Composite resource’s reference ID functionality to create a contact and populate its fields based on the account data. Then it retrieves specific information about the account’s owner by using query parameters in the request string. Finally, if the metadata has been modified since a certain date, it retrieves account metadata. The composite.json file contains the composite request and subrequest data.

Execute dependent requests in a single API call

```

```

Request body composite.json file

```

```

Response body after successfully executing the composite request

```

```