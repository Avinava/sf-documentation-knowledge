---
title: "StandardSetController Class"
domain: apex-reference
topic: standardsetcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.828Z
estimatedTokens: 5196
namespace: ApexPages
keywords: [StandardSetController, objects, allow, create, list, controllers, similar, extensions, pre-built, Visualforce, provided, Salesforce., Usage, Note, Instantiation, Example, queryLocator, controllerSObjects, cancel, first]
---

# StandardSetController Class

> StandardSetController objects allow you to
  create list controllers similar to, or as extensions of, the pre-built Visualforce list
  controllers provided by Salesforce.

**Namespace:** `ApexPages`

# StandardSetController Class

StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.

## Namespace

[ApexPages](atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm "The ApexPages namespace provides classes used in Visualforce controllers.")

## Usage

The StandardSetController class also contains a prototype object. This is a single sObject contained within the Visualforce StandardSetController class. If the prototype object's fields are set, those values are used during the save action, meaning that the values are applied to every record in the set controller's collection. This is useful for writing pages that perform mass updates (applying identical changes to fields within a collection of objects).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Fields that are required in other Salesforce objects will keep the same requiredness when used by the prototype object.

## Instantiation

You can instantiate a StandardSetController in either of the following ways:

-   From a list of sObjects:

    ```

    ```

-   From a query locator:

    ```

    ```


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The maximum record limit for StandardSetController is 10,000 records. Instantiating StandardSetController using a query locator returning more than 10,000 records causes a LimitException to be thrown. However, instantiating StandardSetController with a list of more than 10,000 records doesn’t throw an exception, and instead truncates the records to the limit.

## Example

The following example shows how a StandardSetController object can be used in the constructor for a custom list controller:

```

```

The following Visualforce markup shows how the controller above can be used in a page:

```

```

-   **[StandardSetController Constructors](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_constructors)**

-   **[StandardSetController Methods](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_methods)**


## StandardSetController Constructors

The following are constructors for StandardSetController.

-   **[StandardSetController(queryLocator)](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_ctor)**
    Creates an instance of the ApexPages.StandardSetController class for the list of objects returned by the query locator.
-   **[StandardSetController(controllerSObjects)](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_ctor_2)**
    Creates an instance of the ApexPages.StandardSetController class for the specified list of standard or custom objects.

### StandardSetController(queryLocator)

Creates an instance of the ApexPages.StandardSetController class for the list of objects returned by the query locator.

#### Signature

public StandardSetController(Database.QueryLocator queryLocator)

#### Parameters

queryLocator

Type: [Database.QueryLocator](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch "Represents the record set returned by Database.getQueryLocator and used with Batch Apex.")

A query locator representing a list of sObjects.

### StandardSetController(controllerSObjects)

Creates an instance of the ApexPages.StandardSetController class for the specified list of standard or custom objects.

#### Signature

public StandardSetController(List<sObject> controllerSObjects)

#### Parameters

controllerSObjects

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_methods)\>

A List of standard or custom objects.

#### Example

```

```

## StandardSetController Methods

The following are methods for StandardSetController. All are instance methods.

-   **[cancel()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_cancel)**
    Returns the PageReference of the original page, if known, or the home page.
-   **[first()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_first)**
    Changes the set of records that the controller returns to the first page of records.
-   **[getCompleteResult()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getCompleteResult)**
    Indicates whether there are more records in the set than the maximum record limit. If this is false, there are more records than you can process using the list controller. The maximum record limit is 10,000 records.
-   **[getFilterId()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getFilterId)**
    Returns the ID of the filter that is currently in context.
-   **[getHasNext()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getHasNext)**
    Indicates whether there are more records after the current page set.
-   **[getHasPrevious()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getHasPrevious)**
    Indicates whether there are more records before the current page set.
-   **[getListViewOptions()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getListViewOptions)**
    Returns a list of the listviews available to the current user.
-   **[getPageNumber()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getPageNumber)**
    Returns the page number of the current page set. Note that the first page returns 1.
-   **[getPageSize()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getPageSize)**
    Returns the number of records included in each page set.
-   **[getRecord()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getRecord)**
    Returns the sObject that represents the changes to the selected records. This retrieves the prototype object contained within the class, and is used for performing mass updates.
-   **[getRecords()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getRecords)**
    Returns the list of sObjects in the current page set. This list is immutable, i.e. you can't call clear() on it.
-   **[getResultSize()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getResultSize)**
    Returns the number of records in the set.
