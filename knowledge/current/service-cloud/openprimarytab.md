---
title: "openPrimaryTab()"
domain: service-cloud
topic: openprimarytab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.347Z
estimatedTokens: 776
keywords: [openPrimaryTab, Opens, new, primary, tab, display, content, URL, relative, absolute, override, API, version, 20.0, later]
---

# openPrimaryTab()

> Opens a new primary tab to display the content of the
            specified URL, which can be relative or absolute. You can also override an existing tab.
                This method is only available in API version 20.0 or later.

# openPrimaryTab()

Opens a new primary tab to display the content of the specified URL, which can be relative or absolute. You can also override an existing tab. This method is only available in API version 20.0 or later.

-   If the ID corresponds to an existing primary tab, the existing tab is redirected to the given URL because the Salesforce console prevents duplicate tabs.
-   If the URL is to a Salesforce object, that object displays as specified in the Salesforce console app settings. For example, if cases are set to open as a subtab of their parent accounts, and openPrimaryTab() is called on a case, the case opens as subtab on its parent account's primary tab.

If there's an error opening the tab, the error code is reported in the JavaScript console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | string | ID of the primary tab to override.Use null to create a new primary tab.If the ID corresponds to an existing primary tab, the existing tab is redirected to the given URL because the Salesforce console prevents duplicate tabs. |
| url | URL | URL of the opened primary tab.If the URL is to a Salesforce object, that object displays as specified in the Salesforce console app settings. For example, if cases are set to open as a subtab of their parent accounts, and openPrimaryTab() is called on a case, the case opens as subtab on its parent account's primary tab.Users can open an external URL if it’s been added to the console’s allowlist.NoteWhen using a relative URL, make sure that you include "/" at the beginning of your URL. When pointing to a Visualforce page, use "/apex/" at the beginning of your URL. Otherwise, your URL might not work as expected. |
| active | boolean | If true, the opened primary tab displays immediately. If false, the opened primary tab displays in the background and the current tab maintains focus. |
| tabLabel | string | Optional label of the opened primary tab. If a label isn't specified, External Page displays.Add labels as text; HTML isn't supported. |
| callback | function | JavaScript method called upon completion of the method. |
| name | string | Optional name of the opened primary tab.This argument is only available in API version 22.0 and later. |

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
| success | boolean | true if the tab successfully opened; false if the tab didn't open. |
| id | string | ID of the primary tab. IDs are only valid during a user session; IDs become invalid when a user leaves the Salesforce console. |

## Code Examples

```
sforce.console.openPrimaryTab(id:String, url:URL, active:Boolean, (optional)tabLabel:String, (optional)callback:Function, (optional)name)
```

```
<apex:page standardController="Case">

     <A HREF="#" onClick="testOpenPrimaryTab();return false">
         Click here to open a new primary tab</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testOpenPrimaryTab() {
            //Open a new primary tab with the salesforce.com home page in it
            sforce.console.openPrimaryTab(null, 'https://salesforce.com', false, 
                'salesforce', openSuccess, 'salesforceTab');
        }
        
        var openSuccess = function openSuccess(result) {
            //Report whether opening the new tab was successful
            if (result.success == true) {
                alert('Primary tab successfully opened');
            } else {
                alert('Primary tab cannot be opened');
            }
        };
        
  </script>

</apex:page>
```
