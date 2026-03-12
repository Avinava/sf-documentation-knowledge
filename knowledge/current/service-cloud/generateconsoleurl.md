---
title: "generateConsoleUrl()"
domain: service-cloud
topic: generateconsoleurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.358Z
estimatedTokens: 303
keywords: [generateConsoleUrl, Generates, URL, tab, group, related, tabs, Salesforce, console., any, include, external, URLs, then, add, console’s, allowlist, they, display, correctly.This]
---

# generateConsoleUrl()

> Generates a URL to a tab, or group of related tabs,
            in the Salesforce console. If any tabs include external URLs, then add the external URLs
            to the console’s allowlist so that they can display correctly.This method is only
            available in API version 28.0 or later.

# generateConsoleUrl()

Generates a URL to a tab, or group of related tabs, in the Salesforce console. If any tabs include external URLs, then add the external URLs to the console’s allowlist so that they can display correctly.This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| urls | string | An array of URLs. The first URL is a primary tab and subsequent URLs are subtabs. Note that the last URL is the subtab on which the console is focused. These URLs can be standard Salesforce URLs or relative URLs. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| consoleUrl | string | Console URL that represents the array of URLs passed into Salesforce. |
| success | boolean | true if the URL was generated successfully, false if otherwise. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Code Examples

```
sforce.console.generateConsoleUrl(urls:String, (optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <A HREF="#" onClick="testGenerateConsoleURL();return false">
        Click here to generate a console URL</A> 

    <script type="text/javascript">
        function showConsoleUrl(result) {
            alert(result.consoleUrl);
         }
        function testGenerateConsoleURL() {
            sforce.console.generateConsoleUrl([/apex/pagename, /entityId, www.externalUrl.com, Standard Salesforce Url/entityId], showConsoleUrl);        }
    </script>
</apex:page>
```
