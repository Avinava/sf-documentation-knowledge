---
title: "StandardController Class"
domain: pages
topic: standardcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.772Z
estimatedTokens: 289
namespace: ApexPages
keywords: [StandardController, defining, extension, standard, controller, Usage, Instantiation]
---

# StandardController Class

> Use a StandardController when defining an extension for
a standard controller.

**Namespace:** `ApexPages`

# StandardController Class

Use a StandardController when defining an extension for a standard controller.

## Namespace

ApexPages

## Usage

StandardController objects reference the pre-built Visualforce controllers provided by Salesforce. The only time it is necessary to refer to a StandardController object is when defining an extension for a standard controller. StandardController is the data type of the single argument in the extension class constructor.

## Instantiation

You can instantiate a StandardController in the following way:

```

```

## Example

The following example shows how a StandardController object can be used in the constructor for a standard controller extension:

```

```

The following Visualforce markup shows how the controller extension from above can be used in a page:

```

```

-   **[StandardController Constructors](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_constructors.htm)**

-   **[StandardController Methods](atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_methods.htm)**


#### See Also

-   [Standard Controllers](atlas.en-us.pages.meta/pages/pages_controller_std.htm)

## Code Examples

```
ApexPages.StandardController sc = new ApexPages.StandardController(sObject);
```

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

## Related Topics

- StandardController Constructors (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_constructors.htm)
- StandardController Methods (atlas.en-us.pages.meta/pages/apex_ApexPages_StandardController_methods.htm)
- Standard Controllers (atlas.en-us.pages.meta/pages/pages_controller_std.htm)
