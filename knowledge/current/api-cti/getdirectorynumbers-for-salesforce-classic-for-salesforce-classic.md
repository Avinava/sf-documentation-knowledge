---
title: "getDirectoryNumbers() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: getdirectorynumbers-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.737Z
estimatedTokens: 534
keywords: [getDirectoryNumbers, Salesforce, Classic, phone, numbers, call, center’s, directory, API, version, 31.0, later, Usage, Arguments, Sample]
---

# getDirectoryNumbers() for Salesforce Classic for Salesforce Classic

> Returns
the list of phone numbers from the call center’s directory. This method is only available in API version 31.0 or later.

# getDirectoryNumbers() for Salesforce Classic for Salesforce Classic

## Usage

Returns the list of phone numbers from the call center’s directory. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| isGlobal | boolean | Set the value to true to return a directory number from the global call center name, or set the value to false to return a directory number that is specific to a call center. |
| callCenterName | string | Specifies the call center name on which to return directory numbers. If isGlobal is set to false, and this field is not specified, all directory numbers are returned. |
| callback | function | JavaScript method executed when the API method call is completed. |
| resultSetPage | integer | Represents the page number of the list of results to return. This number starts at 0. |
| resultSetPageSize | integer | Sets the maximum number of phone numbers to retrieve, which is defaulted to 5000 and has a maximum number of 10000. If hasNext returns true in the callback, use this argument with resultSetPage to get the next page of results. For example, if resultSetPageSize is set to 5000, and resultSetPage is set to 0, the first 5000 phone numbers are returned. If resultSetPage is set to 1, the next 5000 phone numbers are returned. |

## Sample Code–JavaScript

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| result | string | Returns a JSON string that represents the list of phone numbers from the specified call center name. Each phone number element contains a call center name, phone, and description. For example:{ directoryNumbers:    [        {callCenterName:'Demo Call Center', name:'Sales Cloud', phone:'415-555-1212', description:'Sales Cloud additional number'},       {callCenterName:'Demo Call Center 2', name:'Service Cloud', phone:'415-555-3434', description:'Service Cloud additional number'},    ],     hasNext: false } |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

## Code Examples

```
sforce.interaction.cti.getDirectoryNumbers(isGlobal:boolean, callCenterName:String, (optional) callback:function, (optional) resultSetPage:Integer, (optional) resultSetPageSize:Integer)
```

```apex
<html>
<head>
   <script src="https://domain:port/support/api/31.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
                  alert(response.result);
            } else {
                   alert(response.error);
           }
        };

       var isGlobal = false; //Do not return directories from the global call center
       var callCenterName = ‘My Call Center’; //Call center name of directory numbers to return

       function getDirectoryNumbers() {
                sforce.interaction.cti.getDirectoryNumbers(isGlobal, callCenterName, callback);
        }
</script>
</head>
<body>
       <button onclick="getDirectoryNumbers();">Get Directory Numbers</button>
</body>
</html>
```

```
{ directoryNumbers:
   [ 
      {callCenterName:'Demo Call Center', name:'Sales Cloud', phone:'415-555-1212', description:'Sales Cloud additional number'},
      {callCenterName:'Demo Call Center 2', name:'Service Cloud', phone:'415-555-3434', description:'Service Cloud additional number'},
   ], 
   hasNext: false
}
```
