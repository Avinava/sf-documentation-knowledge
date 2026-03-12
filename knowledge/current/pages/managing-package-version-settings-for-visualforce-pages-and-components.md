---
title: "Managing Package Version Settings for Visualforce Pages and Components"
domain: pages
topic: managing-package-version-settings-for-visualforce-pages-and-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.898Z
estimatedTokens: 770
keywords: [Managing, Package, Version, Settings, Visualforce, Pages, Components, markup, references, installed, managed, packages, referenced, saved, aid]
---

# Managing Package Version Settings for Visualforce Pages and Components

> If Visualforce markup references installed managed packages, the version settings for each
   managed package referenced by the Visualforce markup are saved to aid backwards-compatibility.
   This ensures that as the components in managed packages evolve in subsequent package versions, a
   page is 

# Managing Package Version Settings for Visualforce Pages and Components

If Visualforce markup references installed managed packages, the version settings for each managed package referenced by the Visualforce markup are saved to aid backwards-compatibility. This ensures that as the components in managed packages evolve in subsequent package versions, a page is still bound to versions with specific, known behavior.

A package version is a number that identifies the set of components uploaded in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). The major and minor numbers increase to a chosen value during every major release. The patchNumber is generated and updated only for a patch release. Publishers can use package versions to evolve the elements in their managed packages gracefully by releasing subsequent package versions without breaking existing customer integrations using the package.

To configure the package version settings for a Visualforce page or custom component:

1.  Edit a Visualforce page or component and click **Version Settings**.
2.  Select a Version for each managed package referenced by the Visualforce page or component. This version of the managed package will continue to be used by the page or component if later versions of the managed package are installed, unless you manually update the version setting. To add an installed managed package to the settings list, select a package from the list of available packages. The list is only displayed if you have an installed managed package that isn’t already associated with the page or component.
3.  Click **Save**.

Note the following when working with package version settings:

-   If you save a Visualforce page or custom component that references a managed package without specifying a version of the managed package, the page or component is associated with the latest installed version of the managed package by default.
-   You can’t **Remove** a Visualforce page or component’s version setting for a managed package if the package is referenced by the page or component. Use **Show Dependencies** to find where the managed package is referenced.
-   Package subscribers can use package versions to reference deleted components. Visualforce pages within a package always use their own package's latest API version. They cannot access deleted components.

#### See Also

-   [How Visualforce is Versioned](atlas.en-us.pages.meta/pages/pages_intro_versioning.htm "Visualforce pages and components are versioned. When a page or component has a version number, the functionality of older Visualforce elements doesn’t change as new implementations are introduced. Visualforce versions start at 15.0. If you try to set the version of a Visualforce page to a version earlier than 15.0, it automatically changes to 15.0.")

-   [Managing Version Settings for Custom Components](atlas.en-us.pages.meta/pages/pages_comp_cust_versioning_manage.htm)

-   [What are Custom Components?](atlas.en-us.pages.meta/pages/pages_comp_cust_def.htm)

## Related Topics

- How Visualforce is Versioned (atlas.en-us.pages.meta/pages/pages_intro_versioning.htm)
- Managing Version Settings for Custom Components (atlas.en-us.pages.meta/pages/pages_comp_cust_versioning_manage.htm)
- What are Custom Components? (atlas.en-us.pages.meta/pages/pages_comp_cust_def.htm)
