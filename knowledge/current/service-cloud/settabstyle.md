---
title: "setTabStyle()"
domain: service-cloud
topic: settabstyle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.482Z
estimatedTokens: 351
keywords: [setTabStyle, cascading, style, sheet, CSS, specified, tab., tab, set, enclosing, customize, tab’s, look, feel., only, API, version, 28.0, later., Syntax]
---

# setTabStyle()

> Sets a cascading style sheet (CSS) on the specified tab. If
            a tab is not specified, the CSS is set on the enclosing tab. Use this method to
            customize a tab’s look and feel. This method is only available in API
                version 28.0 or later.

# setTabStyle()

Sets a cascading style sheet (CSS) on the specified tab. If a tab is not specified, the CSS is set on the enclosing tab. Use this method to customize a tab’s look and feel. This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| style | string | A CSS specification string used to style the tab. If null or undefined, the tab’s default style is used. |
| tabId | string | The ID of the tab on which to set the style. If null or undefined, the enclosing tab’s ID is used. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the tab’s style was successful, false if setting the tab’s style wasn’t successful. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

If this method is called without passing in a tab ID, the tab in which the Visualforce page is enclosed is used. If there isn’t an enclosing tab, the error message Cannot get a workspace or view tab from the given ID displays in the browser’s developer console.

## Code Examples

```
sforce.console.setTabStyle(style:String, tabId:String, (optional)callback:Function)
```

```
<apex:page>
    <A HREF="#" onClick="testSetTabStyle();return false">
         Click here to change the enclosing tab’s background color to red</A> <BR/>
    <A HREF="#" onClick="testResetTabStyle(); return false;">
         Click here to reset the enclosing tab’s style</A>

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function checkResult(result) { 
            if (result.success) {
               alert('Tab style set successfully!');
            } else {
               alert('Tab style cannot be set!');
            }
    }
        function testSetTabStyle() {
            sforce.console.setTabStyle('background:red;', null, checkResult);
    }
        function testResetTabStyle() {
            sforce.console.setTabStyle(null, null, checkResult);
    }
    </script>
</apex:page>
```
