---
title: "StandardSetController Class"
domain: pages
topic: standardsetcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.778Z
estimatedTokens: 572
namespace: ApexPages
keywords: [StandardSetController, objects, allow, controllers, similar, extensions, pre-built, Visualforce, provided, Salesforce, Usage, Instantiation]
---

# StandardSetController Class

> StandardSetController objects allow you to
  create list controllers similar to, or as extensions of, the pre-built Visualforce list
  controllers provided by Salesforce.

**Namespace:** `ApexPages`

# StandardSetController Class

StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.

## Namespace

ApexPages

## Usage

The StandardSetController class also contains a prototype object. This is a single sObject contained within the Visualforce StandardSetController class. If the prototype object's fields are set, those values are used during the save action, meaning that the values are applied to every record in the set controller's collection. This is useful for writing pages that perform mass updates (applying identical changes to fields within a collection of objects).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

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


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The maximum record limit for StandardSetController is 10,000 records. Instantiating StandardSetController using a query locator returning more than 10,000 records causes a LimitException to be thrown. However, instantiating StandardSetController with a list of more than 10,000 records doesn’t throw an exception, and instead truncates the records to the limit.

## Example

The following example shows how a StandardSetController object can be used in the constructor for a custom list controller:

```

```

The following Visualforce markup shows how the controller above can be used in a page:

```

```

-   **[StandardSetController Constructors](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_constructors.htm)**

-   **[StandardSetController Methods](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_methods.htm)**


#### See Also

-   [Standard List Controllers](atlas.en-us.pages.meta/pages/pages_controller_sosc_about.htm)

-   [Mass Updating Records with a Custom List Controller](atlas.en-us.pages.meta/pages/pages_quick_start_massupdate.htm)

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

## Related Topics

- StandardSetController Constructors (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_constructors.htm)
- StandardSetController Methods (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardSetController_methods.htm)
- Standard List Controllers (atlas.en-us.pages.meta/pages/pages_controller_sosc_about.htm)
- Mass Updating Records with a Custom List Controller (atlas.en-us.pages.meta/pages/pages_quick_start_massupdate.htm)
