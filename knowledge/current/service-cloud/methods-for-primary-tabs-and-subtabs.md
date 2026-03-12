---
title: "Methods for Primary Tabs and Subtabs"
domain: service-cloud
topic: methods-for-primary-tabs-and-subtabs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.159Z
estimatedTokens: 3549
keywords: [Primary, Tabs, Subtabs, Salesforce, console, displays, pages, primary, tabs, subtabs., tab, main, item, work, such, account., subtab, related, items, account’s]
---

# Methods for Primary Tabs and Subtabs

> A Salesforce console displays Salesforce pages
as primary tabs or subtabs. A primary tab displays the main item to
work on, such as an account. A subtab displays related items, such
as an account’s contacts or opportunities.

# Methods for Primary Tabs and Subtabs

A Salesforce console displays Salesforce pages as primary tabs or subtabs. A primary tab displays the main item to work on, such as an account. A subtab displays related items, such as an account’s contacts or opportunities.

-   **[closeTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_closetab.htm)**
    Closes a specified primary tab or subtab. Keep in mind that closing the first tab in a primary tab closes the primary tab itself. This method is only available in API version 20.0 or later.
-   **[disableTabClose()](atlas.en-us.api_console.meta/api_console/sforce_api_console_disabletabclose.htm)**
    Prevents a user from closing a tab or a subtab. If the ID parameter doesn’t specify a tab, the enclosing tab is used. You can also use this method to re-enable a tab that has been disabled. Available in API version 36.0 or later.
-   **[focusPrimaryTabById()](atlas.en-us.api_console.meta/api_console/sforce_api_console_focusprimarytabbyid.htm)**
    Focuses the browser on a primary tab that is already open with the specified ID. This method is only available in API version 22.0 or later.
-   **[focusPrimaryTabByName()](atlas.en-us.api_console.meta/api_console/sforce_api_console_focusprimarytabbyname.htm)**
    Focuses the browser on a primary tab that is already open with the specified name. This method is only available in API version 22.0 or later.
-   **[focusSidebarComponent()](atlas.en-us.api_console.meta/api_console/sforce_api_console_focussidebarcomponent.htm)**
    Focuses the browser on a sidebar component. Use this method to focus on a component with the tab or accordion sidebar style.
-   **[focusSubtabById()](atlas.en-us.api_console.meta/api_console/sforce_api_console_focussubtabbyid.htm)**
    Focuses the browser on a subtab that is already open with the specified ID. This method is only available in API version 22.0 or later.
-   **[focusSubtabByNameAndPrimaryTabId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_focussubtabbynameandprimarytabid.htm)**
    Focuses the browser on a subtab that is already open with the specified name and primary tab ID. This method is only available in API version 22.0 or later.
-   **[focusSubtabByNameAndPrimaryTabName()](atlas.en-us.api_console.meta/api_console/sforce_api_console_focussubtabbynameandprimarytabname.htm)**
    Focuses the browser on a subtab that is already open with the specified name and primary tab name. This method is only available in API version 22.0 or later.
-   **[generateConsoleUrl()](atlas.en-us.api_console.meta/api_console/sforce_api_console_generateconsoleurl.htm)**
    Generates a URL to a tab, or group of related tabs, in the Salesforce console. If any tabs include external URLs, then add the external URLs to the console’s allowlist so that they can display correctly.This method is only available in API version 28.0 or later.
-   **[getEnclosingPrimaryTabId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getenclosingprimarytabid.htm)**
    Returns the ID of the current primary tab. This method works within a primary tab or subtab, not within the navigation tab or custom console components. This method is only available in API version 20.0 or later.
-   **[getEnclosingPrimaryTabObjectId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getenclosingprimarytabobjectid.htm)**
    Returns the object ID of the current primary tab, which contains a subtab. For example, a case ID or account ID. This method works within a primary tab or subtab. This method is only available in API version 24.0 or later.
-   **[getEnclosingTabId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getenclosingtabid.htm)**
    Returns the ID of the tab that contains the current Visualforce page, which may be a primary tab or subtab. This method will work if the call is made within a component enclosed within a subtab. This method is only available in API version 20.0 or later.
-   **[getFocusedPrimaryTabId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabid.htm)**
    Returns the ID of the primary tab on which the browser is focused. This method is only available in API version 25.0 or later.
-   **[getFocusedPrimaryTabObjectId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabobjectid.htm)**
    Returns the object ID of the primary tab on which the browser is focused. This method is only available in API version 25.0 or later.
