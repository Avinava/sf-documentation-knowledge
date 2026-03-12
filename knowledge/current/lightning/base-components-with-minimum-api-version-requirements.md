---
title: "Base Components with Minimum API Version Requirements"
domain: lightning
topic: base-components-with-minimum-api-version-requirements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.491Z
estimatedTokens: 1312
keywords: [Base, Components, Minimum, API, Version, Requirements, Lightning, require, custom, component’s, equal, later, latest, any, uses]
---

# Base Components with Minimum API Version Requirements

> Some Lightning base components require the custom components that use them to be set to a
  minimum API version. A custom component’s API version must be equal to or later than the latest
  API version required by any of the components it uses.

# Base Components with Minimum API Version Requirements

Some Lightning base components require the custom components that use them to be set to a minimum API version. A custom component’s API version must be equal to or later than the latest API version required by any of the components it uses.

A custom component can become subject to another component’s minimum version requirement in several ways.

-   The custom component can extend from the component with the minimum version requirement.
-   The custom component can add another component as a child component in markup.
-   The custom component can dynamically create and add a child component in JavaScript.

If the relationship between components can be determined by static analysis, the version dependency is checked when the component is saved. If a custom component has an API version earlier than a minimum version required by any of the components it uses, an error is reported, and the component isn’t saved. Depending on the tool you’re using, this error is presented in different ways.

If a component is created dynamically, the relationship between it and its parent component can’t be determined at save time. The minimum version requirement is checked at run time, and if it fails a run-time error is reported to the current user.

Set the API version for your component in the Developer Console, the Salesforce Extensions for Visual Studio Code, or via API.![Set the API version of a component bundle](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fdev_console_versioning_api_version.png&folder=lightning)

## Minimum API Version of Lightning Base Components

The minimum API version required to use a base component is listed on the component’s Specification page in the [Lightning Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker."). Components that don’t specify a minimum API version are usable with any API version supported for Lightning components.

For example, lightning:accordion requires version 41.0 and later. ![Specification shows component requires version 41.0](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fversion-specification.png&folder=lightning)

The minimum version for base components that are Generally Available (GA) won’t increase in future releases. (However, as with Visualforce components, their behavior might change depending on the API version of the containing component.)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The base components are not versioned. Changing your custom component’s API version on the **Bundle Version Settings** window to an earlier version does not impact the behavior of a base component you're using. So if you're using lightning:map in a component set to API version 45.0, its behavior does not change if you set your component to 44.0 or 46.0. The latest behavior is observed across all versions.

## Deprecation of Lightning Base Components

When a component is deprecated, it’s no longer officially supported or tested. However, it’s still available for use with any version of the API. The component’s behavior is undetermined and could change at any time. The same applies for the deprecation of components, events and interfaces listed in the [Lightning Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker."). For example, if a component is deprecated in API version 43.0 (Summer ’18), we no longer accept support cases after that release unless otherwise specified.

We recommend you use another component to replace the deprecated component, as described in the reference docs in the Component Library. For example, the deprecated components in the ui namespace have been superseded by components in the lightning namespace. For more information, see [Migrate Components from the ui Namespace Namespace](atlas.en-us.lightning.meta/lightning/ui_overview.htm "If you’re using components in the ui namespace, replace them with their lightning namespace counterparts.").

Deprecated components may be removed in a future release and should not be relied on. Salesforce does not currently intend to remove deprecated components. However, if that position changes, customers will be given ample warning.

#### See Also

-   [Aura Component Versioning for Managed Packages](atlas.en-us.lightning.meta/lightning/components_versioning.htm "Aura component versioning enables you to declare dependencies against specific revisions of an installed managed package.")

-   [*Security for Lightning Components:* Disable Lightning Locker for an Aura Component](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/locker-disable.html "Security for Lightning Components: Disable Lightning Locker for an Aura
    Component - HTML (New Window)")

## Related Topics

- Lightning Component Library (atlas.en-us.lightning.meta/lightning/component_library.htm)
- Migrate Components from the ui Namespace Namespace (atlas.en-us.lightning.meta/lightning/ui_overview.htm)
- Aura Component Versioning for Managed Packages (atlas.en-us.lightning.meta/lightning/components_versioning.htm)
