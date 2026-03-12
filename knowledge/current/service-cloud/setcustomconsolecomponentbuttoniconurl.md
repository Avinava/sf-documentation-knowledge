---
title: "setCustomConsoleComponentButtonIconUrl()"
domain: service-cloud
topic: setcustomconsolecomponentbuttoniconurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.465Z
estimatedTokens: 216
keywords: [setCustomConsoleComponentButtonIconUrl, button, icon, URL, application-level, custom, console, component, that’s, API, version, 25.0, later, Arguments, Sample]
---

# setCustomConsoleComponentButtonIconUrl()

> Sets the button icon URL of an
            application-level custom console component that’s on a page. This method is only available in API version 25.0 or
                later.

# setCustomConsoleComponentButtonIconUrl()

Sets the button icon URL of an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| iconUrl | string | A URL that points to an image that’s used as a button to launch a custom console component. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the button icon URL was successful; false if setting the button icon URL wasn't successful. |

## Code Examples

```
sforce.console.setCustomConsoleComponentButtonIconUrl(iconURL:String, (optional)callback:Function)
```

```
<apex:page>

    <A HREF="#" onClick="testSetCustomConsoleComponentButtonIconUrl();return false">
         Click here to set the custom console component button icon</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testSetCustomConsoleComponentButtonIconUrl() {
            sforce.console.setCustomConsoleComponentButtonIconUrl('http://imageserver/img.png');
        }
    </script>
</apex:page>
```