-   **[getFocusedSubtabId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getfocusedsubtabid.htm)**
    Returns the ID of the subtab on which the browser is focused. For example, a case ID or account ID. This method is only available in API version 25.0 or later.
-   **[getFocusedSubtabObjectId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getfocusedsubtabobjectid.htm)**
    Returns the object ID of the subtab on which the browser is focused. For example, a case ID or account ID. This method is only available in API version 24.0 or later.
-   **[getPageInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getpageinfo.htm)**
    Returns page information for the specified tab after its content has loaded. If the tab ID is null, it returns page information for the enclosing primary tab or subtab. Note that to get the page information from a custom console component, a tabId must be passed as the first parameter to this method.This method is only available in API version 26.0 or later.
-   **[getPrimaryTabIds()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getprimarytabids.htm)**
    Returns all of the IDs of open primary tabs. This method is only available in API version 26.0 or later.
-   **[getSubtabIds()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getsubtabids.htm)**
    Returns all of the IDs of the subtabs on the primary tab specified by a primary tab ID. If the primary tab ID is null, it returns the IDs of the subtabs on the current primary tab. This method can only be called from a custom console component or a detail page overwritten by a Visualforce page. This method is only available in API version 26.0 or later.
-   **[getTabLink()](atlas.en-us.api_console.meta/api_console/sforce_api_console_gettablink.htm)**
    Retrieves the URL to a tab, or group of related tabs, from the Salesforce console. This method is only available in API version 28.0 or later.
-   **[isInConsole()](atlas.en-us.api_console.meta/api_console/sforce_api_console_isinconsole.htm)**
    Determines if the page is in the Salesforce console. This method is only available in API version 22.0 or later.
-   **[onEnclosingTabRefresh()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onenclosingtabrefresh.htm)**
    Registers a function to call when the enclosing tab refreshes. This method is only available in API version 24.0 or later.
-   **[onFocusedPrimaryTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onfocusedprimarytab.htm)**
    Registers a function to call when the focus of the browser changes to a different primary tab. This method is only available in API version 25.0 or later.
-   **[onFocusedSubtab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onfocusedsubtab.htm)**
    Registers a function to call when the focus of the browser changes to a different subtab. This method is only available in API version 24.0 or later.
-   **[onTabSave()](atlas.en-us.api_console.meta/api_console/sforce_api_console_ontabsave.htm)**
    Registers and calls a callback method when a user clicks **Save** in a subtab’s Unsaved Changes dialog box. When using this method, call [setTabUnsavedChanges()](atlas.en-us.api_console.meta/api_console/sforce_api_console_settabdirty.htm "Sets the unsaved changes icon (Unsaved changes on tab icon ) on subtabs to indicate unsaved data. This method is only available in API version 23.0 or later.") in the callback method. This notifies the console that the custom save operation completed. In the call to setTabUnsavedChanges(), pass the first parameter as false to indicate a successful save or true to indicate an unsuccessful save. This method is only available in API version 28.0 or later.
-   **[openConsoleUrl()](atlas.en-us.api_console.meta/api_console/sforce_api_console_openconsoleurl.htm)**
    Opens a URL created by the generateConsoleUrl() method (a URL to a tab, or group of related tabs, in the Salesforce console). This method is only available in API version 28.0 or later.
-   **[openPrimaryTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_openprimarytab.htm)**
    Opens a new primary tab to display the content of the specified URL, which can be relative or absolute. You can also override an existing tab. This method is only available in API version 20.0 or later.
-   **[openSubtab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_opensubtab.htm)**
    Opens a new subtab (within a primary tab) that displays the content of a specified URL, which can be relative or absolute. You can also override an existing subtab. Use to open a new subtab on a primary tab via the primary tab's ID. This method is only available in API version 20.0 or later.
-   **[openSubtabByPrimaryTabName()](atlas.en-us.api_console.meta/api_console/sforce_api_console_opensubtabbyprimarytabname.htm)**
    Opens a new subtab (within a primary tab) that displays the content of a specified URL, which can be relative or absolute. You can also override an existing subtab. Use to open a new subtab on a primary tab via the primary tab's name. This method is only available in API version 22.0 or later.
-   **[refreshPrimaryTabById()](atlas.en-us.api_console.meta/api_console/sforce_api_console_refreshprimarytabbyid.htm)**
    Refreshes a primary tab specified by ID, including its subtabs. This method can't refresh subtabs with URLs to external pages or Visualforce pages. This method is only available in API version 22.0 or later.
-   **[refreshPrimaryTabByName()](atlas.en-us.api_console.meta/api_console/sforce_api_console_refreshprimarytabbyname.htm)**
    Refreshes a primary tab specified by name, including its subtabs. This method can't refresh subtabs with URLs to external pages or Visualforce pages. This method is only available in API version 22.0 or later.
