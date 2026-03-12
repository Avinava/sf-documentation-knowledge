---
title: "Pagination with a List Controller"
domain: pages
topic: pagination-with-a-list-controller
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.391Z
estimatedTokens: 501
keywords: [Pagination, Controller, add, Visualforce, previous, actions]
---

# Pagination with a List Controller

> To add pagination to a Visualforce page that has a list controller,
    use the next and previous actions.

# Pagination with a List Controller

To add pagination to a Visualforce page that has a list controller, use the next and previous actions.

In this example, a Visualforce page is associated with a standard Account list controller. The page contains two <apex:commandLink> components with action attributes set to {!previous} and {!next}, respectively. When a user clicks one of the links, the associated action is called, and the subset of account records displays on the page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

In the example, the page doesn’t specify a filter in the request, so the page is displayed with the last used filter. For information on using filters with list controllers, see [List Views with Standard List Controllers](atlas.en-us.pages.meta/pages/pages_controller_sosc_list_views.htm "To display a filtered list of records on a Visualforce page, associate the page with a standard list controller.").

```

```

By default, a list controller returns 20 records on the page. To control the number of records displayed on each page, use a controller extension to set the pageSize. See [Building a Controller Extension](atlas.en-us.pages.meta/pages/pages_controller_extension.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

When you use pagination, an exception is thrown in collections that have modified rows, including rows added through an extension action. In this case, the error messages follow the standard behavior, and they can be displayed on the page. For example, you can use the <apex:pageMessages\> or <apex:messages\> component to display an error message to the user.

#### See Also

-   [StandardSetController Class](atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm "StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.")

## Code Examples

```
<apex:page standardController="Account" recordSetvar="accounts">
    <apex:pageBlock title="Viewing Accounts">
        <apex:form id="theForm">
            <apex:pageBlockSection >
                <apex:dataList var="a" value="{!accounts}" type="1">
                    {!a.name}
                </apex:dataList>
            </apex:pageBlockSection>
            <apex:panelGrid columns="2">
                <apex:commandLink action="{!previous}">Previous</apex:commandlink>
                <apex:commandLink action="{!next}">Next</apex:commandlink>
            </apex:panelGrid>
        </apex:form> 
    </apex:pageBlock>
</apex:page>
```

## Related Topics

- List Views with Standard List Controllers (atlas.en-us.pages.meta/pages/pages_controller_sosc_list_views.htm)
- Building a Controller Extension (atlas.en-us.pages.meta/pages/pages_controller_extension.htm)
- StandardSetController Class (atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm)
