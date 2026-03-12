---
title: "Return Headers for a Single Approval Process on a Specified
			Object"
domain: rest-api
topic: return-headers-for-a-single-approval-process-on-a-specified-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.959Z
estimatedTokens: 170
keywords: [Headers, Single, Approval, Process, Specified, only, headers, returned, GET, request, sObject, ApprovalLayouts, resources., gives, chance, header, values, before, retrieving, content]
---

# Return Headers for a Single Approval Process on a Specified
			Object

> Returns only the headers that are returned by a GET request to sObject
		ApprovalLayouts resources. This gives you a chance to see header values before retrieving
		the content of the resource. Specify a particular approval process name to limit the request
		to one specific approval layout. This resource is available in REST API version 30.0 and
		later.

# Return Headers for a Single Approval Process on a Specified Object

Returns only the headers that are returned by a GET request to sObject ApprovalLayouts resources. This gives you a chance to see header values before retrieving the content of the resource. Specify a particular approval process name to limit the request to one specific approval layout. This resource is available in REST API version 30.0 and later.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/describe/approvalLayouts/approvalProcessName

Formats

JSON, XML

HTTP methods

HEAD

Authentication

Authorization: Bearer token

Request parameters

None required

## Example

Example Request

```

```

## Code Examples

```
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/describe/approvalLayouts/ExampleApprovalProcessName -H "Authorization: Bearer token"
```
