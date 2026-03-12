---
title: "openSubtabByPrimaryTabName()"
domain: service-cloud
topic: opensubtabbyprimarytabname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.304Z
estimatedTokens: 595
keywords: [openSubtabByPrimaryTabName, Opens, new, subtab, within, primary, tab, displays, content, specified, URL, which, relative, absolute., override, existing, subtab., open, via, tab's]
---

# openSubtabByPrimaryTabName()

> Opens a new subtab (within a primary tab)
            that displays the content of a specified URL, which can be relative or absolute. You can
            also override an existing subtab. Use to open a new subtab on a primary tab via the
            primary tab's name. This
                method is only available in API version 22.0 or later.

# openSubtabByPrimaryTabName()

Opens a new subtab (within a primary tab) that displays the content of a specified URL, which can be relative or absolute. You can also override an existing subtab. Use to open a new subtab on a primary tab via the primary tab's name. This method is only available in API version 22.0 or later.

If there's an error opening the tab, the error code is reported in the JavaScript console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| primaryTabName | string | Name of the primary tab in which the subtab opened. |
| url | URL | URL of the opened subtab.If the URL is to a Salesforce object, that object displays as specified in the Salesforce console app settings. For example, if cases are set to open as a primary tab, and openSubtab() is called on a case, the case opens as a primary tab.Users can open an external URL if it’s been added to the console’s allowlist. |
| active | boolean | If true, the opened subtab displays immediately. If false, the opened subtab displays in the background and the current tab maintains focus. |
| tabLabel | string | Optional label of the opened subtab. If a label isn't specified, External Page displays.Add labels as text; HTML isn't supported. |
| id | string | ID of the subtab to override.Use null to create a new subtab. |
| callback | function | JavaScript method called upon completion of the method. |
| name | string | Optional name of the opened subtab.This argument is only available in API version 22.0 and later. |

## Sample Code–Visualforce

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the subtab successfully opened; false if the subtab didn't open. |
| id | string | ID of the subtab. IDs are only valid during a user session; IDs become invalid when the user leaves the Salesforce console. |

## Code Examples

```
sforce.console.openSubtabByPrimaryTabName(primaryTabName:String, url:URL, active:Boolean, tabLabel:String, id:String, (optional)callback:Function, (optional)name:String)
```

```
<apex:page standardController="Case">

    <A HREF="#" onClick="testOpenSubtab();return false">
        Click here to open a new subtab by primary tab name</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testOpenSubtabByPrimaryTabName() {
            //First open a primary tab by name
            sforce.console.openPrimaryTab(null, 'http://www.yahoo.com', true, 'Yahoo', openSubtab, 'yahoo');
        }
        
        var openSubtab = function openSubtab(result) {
            //Open the subtab by the name specified in function testOpenSubtabByPrimaryTabName()
            sforce.console.openSubtabByPrimaryTabName('yahoo', 'https://salesforce.com', true, 
                'salesforce', null, openSuccess);
        };
        
        var openSuccess = function openSuccess(result) {
            //Report whether we succeeded in opening the subtab
            if (result.success == true) {
                alert('subtab successfully opened');
            } else {
                alert('subtab cannot be opened');
            }
        };
    </script>
</apex:page>
```
