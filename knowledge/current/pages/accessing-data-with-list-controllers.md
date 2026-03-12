---
title: "Accessing Data with List Controllers"
domain: pages
topic: accessing-data-with-list-controllers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.358Z
estimatedTokens: 1159
keywords: [Accessing, Data, Controllers, record, <apex, pageBlockTable>, assigns, acc, variable, constructs, new, row, defined, column>, component]
---

# Accessing Data with List Controllers

> For each record in the list, <apex:pageBlockTable>
      assigns the record to the acc variable. Then, <apex:pageBlockTable> constructs a new row in the table,
      using the row defined by the <apex:column>
      component. The <apex:column> component uses the
        acc variable, which represent

# Accessing Data with List Controllers

## Access Records with Expression Syntax

Once you have associated a page with a list controller, you can act on a set of records using expression language syntax. For example, to create a table of accounts, use the following markup:

```

```

This example uses the component <apex:pageBlockTable> to generate a table of data. The value attribute is set to the variable loaded by the standard list controller, {!accounts}, which is the list of records that <apex:pageBlockTable> loops through.

For each record in the list, <apex:pageBlockTable> assigns the record to the acc variable. Then, <apex:pageBlockTable> constructs a new row in the table, using the row defined by the <apex:column> component. The <apex:column> component uses the acc variable, which represents the current record, to pull out the field values for that record.

The resulting page that lists all the account names in your organization:![Result of the example page.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fpages_controller_std_sosc_sample_1.jpg&folder=pages)

When using a standard list controller, the returned records automatically sort on the first column of data defined by the current view. When using an extension or [custom list controller](atlas.en-us.pages.meta/pages/pages_custom_list_controller.htm), you can control the sort method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

This page does not specify a filter in the request, so the page is displayed with the last used filter. For information on using filters with list controllers, see [List Views with Standard List Controllers](atlas.en-us.pages.meta/pages/pages_controller_sosc_list_views.htm "To display a filtered list of records on a Visualforce page, associate the page with a standard list controller.").

As with queries in the Lightning Platform API, you can use expression language syntax to retrieve data from related records. As with standard controllers, you can traverse up to five levels of child-to-parent relationships and one level of parent-to-child relationships.

## Access Records with IDs

In a typical page interaction, a user selects records from a list view before navigating to a page, and Visualforce sends them to the controller. You can also specify records manually by setting selected records directly on to the controller.

The standard list controller is based on the StandardSetController Apex class. Use the method ApexPages.StandardSetController.setSelected() to set the list of records from your Apex controller.

Let's look at some code. This example uses the markup from the earlier example to display Account names in a table. Then, it includes custom Apex code to request the specific records to display.

```

```

The standard list controller is based on the StandardSetController Apex class. To retrieve a list of records assigned to the list controller, use the method ApexPages.StandardSetController.setSelected().

In the MyControllerExtension's constructor, make a SOQL request to select the ID and Name from the Account object and limit the first 30 results. Then, definesetController.setSelected(records) so that the records are selected on page load.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

A standard list controller can return up to 10,000 records. Custom controllers can work with larger results sets. See [Working with Large Sets of Data](atlas.en-us.pages.meta/pages/pages_controller_readonly_context.htm).

It’s also possible to pass a list of record IDs into a URL by including them as multiple query parameters. For example, a URL that has three Account IDs looks like: /apex/pageName?ids=001xx00account1&ids=001xx00account2&ids=001xx00account3.

Some browsers have a hard limit on the length of a URL. If your URL has too many IDs, then there is a greater chance of reaching that limit, causing your page to misbehave. Instead of manually including IDs in a URL string, it’s better to set the selected records on to the controller.

#### See Also

-   [*SOQL and SOSL Reference*: Relationship Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships.htm "SOQL and SOSL Reference: Relationship Queries - HTML (New Window)")

-   [StandardSetController Class](atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm "StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.")

## Code Examples

```
<apex:page standardController="Account" recordSetVar="accounts" tabstyle="account" sidebar="false">
  <apex:pageBlock>
    <apex:pageBlockTable value="{!accounts}" var="acc">
      <apex:column value="{!acc.name}"/>
    </apex:pageBlockTable>
  </apex:pageBlock>
</apex:page>
```

```apex
<apex:page standardController="Account" recordSetVar="accounts" extensions="MyControllerExtension">
  <apex:pageBlock >
    <apex:pageBlockTable value="{!accounts}" var="acc">
      <apex:column value="{!acc.name}"/>
    </apex:pageBlockTable>
  </apex:pageBlock>
</apex:page>

public with sharing class MyControllerExtension {
    private ApexPages.StandardSetController setController;

    public MyControllerExtension(ApexPages.StandardSetController setController) {
        this.setController = setController;
        
        Account [] records = [SELECT Id, Name FROM Account LIMIT 30];
        setController.setSelected(records);
    }
}
```

## Related Topics

- custom list controller (atlas.en-us.pages.meta/pages/pages_custom_list_controller.htm)
- List Views with Standard List Controllers (atlas.en-us.pages.meta/pages/pages_controller_sosc_list_views.htm)
- Working with Large Sets of Data (atlas.en-us.pages.meta/pages/pages_controller_readonly_context.htm)
- StandardSetController Class (atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm)
