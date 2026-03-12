---
title: "JavaScript Promises"
domain: service-cloud
topic: javascript-promises
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.697Z
estimatedTokens: 221
keywords: [JavaScript, Promises, Lightning, Console, API, results, LWC, Aura]
---

# JavaScript Promises

> Methods in the Lightning Console JavaScript API return results using promises.

# JavaScript Promises

Methods in the Lightning Console JavaScript API return results using promises.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Examples in this guide don’t include the $A.getCallback() wrapper because the Lightning Console JavaScript API returns promises that already include the $A.getCallback() wrapper around callback functions. This is reflected in the sample code throughout this guide.

## Use JavaScript Promises in LWC

This example uses the openTab() to get the tab ID of the focused tab. Then the function calls focusTab() with the tabId that’s returned by the openTab() method.

```

```

You can also simplify the JavaScript promise as follows.

```

```

## Use JavaScript Promises in Aura

Here’s the same example as using JavaScript promises in LWC, written for Aura components.

```

```

## Code Examples

```
import { LightningElement } from 'lwc';
import { openTab, focusTab } from 'lightning/platformWorkspaceApi';

export default class MyComponent extends LightningElement {
    focusNewTab(event) {
        openTab({
            url: '/lightning/r/Account/001R0000003HgssIAC/view',
            label: 'Global Media'
        }).then((tabId) => {
            focusTab(tabId);
        }).catch((error) => {
            console.log(error);
        });   
    }
}
```

```
openTab({
    url: '/lightning/r/Account/001R0000003HgssIAC/view',
    label: 'Global Media',
    focus: true
}).catch((error) => {
    console.log(error);
});
```

```
({
    focusNewTab : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            url: '#/sObject/001R0000003HgssIAC/view',
            label: 'Global Media'
        }).then(function(response) {
            workspaceAPI.focusTab({tabId : response});
       })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```
