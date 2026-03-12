---
title: "removeFromBrowserTitleQueue()"
domain: service-cloud
topic: removefrombrowsertitlequeue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.397Z
estimatedTokens: 226
keywords: [removeFromBrowserTitleQueue, Removes, browser, tab, title, titles, rotates, every, three, seconds, API, version, 28.0, later, Arguments]
---

# removeFromBrowserTitleQueue()

> Removes a browser tab title from the list of
            titles, which rotates every three seconds. This method is only available in API
                version 28.0 or later.

# removeFromBrowserTitleQueue()

Removes a browser tab title from the list of titles, which rotates every three seconds. This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| title | string | Browser tab title to remove. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | If true, the title was successfully removed from the browser title queue. If false, the title wasn’t removed from the browser title queue. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Code Examples

```
sforce.console.removeFromBrowserTitleQueue( title:String, callback:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        <A HREF="#" onClick="testAddToBrowserTitleQueue();return false"> {
            Click here to enqueue a browser title</A>

        <A HREF="#" onClick="testRemoveFromBrowserTitleQueue();return false"> 
            Click here to remove browser title</A>

        var title = 'TestTitle';
        function testAddToBrowserTitleQueue() { 
            sforce.console.addToBrowserTitleQueue(title);
        }
        function testRemoveFromBrowserTitleQueue() { 
            sforce.console.removeFromBrowserTitleQueue(title);
        }
    </script>
</apex:page>
```