-   **[getSelected()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_getSelected)**
    Returns the list of sObjects that have been selected.
-   **[last()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_last)**
    Changes the set of records that the controller returns to the last page of records.
-   **[next()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_next)**
    Changes the set of records that the controller returns to the next page of records.
-   **[previous()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_previous)**
    Changes the set of records that the controller returns to the previous page of records.
-   **[save()](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_save)**
    Inserts new records or updates existing records that have been changed. After this operation is finished, it returns a PageReference to the original page, if known, or the home page.
-   **[setFilterID(filterId)](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_setFilterID)**
    Sets the filter ID of the controller.
-   **[setpageNumber(pageNumber)](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_setpageNumber)**
    Sets the page number.
-   **[setPageSize(pageSize)](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_setPageSize)**
    Sets the number of records in each page set.
-   **[setSelected(selectedRecords)](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_ApexPages_StandardSetController_setSelected)**
    Set the selected records to the records specified in the selectedRecords argument.

### cancel()

Returns the PageReference of the original page, if known, or the home page.

#### Signature

public System.PageReference cancel()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### See Also

-   [*Visualforce Developer Guide*: Standard List Controller Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_actions.htm "Visualforce Developer Guide: Standard List Controller
    Actions - HTML (New Window)")


### first()

Changes the set of records that the controller returns to the first page of records.

#### Signature

public Void first()

#### Return Value

Type: Void

#### See Also

-   [*Visualforce Developer Guide*: Standard List Controller Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_actions.htm "Visualforce Developer Guide: Standard List Controller
    Actions - HTML (New Window)")


### getCompleteResult()

Indicates whether there are more records in the set than the maximum record limit. If this is false, there are more records than you can process using the list controller. The maximum record limit is 10,000 records.

#### Signature

public Boolean getCompleteResult()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getFilterId()

Returns the ID of the filter that is currently in context.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The getFilterID() method doesn’t support list views without filter IDs, such as the Recently Viewed list view. In these cases, the method returns the first filter ID of the object’s available list views. If called within an <apex:enhancedList> component, the method returns the filter ID of the last used list view.

#### Signature

public String getFilterId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### See Also

-   [*Visualforce Developer Guide*: Standard List Controller Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_actions.htm "Visualforce Developer Guide: Standard List Controller
    Actions - HTML (New Window)")

-   [*Visualforce Developer Guide*: List Views with Standard List Controllers](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_list_views.htm "Visualforce Developer Guide: List Views with Standard
    List Controllers - HTML (New Window)")


### getHasNext()

Indicates whether there are more records after the current page set.

#### Signature

public Boolean getHasNext()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getHasPrevious()

Indicates whether there are more records before the current page set.

#### Signature

public Boolean getHasPrevious()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getListViewOptions()

Returns a list of the listviews available to the current user.

#### Signature

public System.SelectOption getListViewOptions()

#### Return Value

Type: [System.SelectOption](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_pages_selectoption "A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.")\[\]

#### See Also

-   [*Visualforce Developer Guide*: Standard List Controller Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_actions.htm "Visualforce Developer Guide: Standard List Controller
    Actions - HTML (New Window)")

-   [*Visualforce Developer Guide*: List Views with Standard List Controllers](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_list_views.htm "Visualforce Developer Guide: List Views with Standard
    List Controllers - HTML (New Window)")


### getPageNumber()

Returns the page number of the current page set. Note that the first page returns 1.

#### Signature

public Integer getPageNumber()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getPageSize()

Returns the number of records included in each page set.

#### Signature

public Integer getPageSize()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getRecord()

Returns the sObject that represents the changes to the selected records. This retrieves the prototype object contained within the class, and is used for performing mass updates.

#### Signature

public sObject getRecord()

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

#### See Also

-   [*Visualforce Developer Guide*: Building a Custom List Controller](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_custom_list_controller.htm "Visualforce Developer Guide: Building a Custom List
    Controller - HTML (New Window)")


### getRecords()

Returns the list of sObjects in the current page set. This list is immutable, i.e. you can't call clear() on it.

#### Signature

public sObject\[\] getRecords()

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

#### See Also

-   [*Visualforce Developer Guide*: Building a Custom List Controller](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_custom_list_controller.htm "Visualforce Developer Guide: Building a Custom List
    Controller - HTML (New Window)")


### getResultSize()

Returns the number of records in the set.

#### Signature

public Integer getResultSize()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getSelected()

Returns the list of sObjects that have been selected.

#### Signature

public sObject\[\] getSelected()

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

### last()

Changes the set of records that the controller returns to the last page of records.

#### Signature

public Void last()

#### Return Value

Type: Void

#### See Also

-   [*Visualforce Developer Guide*: Standard List Controller Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_actions.htm "Visualforce Developer Guide: Standard List Controller
    Actions - HTML (New Window)")


### next()

Changes the set of records that the controller returns to the next page of records.

#### Signature

public Void next()

#### Return Value

Type: Void

#### See Also

-   [*Visualforce Developer Guide*: Standard List Controller Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_actions.htm "Visualforce Developer Guide: Standard List Controller
    Actions - HTML (New Window)")


### previous()

Changes the set of records that the controller returns to the previous page of records.

#### Signature

public Void previous()

#### Return Value

Type: Void

#### See Also

-   [*Visualforce Developer Guide*: Standard List Controller Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_actions.htm "Visualforce Developer Guide: Standard List Controller
    Actions - HTML (New Window)")


### save()

Inserts new records or updates existing records that have been changed. After this operation is finished, it returns a PageReference to the original page, if known, or the home page.

#### Signature

public System.PageReference save()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### See Also

-   [*Visualforce Developer Guide*: Standard List Controller Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_actions.htm "Visualforce Developer Guide: Standard List Controller
    Actions - HTML (New Window)")


### setFilterID(filterId)

Sets the filter ID of the controller.

#### Signature

public Void setFilterID(String filterId)

#### Parameters

filterId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setpageNumber(pageNumber)

Sets the page number.

#### Signature

public Void setpageNumber(Integer pageNumber)

#### Parameters

pageNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

### setPageSize(pageSize)

Sets the number of records in each page set.

#### Signature

public Void setPageSize(Integer pageSize)

#### Parameters

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

### setSelected(selectedRecords)

Set the selected records to the records specified in the selectedRecords argument.

#### Signature

public Void setSelected(sObject\[\] selectedRecords)

#### Parameters

selectedRecords

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]

#### Return Value

Type: Void

#### Usage

Use the setSelected() method in your Apex controller or controller extension to manually set the records displayed on a Visualforce page. The setSelected() method overwrites any previously selected records with the records specified in the selectedRecords argument.

#### Example

AccountNamePage shows a table of account names. MyControllerExtension’s constructor contains a SOQL query that returns a list of accounts. This list is passed into setSelected() so that the account records in the list are selected and displayed in the table.

```

```

#### See Also

-   [*Visualforce Developer Guide*: Accessing Data with List Controllers](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_sosc_access_data.htm "Visualforce Developer Guide: Accessing Data with List
    Controllers - HTML (New Window)")

## Code Examples

```apex
List<account> accountList = [SELECT Name FROM Account LIMIT 20];
ApexPages.StandardSetController ssc = new ApexPages.StandardSetController(accountList);
```

```apex
ApexPages.StandardSetController ssc = 
new ApexPages.StandardSetController(Database.getQueryLocator([SELECT Name,CloseDate FROM Opportunity]));
```

```apex
public class opportunityList2Con {
    // ApexPages.StandardSetController must be instantiated
    // for standard list controllers
    public ApexPages.StandardSetController setCon {
        get {
            if(setCon == null) {
                setCon = new ApexPages.StandardSetController(Database.getQueryLocator(
                    [SELECT Name, CloseDate FROM Opportunity]));
            }
            return setCon;
        }
        set;
    }

    // Initialize setCon and return a list of records
    public List<Opportunity> getOpportunities() {
        return (List<Opportunity>) setCon.getRecords();
    }
}
```

```
<apex:page controller="opportunityList2Con">
    <apex:pageBlock>
        <apex:pageBlockTable value="{!opportunities}" var="o">
            <apex:column value="{!o.Name}"/>
            <apex:column value="{!o.CloseDate}"/>
        </apex:pageBlockTable>
    </apex:pageBlock>
</apex:page>
```

```apex
List<account> accountList = [SELECT Name FROM Account LIMIT 20];
ApexPages.StandardSetController ssc = new ApexPages.StandardSetController(accountList);
```

## Related Topics

- ApexPages (atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm)
- StandardSetController Constructors (atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm)
- StandardSetController Methods (atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm)
- StandardSetController(queryLocator) (atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm)
- StandardSetController(controllerSObjects) (atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm)
- Database.QueryLocator (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- sObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- cancel() (atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm)
- first() (atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm)
