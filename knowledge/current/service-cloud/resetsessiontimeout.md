---
title: "resetSessionTimeOut()"
domain: service-cloud
topic: resetsessiontimeout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.409Z
estimatedTokens: 235
keywords: [resetSessionTimeOut, Resets, session, timeout, console, app, ensures, users, continue, working, Visualforce, pages, prompted, log, back]
---

# resetSessionTimeOut()

> Resets a session timeout for a console app. This method
            ensures that users can continue working on Visualforce pages without being prompted to
            log back in to the console when they return to a console tab or console component. This
            method is only available in API version 24.0 or later.

# resetSessionTimeOut()

Resets a session timeout for a console app. This method ensures that users can continue working on Visualforce pages without being prompted to log back in to the console when they return to a console tab or console component. This method is only available in API version 24.0 or later.

For more information, see [Modify Session Security Settings](https://help.salesforce.com/s/articleView?id=xcloud.admin_sessions.htm&type=5&language=en_US) in Salesforce Help.

## Syntax

```

```

## Arguments

None

## Sample Code–Visualforce

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To see this example in action, click the custom link on a case. For more information, see [Define Custom Buttons and Links](https://help.salesforce.com/s/articleView?id=defining_custom_links.htm&language=en_US "HTML (New Window)") in Salesforce Help.

## Response

None

## Code Examples

```
sforce.console.resetSessionTimeOut()
```

```
<apex:page standardController="Case">
    <A HREF="#" onClick="testResetSessionTimeOut();">
           Click here to reset session timeout</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testResetSessionTimeOut() {
            sforce.console.resetSessionTimeOut();
        };
    </script>
</apex:page>
```
