---
title: "Create and Manage Org Shapes"
domain: sfdx-dev
topic: create-and-manage-org-shapes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.586Z
estimatedTokens: 499
keywords: [Manage, Org, Shapes, shape, mimic, baseline, setup, features, limits, edition, Metadata, API, settings, source, extraneous]
---

# Create and Manage Org Shapes

> Create an org shape to mimic the baseline setup (features, limits, edition, and Metadata
  API settings) of a source org without the extraneous data and metadata. If the features, settings,
  or licenses of that org change, you can capture those updates by recreating the org shape. You can
  have only one active org shape at a time. Org shapes are internal system files and aren’t
  viewable.

# Create and Manage Org Shapes

Create an org shape to mimic the baseline setup (features, limits, edition, and Metadata API settings) of a source org without the extraneous data and metadata. If the features, settings, or licenses of that org change, you can capture those updates by recreating the org shape. You can have only one active org shape at a time. Org shapes are internal system files and aren’t viewable.

An org shape captures Metadata API settings, not all metadata types. For example, customizations that appear in the org, such as Lightning Experience Themes, aren’t included as part of org shape. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)") in the Metadata API Guide for the complete list.

An org shape includes org preference and permissions. It doesn’t include data entries such as [AddressSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_addresssettings.htm "HTML (New Window)").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

Scratch org shapes are associated with a specific Salesforce release. Be sure to recreate the org shape after the source org is upgraded to the new Salesforce release.

1.  Authorize both your Dev Hub org and the source org. Run this command for each org.

    ```

    ```

2.  Create the org shape for the source org. This command kicks off an asynchronous process to create the org shape.

    ```

    ```

3.  Check the status of the shape:create command.

    ```

    ```

    ```

    ```

    You can use the org shape after the status is Active:

    ```

    ```


If you run the sf org create shape command again for this org, the previous shape is marked inactive and replaced by a new active shape.

If you don’t want to create scratch orgs based on this shape, you can delete the org shape. To delete an org shape:

```

```

## Code Examples

```
sf auth web login --alias
```

```
sf org create shape --target-org <source org username/alias>
Successfully created org shape for 3SRB0000000TXbnOCG.
```

```
sf org shape list
```

```
=== Org Shapes
ALIAS  USERNAME  ORG ID             SHAPE STATUS CREATED BY CREATED DATE
────── ──────── ────────────────── ──────────── ────────── ─────────────
SrcOrg me@my.org 00DB1230000Ifx5MAC InProgress   me@my.org  2020-08-06
```

```
=== Org Shapes
ALIAS   USERNAME  ORG ID            SHAPE STATUS CREATED BY   CREATED DATE
────── ───────── ────────────────── ──────────── ──────────── ────────────
SrcOrg me@my.org 00DB1230000Ifx5MAC Active       me@my.org    2020-08-06
```
