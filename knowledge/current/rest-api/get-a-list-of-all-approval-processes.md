---
title: "Get a List of All Approval Processes"
domain: rest-api
topic: get-a-list-of-all-approval-processes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.004Z
estimatedTokens: 131
keywords: [Get, List, Approval, Processes, Process, Approvals, resource, get, information, approvals.]
---

# Get a List of All Approval Processes

> Use the Process Approvals resource to get information about approvals.

# Get a List of All Approval Processes

Use the [Process Approvals](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm "Accesses all approval processes. Can also be used to submit a particular record if that entity supports an approval process and one has already been defined. Records can be approved and rejected if the current user is an assigned approver.") resource to get information about approvals.

Example usage

```

```

Example request body

none required

Example JSON response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/approvals/ -H "Authorization: Bearer token"
```

```
{
  "approvals" : {
   "Account" : [ {
     "description" : null,
     "id" : "04aD00000008Py9",
     "name" : "Account Approval Process",
     "object" : "Account",
     "sortOrder" : 1
   } ]
  }
}
```

## Related Topics

- Process Approvals (atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm)
