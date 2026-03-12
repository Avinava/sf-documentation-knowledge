---
title: "disableClickToDial() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: disableclicktodial-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.690Z
estimatedTokens: 258
keywords: [disableClickToDial, Salesforce, Classic, Disables, click-to-dial, Usage, Arguments, Sample, Code–JavaScript]
---

# disableClickToDial() for Salesforce Classic for Salesforce Classic

> Disables click-to-dial.

# disableClickToDial() for Salesforce Classic for Salesforce Classic

## Usage

Disables click-to-dial.

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

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| result | boolean | true if click-to-dial was disabled, false if click-to-dial wasn’t disabled. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Visualforce Developer Guide*: support:clickToDial](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_compref_support_clickToDial.htm "Visualforce Developer Guide: support:clickToDial - HTML (New Window)")

## Code Examples

```
sforce.interaction.cti.disableClickToDial( (optional) callback:function )
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
              alert('Click to dial was disabled.');
           } else { 
              alert('Click to dial was not disabled.');
           } 
        };
        function disableClickToDial() {
   //Invokes API method
   sforce.interaction.cti.disableClickToDial(callback);
   }
</script>
</head>
<body>
   <button onclick="disableClickToDial();">disable click to dial</button>
</body>
</html>
```
