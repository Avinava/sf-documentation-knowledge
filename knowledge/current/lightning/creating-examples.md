---
title: "Creating Examples"
domain: lightning
topic: creating-examples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.784Z
estimatedTokens: 461
keywords: [Creating, Examples, interactive, help, others, component, event]
---

# Creating Examples

> Examples are interactive and help others learn about a component, event, or
    interface.

# Creating Examples

Examples are interactive and help others learn about a component, event, or interface.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

You must create an .auradoc file before creating an example. For more information, see [Creating Documentation Content](atlas.en-us.lightning.meta/lightning/docs_auradoc.htm "Documentation provides usage guidelines and code samples about a component, event, or interface.").

In the Component Library, the **Example** tab renders your example with its code. For instance, see the lightning:avatar example at [https://developer.salesforce.com/docs/component-library/bundle/lightning:avatar/](https://developer.salesforce.com/docs/component-library/bundle/lightning:avatar/). Each component, event, or interface can have multiple examples to demonstrate different use cases.

The following is an example component that demonstrates how to use lightning:avatar. The example uses a component in the lightningcomponentdemo namespace. You can create an example component in your own namespace, such as the default c namespace.

The example component is rendered as an interactive demo in the **Example** tab when it’s wired up using the <aura:example\> tag in the .auradoc file.

```

```

The text content within the <aura:example\> tag is rendered as a tooltip and as a subtitle below the label text. Any HTML markup is removed.

Examples are not supported for components with dependency on org data, such as with lightning:recordEditForm, lightning:recordForm, and lightning:recordViewForm. Examples are also not supported for components that import internal JavaScript libraries, which include:

-   lightning:formattedAddress
-   lightning:formattedRichText
-   lightning:inputAddress
-   lightning:inputName
-   lightning:inputRichText

## Code Examples

```
<aura:documentation>
    <aura:description>
        <!-- Your content here -->
    </aura:description>

    <aura:example name="exampleAvatarBasic" ref="lightningcomponentdemo:exampleAvatarBasic" label="Basic Avatar">
        The following example creates an avatar with the default size and variant.
        The initials "BW" is displayed if the image path denoted by the src attribute
        is invalid or fails to load for any reason, such as when the user is offline.
    </aura:example>
</aura:documentation>
```

## Related Topics

- Creating Documentation Content (atlas.en-us.lightning.meta/lightning/docs_auradoc.htm)
