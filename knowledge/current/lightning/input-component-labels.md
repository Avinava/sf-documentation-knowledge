---
title: "Input Component Labels"
domain: lightning
topic: input-component-labels
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.216Z
estimatedTokens: 219
keywords: [Input, Component, Labels, label, purpose, attribute, $Label]
---

# Input Component Labels

> A label describes the purpose of an input component. To
set a label on an input component, use the label attribute.

# Input Component Labels

A label describes the purpose of an input component. To set a label on an input component, use the label attribute.

This example shows how to use labels using the label attribute on an input component.

```

```

The label is placed on the left of the input field and can be hidden by setting variant="label-hidden", which applies the slds-assistive-text class to the label to support accessibility.

## Using $Label

Use the $Label global value provider to access labels stored in an external source. For example:

```

```

To output a label and dynamically update it, use the format() expression function. For example, if you have np.labelName set to Hello {0}, the following expression returns Hello World if v.name is set to World.

```

```

#### See Also

-   [Supporting Accessibility](atlas.en-us.lightning.meta/lightning/accessibility.htm)

## Code Examples

```
<lightning:input type="number" name="myNumber" label="Pick a Number:" value="54" />
```

```
<lightning:input type="number" name="myNumber" label="{!$Label.Number.PickOne}" />
```

```
{!format($Label.np.labelName, v.name)}
```

## Related Topics

- Supporting Accessibility (atlas.en-us.lightning.meta/lightning/accessibility.htm)
