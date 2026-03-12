---
title: "setTabIcon()"
domain: service-cloud
topic: settabicon
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.474Z
estimatedTokens: 346
keywords: [setTabIcon, icon, specified, tab., tab, set, enclosing, customize, tab’s, icon., only, API, version, 28.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setTabIcon()

> Sets an icon on the specified tab. If a tab is not specified,
            the icon is set on the enclosing tab. Use this method to customize a tab’s icon.
                This method is only available in API
                version 28.0 or later.

# setTabIcon()

Sets an icon on the specified tab. If a tab is not specified, the icon is set on the enclosing tab. Use this method to customize a tab’s icon. This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| iconUrl | string | A URL pointing to an image, which is used as the tab’s icon. If null or undefined, the tab’s default icon is used. |
| tabId | string | The ID of the tab on which to set the icon. If null or undefined, the enclosing tab’s ID is used. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the tab’s icon was successful, false if setting the tab’s icon wasn’t successful. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

If this method is called without passing in a tab ID, the tab in which the Visualforce page is enclosed is used. If there isn’t an enclosing tab, the error message Cannot get a workspace or view tab from the given ID displays in the browser’s developer console.

## Code Examples

```
sforce.console.setTabIcon(iconUrl:String, tabID:String, (optional)callback:Function)
```

```
<apex:page>
    <A HREF="#" onClick="testSetTabIcon();return false">
         Click here to change the enclosing tab’s icon</A> <BR/>
    <A HREF="#" onClick="testResetTabIcon(); return false;">
         Click here to reset the enclosing tab’s icon</A>

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function checkResult(result) { 
            if (result.success) {
               alert('Tab icon set successfully!');
            } else {
               alert('Tab icon cannot be set!');
            }
    }
        function testSetTabIcon() {
            sforce.console.setTabIcon('http://host/path/to/your/icon.png', null, checkResult);
    }
        function testResetTabIcon() {
            sforce.console.setTabIcon(null, null, checkResult);
    }
    </script>
</apex:page>
```
