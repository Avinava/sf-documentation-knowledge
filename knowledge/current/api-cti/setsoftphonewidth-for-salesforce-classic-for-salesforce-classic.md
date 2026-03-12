---
title: "setSoftphoneWidth() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: setsoftphonewidth-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.049Z
estimatedTokens: 435
keywords: [setSoftphoneWidth, Salesforce, Classic, softphone, width, pixels, console, Usage, Arguments, Sample, Code–JavaScript]
---

# setSoftphoneWidth() for Salesforce Classic for Salesforce Classic

> Sets the softphone width in pixels for the Salesforce console.

# setSoftphoneWidth() for Salesforce Classic for Salesforce Classic

## Usage

Sets the softphone width in pixels for the Salesforce console.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

If this method is used in a Salesforce console where multi-monitor components is turned on, an error will be returned because resizing multi-monitor component is not allowed.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| width | number | Softphone width in pixels. The width should be a number that’s equal or greater than 0. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| result | boolean | true if the width was set successfully, false if setting the width wasn’t successful. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Salesforce Help*: Salesforce Console](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_about.htm&language=en_US "Salesforce Help: Salesforce Console - html (New Window)")

-   [*Salesforce Help*: Turn On Multi-Monitor Components for a Salesforce Console in Salesforce Classic](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_multi_monitor_component.htm&language=en_US "Salesforce Help: Turn On Multi-Monitor Components for a Salesforce Console in
    Salesforce Classic - html (New Window)")

## Code Examples

```
sforce.interaction.cti.setSoftphoneWidth(width:number, (optional) callback:function)
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
              alert('Width was set successfully.');
           }
           else {
              alert('Width was not set successfully.');
           }
        };
</script>
</head>
<body>
       <button onclick="sforce.interaction.cti.setSoftphoneWidth(100, callback);">
       set softphone width to 100px
       </button>
</body>
</html>
```
