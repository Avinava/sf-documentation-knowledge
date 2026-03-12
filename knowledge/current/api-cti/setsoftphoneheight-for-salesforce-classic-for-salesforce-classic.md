---
title: "setSoftphoneHeight() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: setsoftphoneheight-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.006Z
estimatedTokens: 393
keywords: [setSoftphoneHeight, Salesforce, Classic, softphone, height, pixels, Usage, Arguments, Sample, Code–JavaScript]
---

# setSoftphoneHeight() for Salesforce Classic for Salesforce Classic

> Sets the softphone height in pixels.

# setSoftphoneHeight() for Salesforce Classic for Salesforce Classic

## Usage

Sets the softphone height in pixels.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

If this method is used in a Salesforce console where multi-monitor components is turned on, an error will be returned because resizing multi-monitor component is not allowed.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| height | number | Softphone height in pixels. The height should be a number that’s equal or greater than 0. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| result | boolean | true if the height was set successfully, false if setting the height wasn’t successful. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Salesforce Help*: Salesforce Console](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_about.htm&language=en_US "Salesforce Help: Salesforce Console - html (New Window)")

-   [*Salesforce Help*: Turn On Multi-Monitor Components for a Salesforce Console in Salesforce Classic](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_multi_monitor_component.htm&language=en_US "Salesforce Help: Turn On Multi-Monitor Components for a Salesforce Console in
    Salesforce Classic - html (New Window)")

## Code Examples

```
sforce.interaction.cti.setSoftphoneHeight(height:number, (optional) callback:function)
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
              alert('Height was set successfully.');
           }
           else {
              alert('Height was not set successfully.');
           }
        };
</script>
</head>
<body>
       <button onclick="sforce.interaction.cti.setSoftphoneHeight(200, callback);">
       set softphone height to 200px
       </button>
</body>
</html>
```
