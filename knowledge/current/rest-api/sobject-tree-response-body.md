---
title: "sObject Tree Response Body"
domain: rest-api
topic: sobject-tree-response-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.036Z
estimatedTokens: 191
keywords: [sObject, Tree, result]
---

# sObject Tree Response Body

> Describes the result of an sObject Tree
  request.

# sObject Tree Response Body

Describes the result of an sObject Tree request.

Properties

| Name | Type | Description |
| --- | --- | --- |
| hasErrors | Boolean | true if an error occurred while creating a record; false otherwise. |
| results | Collection | Upon success, results contains the reference ID of each requested record and its new record ID. Upon failure, it contains only the reference ID of the record that caused the error, error status code, error message, and fields related to the error. In the case of duplicate reference IDs, results contains one item for each instance of the duplicate ID. |

JSON example upon success

```

```

XML example upon success

```

```

JSON example upon failure

```

```

XML example upon failure

```

```

## Code Examples

```
{
    "hasErrors" : false,
    "results" : [{
     "referenceId" : "ref1",
     "id" : "001D000000K0fXOIAZ"
     },{
     "referenceId" : "ref4",
     "id" : "001D000000K0fXPIAZ"
     },{
     "referenceId" : "ref2",
     "id" : "003D000000QV9n2IAD"
     },{
     "referenceId" : "ref3",
     "id" : "003D000000QV9n3IAD"
     }]
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<SObjectTreeResponse>
    <hasErrors>false</hasErrors>
    <results>
        <id>001D000000K0fXOIAZ</id>
        <referenceId>ref1</referenceId>
    </results>
    <results>
        <id>001D000000K0fXPIAZ</id>
        <referenceId>ref4</referenceId>
    </results>
    <results>
        <id>003D000000QV9n2IAD</id>
        <referenceId>ref2</referenceId>
    </results>
    <results>
        <id>003D000000QV9n3IAD</id>
        <referenceId>ref3</referenceId>
    </results>
</SObjectTreeResponse>
```

```
{
   "hasErrors" : true,
   "results" : [{
     "referenceId" : "ref2",
     "errors" : [{
       "statusCode" : "INVALID_EMAIL_ADDRESS",
       "message" : "Email: invalid email address: 123",
       "fields" : [ "Email" ]
       }]
     }]
}
```

```
<SObjectTreeResponse>
    <hasErrors>true</hasErrors>
    <results>
        <errors>
            <fields>Email</fields>
            <message>Email: invalid email address: 123</message>
            <statusCode>INVALID_EMAIL_ADDRESS</statusCode>
        </errors>
        <referenceId>ref2</referenceId>
    </results>
</SObjectTreeResponse>
```
