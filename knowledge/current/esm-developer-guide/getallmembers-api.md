---
title: "getAll_members API"
domain: esm-developer-guide
topic: getallmembers-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.950Z
estimatedTokens: 38
keywords: [getAll_members, API, quote, members, getAll, _members, URI, HTTP]
---

# getAll_members API

> Get all quote members for a given quote ID.

# getAll\_members API

Get all quote members for a given quote ID.

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
/services/apexrest/vlocity_cmt/v1/integrationprocedure/getAll_members/
```

```
{
 	"SalesQuoteId": "0Q03h000000TuXGCA0"
 }
```

```
{
	"Members": [{
			"Id": "a5X5w000002KqC9EAK",
			"QuoteId__c": "0Q05w000001sayRCAQ",
			"Title__c": "VP",
			"Address1__c": "Suite 415",
			"Name": "Mary Sommer",
			"MemberType__c": "Location",
			"StreetAddress__c": "123 Main St",
			"State__c": "CA",
			"PostalCode__c": "94102",
			"MSISDN__c": "1234564567",
			"LastName__c": "Sommer",
			"FirstName__c": "Mary",
			"Email__c": "msommer@test.com",
			"Country__c": "USA",
			"City__c": "San Francisco"
		},
		{
			"UpsertSuccess": true,
			"Id": "a5X5w000002KqCAEA0",
			"QuoteId__c": "0Q05w000001sayRCAQ",
			"Title__c": "EVP",
			"Address1__c": "Suite 415",
			"Name": "Tom Hanks",
			"MemberType__c": "Subscriber",
			"StreetAddress__c": "1480 SantaClara St",
			"State__c": "CA",
			"PostalCode__c": "95050",
			"MSISDN__c": "123456489",
			"LastName__c": "Hanks",
			"FirstName__c": "Tom",
			"Email__c": "thanks@test.com",
			"Country__c": "USA",
			"City__c": "Santa Clara"
		}
	]
}
```
