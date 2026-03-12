---
title: "StandardController Class"
domain: apex-reference
topic: standardcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.806Z
estimatedTokens: 2296
namespace: ApexPages
keywords: [StandardController, defining, extension, standard, controller., Usage, Instantiation, Example, controllerSObject, addFields, fieldNames, cancel, delete, edit, getId, getRecord, Tip, reset, save, view]
---

# StandardController Class

> Use a StandardController when defining an extension for
a standard controller.

**Namespace:** `ApexPages`

# StandardController Class

Use a StandardController when defining an extension for a standard controller.

## Namespace

[ApexPages](atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm "The ApexPages namespace provides classes used in Visualforce controllers.")

## Usage

StandardController objects reference the pre-built Visualforce controllers provided by Salesforce. The only time it is necessary to refer to a StandardController object is when defining an extension for a standard controller. StandardController is the data type of the single argument in the extension class constructor.

## Instantiation

You can instantiate a StandardController in the following way:

```

```

## Example

The following example shows how a StandardController object can be used in the constructor for a standard controller extension:

```

```

The following Visualforce markup shows how the controller extension from above can be used in a page:

```

```

-   **[StandardController Constructors](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_constructors)**

-   **[StandardController Methods](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_methods)**


## StandardController Constructors

The following are constructors for StandardController.

-   **[StandardController(controllerSObject)](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_ctor)**
    Creates a new instance of the ApexPages.StandardController class for the specified standard or custom object.

### StandardController(controllerSObject)

Creates a new instance of the ApexPages.StandardController class for the specified standard or custom object.

#### Signature

public StandardController(SObject controllerSObject)

#### Parameters

controllerSObject

Type: SObject

A standard or custom object.

## StandardController Methods

The following are methods for StandardController. All are instance methods.

-   **[addFields(fieldNames)](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_addFields)**
    When a Visualforce page is loaded, the fields accessible to the page are based on the fields referenced in the Visualforce markup. This method adds a reference to each field specified in fieldNames so that the controller can explicitly access those fields as well.
-   **[cancel()](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_cancel)**
    Returns the PageReference of the cancel page.
-   **[delete()](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_delete)**
    Deletes record and returns the PageReference of the delete page.
-   **[edit()](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_edit)**
    Returns the PageReference of the standard edit page.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_getId)**
    Returns the ID of the record that is currently in context, based on the value of the id query string parameter in the Visualforce page URL.
-   **[getRecord()](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_getRecord)**
    Returns the record that is currently in context, based on the value of the id query string parameter in the Visualforce page URL.
-   **[reset()](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_reset)**
    Forces the controller to reacquire access to newly referenced fields. Any changes made to the record prior to this method call are discarded.
-   **[save()](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_save)**
    Saves changes and returns the updated PageReference.
-   **[view()](atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm#apex_ApexPages_StandardController_view)**
    Returns the PageReference object of the standard detail page.

### addFields(fieldNames)

When a Visualforce page is loaded, the fields accessible to the page are based on the fields referenced in the Visualforce markup. This method adds a reference to each field specified in fieldNames so that the controller can explicitly access those fields as well.

#### Signature

public Void addFields(List<String\> fieldNames)

#### Parameters

fieldNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Return Value

Type: Void

#### Usage

This method should be called before a record has been loaded—typically, it's called by the controller's constructor. If this method is called outside of the constructor, you must use the reset() method before calling addFields().

The strings in fieldNames can either be the API name of a field, such as AccountId, or they can be explicit relationships to fields, such as something\_\_r.myField\_\_c.

This method is only for controllers used by dynamicVisualforce bindings.

### cancel()

Returns the PageReference of the cancel page.

#### Signature

public System.PageReference cancel()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

### delete()

Deletes record and returns the PageReference of the delete page.

#### Signature

public System.PageReference delete()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

### edit()

Returns the PageReference of the standard edit page.

#### Signature

public System.PageReference edit()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

### getId()

Returns the ID of the record that is currently in context, based on the value of the id query string parameter in the Visualforce page URL.

#### Signature

public String getId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRecord()

Returns the record that is currently in context, based on the value of the id query string parameter in the Visualforce page URL.

#### Signature

public SObject getRecord()

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### Usage

Note that only the fields that are referenced in the associated Visualforce markup are available for querying on this SObject. All other fields, including fields from any related objects, must be queried using a SOQL expression.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexref)

#### Tip

You can work around this restriction by including a hidden component that references any additional fields that you want to query. Hide the component from display by setting the component's rendered attribute to false.

#### Example

```

```

### reset()

Forces the controller to reacquire access to newly referenced fields. Any changes made to the record prior to this method call are discarded.

#### Signature

public Void reset()

#### Return Value

Type: Void

#### Usage

This method is only used if addFields is called outside the constructor, and it must be called directly before addFields.

This method is only for controllers used by dynamicVisualforce bindings.

### save()

Saves changes and returns the updated PageReference.

#### Signature

public System.PageReference save()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

### view()

Returns the PageReference object of the standard detail page.

#### Signature

public System.PageReference view()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

## Code Examples

```
ApexPages.StandardController sc = new ApexPages.StandardController(sObject);
```

```apex
public class myControllerExtension {

    private final Account acct;
    
    // The extension constructor initializes the private member
    // variable acct by using the getRecord method from the standard
    // controller.
    public myControllerExtension(ApexPages.StandardController stdController) {
        this.acct = (Account)stdController.getRecord();
    }

    public String getGreeting() {
        return 'Hello ' + acct.name + ' (' + acct.id + ')';
    }
}
```

```
<apex:page standardController="Account" extensions="myControllerExtension">
    {!greeting} <p/>
    <apex:form>
        <apex:inputField value="{!account.name}"/> <p/>
        <apex:commandButton value="Save" action="{!save}"/>
    </apex:form>
</apex:page>
```

```
<apex:outputText 
value="{!account.billingcity} 
{!account.contacts}"
rendered="false"/>
```

## Related Topics

- ApexPages (atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm)
- StandardController Constructors (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
- StandardController Methods (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
- StandardController(controllerSObject) (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
- addFields(fieldNames) (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
- cancel() (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
- delete() (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
- edit() (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
- getId() (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
- getRecord() (atlas.en-us.apexref.meta/apexref/apex_pages_standardcontroller.htm)
