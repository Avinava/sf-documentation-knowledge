---
title: "Enabling Inline Editing"
domain: pages
topic: enabling-inline-editing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.996Z
estimatedTokens: 1234
keywords: [Enabling, Inline, Editing, Visualforce, pages, 21.0, above, support, lets, users, quickly, edit, right, record’s, detail]
---

# Enabling Inline Editing

> Visualforce pages 21.0 and above support inline editing. Inline editing lets users
            quickly edit field values, right on a record’s detail page. Editable cells
            display a pencil icon () when you hover over the cell, while non-editable cells
            display a lock icon ().

# Enabling Inline Editing

Visualforce pages 21.0 and above support inline editing. Inline editing lets users quickly edit field values, right on a record’s detail page. Editable cells display a pencil icon (![Editable Field](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fpencil.png&folder=pages)) when you hover over the cell, while non-editable cells display a lock icon (![Uneditable Field](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Flock12.gif&folder=pages)).

The <apex:detail\> component has an attribute that activates inline editing, while the <apex:inlineEditSupport\> component provides inline editing functionality to several container components.

To see the power of inline editing, create a page called inlineDetail with the following code:

```

```

Try to double-click one of the fields, like Account Number. You’ll notice that nothing happens.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Remember, for this page to display account data, the ID of a valid account record must be specified as a query parameter in the URL for the page. For example:

```

```

[Displaying Field Values with Visualforce](atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm) has more information about retrieving the ID of a record.

Now, replace the page with the following code:

```

```

Hover over any of the fields, and you’ll notice that you can now edit their contents directly. Clicking **Save** at the top of the section preserves all your changed information. Components that support inline editing must always be descendants of the <apex:form\> tag. However, the <apex:detail\> component doesn’t have to be a descendant of an <apex:form\> to support inline editing.

The <apex:inlineEditSupport\> component must be a descendant of the following components:

-   <apex:dataList\>
-   <apex:dataTable\>
-   <apex:form\>
-   <apex:outputField\>
-   <apex:pageBlock\>
-   <apex:pageBlockSection\>
-   <apex:pageBlockTable\>
-   <apex:repeat\>

Here’s a sample that demonstrates how you can create a page using <apex:pageBlockTable\> that makes use of inline editing:

```

```

The following are cases when inline editing isn’t supported.

-   Inline editing isn’t available in:
    -   Accessibility mode
    -   Setup pages
    -   Dashboards
    -   Customer Portal
    -   Descriptions for HTML solutions
-   The following standard checkboxes on case and lead edit pages are not inline editable:
    -   Case Assignment (Assign using active assignment rules)
    -   Case Email Notification (Send notification email to contact)
    -   Lead Assignment (Assign using active assignment rule)
-   The fields in the following standard objects are not inline editable.
    -   All fields in Documents and Price Books
    -   All fields in Tasks except for Subject and Comment
    -   All fields in Events except for Subject, Description, and Location
    -   Full name fields of Person Accounts, Contacts, and Leads. However, their component fields are, for example, First Name and Last Name.
-   You can use inline editing to change the values of fields on records for which you have read-only access, either via field-level security or your organization's sharing model; however, Salesforce doesn't let you save your changes, and displays an insufficient privileges error message when you try to save the record.
-   Inline editing isn’t supported for standard rich text area (RTA) fields, such as Idea.Body, that are bound to <apex:outputField\> when Visualforce pages are served from a separate domain, other than the Salesforce domain. By default, Visualforce pages are served from a separate domain unless your administrator has disabled this setting. Custom RTA fields aren’t affected by this limitation and support inline editing.
-   Inline editing is supported for dependent picklists that use <apex:outputField\>.
-   Pages must include the controlling field for a dependent picklist. Failing to include the controlling field on the page causes a runtime error when the page displays.
-   Don’t mix inline edit-enabled fields with regular input fields from the same dependency group. For example, don’t mix a standard input field for a controlling field with an inline edit-enabled dependent field:

    ```

    ```

-   If you combine inline edit-enabled dependent picklists with Ajax-style partial page refreshes, refresh all fields with dependent or controlling relationships to each other as one group. Refreshing fields individually isn’t recommended and might result in inconsistent undo/redo behavior. Here’s an example of the recommended way to partially refresh a form with inline edit-enabled dependent picklists:

    ```

    ```

    All of the inline edit-enabled picklists are wrapped in the <apex:outputPanel\> component. The <apex:outputPanel\> rerenders when the <apex:commandButton\> action method fires.

## Code Examples

```
<apex:page standardController="Account">
    <apex:detail subject="{!account.Id}" relatedList="false" /> 
</apex:page>
```

```
https://MyDomain_login_URL/apex/myPage?id=001x000xxx3Jsxb
```

```
<apex:page standardController="Account">
        <apex:detail subject="{!account.Id}" relatedList="false" inlineEdit="true"/> 
</apex:page>
```

```
<apex:page standardController="Account" recordSetVar="records" id="thePage"> 
    <apex:form id="theForm"> 
        <apex:pageBlock id="thePageBlock"> 
            <apex:pageBlockTable value="{!records}" var="record" id="thePageBlockTable"> 
                <apex:column >
                    <apex:outputField value="{!record.Name}" id="AccountNameDOM" /> 
                    <apex:facet name="header">Name</apex:facet>
                </apex:column>
                <apex:column >
                    <apex:outputField value="{!record.Type}" id="AccountTypeDOM" /> 
                    <apex:facet name="header">Type</apex:facet>
                </apex:column>
                <apex:column >
                    <apex:outputField value="{!record.Industry}" 
                        id="AccountIndustryDOM" />  
                        <apex:facet name="header">Industry</apex:facet>
                </apex:column>
                <apex:inlineEditSupport event="ondblClick" 
                        showOnEdit="saveButton,cancelButton" hideOnEdit="editButton" /> 
            </apex:pageBlockTable> 
            <apex:pageBlockButtons > 
                <apex:commandButton value="Edit" action="{!save}" id="editButton" />
                <apex:commandButton value="Save" action="{!save}" id="saveButton" />
                <apex:commandButton value="Cancel" action="{!cancel}" id="cancelButton" />
            </apex:pageBlockButtons> 
        </apex:pageBlock> 
    </apex:form>
</apex:page>
```

```
<apex:page standardController="Account">
    <apex:form>
        <!-- Don't mix a standard input field... -->
        <apex:inputField value="{!account.Controlling__c}"/>
        <apex:outputField value="{!account.Dependent__c}">
            <!-- ...with an inline-edit enabled dependent field -->
            <apex:inlineEditSupport event="ondblClick" />
        </apex:outputField>
    </apex:form>
</apex:page>
```

## Related Topics

- Displaying Field Values with
                Visualforce (atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm)
