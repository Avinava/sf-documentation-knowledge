---
title: "Lightning Page Template Component Best Practices"
domain: lightning
topic: lightning-page-template-component-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.134Z
estimatedTokens: 458
keywords: [Lightning, Template, Component, Best, Practices, Keep, limitations, mind, creating, components]
---

# Lightning Page Template Component Best Practices

> Keep these best practices and limitations in mind when creating Lightning page
        template components.

# Lightning Page Template Component Best Practices

Keep these best practices and limitations in mind when creating Lightning page template components.

-   Don’t add custom background styling to a template component. It interferes with Salesforce’s Lightning Experience page themes.
-   We strongly recommend including supported form factor information in the design file of all of your components. If you don’t, the component might behave in unexpected ways.
-   Template component supported form factors must be equal to, or a subset of, the supported form factors of its page type.
-   Once a component is in use on a Lightning page, you can only increase the supported form factors for the component, not decrease them.
-   Including scrolling regions in your template component can cause problems when you try to view it in the Lightning App Builder.
-   Custom templates can’t be extensible nor extended—you can’t extend a template from anything else, nor can you extend other things from a template.
-   Using getters to get the regions as variables works at design time but not at run time. Here’s an example of what we mean.

    ```

    ```

    ```

    ```

-   You can remove regions from a template if it’s not being used by a Lightning page, and if it’s not set to access=global. You can add regions at any time.
-   A region can be used more than once in the code, but only one instance of the region should render at run time.
-   A template component can contain up to 25 regions.
-   The order that you list the regions in a page template is the order that the regions appear in when admins migrate region content using the template switching wizard in the Lightning App Builder. We recommend that you label the regions and list them in a logical order in your template, such as top to bottom or left to right.

## Code Examples

```
<aura:component implements="lightning:appHomeTemplate">
    <aura:attribute name="region" type="Aura.Component[]" />
    <aura:handler name="init" value="{!this}" action="{!c.init}" />

    <div>
        {!v.region}
    </div>
    
</aura:component>
```

```
{
    init : function(component, event, helper) {
        var region = cmp.get('v.region'); // This will fail at run time.
        ...
    }
}
```
