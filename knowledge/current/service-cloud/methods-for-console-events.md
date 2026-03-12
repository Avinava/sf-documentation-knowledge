---
title: "Methods for Console Events"
domain: service-cloud
topic: methods-for-console-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.199Z
estimatedTokens: 712
keywords: [Console, Events, objects, Email, Case, Comment, tab, opened, closed, immediately, generated, cases, field’s, equal, parent’s]
---

# Methods for Console Events

> Note: For some objects (such as Email and Case Comment), the tab
                      is opened and closed immediately and no object ID is generated for the tab. In
                      those cases, this field’s value is equal to the parent’s object ID.

# Methods for Console Events

JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. The following standard events are supported:

| Event | Description | Payload |
| --- | --- | --- |
| sforce.console.ConsoleEvent.OPEN_TAB | Fired when a primary tab or subtab is opened. Available in API version 30.0 or later. | id — The ID of the opened tab.objectId — The object ID of the opened tab, if available. |
| sforce.console.ConsoleEvent.CLOSE_TAB | Fired when a primary tab or subtab with a specified ID in the additionalParams argument is closed. Or, fired when a primary tab or subtab with no specified ID is closed. Available in API version 30.0 or later. | id — The ID of the closed tab.objectID — The object ID of the closed tab, if available.Note: For some objects (such as Email and Case Comment), the tab is opened and closed immediately and no object ID is generated for the tab. In those cases, this field’s value is equal to the parent’s object ID.tabObjectId — The object ID of the closed tab, if available.Note: tabObjectId is generally the same as objectID. However, for tabs that close upon submission, no tabObjectId is generated. In those cases, the value of this field is either empty or null. For an Email, the value is empty. For a Case Comment, the value is null. |
| sforce.console.ConsoleEvent.CONSOLE_LOGOUT | Delays the execution of logging out of a console when a user clicks Logout. When Logout is clicked:An overlay appears, which tells a user that logout is in progress.Callbacks are executed that have been registered by using sforce.console.ConsoleEvent.CONSOLE_LOGOUT.Console logout logic is executed.If the callback contains synchronous blocking code, the console logout code isn’t executed until the blocking code is executed. As a best practice, avoid synchronous blocking code or long code execution during logout.Available in API version 31.0 or later. | None |

-   **[addEventListener()](atlas.en-us.api_console.meta/api_console/sforce_api_console_addeventlistener.htm)**
    Adds a listener for a custom event type or a standard event type when the event is fired. This method adds a listener for custom event types in API version 25.0 or later; it adds a listener for standard event types in API version 30.0 or later.
-   **[fireEvent()](atlas.en-us.api_console.meta/api_console/sforce_api_console_fireevent.htm)**
    Fires a custom event. This method is only available in API version 25.0 or later.
-   **[removeEventListener()](atlas.en-us.api_console.meta/api_console/sforce_api_console_removeeventlistener.htm)**
    Removes a listener for a custom event type or a standard event type. This method removes a listener for custom event types in API version 25.0 or later; it removes a listener for standard event types in API version 30.0 or later.

## Related Topics

- addEventListener() (atlas.en-us.api_console.meta/api_console/sforce_api_console_addeventlistener.htm)
- fireEvent() (atlas.en-us.api_console.meta/api_console/sforce_api_console_fireevent.htm)
- removeEventListener() (atlas.en-us.api_console.meta/api_console/sforce_api_console_removeeventlistener.htm)
