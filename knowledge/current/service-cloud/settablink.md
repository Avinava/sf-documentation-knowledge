---
title: "setTabLink()"
domain: service-cloud
topic: settablink
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.525Z
estimatedTokens: 221
keywords: [setTabLink, console, tab’s, URL, attribute, location, content, generate, secure, URLs, users, navigate, tabs, displaying, outside]
---

# setTabLink()

> Sets a console tab’s URL attribute to the location of
            the tab’s content. Use this method to generate secure console URLs when users
            navigate to tabs displaying content outside of the Salesforce domain.This method is only available in API
                version 28.0 or later.

# setTabLink()

Sets a console tab’s URL attribute to the location of the tab’s content. Use this method to generate secure console URLs when users navigate to tabs displaying content outside of the Salesforce domain.This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the link was set successfully, false if setting was unsuccessful. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Code Examples

```
sforce.console.setTabLink((optional)callback:Function)
```

```
<apex:page standardController="Account">
    <apex: detail />
        <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        window.onload = function() {
            sforce.console.setTabLink();
             };
  </script>
</apex:page>
```
