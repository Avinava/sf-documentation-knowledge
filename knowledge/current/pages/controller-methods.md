---
title: "Controller Methods"
domain: pages
topic: controller-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.327Z
estimatedTokens: 1762
keywords: [Controller, sample, Build, Custom, controller's, save, action, <apex, commandButton>, tag, examples, discussed, Defining, Getter, Setter]
---

# Controller Methods

> For example, in the sample page in Build a Custom Controller, the controller's save method is called by the action parameter of the <apex:commandButton> tag. Other examples of
                action methods are discussed in Defining Action Methods.

# Controller Methods

Visualforce markup can use the following types of controller extension and custom controller methods:

-   Action
-   Getter
-   Setter

## Action Methods

Action methods perform logic or navigation when a page event occurs, such as when a user clicks a button, or hovers over an area of the page. Action methods can be called from page markup by using {! } notation in the action parameter of one of the following tags:

-   [<apex:commandButton\>](atlas.en-us.pages.meta/pages/pages_compref_commandButton.htm "A button that is rendered as an HTML input element with the type attribute set to submit, reset, or image, depending on the <apex:commandButton> tag's specified values.") creates a button that calls an action
-   [<apex:commandLink\>](atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm "A link that executes an action defined by a controller, and then either refreshes the current page, or navigates to a different page based on the PageReference variable that is returned by the action.") creates a link that calls an action
-   [<apex:actionPoller\>](atlas.en-us.pages.meta/pages/pages_compref_actionPoller.htm) periodically calls an action
-   [<apex:actionSupport\>](atlas.en-us.pages.meta/pages/pages_compref_actionSupport.htm "A component that adds AJAX support to another component, allowing the component to be refreshed asynchronously by the server when a particular event occurs, such as a button click or hover.") makes an event (such as “onclick”, “onmouseover”, and so on) on another, named component, call an action
-   [<apex:actionFunction\>](atlas.en-us.pages.meta/pages/pages_compref_actionFunction.htm "A component that provides support for invoking controller action methods directly from JavaScript code using an AJAX request.") defines a new JavaScript function that calls an action
-   [<apex:page\>](atlas.en-us.pages.meta/pages/pages_compref_page.htm "A single Visualforce page. All pages must be wrapped inside a single <apex:page> component tag.") calls an action when the page is loaded

For example, in the sample page in [Build a Custom Controller](atlas.en-us.pages.meta/pages/pages_controller_custom.htm "A custom controller is an Apex class that uses the default, no-argument constructor for the outer, top-level class."), the controller's save method is called by the action parameter of the <apex:commandButton\> tag. Other examples of action methods are discussed in [Defining Action Methods](atlas.en-us.pages.meta/pages/pages_quick_start_controller_setter_methods.htm).

## Getter Methods

Getter methods return values from a controller. Every value that is calculated by a controller and displayed in a page must have a corresponding getter method, including any Boolean variables. For example, in the sample page in [Build a Custom Controller](atlas.en-us.pages.meta/pages/pages_controller_custom.htm "A custom controller is an Apex class that uses the default, no-argument constructor for the outer, top-level class."), the controller includes a getAccount method. This method allows the page markup to reference the account member variable in the controller class with {! } notation. The value parameter of the <apex:inputField\> tag uses this notation to access the account, and dot notation to display the account's name. Getter methods must always be named getVariable.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

It’s a best practice for getter methods to be *idempotent*, that is, to not have side effects. For example, don’t increment a variable, write a log message, or add a new record to the database. Visualforce doesn’t define the order in which getter methods are called, or how many times they might be called in the course of processing a request. Design your getter methods to produce the same outcome, whether they are called once or multiple times for a single page request.

## Setter Methods

Setter methods pass user-specified values from page markup to a controller. Any setter methods in a controller are automatically executed before any action methods.

For example, the following markup displays a page that implements basic search functionality for Leads. The associated controller includes getter and setter methods for the search box input, and then uses the search text to issue a SOSL query when the user clicks **Go!**. Although the markup doesn’t explicitly call the search text setter method, it executes before the doSearch action method when a user clicks the command button:

```

```

The following class is the controller for the page markup above:

```

```

While a getter method is always required to access values from a controller, it’s not always necessary to include a setter method to pass values into a controller. If a Visualforce component is bound to an sObject that is stored in a controller, the sObject's fields are automatically set if changed by the user, as long as the sObject is saved or updated by a corresponding action method. An example of this behavior is shown in the sample page in [Build a Custom Controller](atlas.en-us.pages.meta/pages/pages_controller_custom.htm "A custom controller is an Apex class that uses the default, no-argument constructor for the outer, top-level class.").

Setter methods must always be named setVariable.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

It’s a best practice for setter methods to be *idempotent*, that is, to not have side effects. For example, don’t increment a variable, write a log message, or add a new record to the database. Visualforce doesn’t define the order in which setter methods are called, or how many times they might be called in the course of processing a request. Design your setter methods to produce the same outcome, whether they are called once or multiple times for a single page request.

## Getting and Setting Data with a Custom Extension or Controller

There is no guaranteed order in which Apex methods and variables are processed by a controller extension or custom controller. Therefore, do not allow controller and extension classes to rely on another method being run, call that method directly. This applies specifically to setting variables and accessing data from the database.

For example, in the following custom controller, the first method, getContactMethod1, always returns the correct value because it doesn’t assume that the contact variable c already exists. The second method, getContactMethod2, however, sometimes returns the correct value, but not every time if c hasn’t yet been set.

```

```

The following custom controller has the exact same methods. However, getContactMethod2 calls contactMethod1, so the variable c is always set, and always contains the correct value when returned.

```

```

The following markup shows two pages that call these controllers. The Visualforce markup is identical, only the controller name is changed:

```

```

```

```

## Code Examples

```
<apex:page controller="theController">
   <apex:form>
      <apex:pageBlock mode="edit" id="block">
         <apex:pageBlockSection>
            <apex:pageBlockSectionItem>
               <apex:outputLabel for="searchText">Search Text</apex:outputLabel>
               <apex:panelGroup>
                  <apex:inputText id="searchText" value="{!searchText}"/>
                  <apex:commandButton value="Go!" action="{!doSearch}" 
                                      rerender="block" status="status"/>
               </apex:panelGroup>
            </apex:pageBlockSectionItem>
        </apex:pageBlockSection>
        <apex:actionStatus id="status" startText="requesting..."/>
        <apex:pageBlockSection title="Results" id="results" columns="1">
           <apex:pageBlockTable value="{!results}" var="l" 
                               rendered="{!NOT(ISNULL(results))}">
              <apex:column value="{!l.name}"/>
              <apex:column value="{!l.email}"/>
              <apex:column value="{!l.phone}"/>
           </apex:pageBlockTable>
        </apex:pageBlockSection>
      </apex:pageBlock>
   </apex:form>
</apex:page>
```

```apex
public class theController {

    String searchText;
    List<Lead> results;

    public String getSearchText() {
        return searchText;
    }

    public void setSearchText(String s) {
        searchText = s;
    }

    public List<Lead> getResults() {
        return results;
    }

    public PageReference doSearch() {
        results = (List<Lead>)[FIND :searchText RETURNING Lead(Name, Email, Phone)][0];
        return null;
    }
}
```

```apex
public class conVsBad {
    Contact c;

    public Contact getContactMethod1() {
        if (c == null) c = [SELECT Id, Name FROM Contact LIMIT 1];
        return c;
    }

    public Contact getContactMethod2() {
        return c;
    }
}
```

```apex
public class conVsGood {
    Contact c;

    public Contact getContactMethod1() {
        if(c == null) c = [SELECT Id, Name FROM Contact LIMIT 1];
        return c;
    }

    public Contact getContactMethod2() {
        return getContactMethod1();
    }
}
```

```
<apex:page controller="conVsGood">
    getContactMethod2(): {!contactMethod2.name}<br/>
    getContactMethod1(): {!contactMethod1.name}
</apex:page>
```

## Related Topics

- <apex:commandButton> (atlas.en-us.pages.meta/pages/pages_compref_commandButton.htm)
- <apex:commandLink> (atlas.en-us.pages.meta/pages/pages_compref_commandLink.htm)
- <apex:actionPoller> (atlas.en-us.pages.meta/pages/pages_compref_actionPoller.htm)
- <apex:actionSupport> (atlas.en-us.pages.meta/pages/pages_compref_actionSupport.htm)
- <apex:actionFunction> (atlas.en-us.pages.meta/pages/pages_compref_actionFunction.htm)
- <apex:page> (atlas.en-us.pages.meta/pages/pages_compref_page.htm)
- Build a Custom Controller (atlas.en-us.pages.meta/pages/pages_controller_custom.htm)
- Defining Action Methods (atlas.en-us.pages.meta/pages/pages_quick_start_controller_setter_methods.htm)
