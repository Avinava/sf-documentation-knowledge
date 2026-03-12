---
title: "List Views with Standard List Controllers"
domain: pages
topic: list-views-with-standard-list-controllers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.384Z
estimatedTokens: 908
keywords: [Views, Standard, Controllers, display, filtered, records, Visualforce, associate, controller]
---

# List Views with Standard List Controllers

> To display a filtered list of records on a Visualforce page, associate the page with
        a standard list controller.

# List Views with Standard List Controllers

To display a filtered list of records on a Visualforce page, associate the page with a standard list controller.

Many Salesforce pages include list views that allow you to [filter the records displayed on the page](https://help.salesforce.com/s/articleView?id=xcloud.customviews_edit_filters_lex.htm&type=5&language=en_US "HTML (New Window)"). For example, on the opportunities home page, you can view a list of only the opportunities that you own by selecting **My Opportunities** from the list view dropdown. You can create list views on any page that’s associated with a list controller.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

In Visualforce, date filters are calculated differently from filters in Lightning Experience and Salesforce Classic. When creating a list view with a date filter for a Visualforce page, always filter within a date range instead of by an exact date.

For example, for a list view of cases with the filter Date/Time Closed equals 1/25/2023, a Visualforce page shows only cases closed on January 25, 2023 at a specific time, such as 4:00 PM. In Lightning Experience or Classic, a list view with the same filter shows all cases closed during the 24-hour period of January 25, 2023. To show this set of cases in Visualforce, adjust the filter to Date/Time Closed greater or equal 1/25/2023 AND Date/Time Closed less than 1/26/2023.

For example, to create a simple list of accounts with a list view, create a page with this markup:

```

```

The page is associated with the standard Account list controller, which is based on the StandardSetController Apex class. The {!listviewoptions} expression calls the getListViewOptions() method for StandardSetController and evaluates to the available list views. The value that the user selects from the dropdown is bound to the filterId property of the controller. When the filterId changes, the records available to the page change according to the filter. The <apex:datalist\> renders as the updated list view.

The page displays a filtered list of account names according to the list view that the user selects from the dropdown.

![A Viewing Accounts page with a View dropdown list and the option All Accounts selected](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fcustom_sosc_viewlist.jpg&folder=pages)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

By default, a list controller returns 20 records on a page. To control the number of records displayed on each page, use a controller extension to set the pageSize of theStandardSetController. See [Building a Controller Extension](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_extension.htm "HTML (New Window)").

You can also use a list view on an edit page.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If the user changes the list view, an exception is thrown if there are modified rows in the collection. In this case, the handling of error messages follows the standard behavior and can be displayed on the page. For example, you can use the <apex:pageMessages\> or <apex:messages\> component to display an error message to the user.

#### See Also

-   [StandardSetController Class](atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm "StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.")

## Code Examples

```
<apex:page standardController="Account" recordSetvar="accounts">
    <apex:pageBlock title="Viewing Accounts">
        <apex:form id="theForm">
            <apex:panelGrid columns="2">
                <apex:outputLabel value="View:"/>
                <apex:selectList value="{!filterId}" size="1">
                    <apex:actionSupport event="onchange" rerender="list"/>
                    <apex:selectOptions value="{!listviewoptions}"/>
                </apex:selectList>
            </apex:panelGrid>
            <apex:pageBlockSection >
                <apex:dataList var="a" value="{!accounts}" id="list">
                    {!a.name}
                </apex:dataList>
            </apex:pageBlockSection>
          </apex:form> 
    </apex:pageBlock>
</apex:page>
```

```
<apex:page standardController="Opportunity" recordSetVar="opportunities" 
              tabStyle="Opportunity"
    sidebar="false">
    <apex:form>
        <apex:pageBlock>
            <apex:pageMessages/>
            <apex:pageBlock>
                <apex:panelGrid columns="2">
                    <apex:outputLabel value="View:"/>
                    <apex:selectList value="{!filterId}" size="1">
                        <apex:actionSupport event="onchange" rerender="opp_table"/>
                        <apex:selectOptions value="{!listviewoptions}"/>
                    </apex:selectList>
                </apex:panelGrid>
            </apex:pageBlock>

            <apex:pageBlockButtons>
                <apex:commandButton value="Save" action="{!save}"/>
            </apex:pageBlockButtons>
            <apex:pageBlockTable value="{!opportunities}" var="opp" id="opp_table">
                <apex:column value="{!opp.name}"/>
                <apex:column headerValue="Stage">
                    <apex:inputField value="{!opp.stageName}"/>
                </apex:column>
                <apex:column headerValue="Close Date">
                    <apex:inputField value="{!opp.closeDate}"/>
                </apex:column>
            </apex:pageBlockTable>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

## Related Topics

- StandardSetController Class (atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm)
