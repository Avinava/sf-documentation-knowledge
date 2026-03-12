---
title: "Return Headers for Approval Layouts"
domain: rest-api
topic: return-headers-for-approval-layouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.952Z
estimatedTokens: 157
keywords: [Headers, Approval, Layouts, only, headers, returned, GET, request, sObject, ApprovalLayouts, resources., gives, chance, header, values, before, retrieving, content, resource., resource]
---

# Return Headers for Approval Layouts

> Returns only the headers that are returned by a GET request to sObject ApprovalLayouts
		resources. This gives you a chance to see header values before retrieving the content of the
		resource. This resource is available in REST API version 30.0 and later.

# Return Headers for Approval Layouts

Returns only the headers that are returned by a GET request to sObject ApprovalLayouts resources. This gives you a chance to see header values before retrieving the content of the resource. This resource is available in REST API version 30.0 and later.

## Syntax

URI

To return headers of a request for an approval layout description for a specified object, use /services/data/vXX.X/sobjects/sObject/describe/approvalLayouts/

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
curl -X HEAD --head https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/describe/approvalLayouts/ -H "Authorization: Bearer token"
```
