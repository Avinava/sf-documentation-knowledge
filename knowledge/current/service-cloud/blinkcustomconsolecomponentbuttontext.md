---
title: "blinkCustomConsoleComponentButtonText()"
domain: service-cloud
topic: blinkcustomconsolecomponentbuttontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.258Z
estimatedTokens: 238
keywords: [blinkCustomConsoleComponentButtonText, Blinks, button’s, text, application-level, custom, console, component, that’s, API, version, 25.0, later, isn’t, Lightning]
---

# blinkCustomConsoleComponentButtonText()

> Blinks a button’s text on
            an application-level custom console component that’s on a page. This method is only available in API version 25.0 or
                later. This method isn’t supported in Lightning Console.

# blinkCustomConsoleComponentButtonText()

Blinks a button’s text on an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later. This method isn’t supported in Lightning Console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| alternateText | string | The alternate text to display when the button text blinks. |
| interval | number | Controls how often the text blinks in milliseconds. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if blinking, the button text was successful; false if blinking the button text wasn't successful. |

## Code Examples

```
sforce.console.blinkCustomConsoleComponentButtonText(alternateText:String, interval:number, (optional)callback:Function)
```

```
<apex:page>

    <A HREF="#" onClick="testBlinkCustomConsoleComponentButtonText();return false">
         Click here to blink the button text on a custom console component</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testBlinkCustomConsoleComponentButtonText() {
        //Blink the custom console component button text
            sforce.console.blinkCustomConsoleComponentButtonText('Hello World', 10, function(result){
              if (result.success) {
               alert('The text blinking starts!');
              } else {
               alert('Could not initiate the text blinking!');
              }
            });
           }
    </script>
</apex:page>
```
