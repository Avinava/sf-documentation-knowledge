---
title: "saveLog() for Lightning Experience for Lightning Experience"
domain: api-cti
topic: savelog-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.953Z
estimatedTokens: 506
keywords: [saveLog, Lightning, Experience, Saves, updates, Salesforce, API, version, 38.0, later, Usage, Arguments, Sample, Code–HTML, JavaScript]
---

# saveLog() for Lightning Experience for Lightning Experience

> Saves or updates an object in Salesforce. This
                method is available in API version 38.0 or later.

# saveLog() for Lightning Experience for Lightning Experience

## Usage

Saves or updates an object in Salesforce. This method is available in API version 38.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

-   To update using this method, include Id.
-   To create using this method, include entityApiName.
-   If an object uses recordType, pass the recordTypeId in the saveLog call. If you don’t pass the recordType, the record is created using the default recordType for the profile. To create a person account, you can pass the person account recordType if the profile's default is to a business account.
-   To refresh after you update or create using this method, call the refreshView method in the callback method.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| value | object | Specifies the fields to save or update on the object.If the object’s ID is specified, a record is updated. For example:{Id:"00QR0000000yN5iMAE", LastName:"New lastname" }If the object’s ID isn’t specified, a new record is created. For example:{entityApiName:"Contact", LastName:"LastName" },callback:callback}NoteTo create a record, ensure all the required fields are specified. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–HTML and JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Returns true if the API method call was invoked successfully, false otherwise. |
| returnValue | object | ID of object if creating or updating the object was successful; null if creating or updating the object wasn’t successful. |
| errors | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

## Code Examples

```
sforce.opencti.saveLog({
    value:{
        entityApiName:string, //Optional
        Id:string, //Optional
        param:value //Optional
        }, 
    callback:function //Optional
})
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
   <script type="text/javascript">
      var callback = function (response) {
         if (response.result) {
            console.log('API method call executed successfully! returnValue:', response.returnValue);
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         }
      } 
      function saveLog() {
         //Update an existing object with the ID specified               
         sforce.opencti.saveLog({value:{Id:"00QR0000000yN5iMAE", LastName:"New lastname" }, callback:callback});
         //Create a contact
         sforce.opencti.saveLog({value:{entityApiName:"Contact", LastName:"LastName" },callback:callback});
         //Update a lead
         sforce.opencti.saveLog({value:{Id:"00QR0000000yN5iMAE", LastName:"New lastname" },callback:callback});
      } 
   </script>
</head>
<body>
   <button onclick="saveLog();">saveLog</button>
</body>
</html>
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
