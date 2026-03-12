---
title: "addToBrowserTitleQueue()"
domain: service-cloud
topic: addtobrowsertitlequeue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.240Z
estimatedTokens: 223
keywords: [addToBrowserTitleQueue, Adds, browser, tab, title, titles, rotates, every, three, seconds, API, version, 28.0, later, Arguments]
---

# addToBrowserTitleQueue()

> Adds a browser tab title to a list of titles,
            which rotates every three seconds. This method is only available in API
                version 28.0 or later.

# addToBrowserTitleQueue()

Adds a browser tab title to a list of titles, which rotates every three seconds. This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| title | string | Browser tab title that is displayed. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | If true, the title was successfully added to the browser title queue. If false, the title wasn’t added to the browser title queue. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Code Examples

```
sforce.console.addToBrowserTitleQueue( title:String, callback:Function )
```

```
<apex:page >
    <A HREF="#" onClick="testAddToBrowserTitleQueue();return false">
            Click here to enqueue a browser title</A>

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
                 function testAddToBrowserTitleQueue() {
             var title = 'TestTitle';
          sforce.console.addToBrowserTitleQueue(title);
          }
    </script>
</apex:page>
```
