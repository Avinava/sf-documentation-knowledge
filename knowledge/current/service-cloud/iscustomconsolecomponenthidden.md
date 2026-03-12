---
title: "isCustomConsoleComponentHidden()"
domain: service-cloud
topic: iscustomconsolecomponenthidden
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.635Z
estimatedTokens: 244
keywords: [isCustomConsoleComponentHidden, Determines, application-level, custom, console, component, window, hidden, API, version, 32.0, later, 31.0, earlier, isCustomConsoleComponentWindowHidden]
---

# isCustomConsoleComponentHidden()

> Determines if the application-level
   custom console component window is hidden. This method is available in API version 32.0 and
   later. In API version 31.0 and earlier, this method was called isCustomConsoleComponentWindowHidden().

# isCustomConsoleComponentHidden()

Determines if the application-level custom console component window is hidden. This method is available in API version 32.0 and later. In API version 31.0 and earlier, this method was called isCustomConsoleComponentWindowHidden().

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| hidden | boolean | true if the custom console component window is hidden; false if the custom console component window is visible. |
| success | boolean | true if the isCustomConsoleComponentHidden() call was successful; false if the isCustomConsoleComponentHidden() call wasn’t successful. |

## Code Examples

```
sforce.console.isCustomConsoleComponentHidden((optional) callback:Function)
```

```
<apex:page>

     <A HREF="#" onClick="testIsCustomConsoleComponentHidden();return false">
         Click here to check if the custom console component window is hidden</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testIsCustomConsoleComponentHidden() {
            sforce.console.isCustomConsoleComponentHidden(checkWindowVisibility);
        }
        
        var checkWindowVisibility = function checkWindowVisibility(result) {
            //Display the window visibility
            if (result.success) {
              alert('Is window hidden: ' + result.hidden);
            } else {
              alert('Error!');
            }
        }
  </script>

</apex:page>
```
