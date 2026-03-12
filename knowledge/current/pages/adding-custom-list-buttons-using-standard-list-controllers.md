---
title: "Adding Custom List Buttons using Standard List
        Controllers"
domain: pages
topic: adding-custom-list-buttons-using-standard-list-controllers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.373Z
estimatedTokens: 743
keywords: [Adding, Custom, Buttons, Standard, Controllers, addition, overriding, links, link, pages, controller, search, results, any, allow]
---

# Adding Custom List Buttons using Standard List
        Controllers

> In addition to overriding standard buttons and links, you can also create custom list
            buttons that link to pages that use a standard list controller. These list buttons can
            be used on a list page, search results, and any related list for the object and allow
            you t

# Adding Custom List Buttons using Standard List Controllers

In addition to overriding standard buttons and links, you can also create custom list buttons that link to pages that use a standard list controller. These list buttons can be used on a list page, search results, and any related list for the object and allow you to take actions on a group of selected records. To indicate the set of records that have been selected, use the {!selected} expression.

For example, to add a custom button to a related list for opportunities that allows you to edit and save the opportunity stage and close date on selected records:

1.  Create the following Apex class:

    ```

    ```

2.  Create the following page and call it oppEditStageAndCloseDate:

    ```

    ```

3.  Make the page available to all users.
    1.  From Setup, enter Visualforce Pages in the Quick Find box, then select **Visualforce Pages**.
    2.  Click **Security** for the oppEditStageAndCloseDate page.
    3.  Add the appropriate profiles to the Enabled Profiles list.
    4.  Click **Save**.
4.  Create a custom button on opportunities.
    1.  From the object management settings for opportunities, go to Buttons, Links, and Actions.
    2.  Click the button for creating a new button or link.
    3.  Set the Label to Edit Stage & Date.
    4.  Set the Display Type to List Button.
    5.  Set the Content Source to Visualforce Page.
    6.  From the Content drop-down list, select oppEditStageAndCloseDate.
    7.  Click **Save**.
    8.  A warning will display notifying you that the button will not be displayed until you have updated page layouts. Click **OK**.
5.  Add the custom button to an account page layout.
    1.  From the object management settings for accounts, go to Page Layouts.
    2.  Click **Edit** for the appropriate page layout.
    3.  In the **Related List Section**, click on **Opportunities**, then click ![Editable Field](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fwrench.gif&folder=pages) to edit the properties.
    4.  In the Custom Buttons section, select **Edit Stage & Date** in the Available Buttons list and add it to the Selected Buttons list.
    5.  Click **OK**.
    6.  Click **Save**.

Now, when you visit the account page, there is a new button in the opportunities related list.

Example of New Button ![An Opportunities related list with an Edit Stage and Date button](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fcustom_rel_list_button.png&folder=pages)

When you select an opportunity and click **Edit Stage & Date**, you are taken to your custom edit page.

Example of Custom Edit Page ![The Edit Stage and Date page](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fcustom_sosc_edit_page.png&folder=pages)

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

## Code Examples

```apex
public class tenPageSizeExt {

    public tenPageSizeExt(ApexPages.StandardSetController controller) {
        controller.setPageSize(10);
    }
}
```

```
<apex:page standardController="Opportunity" recordSetVar="opportunities" tabStyle="Opportunity" extensions="tenPageSizeExt">
    <apex:form >
        <apex:pageBlock  title="Edit Stage and Close Date" mode="edit">
            <apex:pageMessages />
            <apex:pageBlockButtons location="top">
                <apex:commandButton value="Save" action="{!save}"/>
                <apex:commandButton value="Cancel" action="{!cancel}"/>
            </apex:pageBlockButtons>
            <apex:pageBlockTable value="{!selected}" var="opp">
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
