---
title: "Using Standard Controller Actions"
domain: pages
topic: using-standard-controller-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.403Z
estimatedTokens: 1124
keywords: [Standard, Controller, Actions, Action, perform, logic, navigation, event, occurs, user, clicks, button, hovers, over, area]
---

# Using Standard Controller Actions

> Action methods perform logic or navigation when a page
                    event occurs, such as when a user clicks a button, or hovers over an area of the
                    page. Action methods can be called from page markup by using {! } notation in the action parameter of one of the following
 

# Using Standard Controller Actions

Action methods perform logic or navigation when a page event occurs, such as when a user clicks a button, or hovers over an area of the page. Action methods can be called from page markup by using {! } notation in the action parameter of one of the following tags:

-   [<apex:commandButton\>](atlas.en-us.pages.meta/pages/pages_compref_commandButton.htm "A button that is rendered as an HTML input element with the type attribute set to submit, reset, or image, depending on the <apex:commandButton> tag's specified values.") creates a button that calls an action
-   [<apex:commandLink\>](atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm "A link that executes an action defined by a controller, and then either refreshes the current page, or navigates to a different page based on the PageReference variable that is returned by the action.") creates a link that calls an action
-   [<apex:actionPoller\>](atlas.en-us.pages.meta/pages/pages_compref_actionPoller.htm) periodically calls an action
-   [<apex:actionSupport\>](atlas.en-us.pages.meta/pages/pages_compref_actionSupport.htm "A component that adds AJAX support to another component, allowing the component to be refreshed asynchronously by the server when a particular event occurs, such as a button click or hover.") makes an event (such as “onclick”, “onmouseover”, and so on) on another, named component, call an action
-   [<apex:actionFunction\>](atlas.en-us.pages.meta/pages/pages_compref_actionFunction.htm "A component that provides support for invoking controller action methods directly from JavaScript code using an AJAX request.") defines a new JavaScript function that calls an action
-   [<apex:page\>](atlas.en-us.pages.meta/pages/pages_compref_page.htm "A single Visualforce page. All pages must be wrapped inside a single <apex:page> component tag.") calls an action when the page is loaded

The following table describes the action methods that are supported by all standard controllers. You can associate these actions with any Visualforce component that includes an action attribute.

| Action | Description |
| --- | --- |
| save | Inserts a new record or updates an existing record if it’s currently in context. After this operation is finished, the save action returns the user to the original page (if known), or navigates the user to the detail page for the saved record. |
| quicksave | Inserts a new record or updates an existing record if it’s currently in context. Unlike the save action, this page doesn’t redirect the user to another page. |
| edit | Navigates the user to the edit page for the record that is currently in context. After this operation is finished, the edit action returns the user to the page where the user originally invoked the action. |
| delete | Deletes the record that is in context. After this operation is finished, the delete action either refreshes the page or sends the user to tab for the associated object. |
| cancel | Aborts an edit operation. After this operation is finished, the cancel action returns the user to the page where the user originally invoked the edit. |
| list | Returns a PageReference object of the standard list page, based on the most recently used list filter for that object. For example, if the standard controller is contact, and the last filtered list that the user viewed is New Last Week, the contacts created in the last week are displayed. |

For example, the following page allows you to update an account. When you click **Save**, the save action is triggered on the standard controller, and the account is updated.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Remember, for this page to display account data, the ID of a valid account record must be specified as a query parameter in the URL for the page. For example:

```

```

[Displaying Field Values with Visualforce](atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm) has more information about retrieving the ID of a record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Command buttons and links that are associated with save, quicksave, edit, or delete actions in a standard controller are rendered only if the user has the appropriate permissions. Likewise, if no particular record is associated with a page, command buttons and links associated with the edit and delete actions aren’t rendered.

## Code Examples

```
<apex:page standardController="Account">
  <apex:form>
    <apex:pageBlock title="My Content" mode="edit">
      <apex:pageBlockButtons>
        <apex:commandButton action="{!save}" value="Save"/>
      </apex:pageBlockButtons>
      <apex:pageBlockSection title="My Content Section" columns="2">
        <apex:inputField value="{!account.name}"/>
        <apex:inputField value="{!account.site}"/>
        <apex:inputField value="{!account.type}"/>
        <apex:inputField value="{!account.accountNumber}"/>
      </apex:pageBlockSection>
    </apex:pageBlock>
  </apex:form>
</apex:page>
```

```
https://MyDomain_login_URL/apex/myPage?id=001x000xxx3Jsxb
```

## Related Topics

- <apex:commandButton> (atlas.en-us.pages.meta/pages/pages_compref_commandButton.htm)
- <apex:commandLink> (atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm)
- <apex:actionPoller> (atlas.en-us.pages.meta/pages/pages_compref_actionPoller.htm)
- <apex:actionSupport> (atlas.en-us.pages.meta/pages/pages_compref_actionSupport.htm)
- <apex:actionFunction> (atlas.en-us.pages.meta/pages/pages_compref_actionFunction.htm)
- <apex:page> (atlas.en-us.pages.meta/pages/pages_compref_page.htm)
- Displaying Field Values with Visualforce (atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm)
