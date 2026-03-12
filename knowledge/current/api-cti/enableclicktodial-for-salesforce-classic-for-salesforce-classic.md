---
title: "enableClickToDial() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: enableclicktodial-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.699Z
estimatedTokens: 257
keywords: [enableClickToDial, Salesforce, Classic, click-to-dial, Usage, Arguments, Sample, Code–JavaScript]
---

# enableClickToDial() for Salesforce Classic for Salesforce Classic

> Enables
click-to-dial.

# enableClickToDial() for Salesforce Classic for Salesforce Classic

## Usage

Enables click-to-dial.

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
| result | boolean | true if click-to-dial was enabled, false if click-to-dial wasn’t enabled. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Visualforce Developer Guide*: support:clickToDial](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_compref_support_clickToDial.htm "Visualforce Developer Guide: support:clickToDial - HTML (New Window)")

## Code Examples

```
sforce.interaction.cti.enableClickToDial( (optional) callback:function )
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
              alert('Click to dial was enabled.');
           } else { 
              alert('Click to dial was not enabled.');
           } 
        };
        function enableClickToDial() {
   //Invokes API method
   sforce.interaction.cti.enableClickToDial(callback);
   }
</script>
</head>
<body>
   <button onclick="enableClickToDial();">enable click to dial</button>
</body>
</html>
```
