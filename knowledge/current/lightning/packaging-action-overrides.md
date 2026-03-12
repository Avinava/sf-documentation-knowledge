---
title: "Packaging Action Overrides"
domain: lightning
topic: packaging-action-overrides
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.461Z
estimatedTokens: 324
keywords: [Packaging, Action, Overrides, custom, objects, automatically, packaged, standard, can’t]
---

# Packaging Action Overrides

> Action overrides for custom objects are automatically packaged with the custom object.
    Action overrides for standard objects can’t be packaged.

# Packaging Action Overrides

Action overrides for custom objects are automatically packaged with the custom object. Action overrides for standard objects can’t be packaged.

When you package a custom object, overrides on that object’s standard actions are packaged with it. This includes any Lightning components used by the overrides. Your experience should be “it just works.”

However, standard objects can’t be packaged. As a consequence, there’s no way to package overrides on the object’s standard actions.

To override standard actions on standard objects in a package, do the following:

-   Manually package any Lightning components that are used by the overrides.
-   Provide instructions for subscribing orgs to manually override the relevant standard actions on the affected standard objects.

#### See Also

-   [Override a Standard Action with an Aura Component](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_create.htm "You can override a standard action with an Aura component in both Lightning Experience and mobile.")

-   [*Metadata API Developer Guide* : ActionOverride](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/actionoverride.htm " Metadata API Developer Guide :
    ActionOverride - HTML (New Window)")

## Related Topics

- Override a Standard Action with an Aura Component (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_action_overrides_create.htm)
