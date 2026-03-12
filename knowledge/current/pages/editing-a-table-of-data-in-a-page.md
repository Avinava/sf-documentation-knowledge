---
title: "Editing a Table of Data in a Page"
domain: pages
topic: editing-a-table-of-data-in-a-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.010Z
estimatedTokens: 452
keywords: [Editing, Data, tutorial, built, <apex, inputField>, columns, editable, commandButton>, save, change, Any, message, Saving, automatically]
---

# Editing a Table of Data in a Page

> In the last tutorial, you built a table of data. Using <apex:inputField> in the data
table columns, you can create a table with editable fields. Using <apex:commandButton> you can save
the data you change. Any message (such as Saving) is automatically displayed with the <apex:pageMessages> tag.

# Editing a Table of Data in a Page

In the last tutorial, you built a table of data. Using <apex:inputField\> in the data table columns, you can create a table with editable fields. Using <apex:commandButton\> you can save the data you change. Any message (such as Saving) is automatically displayed with the <apex:pageMessages\> tag.

The following page creates a page that enables you to edit a series of Industry types at the same time:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If you have an ID attribute in the URL, this page does not display correctly. For example, https://MyDomainName\--PackageName.vf.force.com/apex/HelloWorld?id=001D000000IR35T produces an error. You need to remove the ID from the URL.

Notice the following about the page markup:

-   This page takes advantage of [standard set controllers](atlas.en-us.pages.meta/pages/pages_controller_sosc_about.htm) to generate the data for the table. Use the recordSetVar attribute to specify the name of the set of data you want to use. Then, in the <apex:pageBlockTable\> value, use the name of that set to populate the table with data.
-   The <apex:inputField\> tag automatically generates the correct display for the field. In this case, as a drop-down list.
-   The page must be enclosed in an <apex:form\> tag in order to use the <apex:commandButton\> tag. A form specifies a portion of a Visualforce page that users can interact with.

Example of Editing a Table of Data ![The Accounts tab, displaying the Acme, Global Media, and Salesforce accounts. An Industry column displays drop-down lists used to select the corresponding industry.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_data_table_edit.png&folder=pages)

## Code Examples

```
<apex:page standardController="Account" recordSetVar="accounts" 
   tabstyle="account" sidebar="false">
   <apex:form> 
   <apex:pageBlock >
   <apex:pageMessages />
   <apex:pageBlockButtons>
      <apex:commandButton value="Save" action="{!save}"/>
   </apex:pageBlockButtons>

   <apex:pageBlockTable value="{!accounts}" var="a">
      <apex:column value="{!a.name}"/>
      
      <apex:column headerValue="Industry">
         <apex:inputField value="{!a.Industry}"/>
      </apex:column>

   </apex:pageBlockTable>
   </apex:pageBlock>
   </apex:form>
</apex:page>
```

## Related Topics

- standard set controllers (atlas.en-us.pages.meta/pages/pages_controller_sosc_about.htm)
