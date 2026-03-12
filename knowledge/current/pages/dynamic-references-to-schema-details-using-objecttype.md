---
title: "Dynamic References to Schema Details Using  $ObjectType"
domain: pages
topic: dynamic-references-to-schema-details-using-objecttype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.490Z
estimatedTokens: 916
keywords: [Dynamic, References, Schema, $ObjectType, variable, access, variety, objects, organization, labels, data]
---

# Dynamic References to Schema Details Using  $ObjectType

> The $ObjectType global variable provides access to a variety of schema information
about the objects in your organization. Use it to reference names,
labels, and data types of fields on an object, for example.

# Dynamic References to Schema Details Using $ObjectType

The $ObjectType global variable provides access to a variety of schema information about the objects in your organization. Use it to reference names, labels, and data types of fields on an object, for example.

$ObjectType is a “deep” global variable, and offers the opportunity to use it in a “double dynamic” reference, like so:

```

```

Here’s an example that uses dynamic globals to provide a general object viewer. First, create a new controller (not extension) named DynamicObjectHandler:

```

```

There’s a number of things that are worth noting in this controller:

-   Visualforce components can’t use controller extensions, so this class is written as a controller instead. There is no constructor defined, so the class uses the default constructor.
-   To collect metadata for an object, the controller must know the object. Visualforce constructors can’t take arguments so there is no way to know what the object of interest is at the time of instantiation. Instead, the metadata discovery is triggered by the setting of the public property obj.
-   Several of the methods in this class use system schema discovery methods, in slightly different ways than prior examples.

The next piece is a Visualforce component that displays schema information about an object, as well as the specific values of the record that is queried. Create a new Visualforce component named DynamicObjectViewer with the following code:

```

```

Notice the following:

-   Any page that uses this component must look up a record. To do so, use the standard controller for that object, and specify the Id of the record in the URL. For example, https://<MyDomain\_login\_URL>/apex/DynamicContactPage?id=003D000000Q5GHE.
-   The selected record is immediately passed into the component’s obj attribute. This parameter is used for all of the object metadata discovery.
-   The three double dynamic references, which start with $ObjectType\[objectType\].fields\[f\], display the metadata for each field, while the normal dynamic reference displays the actual value of the field.
-   For the data value, the value is {!obj\[f\]}, using a getter method in the controller, not the perhaps more natural {!rec\[f\]}, which is the parameter to the component. The reason is simple, the obj attribute has been updated to load data for all of the fields, while rec has remained unchanged from what was loaded by the standard controller, and so only has the Id field loaded.

Finally, the new component can be used to create any number of simple Visualforce pages that use the component to display a record detail and schema info page, such as these two pages:

```

```

```

```

#### See Also

-   [$ObjectType](atlas.en-us.pages.meta/pages/pages_variables_global_objecttype.htm "A global merge field type to use when referencing standard or custom objects (such as Accounts, Cases, or Opportunities) and the values of their fields.")

-   [Field Schema Details Available Using $ObjectType](atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_fields_reference.htm "The $ObjectType global variable provides access to a variety of schema information about the objects in your organization. Use it to reference names, labels, and data types of fields on an object, for example.")

-   [Object Schema Details Available Using $ObjectType](atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_objects_reference.htm "Use the $ObjectType global variable to access schema information about the objects in your organization. For example, to access the name, label, and accessibility of an object.")

## Code Examples

```
$ObjectType[sObjectName].fields[fieldName].Type
```

```apex
public class DynamicObjectHandler {

    // This class acts as a controller for the DynamicObjectViewer component
    
    private String objType;
    private List<String> accessibleFields;

    public sObject obj { 
        get; 
        set {
	          setObjectType(value);
	          discoverAccessibleFields(value);
	          obj = reloadObjectWithAllFieldData();
        } 
    }
    
    // The sObject type as a string
    public String getObjectType() {
    	  return(this.objType);
    }
    public String setObjectType(sObject newObj) {
        this.objType = newObj.getSObjectType().getDescribe().getName();
        return(this.objType);
    }
    
    // List of accessible fields on the sObject
    public List<String> getAccessibleFields() {
     	return(this.accessibleFields);
    }
    
    private void discoverAccessibleFields(sObject newObj) {
        this.accessibleFields = new List<String>();
        Map<String, Schema.SobjectField> fields = 
            newObj.getSObjectType().getDescribe().fields.getMap();
        for (String s : fields.keySet()) {
            if ((s != 'Name') && (fields.get(s).getDescribe().isAccessible())) {
                this.accessibleFields.add(s);
            }
        }
    }
    
    private sObject reloadObjectWithAllFieldData() {
        String qid = ApexPages.currentPage().getParameters().get('id');
        String theQuery = 'SELECT ' + joinList(getAccessibleFields(), ', ') + 
                          ' FROM ' + getObjectType() + 
                          ' WHERE Id = :qid';
        return(Database.query(theQuery));    	
    }
    
    // Join an Apex List of fields into a SELECT fields list string
    private static String joinList(List<String> theList, String separator) {

        if (theList == null)   { return null; }
        if (separator == null) { separator = ''; }

        String joined = '';
        Boolean firstItem = true;
        for (String item : theList) {
            if(null != item) {
                if(firstItem){ firstItem = false; }
                else { joined += separator; }
                joined += item;
            }
        }
        return joined;
    }
}
```

```
<apex:component controller="DynamicObjectHandler">
    <apex:attribute name="rec" type="sObject" required="true"
        description="The object to be displayed." assignTo="{!obj}"/>

    <apex:form >
    <apex:pageBlock title="{!objectType}">
        <apex:pageBlockSection title="Fields" columns="1">
            <apex:dataTable value="{!accessibleFields}" var="f">
                <apex:column >
                    <apex:facet name="header">Label</apex:facet>
                    <apex:outputText value="{!$ObjectType[objectType].fields[f].Label}"/>
                </apex:column>
                <apex:column >
                    <apex:facet name="header">API Name</apex:facet>
                    <apex:outputText value="{!$ObjectType[objectType].fields[f].Name}"/>
                </apex:column>
                <apex:column >
                    <apex:facet name="header">Type</apex:facet>
                    <apex:outputText value="{!$ObjectType[objectType].fields[f].Type}"/>
                </apex:column>
                <apex:column >
                    <apex:facet name="header">Value</apex:facet>
                    <apex:outputText value="{!obj[f]}"/>
                </apex:column>
            </apex:dataTable>
        </apex:pageBlockSection>
        
        <apex:pageBlockSection columns="4">
            <apex:commandButton value="View"
                action="{!URLFOR($Action[objectType].View, obj.Id)}"/>
            <apex:commandButton value="Edit"
                action="{!URLFOR($Action[objectType].Edit, obj.Id)}"/>
            <apex:commandButton value="Clone"
                action="{!URLFOR($Action[objectType].Clone, obj.Id)}"/>
            <apex:commandButton value="Delete"
                action="{!URLFOR($Action[objectType].Delete, obj.Id)}"/>
        </apex:pageBlockSection>
    </apex:pageBlock>
    </apex:form>
    
</apex:component>
```

```
<apex:page standardController="Account"> 
    <c:DynamicObjectViewer rec="{!account}"/>
</apex:page>
```

```
<apex:page standardController="Contact">
    <c:DynamicObjectViewer rec="{!contact}"/>
</apex:page>
```

## Related Topics

- $ObjectType (atlas.en-us.pages.meta/pages/pages_variables_global_objecttype.htm)
- Field Schema Details Available Using $ObjectType (atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_fields_reference.htm)
- Object Schema Details Available Using $ObjectType (atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_objects_reference.htm)
