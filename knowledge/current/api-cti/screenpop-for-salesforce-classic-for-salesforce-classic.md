---
title: "screenPop() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: screenpop-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.958Z
estimatedTokens: 218
keywords: [screenPop, Salesforce, Classic, Pops, target, URL, relative, Usage, Arguments, Sample, Code–JavaScript]
---

# screenPop() for Salesforce Classic for Salesforce Classic

> Pops to a target URL, which must be relative.

# screenPop() for Salesforce Classic for Salesforce Classic

## Usage

Pops to a target URL, which must be relative.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| url | string | A relative URL, which specifies the location of the screen pop. |
| force | boolean | Set value to true to force a screen pop, false otherwise. This argument is only available in API version 28.0 and later. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| result | boolean | true if the screen pop was successful, false if the screen pop wasn’t successful. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

## Code Examples

```
sforce.interaction.screenPop(url:string, force:boolean, (optional) callback:function)
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/28.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
              alert('Screen pop was set successfully.');
           }
           else {
              alert('Screen pop failed.' + result.error);
           }
        };
       function screenPop() {
                //Invokes API method
                sforce.interaction.screenPop('/001x0000003DGQR', true, callback);
        }
</script>
</head>
<body>
       <!-- Note that '001x0000003DGQR' is an example of an object Id to screen pop. -->
       <button onclick="screenPop();">screen pop to entity Id</button>
</body>
</html>
```
