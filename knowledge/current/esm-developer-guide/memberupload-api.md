---
title: "member_upload API"
domain: esm-developer-guide
topic: memberupload-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:26.967Z
estimatedTokens: 95
keywords: [member_upload, API, Upload, CSV, file, new, subscribers, locations, member, _upload, URI, HTTP, Sample, Insert]
---

# member_upload API

> Upload a CSV file with new subscribers or locations.

# member\_upload API

Upload a CSV file with new subscribers or locations.

This API is used with the UploadMembers Vlocity Integration Procedure (VIP) to upload a file with subscriber and location details to be inserted or updated.

## URI

```

```

## HTTP Method

POST

## Sample Insert Request Body

```

```

## Sample Update Request Body

```

```

## Response

```

```

## Code Examples

```
/services/apexrest/vlocity_cmt/v1/integrationprocedure/member_upload/
```

```
{
  "QuoteId__c": "0Q05w000001sayRCAQ",
  "members": [{
    "StreetAddress__c": "123 Main St",
    "Address1__c": "Suite 415",
    "City__c": "San Francisco",
    "State__c": "CA",
    "PostalCode__c": "94102",
    "Country__c": "USA",
    "Title__c": "VP",
    "FirstName__c": "Mary",
    "LastName__c": "Sommer",
    "Email__c": "msommer@test.com",
    "MemberType__c": "Location",
    "MSISDN__c": "1234564567",
    "Id": ""
  },
  {
    "StreetAddress__c": "1480 SantaClara St",
    "Address1__c": "Suite 415",
    "City__c": "Santa Clara",
    "State__c": "CA",
    "PostalCode__c": "95050",
    "Country__c": "USA",
    "Title__c": "EVP",
    "FirstName__c": "Tom",
    "LastName__c": "Hanks",
    "Email__c": "thanks@test.com",
    "MemberType__c": "Location",
    "MSISDN__c": "123456489",
    "Id": ""
  }]
}
```

```
{
  "QuoteId__c": "0Q05w000001sayRCAQ",
  "members": [{
    "StreetAddress__c": "123 Main St",
    "Address1__c": "Suite 415",
    "City__c": "San Francisco",
    "State__c": "CA",
    "PostalCode__c": "94102",
    "Country__c": "USA",
    "Title__c": "VP",
    "FirstName__c": "Mary",
    "LastName__c": "Sommer",
    "Email__c": "msommer@test.com",
    "MemberType__c": "Location",
    "MSISDN__c": "1234564567",
    "Id": "a5X5w000000KWkc"
  },
  {
    "StreetAddress__c": "1480 SantaClara St",
    "Address1__c": "Suite 415",
    "City__c": "Santa Clara",
    "State__c": "CA",
    "PostalCode__c": "95050",
    "Country__c": "USA",
    "Title__c": "EVP",
    "FirstName__c": "Tom",
    "LastName__c": "Hanks",
    "Email__c": "thanks@test.com",
    "MemberType__c": "Location",
    "MSISDN__c": "123456489",
    "Id": "a5X5w000000KWkc"
  }]
}
```

```
{
  "Members": [{
    "UpsertSuccess": true,
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
    "MemberType__c": "Location",
    "StreetAddress__c": "1480 SantaClara St",
    "State__c": "CA",
    "PostalCode__c": "95050",
    "MSISDN__c": "123456489",
    "LastName__c": "Hanks",
    "FirstName__c": "Tom",
    "Email__c": "thanks@test.com",
    "Country__c": "USA",
    "City__c": "Santa Clara"
  }]
}
```
