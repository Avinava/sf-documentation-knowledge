---
title: "Submit a Record for Approval"
domain: rest-api
topic: submit-a-record-for-approval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.905Z
estimatedTokens: 194
keywords: [Submit, Record, Approval, Process, Approvals, resource, collection, records, call, array, requests]
---

# Submit a Record for Approval

> Use the Process Approvals resource to submit a record or a collection of records for approval. Each
      call takes an array of requests.

# Submit a Record for Approval

Use the [Process Approvals](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm "Accesses all approval processes. Can also be used to submit a particular record if that entity supports an approval process and one has already been defined. Records can be approved and rejected if the current user is an assigned approver.") resource to submit a record or a collection of records for approval. Each call takes an array of requests.

Example usage

```

```

Example request body submit.json file

In the following example, the record "001D000000I8mIm" is submitted for approval process "PTO\_Request\_Process" by skipping its entry criteria on behalf of submitter "005D00000015rZy."

```

```

Example JSON response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/approvals/ -H "Authorization: Bearer token" -H "Content-Type: application/json" -d @submit.json"
```

```
{
"requests" : [{
"actionType": "Submit",
"contextId": "001D000000I8mIm",
"nextApproverIds": ["005D00000015rY9"],
"comments":"this is a test",
"contextActorId": "005D00000015rZy",
"processDefinitionNameOrId" : "PTO_Request_Process",
"skipEntryCriteria": "true"}]
}
```

```
[ { 
  "actorIds" : [ "005D00000015rY9IAI" ],
   "entityId" : "001D000000I8mImIAJ",
   "errors" : null,
   "instanceId" : "04gD0000000Cvm5IAC",
   "instanceStatus" : "Pending",
   "newWorkitemIds" : [ "04iD0000000Cw6SIAS" ],
   "success" : true } ]
```

## Related Topics

- Process Approvals (atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm)
