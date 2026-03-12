---
title: "Best Practices for Controllers and Controller
        Extensions"
domain: pages
topic: best-practices-for-controllers-and-controller-extensions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:22.113Z
estimatedTokens: 444
keywords: [Best, Practices, Controllers, Controller, Extensions, extension, extends, standard, logic, doesn’t, execute, system, mode, Instead, executes]
---

# Best Practices for Controllers and Controller
        Extensions

> If a
                        controller extension extends a standard controller, the logic from the
                        standard controller doesn’t execute in system mode. Instead, it
                        executes in user mode, in which the permissions, field-level security, and
             

# Best Practices for Controllers and Controller Extensions

Enforcing Sharing Rules in Controllers

Like other Apex classes, custom controllers and controller extensions run in system mode.

Typically, you want a controller or controller extension to respect a user’s organization-wide defaults, role hierarchy, and sharing rules. You can do that by using the with sharing keywords in the class definition. For information, see “Using the with sharing, without sharing, and inherited sharing Keywords” in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "html (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If a controller extension extends a standard controller, the logic from the standard controller doesn’t execute in system mode. Instead, it executes in user mode, in which the permissions, field-level security, and sharing rules of the current user apply.

Controller Constructors Evaluate Before Setter Methods

Do not depend on a setter method being evaluated before a constructor. For example, in the following component, the component's controller depends on the setter for selectedValue being called before the constructor method:

```

```

```

```

Since the constructor is called before the setter, selectedValue will always be null when the constructor is called. Thus, EditMode will never be set to true.

Methods may evaluate more than once — do not use side-effects

Methods, including methods in a controller, action attributes, and expressions, may be called more than once. Do not depend on evaluation order or side-effects when creating custom methods in a controller or controller extension.

## Code Examples

```
<apex:component controller="CustCmpCtrl">
      <apex:attribute name="value" description="" 
                      type="String" required="true" 
                      assignTo="{!selectedValue}">
      </apex:attribute>
      //...
      //...
</apex:component>
```

```apex
public class CustCmpCtrl {
      
      // Constructor method
      public CustCmpCtrl() {
            if (selectedValue != null) {
                EditMode = true;
            }
      }
      
      private Boolean EditMode = false;

      // Setter method
      public String selectedValue { get;set; }
}
```
