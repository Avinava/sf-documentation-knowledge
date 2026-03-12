---
title: "Override Standard Actions with Aura Components"
domain: lightning
topic: override-standard-actions-with-aura-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.446Z
estimatedTokens: 624
keywords: [Override, Standard, Actions, Aura, Components, Add, lightning, actionOverride, component, enable, action, custom, Overriding, customize, org]
---

# Override Standard Actions with Aura Components

> Add the lightning:actionOverride interface to an
  Aura component to enable the component to be used to override a standard action on an object. You
  can override standard actions on most standard and all custom components. Overriding standard
  actions allows you to customize your org using Lightning components, including completely
  customizing the way you view, create, and edit records.

# Override Standard Actions with Aura Components

Add the lightning:actionOverride interface to an Aura component to enable the component to be used to override a standard action on an object. You can override standard actions on most standard and all custom components. Overriding standard actions allows you to customize your org using Lightning components, including completely customizing the way you view, create, and edit records.

Overriding an action with an Aura component closely parallels overriding an action with a Visualforce page. Choose a Lightning component instead of a Visualforce page in the Override Properties for an action.![Override a standard action with a Lightning component](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Factions_standard_override_with_component.png&folder=lightning)

However, there are important differences from Visualforce in how you create Lightning components that can be used as action overrides, and significant differences in how Salesforce uses them. You’ll want to read the details thoroughly before you get started, and test carefully in your sandbox or Developer Edition org before deploying to production.

-   **[Standard Actions and Overrides Basics](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_basics.htm)**
    There are six standard actions available on most standard and all custom objects: Tab, List, View, Edit, New, and Delete. In Salesforce Classic, these are all distinct actions.
-   **[Override a Standard Action with an Aura Component](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_create.htm)**
    You can override a standard action with an Aura component in both Lightning Experience and mobile.
-   **[Creating an Aura Component for Use as an Action Override](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_markup.htm)**
    Add the lightning:actionOverride interface to an Aura component to allow it to be used as an action override in Lightning Experience or the Salesforce mobile app. Only components that implement this interface appear in the **Lightning component** menu of an object action Override Properties panel.
-   **[Packaging Action Overrides](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_packaging.htm)**
    Action overrides for custom objects are automatically packaged with the custom object. Action overrides for standard objects can’t be packaged.

## Related Topics

- Standard Actions and Overrides Basics (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_basics.htm)
- Override a Standard Action with an Aura Component (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_create.htm)
- Creating an Aura Component for Use as an Action Override (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_markup.htm)
- Packaging Action Overrides (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_packaging.htm)
