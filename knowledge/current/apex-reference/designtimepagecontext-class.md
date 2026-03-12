---
title: "DesignTimePageContext Class"
domain: apex-reference
topic: designtimepagecontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.472Z
estimatedTokens: 834
namespace: VisualEditor
keywords: [DesignTimePageContext, provides, context, information, Lightning, page., used, help, define, values, picklist, component, page, based, page’s, which, it’s, associated., Usage, Example]
---

# DesignTimePageContext Class

> A class that provides context information about a Lightning page. It
      can be used to help define the values of a picklist in a Lightning component on a Lightning
      page based on the page’s type and the object with which it’s associated.

**Namespace:** `VisualEditor`

# DesignTimePageContext Class

A class that provides context information about a Lightning page. It can be used to help define the values of a picklist in a Lightning component on a Lightning page based on the page’s type and the object with which it’s associated.

## Namespace

[VisualEditor](atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm#apex_namespace_VisualEditor "The VisualEditor namespace provides classes and methods for interacting with the Lightning App Builder. The classes and methods in this namespace operate on Lightning components, which include Lightning web components and Aura components.")

## Usage

To use this class, create a parameterized constructor in the custom Apex class that extends VisualEditor.DynamicPickList.

## Example

Here’s an example of a custom Apex class extending the VisualEditor.DynamicPickList class. It includes VisualEditor.DesignTimePageContext to define a picklist value that is available only if the page type is HomePage.

```

```

-   **[DesignTimePageContext Properties](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm#apex_VisualEditor_DesignTimePageContext_properties)**

-   **[DesignTimePageContext Methods](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm#apex_VisualEditor_DesignTimePageContext_methods)**


## DesignTimePageContext Properties

The following are properties for DesignTimePageContext.

-   **[entityName](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm#apex_VisualEditor_DesignTimePageContext_entityName)**
    The API name of the sObject that a Lightning page is associated with, such as Account, Contact, or Custom\_object\_\_c. entityName is available only for object pages, and not all Lightning pages are associated with objects.
-   **[pageType](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm#apex_VisualEditor_DesignTimePageContext_pageType)**
    The type of Lightning page, such as HomePage, AppPage, or RecordPage.

### entityName

The API name of the sObject that a Lightning page is associated with, such as Account, Contact, or Custom\_object\_\_c. entityName is available only for object pages, and not all Lightning pages are associated with objects.

#### Signature

public String entityName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### pageType

The type of Lightning page, such as HomePage, AppPage, or RecordPage.

#### Signature

public String pageType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## DesignTimePageContext Methods

The following are methods for DesignTimePageContext.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm#apex_VisualEditor_DesignTimePageContext_clone)**
    Makes a duplicate copy of the VisualEditor.DesignTimePageContext object.

### clone()

Makes a duplicate copy of the VisualEditor.DesignTimePageContext object.

#### Signature

public Object clone()

#### Return Value

Type: Object

## Code Examples

```apex
global class MyCustomPickList extends VisualEditor.DynamicPickList{
    VisualEditor.DesignTimePageContext context;

    global MyCustomPickList(VisualEditor.DesignTimePageContext context) {
       this.context = context;
    }

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

        if (context.pageType == 'HomePage') {
            VisualEditor.DataRow value3 = new VisualEditor.DataRow('purple', 'PURPLE');
            myValues.addRow(value3);
        }

        return myValues;
    }
}
```

## Related Topics

- VisualEditor (atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm)
- DesignTimePageContext Properties (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm)
- DesignTimePageContext Methods (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm)
- entityName (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm)
- pageType (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm)
