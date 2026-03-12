---
title: "refreshPage() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: refreshpage-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.893Z
estimatedTokens: 199
keywords: [refreshPage, Salesforce, Classic, refresh, invoked, otherwise, console, refreshes, current, active, tab, API, version, 28.0, later]
---

# refreshPage() for Salesforce Classic for Salesforce Classic

> Returns true if page refresh is invoked, false otherwise. When this method
is called within the Salesforce console,
it refreshes the current active tab. This method is only available in API version 28.0 or
                              later.

# refreshPage() for Salesforce Classic for Salesforce Classic

## Usage

Returns true if page refresh is invoked, false otherwise. When this method is called within the Salesforce console, it refreshes the current active tab. This method is only available in API version 28.0 or later.

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
| result | boolean | Returns true if page refresh has been invoked, false otherwise. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

## Code Examples

```
sforce.interaction.refreshPage(callback:function);
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/28.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
                  alert('Page refresh has been invoked.');
            } else {
                   alert('Page refresh has not been invoked.');
           }
        };
       function refreshPage() {
                sforce.interaction.refreshPage(callback);
        }
</script>
</head>
<body>
       <button onclick="refreshPage();">refreshPage</button>
</body>
</html>
```
