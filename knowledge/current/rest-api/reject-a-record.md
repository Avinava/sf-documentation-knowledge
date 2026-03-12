---
title: "Reject a Record"
domain: rest-api
topic: reject-a-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.012Z
estimatedTokens: 153
keywords: [Reject, Record, Process, Approvals, resource, reject, record, collection, records., call, takes, array, requests., current, user, must, assigned, approver.]
---

# Reject a Record

> Use the Process Approvals resource to reject a record or a collection of records. Each call takes
      an array of requests. The current user must be an assigned approver.

# Reject a Record

Use the [Process Approvals](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm "Accesses all approval processes. Can also be used to submit a particular record if that entity supports an approval process and one has already been defined. Records can be approved and rejected if the current user is an assigned approver.") resource to reject a record or a collection of records. Each call takes an array of requests. The current user must be an assigned approver.

Example usage

```

```

Example request body reject.json file

```

```

Example JSON response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/approvals/ -H "Authorization: Bearer token" -H "Content-Type: application/json" -d @reject.json"
```

```
{
  "requests" : [{
    "actionType" : "Reject",
    "contextId" : "04iD0000000Cw6cIAC",
    "comments" : "This record is rejected."}]
}
```

```
[ { 
  "actorIds" : null,
  "entityId" : "001D000000I8mImIAJ",
  "errors" : null,
  "instanceId" : "04gD0000000CvmFIAS",
  "instanceStatus" : "Rejected",
  "newWorkitemIds" : [ ],
  "success" : true 
} ]
```

## Related Topics

- Process Approvals (atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm)
