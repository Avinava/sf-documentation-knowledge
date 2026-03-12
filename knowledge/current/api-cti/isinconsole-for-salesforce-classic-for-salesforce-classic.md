---
title: "isInConsole() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: isinconsole-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.800Z
estimatedTokens: 408
keywords: [isInConsole, Salesforce, Classic, softphone, console, Usage, Arguments, Sample, Code–JavaScript]
---

# isInConsole() for Salesforce Classic for Salesforce Classic

> Indicates if the softphone is in the Salesforce console.

# isInConsole() for Salesforce Classic for Salesforce Classic

## Usage

Indicates if the softphone is in the Salesforce console.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

If this method is used in a Salesforce console where multi-monitor components is turned on, any popped out softphone components are indicated as in the console.

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
| result | boolean | true if the softphone was in the Salesforce console, false if the softphone wasn’t in the Salesforce console. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Salesforce Help*: Salesforce Console](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_about.htm&language=en_US "Salesforce Help: Salesforce Console - html (New Window)")

-   [*Salesforce Help*: Turn On Multi-Monitor Components for a Salesforce Console in Salesforce Classic](https://help.salesforce.com/apex/HTViewHelpDoc?id=console2_multi_monitor_component.htm&language=en_US "Salesforce Help: Turn On Multi-Monitor Components for a Salesforce Console in
    Salesforce Classic - html (New Window)")

## Code Examples

```
sforce.interaction.isInConsole(callback:function)
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
              alert('User is in console.');
           }
           else {
              alert('User is not in console.');
           }
        };
</script>
</head>
<body>
       <button onclick="sforce.interaction.isInConsole(callback);">isInConsole</button>
</body>
</html>
```
