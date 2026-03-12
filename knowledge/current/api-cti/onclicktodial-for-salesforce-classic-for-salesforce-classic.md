---
title: "onClickToDial() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: onclicktodial-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.863Z
estimatedTokens: 427
keywords: [onClickToDial, Salesforce, Classic, Registers, function, call, user, clicks, enabled, phone, number, Usage, Arguments, Sample, Code–JavaScript]
---

# onClickToDial() for Salesforce Classic for Salesforce Classic

> Registers a function to call when a user clicks an enabled
               phone number.

# onClickToDial() for Salesforce Classic for Salesforce Classic

## Usage

Registers a function to call when a user clicks an enabled phone number.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| listener | function | JavaScript method called when the user clicks a phone number. |

## Sample Code–JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| result | string | Returns the phone number, object ID, the name of the object, and for API version 33.0 or later, the object tab name from where the click was initiated as a JSON string. For example:{"number":"4155551212","objectId":"001x0000003DIGj","objectName":"Account", "displayName":"Company"}For API version 33.0 or later, invoking this API method on a PersonAccount object returns the following additional information.accountId or contactId, the associated account or contact IDpersonAccount, which is true if the object is a PersonAccount and false otherwiseFor example:{"number":"4155551212","object Id":"001D000000JWVvP","objectName":"Howard Jones","object":"Account", "personAccount":true,"contactId":" 003D000000QOBPX"} |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Visualforce Developer Guide*: support:clickToDial](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_compref_support_clickToDial.htm "Visualforce Developer Guide: support:clickToDial - HTML (New Window)")

## Code Examples

```
sforce.interaction.cti.onClickToDial( listener:function )
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var listener = function (response) {
           if (response.result) {
              alert('User clicked on a phone number.' + response.result );
           }
        };
   //Invokes API method
   sforce.interaction.cti.onClickToDial(listener);
</script>
</head>
</html>
```
