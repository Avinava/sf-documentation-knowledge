---
title: "isVisible() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: isvisible-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.827Z
estimatedTokens: 167
keywords: [isVisible, Salesforce, Classic, softphone, visible, hidden, Usage, Arguments, Sample, Code–JavaScript]
---

# isVisible() for Salesforce Classic for Salesforce Classic

> Returns true if the softphone is
               visible or false if the softphone is
               hidden.

# isVisible() for Salesforce Classic for Salesforce Classic

## Usage

Returns true if the softphone is visible or false if the softphone is hidden.

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
| result | boolean | true if the softphone is visible, false if the softphone isn’t visible. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

## Code Examples

```
sforce.interaction.isVisible(callback:function)
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
              alert('Softphone is visible');
           } else {
              alert('Softphone is not visible');
           }
        };
   function isVisible() {
           sforce.interaction.isVisible(callback);
   }
</script>
</head>
<body>
       <button onclick="isVisible();">isVisible</button>
</body>
</html>
```
