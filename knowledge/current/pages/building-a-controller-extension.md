---
title: "Building a Controller Extension"
domain: pages
topic: building-a-controller-extension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.298Z
estimatedTokens: 693
keywords: [Building, Controller, Extension, any, Apex, containing, argument, ApexPages.StandardController, CustomControllerName, custom, want, extend]
---

# Building a Controller Extension

> A controller extension is any Apex class containing a constructor that takes a single
            argument of type ApexPages.StandardController
            or CustomControllerName, where
                CustomControllerName is the name of a custom controller you want
            to extend.

# Building a Controller Extension

A controller extension is any Apex class containing a constructor that takes a single argument of type ApexPages.StandardController or CustomControllerName, where CustomControllerName is the name of a custom controller you want to extend.

The following class is a simple example of a controller extension:

```

```

The following Visualforce markup shows how the controller extension from above can be used in a page:

```

```

The extension is associated with the page using the extensions attribute of the <apex:page\> component.

As with all controller methods, controller extension methods can be referenced with {! } notation in page markup. In the example above, the {!greeting} expression at the top of the page references the controller extension's getGreeting method.

Because this extension works in conjunction with the Account standard controller, the standard controller methods are also available. For example, the value attribute in the <apex:inputField\> tag retrieves the name of the account using standard controller functionality. Likewise, the <apex:commandButton\> tag references the standard account save method with its action attribute.

Multiple controller extensions can be defined for a single page through a comma-separated list. This allows for overrides of methods with the same name. For example, if the following page exists:

```

```

with the following extensions:

```

```

```

```

The value of the <apex:outputText\> component renders as foo-One. Overrides are defined by whichever methods are defined in the “leftmost” extension, or, the extension that is first in the comma-separated list. Thus, the getFoo method of ExtOne is overriding the method of ExtTwo.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Like other Apex classes, controller extensions run in system mode. Consequently, the current user's credentials are not used to execute controller logic, and the user's permissions and field-level security do not apply. However, if a controller extension extends a standard controller, the logic from the standard controller does not execute in system mode. Instead, it executes in user mode, in which the permissions, field-level security, and sharing rules of the current user apply.

You can choose whether a controller extension respects a user's organization-wide defaults, role hierarchy, and sharing rules by using the with sharing keywords in the class definition. For information, see “Using the with sharing, without sharing, and inherited sharing Keywords” in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "html (New Window)").

## Code Examples

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
<apex:page standardController="Account" 
    extensions="ExtOne,ExtTwo" showHeader="false">
    <apex:outputText value="{!foo}" />
</apex:page>
```

```apex
public class ExtOne {
    public ExtOne(ApexPages.StandardController acon) { }

    public String getFoo() {
        return 'foo-One';
    }
}
```

```apex
public class ExtTwo {
    public ExtTwo(ApexPages.StandardController acon) { }

    public String getFoo() {
        return 'foo-Two';
    }
}
```
