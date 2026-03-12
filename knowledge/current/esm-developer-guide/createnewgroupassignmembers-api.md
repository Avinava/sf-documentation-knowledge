---
title: "create_NewGroupAssignMembers API"
domain: esm-developer-guide
topic: createnewgroupassignmembers-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.920Z
estimatedTokens: 45
keywords: [create_NewGroupAssignMembers, API, group, assign, members, call, _NewGroupAssignMembers, URI, HTTP]
---

# create_NewGroupAssignMembers API

> Create a group and assign members to it in a single call.

# create\_NewGroupAssignMembers API

Create a group and assign members to it in a single call.

## URI

```

```

## HTTP Method

POST

## Request

```

```

## Response

```

```

## Code Examples

```
/services/apexrest/vlocity_cmt/v1/integrationprocedure/create_NewGroupAssignMembers/
```

```
{
	"GroupName": "G2",
	"MemberType": "Location",
	"SalesQuoteId": "0Q04x000000t8uYCAQ",
	"Members": [{
			"Id": "a5o4x000000t9fgAAA"
		},
		{
			"Id": "a5o4x000000t9fhAAA"
		}
	]
}
```

```
{
	"GroupName": "G2",
	"QuoteGroupId": "a454x000000Y6DIAA0",
	"SalesQuoteId": "0Q04x000000t8uYCAQ"
}
```
