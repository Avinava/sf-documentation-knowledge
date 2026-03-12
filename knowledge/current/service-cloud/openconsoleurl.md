---
title: "openConsoleUrl()"
domain: service-cloud
topic: openconsoleurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.340Z
estimatedTokens: 499
keywords: [openConsoleUrl, Opens, URL, created, generateConsoleUrl, tab, group, tabs, Salesforce, console, API, version, 28.0, later, Arguments]
---

# openConsoleUrl()

> Opens a URL created by the generateConsoleUrl() method (a URL to a tab, or group of related tabs, in the Salesforce console). This method is only available in API
                version 28.0 or later.

# openConsoleUrl()

Opens a URL created by the generateConsoleUrl() method (a URL to a tab, or group of related tabs, in the Salesforce console). This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | string | ID of the console tab to override. If the ID corresponds to an existing primary tab, then the existing primary tab is redirected to the given URL because the console prevents duplicate tabs. Use null to create a new primary tab. |
| consoleUrl | string | Console URL that represents the array of URLs passed into Salesforce. |
| active | boolean | If true, the opened primary tab displays immediately. If false, the opened primary tab displays in the background and the current tab maintains focus. |
| tabLabels | string | Optional array of labels of the opened primary tab or subtabs.  The order in which the tabs appear in the console URL should match the order of the labels that appear in the array. If you do not want to set the labels of tabs, use an empty string (''). |
| tabNames | string | Optional array of names of the opened primary and subtabs.  The order in which the tabs appear in the console URL should match the order of the names that appear in the array. If you do not want to set the names of tabs, use an empty string (''). |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

This example shows that if you want to set a label or name, you must set the other values to empty string (‘’).

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the console URL was opened successfully, false otherwise. |

## Code Examples

```
sforce.console.openConsoleUrl(id:String, consoleUrl:URL, active:Boolean, (optional)tabLabels:String, (optional)tabNames:String, (optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <A HREF="#" onClick="testGenerateConsoleURL();return false">
        Click here to open a console URL</A> 

    <script type="text/javascript">
        var generateConsoleUrl = function testGenerateConsoleURL() {
            sforce.console.generateConsoleUrl([/apex/pagename, /entityId, www.externalUrl.com, Standard Salesforce Url/entityId], showConsoleUrl);
         }
        var openConsoleUrl = function showConsoleUrl(result) {
            sforce.console.openConsoleUrl(null, result.consoleUrl, true, ['Apex', '', 'Salesforce', ''], ['', '', 'externalUrl', ''])
         }
  </script>
</apex:page>
```
