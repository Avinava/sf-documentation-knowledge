---
title: "Working with Field Sets"
domain: pages
topic: working-with-field-sets
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:23.473Z
estimatedTokens: 1324
keywords: [Working, dynamic, bindings, display, Visualforce, pages, grouping, describing, user's, middle, business, title, Apex, Considerations]
---

# Working with Field Sets

> You can use dynamic bindings to display field sets on your Visualforce
            pages. A field set is a grouping of fields. For example, you could have a field set that
            contains fields describing a user's first name, middle name, last name, and business
            title. If the page 

# Working with Field Sets

You can use dynamic bindings to display field sets on your Visualforce pages. A field set is a grouping of fields. For example, you could have a field set that contains fields describing a user's first name, middle name, last name, and business title. If the page is added to a managed package, administrators can add, remove, or reorder fields in a field set to modify the fields presented on the Visualforce page without modifying any code. Field sets are available for Visualforce pages on API version 21.0 or above. You can have up to 50 field sets referenced on a single page. An sObject can have up to 2,000 field sets.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Each field set can have up to 25 fields through lookup relationships. Fields can only span one level away from the entity.

## Working with Field Sets Using Visualforce

Field sets can be directly referenced in Visualforce by combining the $ObjectType global variable with the keyword FieldSets. For example, if your Contact object has a field set called properNames that displays three fields, your Visualforce page can reference the field data through the following iteration:

```

```

You can also choose to render additional information, such as field labels and data types, through the following special properties on the fields in the field set:

| Property Name | Description |
| --- | --- |
| DBRequired | Indicates whether the field is required for the object |
| FieldPath | Lists the field’s spanning info |
| Label | The UI label for the field |
| Required | Indicates whether the field is required in the field set |
| Type | The data type for the field |

For example, you can access the labels and data types for the fields in properNames like this:

```

```

If this Visualforce page is added to a managed package and distributed, subscribers can edit the properNames field set. The logic for generating the Visualforce page remains the same, while the presentation differs based on each subscriber’s implementation. To reference a field set from a managed package, you must prepend the field set with the organization’s namespace. Using the markup above, if properNames comes from an organization called Spectre, the field set is referenced like this:

```

```

## Working with Field Sets Using Apex

Fields in a field set are automatically loaded when your Visualforce page uses a standard controller. When using a custom controller, you need to add the required fields to the SOQL query for the page. Apex provides two Schema objects that allow you to discover field sets and the fields they contain, Schema.FieldSet and Schema.FieldSetMember. For information about these two system classes, see the [Lightning Platform Apex Code Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_fieldsets_describe.htm "html (New Window)").

Sample:Displaying a Field Set on a Visualforce Page

This sample uses Schema.FieldSet and Schema.FieldSetMember methods to dynamically get all the fields in the Dimensions field set for the Merchandise custom object. The list of fields is then used to construct a SOQL query that ensures those fields are available for display. The Visualforce page uses the MerchandiseDetails class as its controller.

```

```

The Visualforce page using the above controller is simple:

```

```

One thing to note about the above markup is the expression used to determine if a field on the form should be indicated as being a required field. A field in a field set can be required by either the field set definition, or the field’s own definition. The expression handles both cases.

## Field Set Considerations

Fields added to a field set can be in one of two categories:

The order in which a developer lists displayed fields determines their order of appearance on a Visualforce page.

As a package developer, keep the following best practices in mind:

-   Subscribers with installed field sets can add fields that your page didn’t account for. There is no way to conditionally omit some fields from a field set iteration, so make sure that any field rendered through your field set works for all field types.
-   We recommend that you add only non-essential fields to your field set. This ensures that even if a subscriber removes all fields in the field set, Visualforce pages that use that field set still function.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Field sets are available for Visualforce pages on API version 21.0 or above.

#### See Also

-   [$FieldSet](atlas.en-us.pages.meta/pages/pages_variables_global_fieldset.htm "Provides access to a field set defined in your organization.")

-   [Object Schema Details Available Using $ObjectType](atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_objects_reference.htm "Use the $ObjectType global variable to access schema information about the objects in your organization. For example, to access the name, label, and accessibility of an object.")

-   [*Salesforce Help*: Creating and Editing Field Sets](https://help.salesforce.com/articleView?id=fields_editing_field_sets.htm&type=5&language=en_US)

## Code Examples

```
<apex:page standardController="Contact">
    <apex:repeat value="{!$ObjectType.Contact.FieldSets.properNames}" var="f"> 
        <apex:outputText value="{!Contact[f]}" /><br/>
    </apex:repeat>
</apex:page>
```

```
<apex:page standardController="Contact">
    <apex:pageBlock title="Fields in Proper Names">
        <apex:pageBlockTable value="{!$ObjectType.Contact.FieldSets.properNames}" var="f">
            <apex:column value="{!f}">
                <apex:facet name="header">Name</apex:facet>
            </apex:column> 
            <apex:column value="{!f.Label}">
                <apex:facet name="header">Label</apex:facet>
            </apex:column> 
            <apex:column value="{!f.Type}" >
                <apex:facet name="header">Data Type</apex:facet>
            </apex:column> 
        </apex:pageBlockTable> 
    </apex:pageBlock> 
</apex:page>
```

```
{!$ObjectType.Contact.FieldSets.Spectre__properNames}
```

```apex
public class MerchandiseDetails {

    public Merchandise__c merch { get; set; }
    
    public MerchandiseDetails() {
        this.merch = getMerchandise();
    }

    public List<Schema.FieldSetMember> getFields() {
        return SObjectType.Merchandise__c.FieldSets.Dimensions.getFields();
    }

    private Merchandise__c getMerchandise() {
        String query = 'SELECT ';
        for(Schema.FieldSetMember f : this.getFields()) {
            query += f.getFieldPath() + ', ';
        }
        query += 'Id, Name FROM Merchandise__c LIMIT 1';
        return Database.query(query);
    }
}
```

```
<apex:page controller="MerchandiseDetails">
    <apex:form >

      <apex:pageBlock title="Product Details">
          <apex:pageBlockSection title="Product">
              <apex:inputField value="{!merch.Name}"/>
          </apex:pageBlockSection>
      
          <apex:pageBlockSection title="Dimensions">
              <apex:repeat value="{!fields}" var="f">
                  <apex:inputField value="{!merch[f.fieldPath]}" 
                      required="{!OR(f.required, f.dbrequired)}"/>
              </apex:repeat>
          </apex:pageBlockSection>
  
        </apex:pageBlock>

    </apex:form>  
</apex:page>
```

## Related Topics

- $FieldSet (atlas.en-us.pages.meta/pages/pages_variables_global_fieldset.htm)
- Object Schema Details Available Using $ObjectType (atlas.en-us.pages.meta/pages/pages_variables_global_objecttype_schema_objects_reference.htm)
