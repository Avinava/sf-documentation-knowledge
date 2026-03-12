---
title: "Create a Scratch Org Based on an Org Shape"
domain: sfdx-dev
topic: create-a-scratch-org-based-on-an-org-shape
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.593Z
estimatedTokens: 1293
keywords: [Scratch, Org, Shape, know, it’s, easy, build, definition, mirrors, features, settings, production, Orgs, leave, building]
---

# Create a Scratch Org Based on an Org Shape

> We know it’s not easy to build a scratch org definition that mirrors the features and
        settings in your production org. With Org Shape for Scratch Orgs, you can leave building the
        scratch org definition to us. After you capture the org’s shape, you can spin up scratch
        orgs based on it.

# Create a Scratch Org Based on an Org Shape

We know it’s not easy to build a scratch org definition that mirrors the features and settings in your production org. With Org Shape for Scratch Orgs, you can leave building the scratch org definition to us. After you capture the org’s shape, you can spin up scratch orgs based on it.

**Available in:** Developer, Group, Professional, Unlimited, and Enterprise editions. The scratch org created from the org shape is the same edition as the source org.

**Not available in:** Scratch orgs and sandboxes

## What’s Included in Org Shape?

Features, Metadata API settings, edition, limits, and licenses determine what we refer to as an org’s shape. For further clarification, org shape includes:

-   Metadata API settings with boolean fields.
-   Licenses associated with installed packages, but not the packages themselves. To use the associated package, install it in the scratch org created from the org shape.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Some features aren’t captured when the org shape is created. However, you can add the features manually to the scratch org definition file. See [Troubleshoot Org Shape](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_limitations.htm "Here are some issues you can encounter when using Org Shape for Scratch Orgs.") for details.

## What’s Not Included in Org Shape?

-   Metadata API settings with integer or string fields. However, you can manually add non-Boolean settings or other settings not included in the source org to your scratch org definition. See [Scratch Org Definition for Org Shape](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_scratch_def.htm "During org shape creation, we capture the features, settings, edition, licenses, and limits of the specified source org. This way, you don’t have to manually include these items in the scratch org definition file. You can create a scratch org based solely on the source org shape. Or you can add more features and settings in the scratch org definition file to include functionality not present in the source org.") for examples.
-   Metadata types
-   Data

## Org Shapes Are Specific to a Release

Scratch org shapes are associated with a specific Salesforce release. Be sure to recreate the org shape after the source org is upgraded to the new Salesforce release. During a Salesforce major release transition, your Dev Hub org and source org can be on different release versions. See [Scratch Org Definition for Org Shape](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_scratch_def.htm "During org shape creation, we capture the features, settings, edition, licenses, and limits of the specified source org. This way, you don’t have to manually include these items in the scratch org definition file. You can create a scratch org based solely on the source org shape. Or you can add more features and settings in the scratch org definition file to include functionality not present in the source org.") for options during the transition period.

## Can I See the Org Shape File?

Org shapes are internal system files and aren’t viewable.

-   **[Enable Org Shape for Scratch Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_enable_org_shape.htm)**
    Enable Org Shape for Scratch Orgs in the org whose shape you want to capture (source org).
-   **[Org Shape Permissions](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_permissions.htm)**
    A Salesforce admin for the Dev Hub org must assign permissions to users who plan to create org shapes, or create scratch orgs based on an org shape. If you already have a permission set for Salesforce DX users, you can update it to include access.
-   **[Create and Manage Org Shapes](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_create_shape.htm)**
    Create an org shape to mimic the baseline setup (features, limits, edition, and Metadata API settings) of a source org without the extraneous data and metadata. If the features, settings, or licenses of that org change, you can capture those updates by recreating the org shape. You can have only one active org shape at a time. Org shapes are internal system files and aren’t viewable.
-   **[Scratch Org Definition for Org Shape](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_scratch_def.htm)**
    During org shape creation, we capture the features, settings, edition, licenses, and limits of the specified source org. This way, you don’t have to manually include these items in the scratch org definition file. You can create a scratch org based solely on the source org shape. Or you can add more features and settings in the scratch org definition file to include functionality not present in the source org.
-   **[Troubleshoot Org Shape](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_limitations.htm)**
    Here are some issues you can encounter when using Org Shape for Scratch Orgs.

#### See Also

-   [*Metadata API Developer Guide*: Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "Metadata API Developer Guide: Settings - HTML (New Window)")

## Related Topics

- Troubleshoot Org Shape (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_limitations.htm)
- Scratch Org Definition for Org Shape (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_scratch_def.htm)
- Enable Org Shape for Scratch Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_enable_org_shape.htm)
- Org Shape Permissions (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_permissions.htm)
- Create and Manage Org Shapes (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_create_shape.htm)
