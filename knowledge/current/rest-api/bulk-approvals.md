---
title: "Bulk Approvals"
domain: rest-api
topic: bulk-approvals
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.900Z
estimatedTokens: 150
keywords: [Bulk, Approvals, Process, resource, specify, collection, different, requests, executed]
---

# Bulk Approvals

> Use the Process Approvals resource to do bulk approvals. You can specify a collection of different
      Process Approvals requests to have them all executed in bulk.

# Bulk Approvals

Use the [Process Approvals](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm "Accesses all approval processes. Can also be used to submit a particular record if that entity supports an approval process and one has already been defined. Records can be approved and rejected if the current user is an assigned approver.") resource to do bulk approvals. You can specify a collection of different Process Approvals requests to have them all executed in bulk.

Example usage

```

```

Example request body bulk.json file

```

```

Example JSON response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/approvals/ -H "Authorization: Bearer token" -H "Content-Type: application/json" -d @bulk.json"
```

```
{
  "requests" :
  [{
    "actionType" : "Approve",
    "contextId" : "04iD0000000Cw6r",
    "comments" : "approving an account"
    },{
    "actionType" : "Submit",
    "contextId" : "001D000000JRWBd",
    "nextApproverIds" : ["005D00000015rY9"],
    "comments" : "submitting an account"
    },{
    "actionType" : "Submit",
    "contextId" : "003D000000QBZ08",
    "comments" : "submitting a contact"
    }]
}
```

```
[ { 
  "actorIds" : null,
  "entityId" : "001D000000I8mImIAJ",
  "errors" : null,
  "instanceId" : "04gD0000000CvmZIAS",
  "instanceStatus" : "Approved",
  "newWorkitemIds" : [ ],
  "success" : true 
  }, {
  "actorIds" : null,
  "entityId" : "003D000000QBZ08IAH",
  "errors" : null,
  "instanceId" : "04gD0000000CvmeIAC",
  "instanceStatus" : "Approved",
  "newWorkitemIds" : [ ],
  "success" : true
  }, {
  "actorIds" : [ "005D00000015rY9IAI" ],
  "entityId" : "001D000000JRWBdIAP",
  "errors" : null,
  "instanceId" : "04gD0000000CvmfIAC",
  "instanceStatus" : "Pending",
  "newWorkitemIds" : [ "04iD0000000Cw6wIAC" ],
  "success" : true
} ]
```

## Related Topics

- Process Approvals (atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm)
