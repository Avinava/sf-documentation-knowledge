---
title: "Lightning Design System Considerations"
domain: lightning
topic: lightning-design-system-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:49.245Z
estimatedTokens: 1471
keywords: [Lightning, Design, System, Considerations, Although, base, components, provide, Salesforce, styling, out-of-the-box, may, want, write, CSS]
---

# Lightning Design System Considerations

> Although the base components provide Salesforce Lightning Design System styling
    out-of-the-box, you may still want to write some CSS depending on your requirements.

# Lightning Design System Considerations

Although the base components provide Salesforce Lightning Design System styling out-of-the-box, you may still want to write some CSS depending on your requirements.

If you're using the components outside of the Salesforce mobile app and Lightning Experience, such as in standalone apps and Lightning Out, extend force:slds to apply Lightning Design System styling to your components. Here are several guidelines for using Lightning Design System in base components.

## Using Utility Classes in Base Components

Lightning Design System utility classes are the fundamentals of your component's visual design and promote reusability, such as for alignments, grid, spacing, and typography. Most base components inherits a class attribute, so you can add a utility class or custom class to the outer element of the components. For example, you can apply a spacing utility class to lightning:button.

```

```

The class you add is appended to the base classes that the component includes automatically, resulting in the following rendered element.

```

```

Similarly, you can create a custom class by adding it to the CSS resource in the component bundle and pass it into the class attribute.

```

```

You have the flexibility to customize the components at a granular level beyond the CSS scaffolding we provide. Let’s look at the lightning:card component, where you can create your own body markup. You can apply the slds-p-horizontal\_small or slds-card\_\_body\_inner class in the body markup to add padding around the body.

```

```

```

```

## Block-Element-Modifier (BEM) Notation

CSS class names that are used by base components match the Block-Element-Modifier (BEM) notation that Salesforce Lightning Design System uses. Starting in LWC API version 61.0, class names that previously contained a double dash now use a single underscore in place of the double dash. For example, a CSS class that used to be slds-p-around--small is now slds-p-around\_small. If you have custom CSS in your components that reference an SLDS class that contains a double dash, update your selectors to use a single underscore. See [Lightning Design System FAQ](https://www.lightningdesignsystem.com/resources/faq/#what-css-syntax-does-the-salesforce-lightning-design-system-use-where-did-the-double-hyphenations-go-why-are-their-underscores-in-your-css-classes "HTML (New Window)").

## Applying Custom Component Styling

Sometimes the utility classes aren’t enough and you want to add custom styling in your component bundle. You saw earlier that you can create a custom class and pass it into the class attribute. We recommend that you create a class instead of targeting a class name you don’t own, since those classes might change anytime. For example, don’t try to target .slds-input or .lightningInput, as they are CSS classes that are available by default in base components. You can also consider using tokens to ensure that your design is consistent across your components. Specify values in the token bundle and reuse them in your components’ CSS resources.

## Showing and Hiding with Visibility Classes

Lightning Design System utility classes include visibility classes that enable you to show and hide elements. These classes are designed as show/hide pairs that you add and remove, or toggle, with JavaScript. Apply only one class at a time. See [Lightning Design System: Utilities: Visibility](https://www.lightningdesignsystem.com/utilities/visibility/ "HTML (New Window)") for descriptions of the classes. For information about using JavaScript to toggle markup see [Dynamically Showing or Hiding Markup](atlas.en-us.lightning.meta/lightning/js_cb_show_hide_markup.htm "You can use CSS to toggle markup visibility. However, <aura:if> is the preferred approach because it defers the creation and rendering of the enclosed element tree until needed.").

## Using the Grid for Layout

lightning:layout is your answer for a flexible grid system. You can achieve a simple layout by enclosing lightning:layoutItem components within lightning:layout, which creates a div container with the slds-grid class. To apply additional Lightning Design System grid classes, specify any combination of the lightning:layout attributes. For example, specify verticalAlign="stretch" to append the slds-grid\_vertical-stretch class. You can apply Lightning Design System grid classes to the component using the horizontalAlign, verticalAlign, and pullToBoundary attributes. However, not all grid classes are available through these attributes. To provide additional grid classes, use the class attribute. The following grid classes can be added using the class attribute.

-   .slds-grid\_frame
-   .slds-grid\_vertical
-   .slds-grid\_reverse
-   .slds-grid\_vertical-reverse
-   .slds-grid\_pull-padded-x-small
-   .slds-grid\_pull-padded-xx-small
-   .slds-grid\_pull-padded-xxx-small

This example adds the slds-grid\_reverse class to the slds-grid class to reverse the horizontal visual flow of the grid columns.

```

```

For more information, see [Lightning Design System: Utilities: Grid](https://www.lightningdesignsystem.com/components/utilities/grid/ "HTML (New Window)").

#### See Also

-   [Styling Apps](atlas.en-us.lightning.meta/lightning/apps_css.htm "An app is a special top-level component whose markup is in a .app resource. Just like any other component, you can put CSS in its bundle in a resource called <appName>.css.")

-   [Styling with Design Tokens and Styling Hooks](atlas.en-us.lightning.meta/lightning/tokens_intro.htm "Capture the essential values of your visual design into named tokens or global styling hooks. Reuse these values throughout your Lightning components CSS resources. Tokens and styling hooks make it easy to ensure that your design is consistent, and even easier to update your design as it evolves.")

## Code Examples

```
<lightning:button name="submit" label="Submit" class="slds-m-around_medium"/>
```

```
<button class="slds-button slds-button_neutral slds-m-around_medium"    
        type="button" name="submit">Submit</button>
```

```
<lightning:badge label="My badge" class="myCustomClass"/>
```

```
<!-- lightning:card example using slds-p-horizontal_small class -->
<lightning:card>
  <aura:set attribute="title">My Account</aura:set>
  <aura:set attribute="footer">Footer</aura:set>
  <aura:set attribute="actions">
    <lightning:button label="New"/>
  </aura:set>
  <p class="slds-p-horizontal_small">
    Card Body
  </p>
  </lightning:card>
```

```
<!-- lightning:card example using slds-card__body_inner -->
<lightning:card>
    <aura:set attribute="title">My Account</aura:set>
    <aura:set attribute="footer">Footer</aura:set>
    <aura:set attribute="actions">
      <lightning:button label="New"/>
    </aura:set>
    <div class="slds-card__body_inner">
      Card Body
    </div>
</lightning:card>
```

## Related Topics

- Dynamically Showing or Hiding Markup (atlas.en-us.lightning.meta/lightning/js_cb_show_hide_markup.htm)
- Styling Apps (atlas.en-us.lightning.meta/lightning/apps_css.htm)
- Styling with Design Tokens and Styling Hooks (atlas.en-us.lightning.meta/lightning/tokens_intro.htm)
