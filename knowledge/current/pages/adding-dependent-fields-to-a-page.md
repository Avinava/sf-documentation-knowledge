---
title: "Adding Dependent Fields to a Page"
domain: pages
topic: adding-dependent-fields-to-a-page
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:23.971Z
estimatedTokens: 1106
keywords: [Adding, Dependent, provide, way, filter, Visualforce, consist, two, parts, controlling, determines, filtering, filtered, dynamicall, Picklist]
---

# Adding Dependent Fields to a Page

> Dependent fields provide a way to filter the field values displayed on a Visualforce
            page. Dependent fields consist of two parts: a controlling field that determines the
            filtering, and a dependent field that has its values filtered. Dependent fields can
            dynamicall

# Adding Dependent Fields to a Page

Dependent fields provide a way to filter the field values displayed on a Visualforce page. Dependent fields consist of two parts: a controlling field that determines the filtering, and a dependent field that has its values filtered. Dependent fields can dynamically filter values in fields such as picklists, multi-select picklists, radio buttons, and checkboxes. Dependent picklists can only be displayed on Visualforce pages with Salesforce API version 19.0 or higher.

For this example, we’ll be adding a dependent picklist, Subcategories, to a Visualforce page. First, create this custom picklist:

1.  From the object management settings for accounts, go to the fields area, and then click **New**.
2.  Choose **Picklist**, and then click **Next**.
3.  Enter Subcategories for the **Field Label**.
4.  Enter the following terms for the list of values:
    -   Apple Farms
    -   Cable
    -   Corn Fields
    -   Internet
    -   Radio
    -   Television
    -   Winery
5.  Click **Next** twice, then click **Save**.

To define the field dependencies for Subcategories:

1.  From the object management settings for accounts, go to the fields area.
2.  Click **Field Dependencies**.
3.  Click **New**.
4.  Choose Industry as a controlling field, and Subcategories as a dependent field.
5.  Click **Continue**.
6.  Each value in the controlling field (from Industry) is listed in the top row and each value in the dependent field (from Subcategory) is displayed in the column below it. Set your field dependencies to match this image:

    The Field Dependency Matrix for Subcategories ![The field dependency matrix for Subcategories](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_field_dependency_matrix.png&folder=pages)

    You can disregard any other Industry types that aren’t shown above.
7.  Click **Save**.

Now, create a Visualforce page called dependentPicklists that looks like this:

```

```

When you select Agriculture from the Industry picklist, the Subcategories picklist contains Apple Farms, Corn Fields, and Winery. If you select Communication, your Subcategories picklist contains all the Communication types defined earlier.

## Dependent Picklist Considerations

Consider the following when using dependent picklists in Visualforce pages:

-   You can mix controlling and dependent fields across various field types, such as picklists, multi-picklists, radio buttons, and checkboxes.
-   There’s a limit of 10 dependent picklist pairs per page. This is totalled across all objects. Thus, you could have five dependent picklists on Account, and five on Contact, but no more. However, you can repeat the same pair of dependent picklists, such as in an iterative tag like <apex:repeat\>, without counting more than once against your limit.
-   Pages must include the controlling field for a dependent picklist. Failing to include the controlling field on the page causes a runtime error when the page displays.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    If the API version used is 26.0 or earlier, and the user viewing the page has **read-only** access to the controlling field, the dependent picklist shows all possible values for the picklist, instead of being filtered on the read-only value. This is a known limitation in Visualforce.

-   Don’t mix inline edit-enabled fields with regular input fields from the same dependency group. For example, don’t mix a standard input field for a controlling field with an inline edit-enabled dependent field:

    ```

    ```

-   If you combine inline edit-enabled dependent picklists with Ajax-style partial page refreshes, refresh all fields with dependent or controlling relationships to each other as one group. Refreshing fields individually isn’t recommended and might result in inconsistent undo/redo behavior. Here’s an example of the recommended way to partially refresh a form with inline edit-enabled dependent picklists:

    ```

    ```

    All of the inline edit-enabled picklists are wrapped in the <apex:outputPanel\> component. The <apex:outputPanel\> rerenders when the <apex:commandButton\> action method fires.


#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

## Code Examples

```
<apex:page standardController="Account">
    <apex:form >
        <apex:pageBlock mode="edit">
            <apex:pageBlockButtons >
                <apex:commandButton action="{!save}" value="Save"/>
            </apex:pageBlockButtons>
            <apex:pageBlockSection title="Dependent Picklists" columns="2">
            <apex:inputField value="{!account.industry}"/>
            <apex:inputField value="{!account.subcategories__c}"/>
            </apex:pageBlockSection>
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

```
<apex:form>
    <!-- other form elements ... -->

    <apex:outputPanel id="locationPicker">
        <apex:outputField value="{!Location.country}"> 
            <apex:inlineEditSupport event="ondblClick" /> 
        </apex:outputField>
        <apex:outputField value="{!Location.state}"> 
            <apex:inlineEditSupport event="ondblClick" /> 
        </apex:outputField>
        <apex:outputField value="{!Location.city}"> 
            <apex:inlineEditSupport event="ondblClick" /> 
        </apex:outputField>
    </apex:outputPanel>
    <!-- ... -->
    <apex:commandButton value="Refresh Picklists" reRender="locationPicker" />
</apex:form>
```
