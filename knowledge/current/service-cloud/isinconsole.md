---
title: "isInConsole()"
domain: service-cloud
topic: isinconsole
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.648Z
estimatedTokens: 171
keywords: [isInConsole, Determines, Salesforce, console, API, version, 22.0, later, Arguments, Sample, Code–Visualforce]
---

# isInConsole()

> Determines if the page is in the Salesforce console. This
                method is only available in API version 22.0 or later.

# isInConsole()

Determines if the page is in the Salesforce console. This method is only available in API version 22.0 or later.

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

Returns true if the page is in the Salesforce console; false if the page is not in the Salesforce console.

## Code Examples

```
sforce.console.isInConsole()
```

```
<apex:page standardController="Case">
    <A HREF="#" onClick="testIsInConsole();return false">
         Click here to check if the page is in the Service Cloud console</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testIsInConsole() {
            if (sforce.console.isInConsole()) {
                  alert('in console');
               } else {
                  alert('not in console');
            }
        }
    </script>
</apex:page>
```