-   **[refreshSubtabById()](atlas.en-us.api_console.meta/api_console/sforce_api_console_refreshsubtabbyid.htm)**
    Refreshes a subtab with the last known URL with a specified ID. This method can't refresh a subtab if the last known URL is an external page or a Visualforce page. This method is only available in API version 22.0 or later.
-   **[refreshSubtabByNameAndPrimaryTabId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_refreshsubtabbynameandprimarytabid.htm)**
    Refreshes a subtab with the last known URL with the specified name and primary tab ID. This method can't refresh a subtab if the last known URL is an external page or a Visualforce page. This method is only available in API version 22.0 or later.
-   **[refreshSubtabByNameAndPrimaryTabName()](atlas.en-us.api_console.meta/api_console/sforce_api_console_refreshsubtabbynameandprimarytabname.htm)**
    Refreshes a subtab with the last known URL with the specified name and primary tab name. This method can't refresh a subtab if the last known URL is an external page or a Visualforce page. This method is only available in API version 22.0 or later.
-   **[reopenLastClosedTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_reopenlastclosedtab.htm)**
    Reopens the last closed primary tab, and any of its subtabs that were open, the moment it was closed. This method is only available in API version 35.0 or later.
-   **[resetSessionTimeOut()](atlas.en-us.api_console.meta/api_console/sforce_api_console_resetsessiontimeout.htm)**
    Resets a session timeout for a console app. This method ensures that users can continue working on Visualforce pages without being prompted to log back in to the console when they return to a console tab or console component. This method is only available in API version 24.0 or later.
-   **[setTabUnsavedChanges()](atlas.en-us.api_console.meta/api_console/sforce_api_console_settabdirty.htm)**
    Sets the unsaved changes icon (![Unsaved changes on tab icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2FdirtyIndicator.png&folder=api_console) ) on subtabs to indicate unsaved data. This method is only available in API version 23.0 or later.
-   **[setTabIcon()](atlas.en-us.api_console.meta/api_console/sforce_api_console_settabicon.htm)**
    Sets an icon on the specified tab. If a tab is not specified, the icon is set on the enclosing tab. Use this method to customize a tab’s icon. This method is only available in API version 28.0 or later.
-   **[setTabLink()](atlas.en-us.api_console.meta/api_console/sforce_api_console_settablink.htm)**
    Sets a console tab’s URL attribute to the location of the tab’s content. Use this method to generate secure console URLs when users navigate to tabs displaying content outside of the Salesforce domain.This method is only available in API version 28.0 or later.
-   **[setTabStyle()](atlas.en-us.api_console.meta/api_console/sforce_api_console_settabstyle.htm)**
    Sets a cascading style sheet (CSS) on the specified tab. If a tab is not specified, the CSS is set on the enclosing tab. Use this method to customize a tab’s look and feel. This method is only available in API version 28.0 or later.
-   **[setTabTextStyle()](atlas.en-us.api_console.meta/api_console/sforce_api_console_settabtextstyle.htm)**
    Sets a cascading style sheet (CSS) on a specified tab’s text. If a tab is not specified, the CSS is set on the enclosing tab’s text. Use this method to customize a tab’s text style. This method is only available in API version 28.0 or later.
-   **[setTabTitle()](atlas.en-us.api_console.meta/api_console/sforce_api_console_settabtitle.htm)**
    Sets the title of a primary tab or subtab. This method is only available in API version 20.0 or later.

## Related Topics

- closeTab() (atlas.en-us.api_console.meta/api_console/sforce_api_console_closetab.htm)
- disableTabClose() (atlas.en-us.api_console.meta/api_console/sforce_api_console_disabletabclose.htm)
- focusPrimaryTabById() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focusprimarytabbyid.htm)
- focusPrimaryTabByName() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focusprimarytabbyname.htm)
- focusSidebarComponent() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focussidebarcomponent.htm)
- focusSubtabById() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focussubtabbyid.htm)
- focusSubtabByNameAndPrimaryTabId() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focussubtabbynameandprimarytabid.htm)
- focusSubtabByNameAndPrimaryTabName() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focussubtabbynameandprimarytabname.htm)
- generateConsoleUrl() (atlas.en-us.api_console.meta/api_console/sforce_api_console_generateconsoleurl.htm)
- getEnclosingPrimaryTabId() (atlas.en-us.api_console.meta/api_console/sforce_api_console_getenclosingprimarytabid.htm)
