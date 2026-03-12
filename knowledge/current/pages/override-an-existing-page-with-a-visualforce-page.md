---
title: "Override an Existing Page with a Visualforce Page"
domain: pages
topic: override-an-existing-page-with-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.041Z
estimatedTokens: 609
keywords: [Override, Visualforce, Replace, standard, record, detail, uses, custom, tabs, organize, sections]
---

# Override an Existing Page with a Visualforce Page

> Replace an existing page, such as a standard record detail page, with a Visualforce
      page that uses custom tabs to organize the record information into sections.

# Override an Existing Page with a Visualforce Page

Replace an existing page, such as a standard record detail page, with a Visualforce page that uses custom tabs to organize the record information into sections.

1.  Create a Visualforce page called TabbedAccount.

    ```

    ```

    -   The <style> tag is an HTML element, not a Visualforce component. It defines the CSS classes for two types of tabs: activeTab and inactiveTab.
    -   The <apex:tabPanel> component generates tabs.
        -   Its tabClass attribute specifies the CSS class used when a tab is active.
        -   Its inactiveTabClass attribute specifies the CSS class used when a tab is inactive.
    -   Each child <apex:tab> component within the <apex:tabPanel> component represents a tab with different information about the account.
        -   The first tab uses the <apex:detail> tag to show the account’s details.
        -   The other tabs use the <apex:relatedList> tag to show lists of records related to the account.

2.  To preview the TabbedAccount page, specify the ID of a particular account in the URL, for example, https://MyDomain\_login\_URL/apex/TabbedAccount?id=001D000000IRt53.
3.  Override the standard Account detail page with the TabbedAccount page.
    1.  From the object management settings for accounts, click **Buttons, Links, and Actions**.
    2.  From the list, find View, which represents the detail page of an account record. To override this page, click **Edit** from the dropdown menu.
    3.  In the Salesforce Classic Override section, select **Visualforce page** as the override type, and then select **TabbedAccount** from the dropdown menu.
    4.  To apply the TabbedAccount page in Lightning Experience or the Salesforce mobile app, select **Use the Salesforce Classic override**.
    5.  Save your changes.
4.  On the Accounts tab, select any account record. The record detail page is now TabbedAccount.

#### See Also

-   [apex:tabPanel](atlas.en-us.pages.meta/pages/pages_compref_tabPanel.htm "A page area that displays as a set of tabs. When a user clicks a tab header, the tab's associated content displays, hiding the content of other tabs.")

-   [apex:tab](atlas.en-us.pages.meta/pages/pages_compref_tab.htm "A single tab in an <apex:tabPanel>.")

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

## Code Examples

```
<apex:page standardController="Account" showHeader="true" tabStyle="account" >
    <style>
        .activeTab {background-color: #236FBD; color:white; 
             background-image:none}
        .inactiveTab { background-color: lightgrey; color:black; 
            background-image:none}
    </style>
    <apex:tabPanel switchType="client" selectedTab="tabdetails" 
        id="AccountTabPanel" tabClass="activeTab" 
        inactiveTabClass="inactiveTab">
        <apex:tab label="Details" name="AccDetails" id="tabdetails">
            <apex:detail relatedList="false" title="true"/>
        </apex:tab>
        <apex:tab label="Contacts" name="Contacts" 
            id="tabContact">
            <apex:relatedList subject="{!account}" list="contacts" />
        </apex:tab>
        <apex:tab label="Opportunities" name="Opportunities" 
            id="tabOpp">
            <apex:relatedList subject="{!account}" list="opportunities" />
        </apex:tab>
        <apex:tab label="Open Activities" name="OpenActivities" 
            id="tabOpenAct">
            <apex:relatedList subject="{!account}" list="OpenActivities" />
        </apex:tab>
        <apex:tab label="Notes and Attachments" name="NotesAndAttachments" 
            id="tabNoteAtt">
            <apex:relatedList subject="{!account}" list="CombinedAttachments" />
        </apex:tab>
    </apex:tabPanel>
</apex:page>
```

## Related Topics

- apex:tabPanel (atlas.en-us.pages.meta/pages/pages_compref_tabPanel.htm)
- apex:tab (atlas.en-us.pages.meta/pages/pages_compref_tab.htm)
