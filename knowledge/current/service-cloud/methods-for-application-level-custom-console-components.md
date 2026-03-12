---
title: "Methods for Application-Level Custom Console
Components"
domain: service-cloud
topic: methods-for-application-level-custom-console-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.180Z
estimatedTokens: 1710
keywords: [Application-Level, Custom, Console, Components, let, customize, extend, integrate, footer, sidebars, highlights, panels, interaction, logs, Salesforce]
---

# Methods for Application-Level Custom Console
Components

> Custom console components let you customize, extend, or integrate the footer, sidebars,
      highlights panels, and interaction logs of a Salesforce console using Visualforce, canvas
      apps, lookup fields, or related lists. Administrators can add components to either:

# Methods for Application-Level Custom Console Components

Custom console components let you customize, extend, or integrate the footer, sidebars, highlights panels, and interaction logs of a Salesforce console using Visualforce, canvas apps, lookup fields, or related lists. Administrators can add components to either:

-   Page layouts to display content on specific pages
-   Salesforce console apps to display content across all pages and tabs

-   **[addToBrowserTitleQueue()](atlas.en-us.api_console.meta/api_console/sforce_api_console_addtobrowsertitlequeue.htm)**
    Adds a browser tab title to a list of titles, which rotates every three seconds. This method is only available in API version 28.0 or later.
-   **[blinkCustomConsoleComponentButtonText()](atlas.en-us.api_console.meta/api_console/sforce_api_console_blinkcustomconsolecomponentbuttontext.htm)**
    Blinks a button’s text on an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later. This method isn’t supported in Lightning Console.
-   **[isCustomConsoleComponentPoppedOut()](atlas.en-us.api_console.meta/api_console/sforce_api_console_iscustomconsolecomponentpoppedout.htm)**
    Determines if a custom console component is popped out from a browser. To use this method, multi-monitor components must be turned on. This method is only available in API version 30.0 or later.
-   **[isCustomConsoleComponentWindowHidden()](atlas.en-us.api_console.meta/api_console/sforce_api_console_iscustomconsolecomponentwindowhidden.htm)**
    Determines if the application-level custom console component window is hidden. This method is available in API versions 25.0 through 31.0.
-   **[isCustomConsoleComponentHidden()](atlas.en-us.api_console.meta/api_console/sforce_api_console_iscustomconsolecomponenthidden.htm)**
    Determines if the application-level custom console component window is hidden. This method is available in API version 32.0 and later. In API version 31.0 and earlier, this method was called isCustomConsoleComponentWindowHidden().
-   **[isInCustomConsoleComponent()](atlas.en-us.api_console.meta/api_console/sforce_api_console_isincustomconsolecomponent.htm)**
    Determines if the page is in an application-level custom console component. This method is only available in API version 25.0 or later.
-   **[onCustomConsoleComponentButtonClicked()](atlas.en-us.api_console.meta/api_console/sforce_api_console_oncustomconsolecomponentbuttonclicked.htm)**
    Registers a function to call when a button is clicked on an application-level custom console component. This method is only available in API version 25.0 or later.
-   **[removeFromBrowserTitleQueue()](atlas.en-us.api_console.meta/api_console/sforce_api_console_removefrombrowsertitlequeue.htm)**
    Removes a browser tab title from the list of titles, which rotates every three seconds. This method is only available in API version 28.0 or later.
-   **[runSelectedMacro()](atlas.en-us.api_console.meta/api_console/sforce_api_console_runselectedmacro.htm)**
    Executes the selected macro in the macro widget. This method is only available in API version 36.0 or later. This method isn’t supported in Lightning Console.
-   **[scrollCustomConsoleComponentButtonText()](atlas.en-us.api_console.meta/api_console/sforce_api_console_scrollcustomconsolecomponentbuttontext.htm)**
    Scrolls a button’s text on an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later. This method isn’t supported in Lightning Console.
-   **[selectMacro()](atlas.en-us.api_console.meta/api_console/sforce_api_console_selectmacro.htm)**
    Selects and displays a specific macro in the macro widget. This method is only available in API version 36.0 or later. This method isn’t supported in Lightning Console.
-   **[setCustomConsoleComponentButtonIconUrl()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentbuttoniconurl.htm)**
    Sets the button icon URL of an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later.
-   **[setCustomConsoleComponentButtonStyle()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentbuttonstyle.htm)**
    Sets the style of a button used to launch an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later. This method isn’t supported in Lightning Console.
-   **[setCustomConsoleComponentButtonText()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentbuttontext.htm)**
    Sets the text on a button used to launch an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later.
-   **[setCustomConsoleComponentHeight()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentheight.htm)**
    Sets the window height of an application-level custom console component that’s on a page. This method is available in API version 32.0 or later.
-   **[setCustomConsoleComponentVisible()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentvisible.htm)**
    Sets the window visibility of an application-level custom console component that’s on a page. This method is available in API version 32.0 and later. In API version 31.0 and earlier, this method was called setCustomConsoleComponentWindowVisible().
-   **[setCustomConsoleComponentWidth()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentwidth.htm)**
    Sets the window width of an application-level custom console component that’s on a page. This method is available in API version 32.0 or later.
-   **[setCustomConsoleComponentPopoutable()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentpopoutable.htm)**
    Sets a custom console component to be popped out or popped into a browser. To use this method, multi-monitor components must be turned on. This method is only available in API version 30.0 or later.
-   **[setCustomConsoleComponentWindowVisible()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setcustomconsolecomponentwindowvisible.htm)**
    Sets the window visibility of an application-level custom console component that’s on a page. This method is available in API versions 25.0 through 31.0. This method isn’t supported in Lightning Console.
-   **[setSidebarVisible()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setsidebarvisible.htm)**
    Shows or hides a console sidebar based on tabId and region. This method is available in API version 33.0 or later. This method isn’t supported in Lightning Console.

## Related Topics

- addToBrowserTitleQueue() (atlas.en-us.api_console.meta/api_console/sforce_api_console_addtobrowsertitlequeue.htm)
- blinkCustomConsoleComponentButtonText() (atlas.en-us.api_console.meta/api_console/sforce_api_console_blinkcustomconsolecomponentbuttontext.htm)
- isCustomConsoleComponentPoppedOut() (atlas.en-us.api_console.meta/api_console/sforce_api_console_iscustomconsolecomponentpoppedout.htm)
- isCustomConsoleComponentWindowHidden() (atlas.en-us.api_console.meta/api_console/sforce_api_console_iscustomconsolecomponentwindowhidden.htm)
- isCustomConsoleComponentHidden() (atlas.en-us.api_console.meta/api_console/sforce_api_console_iscustomconsolecomponenthidden.htm)
- isInCustomConsoleComponent() (atlas.en-us.api_console.meta/api_console/sforce_api_console_isincustomconsolecomponent.htm)
- onCustomConsoleComponentButtonClicked() (atlas.en-us.api_console.meta/api_console/sforce_api_console_oncustomconsolecomponentbuttonclicked.htm)
- removeFromBrowserTitleQueue() (atlas.en-us.api_console.meta/api_console/sforce_api_console_removefrombrowsertitlequeue.htm)
- runSelectedMacro() (atlas.en-us.api_console.meta/api_console/sforce_api_console_runselectedmacro.htm)
- scrollCustomConsoleComponentButtonText() (atlas.en-us.api_console.meta/api_console/sforce_api_console_scrollcustomconsolecomponentbuttontext.htm)
