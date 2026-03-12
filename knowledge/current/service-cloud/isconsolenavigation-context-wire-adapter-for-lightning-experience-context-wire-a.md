---
title: "IsConsoleNavigation Context Wire Adapter for Lightning Experience Context
            Wire Adapter for Lightning Experience"
domain: service-cloud
topic: isconsolenavigation-context-wire-adapter-for-lightning-experience-context-wire-a
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.139Z
estimatedTokens: 355
keywords: [IsConsoleNavigation, Context, Wire, Adapter, Lightning, Experience, Determines, whether, app, it’s, uses, console, navigation, Web, Components]
---

# IsConsoleNavigation Context Wire Adapter for Lightning Experience Context
            Wire Adapter for Lightning Experience

> Determines whether the app it’s used within uses console navigation. This wire
        adapter is available for Lightning Web Components (LWC) only.

# IsConsoleNavigation Context Wire Adapter for Lightning Experience Context Wire Adapter for Lightning Experience

Determines whether the app it’s used within uses console navigation. This wire adapter is available for Lightning Web Components (LWC) only.

To determine if the component is within a console app, use this wire adapter. If a caller component isn’t using the wire adapter inside a tab or subtab, the enclosing utility tab ID is null.

## LWC Sample Code

This component checks if it’s within a Lightning console app and returns the tab information using the IsConsoleNavigation wire adapter.

```

```

For another example that uses IsConsoleNavigation, see [closeTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_closeTab.htm "Closes a workspace tab or subtab. This method works only in Lightning console apps.").

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Response

If the current app uses console navigation, this method returns true, or false otherwise.

#### See Also

-   [*LWC Dev Guide*: Understand the Wire Service](https://developer.salesforce.com/docs/platform/lwc/guide/data-wire-service-about.html "LWC Dev Guide: Understand the Wire Service - HTML (New Window)")

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, getFocusedTabInfo } from 'lightning/platformWorkspaceApi';

export class ConsoleNavExample extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation;

    async handleFocusTab() {
        if (!this.isConsoleNavigation) {
            return;
        }

        const { tabId } = await getFocusedTabInfo();
        // do something with the tabId
        });
    }
}
```

## Related Topics

- closeTab() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_closeTab.htm)
