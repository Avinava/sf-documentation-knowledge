---
title: "Creating and Displaying Dynamic Components"
domain: pages
topic: creating-and-displaying-dynamic-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.448Z
estimatedTokens: 1244
keywords: [Creating, Displaying, Dynamic, Components, examples, deliberately, simple, instructional, purposes, benefit, Visualforce, Custom, Passing, Attributes, Defining]
---

# Creating and Displaying Dynamic Components

> The examples in this section are deliberately simple for instructional purposes. For a
            more complete example of when you might benefit from dynamic Visualforce components, see
                Example Using a Related List.

# Creating and Displaying Dynamic Components

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The examples in this section are deliberately simple for instructional purposes. For a more complete example of when you might benefit from dynamic Visualforce components, see [Example Using a Related List](atlas.en-us.pages.meta/pages/pages_dynamic_vf_components_sample.htm).

There are two parts to embedding dynamic Visualforce components on your page:

-   Adding an <apex:dynamicComponent\> tag somewhere on your page. This tag acts as a placeholder for your dynamic component.
-   Developing a dynamic Visualforce component in your controller or controller extension.

The <apex:dynamicComponent\> tag has one required attribute—componentValue—that accepts the name of an Apex method that returns a dynamic component. For example, if you wanted to dynamically generate the title of a section header differently if the deadline for a submitting form has passed, you could use the following markup and controller code:

```

```

```

```

You can have multiple <apex:dynamicComponent\> components on a single page.

Each dynamic component has access to a common set of methods and properties. You can review this list in the Apex Developer's Guide in the chapter titled “Component Class.”.

## Dynamic Custom Components

Using custom components dynamically works exactly the same as the standard Visualforce components. Just change the namespace to that of the custom component. Your custom components are in the c namespace, so you can create one dynamically like this:

```

```

As a convenience for your own components, you can omit the namespace, like so:

```

```

If you are using components provided by a third party in a package, use the namespace of the package provider:

```

```

## Passing Attributes through the Constructor

Instead of setting component attributes via their properties, you can simply pass in a list of one or more attributes through the constructor:

```

```

If an attribute isn’t defined in the constructor, the component's default values are used for that attribute.

There are two components that must have an attribute defined in the constructor, rather than through a property:

-   Component.Apex.Detail must have showChatter=true passed to its constructor if you want to display the Chatter information and controls for a record. Otherwise, this attribute is always false.
-   Component.Apex.SelectList must have multiSelect=true passed to its constructor if you want the user to be able to select more than one option at a time. Otherwise, this value is always false.

These values are Booleans, not Strings; you don’t need to enclose them in single quote marks.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

#### Warning

You can’t pass attributes through the class constructor if the attribute name matches an Apex keyword. For example, Component.Apex.RelatedList can’t pass list through the constructor, because List is a reserved keyword. Similarly, Component.Apex.OutputLabel can’t define the for attribute in the constructor, because it’s also a keyword.

## Defining Expressions and Arbitrary HTML

You can add expression language statements with the expressions property. Append expressions before a property name to pass in an expression statement. As in static markup, expressions must be wrapped with the {! } syntax. Here’s an example:

```

```

Valid expressions include those that refer to fields on standard and custom objects. Global variables and functions are also available, as demonstrated in this example:

```

```

Passing in values through expressions is valid only for attributes that support them. Using {! } outside of the expressions property will be interpreted literally, not as an expression.

If you want to include plain HTML, you can do so by setting the escape property on Component.Apex.OutputText to false:

```

```

## Defining Facets

Similar to the way expressions are defined, facets act as a special property available to dynamic components. Here’s an example:

```

```

For more information on facets, see [Best Practices for Using Component Facets](atlas.en-us.pages.meta/pages/pages_compref_additional_facet.htm).

## Defining Child Nodes

You can add child nodes to a dynamic Visualforce component using the childComponents property. The childComponents property acts as a reference to a List of Component.Apex objects.

Here’s an example of how you can use childComponents to construct a <apex:form\> with child input nodes:

```

```

If your markup is defined as:

```

```

Then your markup is equivalent to the following static markup:

```

```

Notice that the order of elements in the equivalent static markup is the order in which the dynamic components were added to childComponents, not the order in which they were declared in the Apex code of the getDynamicForm method.

## Code Examples

```
<apex:page standardController="Contact" extensions="DynamicComponentExample">
    <apex:dynamicComponent componentValue="{!headerWithDueDateCheck}"/>
    <apex:form>
        <apex:inputField value="{!Contact.LastName}"/> 
        <apex:commandButton value="Save" action="{!save}"/> 
    </apex:form> 
</apex:page>
```

```apex
public class DynamicComponentExample {
    public DynamicComponentExample(ApexPages.StandardController con) { }
    public Component.Apex.SectionHeader getHeaderWithDueDateCheck() {
        date dueDate = date.newInstance(2011, 7, 4);
        boolean overdue = date.today().daysBetween(dueDate) < 0;

        Component.Apex.SectionHeader sectionHeader = new Component.Apex.SectionHeader();
        if (overdue) {
            sectionHeader.title = 'This Form Was Due On ' + dueDate.format() + '!';
            return sectionHeader;
        } else {
            sectionHeader.title = 'Form Submission';
            return sectionHeader;
        }
    }
}
```

```
Component.c.MyCustomComponent myDy = new Component.c.MyCustomComponent();
```

```
Component.MyCustomComponent myDy = new Component.MyCustomComponent();
```

```
Component.TheirName.UsefulComponent usefulC = new Component.TheirName.UsefulComponent();
```

## Related Topics

- Example Using a Related List (atlas.en-us.pages.meta/pages/pages_dynamic_vf_components_sample.htm)
- Best Practices for Using Component Facets (atlas.en-us.pages.meta/pages/pages_compref_additional_facet.htm)
