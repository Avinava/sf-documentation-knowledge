---
title: "saveLog() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: savelog-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.946Z
estimatedTokens: 369
keywords: [saveLog, Salesforce, Classic, Saves, updates, Usage, Arguments, Sample, Code–JavaScript]
---

# saveLog() for Salesforce Classic for Salesforce Classic

> Saves or updates an object in Salesforce.

# saveLog() for Salesforce Classic for Salesforce Classic

## Usage

Saves or updates an object in Salesforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

If an object uses recordType, pass the recordTypeId in the saveLog call. If you don’t pass the recordType, the record is created using the default recordType for the profile. For person accounts, you can't pass the person account recordType if the profile's default is to a business account.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| object | string | The name of the object to save or update. |
| saveParams | string | Specifies the fields to save or update on the object.If the object’s ID is specified, a record is updated. For example: Id=001D000000J6qIX&Name=Acme&Phone=4154561515. If the object’s ID isn’t specified, a new record is created. For example: Name=Acme&Phone=4154561515. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| result | boolean | true if saving or updating the object was successful, false if saving or updating the object wasn’t successful. |
| id | string | The Id of the newly created object. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

## Code Examples

```
sforce.interaction.saveLog(object:string, saveParams:string, (optional)callback:function)
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
                  alert(response.result);
           } else { 
                  alert(response.error);
           }
       } 
       function saveLog() {
           //Invokes API method
                sforce.interaction.saveLog('Account','Name=NewAccountName&Phone=4155551212', callback);
       } 
</script>
</head>
   <button onclick="saveLog();">saveLog</button>
</html>
```
