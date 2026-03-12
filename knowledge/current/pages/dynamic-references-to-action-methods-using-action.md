---
title: "Dynamic References to Action Methods Using  $Action"
domain: pages
topic: dynamic-references-to-action-methods-using-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.482Z
estimatedTokens: 730
keywords: [Dynamic, References, Action, $Action, variable, dynamically, actions, specific, record, likely, way, URL, perform]
---

# Dynamic References to Action Methods Using  $Action

> The $Action global variable allows you to
        dynamically reference valid actions on an object type, or on a specific record. The most
        likely way to make use of this is to create a URL to perform that action.

# Dynamic References to Action Methods Using $Action

The $Action global variable allows you to dynamically reference valid actions on an object type, or on a specific record. The most likely way to make use of this is to create a URL to perform that action.

For example, you can use the expression {!URLFOR($Action\[objectName\].New)} in an <apex:outputLink\>, with a controller method getObjectName() that provides the name of the sObject.

Here’s an example that does exactly that. The controller extension queries the system to learn the names of all the custom objects accessible to the user, and presents a list of them, along with links to create a new record. First, create a controller extension named DynamicActionsHandler:

```

```

There are a few things of interest in this extension:

-   The loadCustomObjects method uses Apex schema methods to get metadata information about available custom objects. The Schema.getGlobalDescribe method is a lightweight operation to get a small set of metadata about available objects and custom settings. The method scans the collection looking for items with names that end in “\_\_c”, which indicates they are custom objects or settings. These items are more deeply inspected using getDescribe, and selected metadata is saved for the custom objects.
-   Using if(obj.endsWith('\_\_c')) to test whether an item is a custom object or not may feel like a “hack”, but the alternative is to call obj.getDescribe().isCustom(), which is expensive, and there is a governor limit on the number of calls to getDescribe. Scanning for the “\_\_c” string as a first pass on a potentially long list of objects is more efficient.
-   This metadata is saved in an inner class, CustomObjectDetails, which functions as a simple structured container for the fields to be saved.
-   CustomObjectDetails implements the Comparable interface, which makes it possible to sort a list of custom objects details by an attribute of each object, in this case, the custom object’s name.

Now create a Visualforce page with the following markup:

```

```

On a page that hasn’t been assigned a specific record, the only two useful actions available are New and List. On a page that queries for a record, the $Action global variable provides methods such as View, Clone, Edit, and Delete. Certain standard objects have additional actions that make sense for their data types.

#### See Also

-   [$Action](atlas.en-us.pages.meta/pages/pages_variables_global_action.htm "A global merge field type to use when referencing standard Salesforce actions, such as displaying the Accounts tab home page, creating accounts, editing accounts, and deleting accounts.")

-   [Valid Values for the $Action Global Variable](atlas.en-us.pages.meta/pages/pages_variables_global_action_valid_values.htm "The $Action global variable contains a list of actions and objects on which the actions can be performed.")

## Code Examples

```apex
public with sharing class DynamicActionsHandler {

    public List<CustomObjectDetails> customObjectDetails { get; private set; }
    
    public DynamicActionsHandler(ApexPages.StandardController cont) {
        this.loadCustomObjects();
    }
    
    public void loadCustomObjects() {
        List<CustomObjectDetails> cObjects = new List<CustomObjectDetails>();
        // Schema.getGlobalDescribe() returns lightweight tokens with minimal metadata
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        for(String obj : gd.keySet()) {
            if(obj.endsWith('__c')) {
                // Get the full metadata details only for custom items
                Schema.DescribeSObjectResult objD = gd.get(obj).getDescribe();
                if( ! objD.isCustomSetting()) {
                    // Save details for custom objects, not custom settings
                    CustomObjectDetails objDetails = new CustomObjectDetails(
                        obj, objD.getLabel(), objD.isCreateable());
                    cObjects.add(objDetails);
                }
            }
        }
        cObjects.sort();
        this.customObjectDetails = cObjects;
    }
    
    public class CustomObjectDetails implements Comparable {
        public String  nameStr   { get; set; }
        public String  labelStr  { get; set; }
        public Boolean creatable { get; set; }
        
        public CustomObjectDetails(String aName, String aLabel, Boolean isCreatable) {
            this.nameStr = aName;
            this.labelStr = aLabel;
            this.creatable = isCreatable;
        }
        
        public Integer compareTo(Object objToCompare) {
            CustomObjectDetails cod = (CustomObjectDetails)objToCompare;
            return(this.nameStr.compareTo(cod.nameStr));
        }
    }
}
```

```
<apex:page standardController="Account" 
           extensions="DynamicActionsHandler">
    <br/>

    <apex:dataTable value="{!customObjectDetails}" var="coDetails">
        <apex:column >
            <apex:facet name="header">Custom Object</apex:facet>
            <apex:outputText value="{!coDetails.labelStr}"/> 
        </apex:column>
        <apex:column >
            <apex:facet name="header">Actions</apex:facet>
            <apex:outputLink value="{!URLFOR($Action[coDetails.nameStr].New)}" 
                rendered="{!coDetails.creatable}">[Create]</apex:outputLink><br/>
            <apex:outputLink value="{!URLFOR($Action[coDetails.nameStr].List, 
                $ObjectType[coDetails.nameStr].keyPrefix)}">[List]</apex:outputLink>
        </apex:column>
    </apex:dataTable>

</apex:page>
```

## Related Topics

- $Action (atlas.en-us.pages.meta/pages/pages_variables_global_action.htm)
- Valid Values for the $Action Global Variable (atlas.en-us.pages.meta/pages/pages_variables_global_action_valid_values.htm)
