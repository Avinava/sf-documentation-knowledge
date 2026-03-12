---
title: "Hide Custom Objects and Custom Permissions in Your Subscribers’
      Orgs"
domain: pkg2-dev
topic: hide-custom-objects-and-custom-permissions-in-your-subscribers-orgs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:26.141Z
estimatedTokens: 689
keywords: [Hide, Custom, Objects, Permissions, Subscribers’, Orgs, Occasionally, want, include, package, show, subscribers, you're, piloting, feature]
---

# Hide Custom Objects and Custom Permissions in Your Subscribers’
      Orgs

> Occasionally, you want to include custom permissions or custom objects in a package but
    not show them to your subscribers. For example, if you're piloting a feature for a few select
    orgs, and want to hide custom permissions and custom objects related to the pilot feature.

# Hide Custom Objects and Custom Permissions in Your Subscribers’ Orgs

Occasionally, you want to include custom permissions or custom objects in a package but not show them to your subscribers. For example, if you're piloting a feature for a few select orgs, and want to hide custom permissions and custom objects related to the pilot feature.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Check with your company’s legal team before releasing hidden functionality.

To hide custom objects when creating your package, set the value of their Visibility field to Protected. After you've set the visibility to Protected, you can later update it to Unprotected. To change the visibility of an object, use the [CustomObject](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/customobject.htm) Metadata API and update the visibility field.

To hide custom permissions when creating your package, from Setup, enter Custom Permissions in the Quick Find box. Select **Custom Permissions** | **Your Custom Permission** | **Edit**. Enable **Protected Component**, and then click **Save**. After your package is installed, use the System.FeatureManagement.changeProtection() Apex method to hide and unhide custom objects and permissions.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pkg2_dev)

#### Warning

After you’ve released unprotected objects to subscribers, you can’t change the visibility to Protected.

To hide custom permissions in released packages:

-   System.FeatureManagement.changeProtection('YourCustomPermissionName', 'CustomPermission', 'Protected');

To unhide custom permissions and custom objects in released packages:

-   System.FeatureManagement.changeProtection('YourCustomPermissionName', 'CustomPermission', 'Unprotected');
-   System.FeatureManagement.changeProtection('YourCustomObjectName\_\_c', 'CustomObject', 'Unprotected');

#### See Also

-   [Protected Components in Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg1_dev/packaging_protected_components.htm "Protected Components in Managed Packages - HTML (New Window)")

-   [*Metadata API Developer Guide*: customObject](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/customobject.htm "Metadata API Developer Guide: customObject - HTML (New Window)")

-   [*Apex Reference Guide*: Feature Management Methods, changeProtection](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_System_FeatureManagement_changeProtection "Apex Reference Guide: Feature Management Methods, changeProtection - HTML (New Window)")
