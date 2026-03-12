---
title: "Mass Updating Records with a Custom List Controller"
domain: pages
topic: mass-updating-records-with-a-custom-list-controller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.016Z
estimatedTokens: 830
keywords: [Mass, Updating, Records, Custom, Controller, pages, perform, updates, prototype, contained, StandardSetController]
---

# Mass Updating Records with a Custom List Controller

> To create pages that perform mass updates, use the prototype object contained in the
            StandardSetController class.

# Mass Updating Records with a Custom List Controller

To create pages that perform mass updates, use the prototype object contained in the StandardSetController class.

The list controller tracks two sets of records: a primary list that contains filtered records and a secondary list that contains a selection of the filtered records. The secondary list is established on a standard list view page where the user checks boxes to select records. The user then clicks a custom list button that navigates to a custom mass update page, which uses the prototype object to apply new field values to the user's selected records. The prototype object operates on all records in the user's selection. To retrieve the prototype object in your custom controller, use the StandardSetController's getRecord method.

For example, to enable mass updates for Opportunities, use the Opportunity standard controller with a custom list controller extension to set field values for all records in the selection.

1.  Create a Visualforce page called massupdatestages.
2.  Provide the following controller:

    ```

    ```

3.  Provide the following markup:

    ```

    ```

4.  From the object management settings for opportunities, go to Buttons, Links, and Actions.
5.  Click **New Button or Link**.
6.  Set the Button Label to Mass Update Stages, and set the Name to MassUpdateStages.
7.  Set the Display Type to List Button and ensure that Display Checkboxes (for Multi-Record Selection) is checked. Set the Behavior to Display in existing window with sidebar, and set the Content Source to Visualforce Page. Click the name of the page that you created to associate it with this button, and then save your changes.
8.  From the object management settings for opportunities, go to List View Button Layout. Select **Edit** from the dropdown next to List View.
9.  Under Custom Buttons, move the Mass Update Stages button to the Selected Buttons list. Save your changes.
10.  Click the Opportunities tab. Select or create a filter that displays some existing opportunities that you want to change.
11.  A checkbox appears next to each record in the list view. To change the stage of multiple opportunity records, select each desired record’s checkbox, then click Mass Update Stages. Save your changes.

While this example shows you how to update one field, any number of fields in the prototype object can be referenced and applied to the user's selection. Any field in the prototype object that the user doesn't set doesn't affect the selected records. Remember that field properties, such as whether the field is required, are maintained in the prototype object. For example, if you include an input field on the page for a required field such as Opportunity.StageName, the user must enter a value for the field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You only need selectedSizeWorkaround if you want your page to either display or reference the sizes of the user selection or filtered set. Such a display is helpful since it gives the user information about the set that the mass update modifies.

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

## Code Examples

```apex
public class selectedSizeWorkaround {

    ApexPages.StandardSetController setCon;

    public selectedSizeWorkaround(ApexPages.StandardSetController controller) {
        setCon = controller;
    }

    public integer getMySelectedSize() {
        return setCon.getSelected().size();
    }
    public integer getMyRecordsSize() {
        return setCon.getRecords().size();
    }
}
```

```
<apex:page 
    standardController="Opportunity"
    recordSetVar="opportunities"
    extensions="selectedSizeWorkaround"
    showHeader="false"
    id="muopp"
>
    <apex:form id="muform">
        <apex:pageMessage 
            summary="Selected Collection Size: {!mySelectedSize}" 
            severity="info"
            id="mupms"
        />
        <apex:pageMessage
            summary="Record Set Size: {!myRecordsSize}"
            severity="info"
            id="mupmr"
        />
        <apex:pageBlock title="Opportunity Mass-Update" mode="edit" id="mub1">
            <apex:pageMessages />
            <apex:pageBlockSection id="mus1">
                <apex:inputField value="{!opportunity.stagename}" id="stagename">
                    <apex:actionSupport event="onchange" rerender="muselectedlist"/>
                </apex:inputField>
            </apex:pageBlockSection>
            <apex:pageBlockButtons location="bottom" id="mubut">
                <apex:commandButton value="Save" action="{!save}" id="butsav"/>
                <apex:commandButton value="Cancel" action="{!cancel}" id="butcan"/>
            </apex:pageBlockButtons>
        </apex:pageBlock>
        <apex:pageBlock title="Selected Opportunities" id="muselectedlist">
            <apex:pageBlockTable value="{!selected}" var="opp" id="mutab">
                <apex:column value="{!opp.name}" id="oppname"/>
                <apex:column value="{!opp.stagename}" id="oppstage"/>
            </apex:pageBlockTable>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```
