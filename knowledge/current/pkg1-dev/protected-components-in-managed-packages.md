---
title: "Protected Components in Managed Packages"
domain: pkg1-dev
topic: protected-components-in-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:25.592Z
estimatedTokens: 371
keywords: [Protected, Components, Managed, Packages, Developers, mark, certain, can’t, linked, referenced, created, subscriber, org, developer, component]
---

# Protected Components in Managed Packages

> Developers can mark certain components as protected. Protected components
      can’t be linked to or referenced by components created in a subscriber org. A developer can
      delete a protected component in a future release without worrying about failing installations.
      However, after a component is marked as unprotected and is released globally, the developer
      can’t delete it.

# Protected Components in Managed Packages

Developers can mark certain components as protected. Protected components can’t be linked to or referenced by components created in a subscriber org. A developer can delete a protected component in a future release without worrying about failing installations. However, after a component is marked as unprotected and is released globally, the developer can’t delete it.

Developers can mark these components as protected in managed packages.

-   Custom labels
-   Custom links (for Home page only)
-   Custom metadata types
-   Custom objects
-   Custom permissions
-   Custom settings
-   Workflow alerts
-   Workflow field updates
-   Workflow outbound messages
-   Workflow tasks

## Considerations for Protected Custom Objects in Subscriber Sandboxes

When a subscriber creates either a full or partial sandbox copy using a template, protected custom objects don’t display in the list of objects to copy. As a result, data contained in the records of protected custom objects isn’t copied to these sandboxes. If a full sandbox is created without selecting a sandbox template, data from protected custom objects is copied to the sandbox.

#### See Also

-   [Hide Custom Objects and Custom Permissions in Your Subscribers' Orgs](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_hide_custom_objects_permissions.htm "Hide Custom Objects and Custom Permissions in Your Subscribers' Orgs - HTML (New Window)")
