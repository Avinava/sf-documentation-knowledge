---
title: "isInCustomConsoleComponent()"
domain: service-cloud
topic: isincustomconsolecomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.656Z
estimatedTokens: 214
keywords: [isInCustomConsoleComponent, Determines, application-level, custom, console, component, API, version, 25.0, later, Arguments, Sample, Code–Visualforce]
---

# isInCustomConsoleComponent()

> Determines if the page is in an
            application-level custom console component. This method is only available in API version 25.0 or
                later.

# isInCustomConsoleComponent()

Determines if the page is in an application-level custom console component. This method is only available in API version 25.0 or later.

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
| inCustomConsoleComponent | boolean | true if the page is in a custom console component; false if the page isn’t in a custom console component. |
| success | boolean | true if returning the page status was successful; false if returning the page status wasn't successful. |

## Code Examples

```
sforce.console.isInCustomConsoleComponent((optional) callback:Function)
```

```
<apex:page>

     <A HREF="#" onClick="testIsInCustomConsoleComponent();return false">
         Click here to check if the page is in an app-level custom console component</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testIsInCustomConsoleComponent() {
            sforce.console.isInCustomConsoleComponent(checkInComponent);
        }
        
        var checkInComponent = function checkInComponent(result) {
            //Check if in component
            alert('Is in custom console component: ' + result.inCustomConsoleComponent);
        };
        
  </script>

</apex:page>
```
