---
title: "Design Attribute Considerations for Flow Screen Components and Local Actions"
domain: lightning
topic: design-attribute-considerations-for-flow-screen-components-and-local-actions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.227Z
estimatedTokens: 426
keywords: [Design, Attribute, Considerations, Flow, Screen, Components, Local, Actions, expose, Builder, define, corresponding, component, bundle's, resource]
---

# Design Attribute Considerations for Flow Screen Components and Local Actions

> To expose an attribute in Flow Builder, define a corresponding design:attribute in the component bundle's design resource. Keep
  these guidelines in mind when defining design attributes for flows.

# Design Attribute Considerations for Flow Screen Components and Local Actions

To expose an attribute in Flow Builder, define a corresponding design:attribute in the component bundle's design resource. Keep these guidelines in mind when defining design attributes for flows.

**Supported Attributes on design:attribute Nodes**

In a design:attribute node, Flow Builder supports only the name, label, description, and default attributes. The other attributes, like min and max, are ignored.

For example, for this design attribute definition, Flow Builder ignores required and placeholder.

```

```

Calculating Minimum and Maximum Values for an Attribute

To validate min and max lengths for a component attribute, use a flow formula or the component's client-side controller.

Modifying or Deleting design:attribute Nodes

If a component’s attribute is referenced in a flow, you can’t change the attribute’s type or remove it from the design resource. This limitation applies to all flow versions, not just active ones. Remove references to the attribute in all flow versions, and then edit or delete the attribute in the design resource.

#### See Also

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

-   [*Component Library*: lightning:availableForFlowActions Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowActions/documentation "Component Library: lightning:availableForFlowActions
    Interface - HTML (New Window)")

## Code Examples

```
<design:attribute name="greeting" label="Greeting" placeholder="Hello" required="true"/>
```
