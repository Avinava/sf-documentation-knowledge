---
title: "Approve a Record"
domain: rest-api
topic: approve-a-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.006Z
estimatedTokens: 168
keywords: [Approve, Record, Process, Approvals, resource, approve, record, collection, records., call, takes, array, requests., current, user, must, assigned, approver., contextId, submit]
---

# Approve a Record

> Use the Process Approvals resource to approve a record or a collection of records. Each call takes
      an array of requests. The current user must be an assigned approver. The contextId is ID of
      the record to submit for approval..

# Approve a Record

Use the [Process Approvals](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm "Accesses all approval processes. Can also be used to submit a particular record if that entity supports an approval process and one has already been defined. Records can be approved and rejected if the current user is an assigned approver.") resource to approve a record or a collection of records. Each call takes an array of requests. The current user must be an assigned approver. The contextId is ID of the record to submit for approval..

Example usage

```

```

Example request body approve.json file

```

```

Example JSON response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/approvals/ -H "Authorization: Bearer token" -H "Content-Type: application/json" -d @approve.json"
```

```
{
  "requests" : [{
    "actionType" : "Approve",
    "contextId" : "04iD0000000Cw6SIAS",
    "nextApproverIds" : ["005D00000015rY9"],
    "comments" : "this record is approved"}]
}
```

```
[ { 
  "actorIds" : null,
  "entityId" : "001D000000I8mImIAJ",
  "errors" : null,
  "instanceId" : "04gD0000000CvmAIAS",
  "instanceStatus" : "Approved",
  "newWorkitemIds" : [ ],
  "success" : true 
} ]
```

## Related Topics

- Process Approvals (atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm)
