---
title: "Components Available in Unmanaged Packages"
domain: pkg1-dev
topic: components-available-in-unmanaged-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.615Z
estimatedTokens: 914
keywords: [Components, Unmanaged, Packages, packaged, distribution]
---

# Components Available in Unmanaged Packages

> Not all components can be packaged for distribution.

# Components Available in Unmanaged Packages

Not all components can be packaged for distribution.

Packaged Explicitly or Implicitly

Components can be added either explicitly or implicitly. Explicit components must be included directly in the package, while implicit components are automatically added. For example, if you create a custom field on a standard object, you must explicitly add the custom field to your package. However, if you create a custom object and add a custom field to it, the field is implicitly added to the package when you add the custom object.

-   **Explicitly**: The component must be manually added to the package.
-   **Implicitly**: The component is automatically added to the package when another dependent component, usually a custom object, is added.

Automatic Renaming

Salesforce can resolve naming conflicts automatically on install.

-   **No**: If a naming conflict occurs the install is blocked.
-   **Yes**: If a naming conflict occurs Salesforce can optionally change the name of the component being installed.

| Component | Packaged Explicitly or Implicitly | Automatic Renaming |
| --- | --- | --- |
| Apex Class | Explicitly | No |
| Apex Sharing Reason | ImplicitlyOn an extension: Explicitly | No |
| Apex Sharing Recalculation | Implicitly | No |
| Apex Trigger | On a standard or extension object: ExplicitlyOn an object in the package: Implicitly | No |
| Application | Explicitly | No |
| Custom Button or Link | On a standard object: ExplicitlyOn a custom object: Implicitly | No |
| Custom Field | On a standard object: ExplicitlyOn a custom object: Implicitly | No |
| Custom Label | Implicitly | No |
| Custom Object | Explicitly | No |
| Custom Permission | ImplicitlyWith required custom permissions: Explicitly | No |
| Custom Report Type | Explicitly | No |
| Custom Setting | Explicitly | No |
| Dashboard | ExplicitlyIn a folder: Implicitly | Yes |
| Document*(10 MB limit) | ExplicitlyIn a folder: Implicitly | Yes |
| Email Template (Classic) | ExplicitlyIn a folder: Implicitly | Yes |
| External Data Source | ExplicitlyReferenced by an external object: ImplicitlyAssigned by a permission set: Implicitly | No |
| Flow Definition | Implicitly | No |
| Folder | Explicitly | Yes |
| Home Page Component | Explicitly | No |
| Home Page Layout | Explicitly | No |
| Inbound Network Connection | Explicitly | No |
| Letterhead | Explicitly | Yes |
| Lightning Application | Explicitly | No |
| Lightning Component | Explicitly | No |
| Lightning Event | Explicitly | No |
| Lightning Interface | Explicitly | No |
| Lightning Page | Explicitly | No |
| List View | On a standard object: ExplicitlyOn a custom object: Implicitly | Yes |
| Named Credential | Explicitly | No |
| Outbound Network Connection | Explicitly | No |
| Page Layout | On a standard object: ExplicitlyOn a custom object: Implicitly | No |
| Record Type | On a standard object: ExplicitlyOn a custom object: Implicitly | No |
| Report | ExplicitlyIn a folder: Implicitly | Yes |
| Reporting Snapshot | Explicitly | Yes |
| S-Control*(10 MB limit) | Explicitly | No |
| Static Resource | Explicitly | No |
| Tab | Explicitly | No |
| Translation | Explicitly | No |
| Validation Rule | On a standard object: ExplicitlyOn a custom object: Implicitly | No |
| Visualforce Component | Explicitly | No |
| Visualforce Page | Explicitly | No |
| Workflow Email Alert | Explicitly | No |
| Workflow Field Update | Explicitly | No |
| Workflow Outbound Message | Explicitly | No |
| Workflow Rule | Explicitly | No |
| Workflow Task | Explicitly | No |

\*The combined size of S-Controls and documents must be less than 10 MB.
