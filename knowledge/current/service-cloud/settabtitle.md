---
title: "setTabTitle()"
domain: service-cloud
topic: settabtitle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.493Z
estimatedTokens: 323
keywords: [setTabTitle, title, primary, tab, subtab., only, API, version, 20.0, later., Syntax, Arguments, Sample, Code–Visualforce, Version, Later, Note, Response, 25.0]
---

# setTabTitle()

> Sets the title of a primary tab or subtab. This method is only available in API version 20.0 or later.

# setTabTitle()

Sets the title of a primary tab or subtab. This method is only available in API version 20.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| tabTitle | string | Title of a primary tab or subtab. |
| tabId | string | The ID of the tab in which to set the title.This argument is only available in API version 25.0 or later. |

## Sample Code–Visualforce API Version 20.0 or Later

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Response

None

## Sample Code–Visualforce API Version 25.0 or Later

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

This example is only set to run if the Visualforce page is inside an application-level custom component. For more information, see [Methods for Application-Level Custom Console Components](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_app_components.htm).

## Response

None

## Code Examples

```
sforce.console.setTabTitle(tabTitle:String, (optional)tabID:String)
```

```
<apex:page standardController="Case">
    <A HREF="#" onClick="testSetTabTitle();return false">
         Click here to change this tab's title</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testSetTabTitle() {
            //Set the current tab's title
            sforce.console.setTabTitle('My New Title');
        }
    </script>
</apex:page>
```

```
<apex:page>
    <A HREF="#" onClick="testSetTabTitle();return false">
         Click here to change the title of the focused primary tab</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testSetTabTitle() {
            sforce.console.getFocusedPrimaryTabId(function(result) {
               sforce.console.setTabTitle('My New Title', result.id);
            });
	}
    </script>
</apex:page>
```

## Related Topics

- Methods for Application-Level Custom Console
                    Components (atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_app_components.htm)
