---
title: "Standard List Controller Actions"
domain: pages
topic: standard-list-controller-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.364Z
estimatedTokens: 1004
keywords: [Standard, Controller, Actions, controllers, support, action, perform, logic, navigation, event, occurs, user, clicks, button, hovers]
---

# Standard List Controller Actions

> Standard list controllers support action methods. Action methods
        perform logic or navigation when a page event occurs, such as when a
        user clicks a button or hovers over an area of the page.

# Standard List Controller Actions

Standard list controllers support action methods. Action methods perform logic or navigation when a page event occurs, such as when a user clicks a button or hovers over an area of the page.

Call action methods from page markup by using {! } notation in the action attribute of one of these tags.

-   [<apex:commandButton\>](atlas.en-us.pages.meta/pages/pages_compref_commandButton.htm "A button that is rendered as an HTML input element with the type attribute set to submit, reset, or image, depending on the <apex:commandButton> tag's specified values.") creates a button that calls an action
-   [<apex:commandLink\>](atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm "A link that executes an action defined by a controller, and then either refreshes the current page, or navigates to a different page based on the PageReference variable that is returned by the action.") creates a link that calls an action
-   [<apex:actionPoller\>](atlas.en-us.pages.meta/pages/pages_compref_actionPoller.htm) periodically calls an action
-   [<apex:actionSupport\>](atlas.en-us.pages.meta/pages/pages_compref_actionSupport.htm "A component that adds AJAX support to another component, allowing the component to be refreshed asynchronously by the server when a particular event occurs, such as a button click or hover.") makes an event (such as “onclick”, “onmouseover”, and so on) on another, named component, call an action
-   [<apex:actionFunction\>](atlas.en-us.pages.meta/pages/pages_compref_actionFunction.htm "A component that provides support for invoking controller action methods directly from JavaScript code using an AJAX request.") defines a new JavaScript function that calls an action
-   [<apex:page\>](atlas.en-us.pages.meta/pages/pages_compref_page.htm "A single Visualforce page. All pages must be wrapped inside a single <apex:page> component tag.") calls an action when the page is loaded

This table describes the action methods all standard list controllers support. You can associate these actions with any Visualforce component that includes an action attribute.

| Action | Description |
| --- | --- |
| save | Inserts new records or updates existing records that have been changed. After this operation is finished, the save action returns the user to the original page, if known, or to the home page. |
| quicksave | Inserts new records or updates existing records that have been changed. Unlike the save action, quicksave doesn’t redirect the user to another page. |
| list | Returns a PageReference object of the standard list page, based on the most recently used list filter for that object when the filterId isn’t specified by the user. |
| cancel | Aborts an edit operation. After this operation is finished, the cancel action returns the user to the page where they originally invoked the edit. |
| first | Displays the first page of records in the set. |
| last | Displays the last page of records in the set. |
| next | Displays the next page of records in the set. |
| previous | Displays the previous page of records in the set. |

In this example, the user specifies a filter to view account records.

```

```

The page is associated with the standard Account list controller, which is based on the StandardSetController Apex class. The {!listviewoptions} expression calls the getListViewOptions() method for StandardSetController and evaluates to the available list views. The list view that the user selects is bound to the filterId property of the controller. When the filterId changes, the records available to the page change according to the filter. So when the user clicks **Go**, the standard list page displays the selected filtered records.

#### See Also

-   [StandardSetController Class](atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm "StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.")

## Code Examples

```
<apex:page standardController="Account" recordSetVar="accounts">
   <apex:form>
       <apex:selectList value="{!filterid}" size="1">
           <apex:selectOptions value="{!listviewoptions}"/>
       </apex:selectList>
       <apex:commandButton value="Go" action="{!list}"/>
   </apex:form>
</apex:page>
```

## Related Topics

- <apex:commandButton> (atlas.en-us.pages.meta/pages/pages_compref_commandButton.htm)
- <apex:commandLink> (atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm)
- <apex:actionPoller> (atlas.en-us.pages.meta/pages/pages_compref_actionPoller.htm)
- <apex:actionSupport> (atlas.en-us.pages.meta/pages/pages_compref_actionSupport.htm)
- <apex:actionFunction> (atlas.en-us.pages.meta/pages/pages_compref_actionFunction.htm)
- <apex:page> (atlas.en-us.pages.meta/pages/pages_compref_page.htm)
- StandardSetController Class (atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm)
