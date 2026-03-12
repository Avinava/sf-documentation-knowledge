---
title: "Building a Table of Data in a Page"
domain: pages
topic: building-a-table-of-data-in-a-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.005Z
estimatedTokens: 560
keywords: [Building, Data, Visualforce, components, <apex, pageBlockTable>, dataTable>, allow, display, multiple, records, time, iterating, over, collection]
---

# Building a Table of Data in a Page

> Some Visualforce components, such as
            <apex:pageBlockTable> or <apex:dataTable>, allow you to display information
         from multiple records at a time by iterating over a collection of records. To illustrate
         this concept, the following page uses the <apex:pageBlockTable> comp

# Building a Table of Data in a Page

Some Visualforce components, such as <apex:pageBlockTable\> or <apex:dataTable\>, allow you to display information from multiple records at a time by iterating over a collection of records. To illustrate this concept, the following page uses the <apex:pageBlockTable\> component to list the contacts associated with an account that is currently in context:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Remember, for this page to display account data, the ID of a valid account record must be specified as a query parameter in the URL for the page. For example:

```

```

[Displaying Field Values with Visualforce](atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm) has more information about retrieving the ID of a record.

The <apex:pageBlockTable> Component ![The apex:pageBlockTable component displayed in the Visualforce code window. The page view displays 3 contact columns.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_data_table.png&folder=pages)

Like other iteration components, <apex:pageBlockTable\> includes two required attributes, value and var:

-   value takes a list of sObject records or values of any other Apex type. In the example above, {!account.Contacts} retrieves the ID of the account that is currently in context and then traverses the relationship to retrieve the list of the associated contacts.
-   var specifies the name of the iteration variable. This variable is used within the body of the <apex:pageBlockTable\> tag to access the fields on each contact. In this example, value="{!contact.Name}" is used on the <apex:column\> tag to display the name of the contact.

The <apex:pageBlockTable\> component takes one or more child <apex:column\> components. The number of rows in the table is controlled by the number of records returned with the value attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The <apex:pageBlockTable\> component automatically takes on the styling of a standard Salesforce list. To display a list with your own styling, use <apex:dataTable\> instead.

## Code Examples

```
<apex:page standardController="Account">
   <apex:pageBlock title="Hello {!$User.FirstName}!">
      You are viewing the {!account.name} account.
   </apex:pageBlock>
   <apex:pageBlock title="Contacts">
      <apex:pageBlockTable value="{!account.Contacts}" var="contact">
         <apex:column value="{!contact.Name}"/>
         <apex:column value="{!contact.MailingCity}"/>
         <apex:column value="{!contact.Phone}"/>
      </apex:pageBlockTable>
   </apex:pageBlock>
</apex:page>
```

```
https://MyDomain_login_URL/apex/myPage?id=001x000xxx3Jsxb
```

## Related Topics

- Displaying Field Values with Visualforce (atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm)
