---
title: "Using Dynamic References with Standard Objects"
domain: pages
topic: using-dynamic-references-with-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.533Z
estimatedTokens: 2940
keywords: [Dynamic, References, Standard, Objects, Visualforce, bindings, construct, simple, reusable, pages, known, want, access, approach, advantage]
---

# Using Dynamic References with Standard Objects

> Use dynamic Visualforce bindings
            to construct simple, reusable pages with a known set of fields you want to access. This
            approach has the advantage of easily customizing which fields are pertinent for a user
            to work with.

# Using Dynamic References with Standard Objects

Use dynamic Visualforce bindings to construct simple, reusable pages with a known set of fields you want to access. This approach has the advantage of easily customizing which fields are pertinent for a user to work with.

The next two examples are deliberately simple for instructional purposes. See [Using Dynamic References for a User-Customizable Page](#pages_dynamic_ref_advanced_example) for a more advanced example that makes fuller use of dynamic Visualforce.

## A Simple Dynamic Form

The following example demonstrates the simplest way to construct a Visualforce page that uses dynamic references.

First, create a controller extension that provides a “dynamic” list of fields to display:

```

```

Next, create a page called DynamicAccountEditor that uses the above controller extension:

```

```

Notice what’s going on in this sample:

-   The DynamicAccountFieldsLister controller extension creates a list of strings called editableFields. Each string maps to a field name in the Account object.
-   The editableFields list is hard-coded, but you can determine them from a query or calculation, read them from a custom setting, or otherwise providing a more dynamic experience. This is what makes dynamic references powerful.
-   DynamicAccountEditor markup uses an <apex:repeat\> tag to loop through the strings returned by editableFields.
-   The <apex:inputField\> tag displays each field in editableFields by referencing the f iteration element, which represents the name of a field on Account. The dynamic reference {!Account\[f\]} actually displays the value on the page.

## Ensuring that Fields in Dynamic References are Loaded by a Standard Controller

Visualforce automatically optimizes the SOQL query performed by a page’s StandardController (or StandardSetController), loading only the fields which are actually used on a page. When you create a Visualforce page with static references to objects and fields, the fields and objects can be known in advance. When the page is saved, Visualforce is able to determine and save which objects and fields need to be added to the SOQL query that the StandardController will perform later, when the page is requested.

Dynamic references are evaluated at runtime, *after* the SOQL query is run by the StandardController. If a field is only used via a dynamic reference, it won’t be automatically loaded. When that dynamic reference is later evaluated, it will resolve to data which is missing, the result of which is a SOQL error. You must provide some extra information to the controller, so that it knows what fields and related objects to load.

You can add any number of additional fields to a StandardController query, by using the addFields() method on the page controller to pass in the list of additional fields to load. In the prior example, this is done in the controller extension’s constructor:

```

```

The constructor uses the same property that the page markup does, editableFields, to add more fields to the controller’s list of fields to load.

This works well for pages when the complete list of fields to load can be known when the controller extension is instantiated. If the list of fields can’t be determined until later in the request processing, you can call reset() on the controller and then add the fields. This will cause the controller to send the revised query. [Using Dynamic References for a User-Customizable Page](#pages_dynamic_ref_advanced_example) provides an example of this technique.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Adding fields to a controller is only required if you’re using the default query for a StandardController or StandardSetController. If your controller or controller extension performs its own SOQL query, using addFields() is unnecessary and has no effect.

For more information on these methods, see [the StandardController documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/apex_pages_standardcontroller.htm "HTML (New Window)").

## Dynamic References to Related Objects

This example creates a Visualforce page for a case record, with certain fields that are editable. Some of the fields displayed are from a related object, showing how you can use dynamic references to traverse relationships.

First, create an Apex controller extension called DynamicCaseLoader:

```

```

The corresponding page, DynamicCaseEditor, uses this extension to retrieve information about a particular case and its associated contact:

```

```

Access this page with the ID of a valid case record specified as the id query parameter. For example, https://MyDomain\_login\_URL/apex/DynamicCaseEditor?id=500D0000003ZtPy. Your page will display a form similar to this one:![Sample dynamic Visualforce page for a case](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_dynamic_sample.png&folder=pages)

There are a number of things to note about this example:

-   In the controller extension, the constructor performs its own SOQL query for the object to display. Here it’s because the page’s StandardController doesn’t load related fields by default, but there are many different use cases for needing a customized SOQL query. The query result is made available to the page through the property caseFieldList. There’s no requirement to perform the query in the constructor—it can just as easily be in the property’s get method.
-   The SOQL query specifies the fields to load, so it’s not necessary to use addFields() which was needed in [A Simple Dynamic Form](#pages_dynamic_ref_ex1).
-   The SOQL query is constructed at run time. A utility method converts the list of field names into a string suitable for use in a SOQL SELECT statement.
-   In the markup, the form fields are displayed by iterating through the field names using <apex:repeat\>, and using the field name variable cf in a dynamic reference to get the field value. Each field is potentially written by *two* components—<apex:outputText\> and <apex:inputText\>. The render attribute on these tags controls which of the two actually displays: if the field name contains the string “Contact,” then the information is rendered in an <apex:inputText\> tag, and if it doesn’t, it’s rendered in an <apex:outputText\>.

## Using Dynamic References for a User-Customizable Page

The full potential of Visualforce dynamic bindings is in building pages without knowing which fields are available on an object. The following example demonstrates this capability with a list of accounts that can be customized without knowing *any* of the fields on the Account object, except for the Name field required on all objects. This is made possible by using the Schema.SobjectType.Account.fields.getMap() to retrieve the list of fields that exist on the object, and Visualforce dynamic references.

The functionality provided by this example is simple. The main list view initially displays only the account name, but a **Customize List** button allows the user to select which fields they’d like to add to the list. When they save their preferences, they return to the list view and will see a dynamically generated Visualforce page that presents those fields in additional columns.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You can also build a page without knowing the fields using [dynamic references with Field Sets](atlas.en-us.pages.meta/pages/pages_dynamic_vf_field_sets.htm).

First, create a controller extension called DynamicCustomizableListHandler:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

When you save the class, you may be prompted about a missing Visualforce page. This is because of the page reference in the customize() method. Click the “quick fix” link to create the page—Visualforce markup from a later block of code will be pasted into it.

Some things to note about this class:

-   The standard controller methods addFields() and reset() are used in the show() method, which is the method that returns back to the list view. They are necessary because the list of fields to display may have changed, and so the query that loads data for display needs to be re-executed.
-   Two action methods, customize() and show(), navigate from the list view to the customization form and back again.
-   Everything after the navigation action methods deals with the customization form. These methods are broadly broken into two groups, noted in the comments. The first group provides the List<SelectOption> lists used by the customization form, and the second group handles the two buttons that move items from one list to the other.

Now, create a Visualforce page called DynamicCustomizableList with the following markup:

```

```

This page presents a list of accounts in your organization. The <apex:pageBlock\> at the top provides a standard drop-down list of the views defined for accounts, the same views users see on standard Salesforce account pages. This view widget uses methods provided by the StandardSetController.

The second <apex:pageBlock\> holds a <apex:pageBlockTable\> that has columns added in a <apex:repeat\>. All columns in the repeat component use a dynamic reference to account fields, {!acct\[f\]}, to display the user’s custom-selected fields.

The last piece to this mini app is the customization form. Create a page called CustomizeDynamicList. You may have already created this page, when creating the controller extension. Paste in the following:

```

```

This simple preferences page presents two lists, and the user moves fields from the list of available fields on the left to the list of fields to display on the right. Clicking **Show These Fields** returns to the list itself.

Here are a few things to note about this markup:

-   This page uses the same standard controller as the list view, even though no accounts are being displayed. This is required to maintain the view state, which contains the list of fields to display. If this form saved the user’s preferences to something permanent, like a custom setting, this wouldn’t be necessary.
-   The first list is populated by a call to the getUnSelectedOptions() method, and when the form is submitted (via either of the two <apex:commandButton\> components), the values in the list *that are selected at time of form submission* are saved into the selected property. Corresponding code handles the other list.
-   These “delta” lists of fields to move are processed by the doAdd() or doRemove() method, depending on which button was clicked.

When you assemble the controller extension and these pages, and navigate to /apex/DynamicCustomizableList in your organization, you’ll see a sequence similar to the following:

1.  View the customizable list in the default state, with only the account name field displayed.![Dynamic Visualforce: Listing accounts with a Standard List Controller](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fdynamic_vf_account_listing.png&folder=pages) Click **Customize List**.
2.  The display preferences screen is shown.![Dynamic Visualforce: Presenting a list of fields to display](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fdynamic_vf_field_selection.png&folder=pages) Move some fields into the list on the right, and click **Show These Fields**.
3.  The customized list view is displayed.![Dynamic Visualforce: A list of selected accounts, plus fields to display, all rendered dynamically ](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fdynamic_vf_advanced_example.png&folder=pages)

## Code Examples

```apex
public class DynamicAccountFieldsLister {

    public DynamicAccountFieldsLister(ApexPages.StandardController controller) { 
        controller.addFields(editableFields);
    }

    public List<String> editableFields {
        get {
            if (editableFields == null) {
                editableFields = new List<String>();
                editableFields.add('Industry');
                editableFields.add('AnnualRevenue');
                editableFields.add('BillingCity');
            }
            return editableFields ;
        }
        private set;
    }
}
```

```
<apex:page standardController="Account" 
           extensions="DynamicAccountFieldsLister"> 

    <apex:pageMessages /><br/>
    
    <apex:form>
        <apex:pageBlock title="Edit Account" mode="edit">
            <apex:pageBlockSection columns="1">
                <apex:inputField value="{!Account.Name}"/>
                <apex:repeat value="{!editableFields}" var="f">
                    <apex:inputField value="{!Account[f]}"/>
                </apex:repeat>
           </apex:pageBlockSection>
        </apex:pageBlock>
    </apex:form>
    
</apex:page>
```

```apex
public DynamicAccountFieldsLister(ApexPages.StandardController controller) { 
        controller.addFields(editableFields);
    }
```

```apex
public class DynamicCaseLoader {

    public final Case caseDetails { get; private set; }

    // SOQL query loads the case, with Case fields and related Contact fields
    public DynamicCaseLoader(ApexPages.StandardController controller) {
        String qid = ApexPages.currentPage().getParameters().get('id');
        String theQuery = 'SELECT Id, ' + joinList(caseFieldList, ', ') + 
                          ' FROM Case WHERE Id = :qid';
        this.caseDetails = Database.query(theQuery);
    }

    // A list of fields to show on the Visualforce page
    public List<String> caseFieldList { 
        get {
            if (caseFieldList == null) {
                caseFieldList = new List<String>();
                caseFieldList.add('CaseNumber');
                caseFieldList.add('Origin');
                caseFieldList.add('Status');
                caseFieldList.add('Contact.Name');  // related field
                caseFieldList.add('Contact.Email'); // related field
                caseFieldList.add('Contact.Phone'); // related field
            }
            return caseFieldList;
        }
        private set;
    }
    
    // Join an Apex list of fields into a SELECT fields list string
    private static String joinList(List<String> theList, String separator) {

        if (theList == null) {
            return null;
        }
        if (separator == null) {
            separator = '';
        }

        String joined = '';
        Boolean firstItem = true;
        for (String item : theList) {
            if(null != item) {
                if(firstItem){
                    firstItem = false;
                }
                else {
                    joined += separator;               
                }
                joined += item;
            }
        }
        return joined;
    }
}
```

```
<apex:page standardController="Case" extensions="DynamicCaseLoader"> 
    <br/>
    <apex:form >
        <apex:repeat value="{!caseFieldList}" var="cf">
            <h2>{!cf}</h2>
            <br/>
            <!-- The only editable information should be contact information --> 
            <apex:inputText value="{!caseDetails[cf]}" 
                rendered="{!IF(contains(cf, "Contact"), true, false)}"/>
            <apex:outputText value="{!caseDetails[cf]}" 
                rendered="{!IF(contains(cf, "Contact"), false, true)}"/>
            <br/><br/>
        </apex:repeat>
    </apex:form>
</apex:page>
```

## Related Topics

- dynamic
                        references with Field Sets (atlas.en-us.pages.meta/pages/pages_dynamic_vf_field_sets.htm)
