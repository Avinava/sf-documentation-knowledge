---
title: "Create a Snapshot for Use with Namespaced Scratch Orgs"
domain: sfdx-dev
topic: create-a-snapshot-for-use-with-namespaced-scratch-orgs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.636Z
estimatedTokens: 403
keywords: [Snapshot, Namespaced, Scratch, Orgs, can't, org, way, deploy, metadata, Snapshots, intended, include, dependent, packages, test]
---

# Create a Snapshot for Use with Namespaced Scratch Orgs

> While you can't use a namespaced scratch org to create a snapshot, you can create a
    namespaced scratch org from a snapshot. That way, you can deploy namespaced metadata to the
    scratch org. Snapshots are intended to include only dependent packages, metadata, and test
    data.

# Create a Snapshot for Use with Namespaced Scratch Orgs

While you can't use a namespaced scratch org to create a snapshot, you can create a namespaced scratch org from a snapshot. That way, you can deploy namespaced metadata to the scratch org. Snapshots are intended to include only dependent packages, metadata, and test data.

1.  Create and register the namespace in the Dev Hub org and add it to the sfdx-project.json file.
2.  When you create the scratch org that you plan to use as the source of the snapshot, be sure to indicate the \--no-namespace flag.
3.  [Create the scratch org snapshot](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_create.htm "You can create a snapshot if the source scratch org wasn’t created using a snapshot or with a namespace.").
4.  [Create a scratch org based on the snapshot](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_create_scratch_org.htm "The snapshot must belong to the Dev Hub that you’re using to create the scratch org. We recommend that you create a scratch org definition file that references the snapshot, although you can also reference it directly with the --snapshot flag of org create scratch. Changing or deleting a scratch org has no effect on a snapshot.").

    The resulting scratch org has a namespace, which means that any unpackaged metadata from the snapshot is now namespaced in the resulting scratch org.


#### See Also

-   [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm "Link a Namespace to a Dev Hub Org - HTML (New Window)")

## Related Topics

- Create the scratch org
            snapshot (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_create.htm)
- Create a
            scratch org based on the snapshot (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_create_scratch_org.htm)
