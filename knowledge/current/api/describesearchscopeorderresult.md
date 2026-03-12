---
title: "DescribeSearchScopeOrderResult"
domain: api
topic: describesearchscopeorderresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.138Z
estimatedTokens: 273
keywords: [DescribeSearchScopeOrderResult, array, objects]
---

# DescribeSearchScopeOrderResult

> Returns an array of DescribeSearchScopeOrderResult
  objects.

# DescribeSearchScopeOrderResult

Returns an array of DescribeSearchScopeOrderResult objects.

The [describeSearchScopeOrder()](atlas.en-us.api.meta/api/sforce_api_calls_describesearchscopeorder.htm "Retrieves an ordered list of the objects in a user's default global search scope.") call returns an array of DescribeSearchScopeOrderResult objects. Each DescribeSearchScopeOrderResult object represents an object in the user’s global search scope. The list reflects the order of the objects in the user’s scope, including any pinned objects. The DescribeSearchScopeOrderResult object has the following properties.

| Name | Type | Description |
| --- | --- | --- |
| keyPrefix | string | Three-character prefix code in the object ID. Object IDs are prefixed with three-character codes that specify the type of the object. For example, Account objects have a prefix of 001 and Opportunity objects have a prefix of 006. Note that a key prefix can sometimes be shared by multiple objects so it does not always uniquely identify an object. |
| name | string | Name of the object. English only. |

## Related Topics

- describeSearchScopeOrder() (atlas.en-us.api.meta/api/sforce_api_calls_describesearchscopeorder.htm)
