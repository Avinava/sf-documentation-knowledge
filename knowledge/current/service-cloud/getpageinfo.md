---
title: "getPageInfo()"
domain: service-cloud
topic: getpageinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.487Z
estimatedTokens: 453
keywords: [getPageInfo, page, information, specified, tab, after, its, content, loaded., null, enclosing, primary, subtab., Note, get, custom, console, component, tabId, must]
---

# getPageInfo()

> Returns page information for the specified tab after its
            content has loaded. If the tab ID is null, it returns page information for the enclosing
            primary tab or subtab. Note that to get the page information from a custom console
            component, a tabId must be passed as the first
            parameter to this method.This method is only available in
                API version 26.0 or later.

# getPageInfo()

Returns page information for the specified tab after its content has loaded. If the tab ID is null, it returns page information for the enclosing primary tab or subtab. Note that to get the page information from a custom console component, a tabId must be passed as the first parameter to this method.This method is only available in API version 26.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | ID of the tab from which page information is returned. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| pageInfo | string | Returns the URL of the current page as a JSON string, and includes any applicable object ID, object name, object type, and for API version 33.0 or later, the object tab name. For example:{"url":"https://MyDomainNamemy.salesforce.com/001x0000003DGQR", "objectId":"001x0000003DGQR","objectName":"Acme","object":"Account","displayName":"Company"For API version 31.0 and later, invoking this API method on a PersonAccount object returns the following additional information.accountId or contactId, the associated account or contact IDpersonAccount, which is true if the object is a PersonAccount and false otherwiseFor example:{"url":"https://MyDomainNamemy.salesforce.com/001x0000003DGQR", "objectId":"001x0000003DGQR","objectName":"Acme Person Account", "object":"Account", "contactId":"003D000000QOMqg", "personAccount":true} |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Code Examples

```
sforce.console.getPageInfo(tabId:String, (optional)callback:Function)
```

```
<apex:page>
    <A HREF="#" onClick="testGetPageInfo();return false">
        Click here to get page information</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testGetPageInfo() {
            //Get the page information of 'scc-pt-1'
           //This value is for example purposes only
             var tabId = 'scc-pt-1';
              sforce.console.getPageInfo(tabId , showPageInfo);
        }
        
        var showPageInfo = function showPageInfo(result) {
            alert('Page Info: ' + result.pageInfo);
            };
  </script>
</apex:page>
```
