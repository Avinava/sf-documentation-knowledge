---
title: "Create Dynamic Picklists for Your Custom Components"
domain: lightning
topic: create-dynamic-picklists-for-your-custom-components
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.101Z
estimatedTokens: 1149
keywords: [Dynamic, Picklists, Custom, Components, expose, component, picklist, configured, Lightning, App, Builder, picklist’s, provided, Apex, Add]
---

# Create Dynamic Picklists for Your Custom Components

> You can expose a component property as a picklist when the component is configured in
  the Lightning App Builder. The picklist’s values are provided by an Apex class that you
  create.

# Create Dynamic Picklists for Your Custom Components

You can expose a component property as a picklist when the component is configured in the Lightning App Builder. The picklist’s values are provided by an Apex class that you create.

For example, let’s say you’re creating a component for the Home page to display a custom Company Announcement record. You can use an Apex class to put the titles of all Company Announcement records in a picklist in the component’s properties in the Lightning App Builder. Then, when admins add the component to a Home page, they can easily select the appropriate announcement to place on the page.

First, create a custom Apex class to use as a datasource for the picklist. The Apex class must extend the VisualEditor.DynamicPickList abstract class. Then add an attribute to your design file that specifies your custom Apex class as the datasource.

Here’s a simple example.

## Create an Apex Class

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Although VisualEditor.DataRow allows you to specify any Object as its value, you can specify a datasource only for String attributes. The default implementation for isValid() and getLabel() assumes that the object passed in the parameter is a String for comparison.

For more information on the VisualEditor.DynamicPickList abstract class, see the [Apex Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm "HTML (New Window)").

## Add the Apex Class to Your Design File

To specify an Apex class as a datasource in an existing component, add the datasource property to the attribute with a value consisting of the Apex namespace and Apex class name.

```

```

## Dynamic Picklist Tips and Considerations

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

If you make an Apex datasource private using WITH USER\_MODE in the object query, use the component only on pages that users with appropriate object access permission can view. Otherwise, the component can still be visible to users who lack appropriate permission, thereby exposing a private data string.

Let’s look at some scenarios. If a user doesn’t have appropriate object access permission:

-   Both Aura components and Lightning web components are still visible on Lightning pages
-   In LWR sites in Experience Cloud, Lightning web components are still visible on private pages and to guest users on public pages
-   In Aura sites in Experience Cloud, Aura components and Lightning web components aren’t visible

See [Securing Data in Apex Controllers](atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm "By default, Apex runs in system mode, which means that it runs with substantially elevated permissions, acting as if the user had most permissions and all field- and object-level access granted. Because these security layers aren’t enforced like they are in the Salesforce UI, you must write code to enforce them. Otherwise, your components may inadvertently expose sensitive data that would normally be hidden from users in the Salesforce UI.").

-   You can use VisualEditor.DesignTimePageContext to give your picklist the context of the page that the component resides on.
-   Specifying the Apex datasource as public isn’t respected in managed packages. If an Apex class is public and part of a managed package, it can be used as a datasource for custom components in the subscriber org.
-   Profile access on the Apex class isn’t respected when the Apex class is used as a datasource. If an admin’s profile doesn’t have access to the Apex class but does have access to the custom component, the admin sees values provided by the Apex class on the component in the Lightning App Builder.
-   The VisualEditor.DynamicPickList method isValid() runs in Experience Cloud sites when the page loads. If you don’t override the method in your custom Apex class that extends VisualEditor.DynamicPickList, the default implementation executes getValues() at runtime, which can cause performance degradations. To improve performance, implement a non-operational isValid() method.

    ```

    ```


#### See Also

-   [*Apex Developer Guide*: DesignTimePageContext Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm#apex_class_VisualEditor_DesignTimePageContext "Apex Developer Guide: DesignTimePageContext
    Class - HTML (New Window)")

## Code Examples

```apex
global class MyCustomPickList extends VisualEditor.DynamicPickList{
    
    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('red', 'RED');
        return defaultValue;
    }
    global override VisualEditor.DynamicPickListRows getValues() {
        VisualEditor.DataRow value1 = new VisualEditor.DataRow('red', 'RED');
        VisualEditor.DataRow value2 = new VisualEditor.DataRow('yellow', 'YELLOW');
        VisualEditor.DynamicPickListRows  myValues = new VisualEditor.DynamicPickListRows();
        myValues.addRow(value1);
        myValues.addRow(value2);
        return myValues;
    }
}
```

```
<design:component>
        <design:attribute name="property1" datasource="apex://MyCustomPickList"/>
</design:component>
```

```apex
global override Boolean isValid(Object attributeValue) {
   return true;
}
```

## Related Topics

- Securing Data in Apex Controllers (atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm)
