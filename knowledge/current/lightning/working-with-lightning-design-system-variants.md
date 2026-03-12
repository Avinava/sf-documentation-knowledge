---
title: "Working with Lightning Design System Variants"
domain: lightning
topic: working-with-lightning-design-system-variants
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.250Z
estimatedTokens: 529
keywords: [Working, Lightning, Design, System, Variants, Base, component, correspond, blueprint, variations, change, appearance, controlled, variant, attribute]
---

# Working with Lightning Design System Variants

> Base component variants correspond to blueprint variations in Lightning Design System.
    Variants change the appearance of a component and are controlled by the variant attribute.

# Working with Lightning Design System Variants

Base component variants correspond to blueprint variations in Lightning Design System. Variants change the appearance of a component and are controlled by the variant attribute.

## Applying Variants to Base Components

Variants on a component refer to design variations for that component, which enable you to change the appearance of the component easily. We try to create variants for each component to apply the design of variations and examples from the SLDS component blueprint. However, not all variants are implemented yet. Most base components provide a variant attribute that accepts two or more variants. For example, lightning:button supports many variants to apply different text and background colors on the buttons.

This example creates a button with the brand variant.

```

```

If you don’t specify a variant or you pass in a variant that’s not supported, the default variant is used instead. For button, the neutral variant is used by default.

Some components don’t support a variant attribute, but you can use Lightning Design System classes to achieve the styling you want.

This example uses a Lightning Design System class to apply a padding to a paragraph in the lightning:card component.

```

```

If you don’t find a variant you need, see if you can pass in a Lightning Design System class to the base component before creating your own custom CSS class. Don’t be afraid to experiment with Lightning Design System classes and variants in base components. For more information, see [Lightning Design System](https://www.lightningdesignsystem.com/components/overview "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Interactive examples for base components are available in the [Lightning Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker.").

## Code Examples

```
<lightning:button variant="brand" label="Brand" onclick="{! c.handleClick }" />
```

```
<lightning:card footer="Card Footer" title="Hello">
    <aura:set attribute="actions">
        <lightning:button label="New"/>
    </aura:set>
    <p class="slds-p-horizontal_small">
        Card Body with a Lightning Design System class
    </p>
</lightning:card>
```

## Related Topics

- Lightning Component Library (atlas.en-us.lightning.meta/lightning/component_library.htm)
