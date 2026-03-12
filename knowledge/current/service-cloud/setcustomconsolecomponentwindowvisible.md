---
title: "setCustomConsoleComponentWindowVisible()"
domain: service-cloud
topic: setcustomconsolecomponentwindowvisible
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.495Z
estimatedTokens: 398
keywords: [setCustomConsoleComponentWindowVisible, window, visibility, application-level, custom, console, component, that’s, API, versions, 25.0, 31.0, isn’t, Lightning, Arguments]
---

# setCustomConsoleComponentWindowVisible()

> Sets the window visibility of an
            application-level custom console component that’s on a page. This method is
        available in API versions 25.0 through 31.0. This method isn’t supported in Lightning
        Console.

# setCustomConsoleComponentWindowVisible()

Sets the window visibility of an application-level custom console component that’s on a page. This method is available in API versions 25.0 through 31.0. This method isn’t supported in Lightning Console.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

If this method is called from a popped out component in a Salesforce console where multi-montior components is turned on, nothing will happen. Starting in API version 32.0, this method is no longer available and has been replaced by setCustomConsoleComponentVisible(). For more information, see [setCustomConsoleComponentVisible()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentvisible.htm "Sets the window visibility of an application-level custom console component that’s on a page. This method is available in API version 32.0 and later. In API version 31.0 and earlier, this method was called setCustomConsoleComponentWindowVisible().").

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| visible | boolean | true to make the custom console component window visible, false to hide the custom console component window. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the button window visibility was successful; false if setting the button window visibility wasn't successful. |

## Code Examples

```
sforce.console.setCustomConsoleComponentWindowVisible(visible:Boolean, (optional)callback:Function)
```

```
<apex:page>

    <A HREF="#" onClick="testSetCustomConsoleComponentWindowVisible();return false">
         Click here to make the custom console component window visible</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testSetCustomConsoleComponentWindowVisible() {
        //Make the custom console component window visible
            sforce.console.setCustomConsoleComponentWindowVisible(true);
        }
    </script>
</apex:page>
```

## Related Topics

- setCustomConsoleComponentVisible() (atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentvisible.htm)
