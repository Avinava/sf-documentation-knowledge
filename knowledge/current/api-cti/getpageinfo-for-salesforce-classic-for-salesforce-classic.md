---
title: "getPageInfo() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: getpageinfo-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.742Z
estimatedTokens: 348
keywords: [getPageInfo, Salesforce, Classic, current, Usage, Arguments, Sample, Code–JavaScript]
---

# getPageInfo() for Salesforce Classic for Salesforce Classic

> Returns information about the current page.

# getPageInfo() for Salesforce Classic for Salesforce Classic

## Usage

Returns information about the current page.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| result | string | Returns the URL of the current page as a JSON string, and includes any applicable object ID, object name, object type, and for API version 33.0 or later, the object tab name. For example:{"url":"https://MyDomainName.my.salesforce.com/001x0000003DGQR", "objectId":"001x0000003DGQR","objectName":"Acme", "object":"Account","displayName":"Company"}For API version 31.0 and later, invoking this API method on a PersonAccount object returns the following additional information.accountId or contactId, the associated account or contact IDpersonAccount, which is true if the object is a PersonAccount and false otherwiseFor example:{"url":"https://MyDomainName.my.salesforce.com/001x0000003DGQR", "objectId":"001x0000003DGQR","objectName":"Acme Person Account", "object":"Account", "contactId":"003D000000QOMqg", "personAccount":true} |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

## Code Examples

```
sforce.interaction.getPageInfo(callback:function);
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
        };
       function getPageInfo() {
                //Invokes API method
                sforce.interaction.getPageInfo(callback);
        }
</script>
</head>
<body>
       <button onclick="getPageInfo();">getPageInfo</button>
</body>
</html>
```
