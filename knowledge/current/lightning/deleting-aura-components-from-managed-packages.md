---
title: "Deleting Aura Components from Managed Packages"
domain: lightning
topic: deleting-aura-components-from-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:48.009Z
estimatedTokens: 853
keywords: [Deleting, Aura, Components, Managed, Packages, you’ve, released, package, may, decide, refactor, component, It’s, responsibility, educate]
---

# Deleting Aura Components from Managed Packages

> After you’ve released a managed package, you may decide to refactor the package and
  delete an Aura component. It’s your responsibility to educate your customers about the potential
  impact from any components you delete. In the Release Notes for your upgraded package, list all
  custom components you’ve deleted and notify customers of any necessary actions.

# Deleting Aura Components from Managed Packages

After you’ve released a managed package, you may decide to refactor the package and delete an Aura component. It’s your responsibility to educate your customers about the potential impact from any components you delete. In the Release Notes for your upgraded package, list all custom components you’ve deleted and notify customers of any necessary actions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

To enable component deletion in your packaging org, log a case in the [Partner Community](https://partners.salesforce.com/ "HTML (New Window)").

To delete an Aura component from a managed package:

1.  From Setup, enter Lightning Components in the Quick Find box.
2.  Select **Lightning Components**.
3.  Click **Del** for the component that you want to delete.![Lightning Components in Setup](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fapps_packaging_delete_component.png&folder=lightning)

You can delete an Aura component from the Developer Console also.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

When a developer removes an Aura component from a package, the component remains in a subscriber’s org after they install the upgraded package. The administrator of the subscriber’s org can delete the component, if desired. This behavior is the same for an Aura component with a public or global access value.

The access attribute on the aura:component tag can be set to public or global to control whether the component can be used outside of the component’s namespace.

We recommend a two-stage process to package developers when you delete an Aura component with global access. This process ensures that a global component that you delete from the package has no dependencies on the other items in the package.

1.  Stage one: Remove references
    1.  Edit the global component that you want to delete to remove all references to other Lightning components.
    2.  Upload your new package version.
    3.  Push the stage-one upgrade to your subscribers.
2.  Stage two: Delete your obsolete component
    1.  Delete the global Lightning component from the package.
    2.  Optionally, delete other related components and classes.
    3.  Upload your new package version.
    4.  Push the stage-two upgrade to your subscribers.

#### See Also

-   [Component Access Control](atlas.en-us.lightning.meta/lightning/access_components.htm "The access attribute on the aura:component tag controls whether the component can be used outside of the component’s namespace.")

-   [*Second-Generation Managed Packaging Developer Guide*: Remove Metadata Components from Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_remove_md_components.htm "Second-Generation Managed Packaging Developer Guide: Remove Metadata Components from Second-Generation Managed Packages - HTML (New Window)")

-   [*First-Generation Managed Packaging Developer Guide*: Delete Components from First-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_managed_component_deletion.htm "First-Generation Managed Packaging Developer Guide: Delete Components from First-Generation Managed Packages - HTML (New Window)")

## Related Topics

- Component Access Control (atlas.en-us.lightning.meta/lightning/access_components.htm)
