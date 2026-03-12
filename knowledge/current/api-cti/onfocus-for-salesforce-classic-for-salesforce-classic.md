---
title: "onFocus() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: onfocus-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.874Z
estimatedTokens: 572
keywords: [onFocus, Salesforce, Classic, Registers, function, call, browser, focus, changes, console, user, navigates, primary, tabs, navigation]
---

# onFocus() for Salesforce Classic for Salesforce Classic

> Registers a function to call when the browser focus changes. In
                    the Salesforce console, the
                    browser focus changes when a user navigates between primary tabs or the
                    navigation tab.

# onFocus() for Salesforce Classic for Salesforce Classic

## Usage

Registers a function to call when the browser focus changes. In the Salesforce console, the browser focus changes when a user navigates between primary tabs or the navigation tab.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| listener | function | JavaScript method called when the browser focus changes. |

## Sample Code–JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| result | string | Returns the URL of the page in focus as a JSON string and includes any applicable object ID, object name, object type, and for API version 33.0 or later, the object tab name. For example:{"url":"http://MyDomainName.my.salesforce.com/001x0000003DGQR", "objectId":"001x0000003DGQR","objectName":"Acme", "object":"Account","displayName":"Company"}If the page isn’t focused on an object, the object ID, object name, and object will be empty.For API version 31.0 and later, invoking this API method on a PersonAccount object returns the following additional information.accountId or contactId, the associated account or contact IDpersonAccount, which is true if the object is a PersonAccount and false otherwiseFor example:{"url":"http://MyDomainName.my.salesforce.com/001x0000003DGQR", "objectId":"001x0000003DGQR","objectName":"Acme Person Account", "object":"Account", "contactId":"003D000000QOMqg", "personAccount":true} |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Salesforce Help*: Salesforce Console](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_about.htm&language=en_US "Salesforce Help: Salesforce Console - html (New Window)")

-   [*Salesforce Help*: Turn On Multi-Monitor Components for a Salesforce Console in Salesforce Classic](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_multi_monitor_component.htm&language=en_US "Salesforce Help: Turn On Multi-Monitor Components for a Salesforce Console in
    Salesforce Classic - html (New Window)")

## Code Examples

```
sforce.interaction.onFocus( listener:function );
```

```
<head>
   <script type="text/javascript"
src="http//domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
     var callback = function (response) {
           if (response.result) {
                  alert(response.result);
} };
       function onFocus() {
       //Invokes API method
       sforce.interaction.onFocus(callback);
       }
</script>
</head>
<body>
       <button onclick="onFocus();">onFocus</button>
</body>
```
