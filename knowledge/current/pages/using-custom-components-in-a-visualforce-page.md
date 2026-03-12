---
title: "Using Custom Components in a Visualforce Page"
domain: pages
topic: using-custom-components-in-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.043Z
estimatedTokens: 386
keywords: [Custom, Components, Visualforce, <apex, component>, tag, markup, added, standard, whenever, component, included, uses, defined, saved]
---

# Using Custom Components in a Visualforce Page

> The body of an <apex:component> tag is the markup that is added to a standard Visualforce page whenever the
         component is included. For example, the following Visualforce page uses the component
         defined in Custom Component Markup (in this example, the component was saved with the na

# Using Custom Components in a Visualforce Page

The body of an <apex:component\> tag is the markup that is added to a standard Visualforce page whenever the component is included. For example, the following Visualforce page uses the component defined in [Custom Component Markup](atlas.en-us.pages.meta/pages/pages_comp_cust_elements_markup.htm) (in this example, the component was saved with the name myComponent):

```

```

It results in the following output:

```

```

To use a custom component in a Visualforce page you must prefix the component's name with the namespace in which the component was defined. For example, if a component named myComponent is defined in a namespace called myNS, the component can be referenced in a Visualforce page as <myNS:myComponent\>.

For ease of use, a component that is defined in the same namespace as an associated page can also use the c namespace prefix. Consequently, if the page and component from the sample above are defined in the same namespace, you can reference the component as <c:myComponent\>.

If you want to insert content into a custom component, use the [<apex:componentBody\>](atlas.en-us.pages.meta/pages/pages_compref_componentBody.htm) tag.

Similar to standard components, when a custom component is updated or edited, the Visualforce page that references it is also updated.

#### See Also

-   [What are Custom Components?](atlas.en-us.pages.meta/pages/pages_comp_cust_def.htm)

-   [Defining Custom Components](atlas.en-us.pages.meta/pages/pages_comp_cust_creating.htm)

## Code Examples

```
<apex:page standardController="Account">
   This is my <i>page</i>. <br/>
   <c:myComponent/>
</apex:page>
```

```
This is my page.
This is my custom component.
```

## Related Topics

- Custom Component Markup (atlas.en-us.pages.meta/pages/pages_comp_cust_elements_markup.htm)
- <apex:componentBody> (atlas.en-us.pages.meta/pages/pages_compref_componentBody.htm)
- What are Custom Components? (atlas.en-us.pages.meta/pages/pages_comp_cust_def.htm)
- Defining Custom Components (atlas.en-us.pages.meta/pages/pages_comp_cust_creating.htm)
