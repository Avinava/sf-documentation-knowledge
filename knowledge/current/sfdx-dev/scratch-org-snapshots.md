---
title: "Scratch Org Snapshots"
domain: sfdx-dev
topic: scratch-org-snapshots
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.631Z
estimatedTokens: 1216
keywords: [Scratch, Org, Snapshots, Capture, state, org’s, configuration, replicas, snapshot, point-in-time, copy, includes, installed, packages, features]
---

# Scratch Org Snapshots

> Capture the state of a scratch org’s configuration so that you can use it to create
    scratch org replicas. A snapshot is a point-in-time copy of a scratch org that includes
    installed packages, features, limits, licenses, metadata, and data.

# Scratch Org Snapshots

Capture the state of a scratch org’s configuration so that you can use it to create scratch org replicas. A snapshot is a point-in-time copy of a scratch org that includes installed packages, features, limits, licenses, metadata, and data.

Configuring a scratch org with a project’s dependencies can be a manual and time-consuming process. It can require deploying dependent metadata to it, seeding it with sample data, installing one or more packages, and then performing manual tasks directly in the scratch org. And then, poof, the scratch org expires, and you have to start all over again. With scratch org snapshots, you can quickly replicate scratch orgs with the required project dependencies.

## How Snapshots Fit in the Development Lifecycle

Because a snapshot is a point-in-time copy of your scratch org, it’s static. To update your snapshot, delete it and create another snapshot.

You can create a snapshot from only a scratch org and, conversely, you can create only scratch orgs from a snapshot. Snapshots have the same 200-MB data storage limit as scratch orgs. A snapshot isn’t meant to replace source-driven development or a version control system. You continue to follow best development practices by externalizing and modularizing your project source.

Snapshots and scratch orgs don’t replace sandboxes for user acceptance testing. A snapshot is intended to contain the static dependencies of a project, and not the entire happy soup of your production org.

## Snapshot Allocations and Limits

Snapshots are associated with a Dev Hub org. Therefore, you must use the same Dev Hub org when you create the scratch org from the snapshot.

-   The number of snapshots you can create is the same as the active scratch org allocation based on edition type.
-   Snapshots expire after 90 days. When a snapshot expires or is deleted, its status is updated automatically and its license becomes immediately available.
-   Snapshot data is retained for 100 days. When a snapshot expires, it’s associated data is deleted 10 days later. If a snapshot is deleted, its associated data is deleted 100 days after its creation date.

| Edition | Snapshot Allocations (Active and Daily) |
| --- | --- |
| Developer Edition | 3 |
| Enterprise Edition | 40 |
| Unlimited Edition | 100 |
| Performance Edition | 100 |

To view your snapshot usage with Salesforce CLI, run:

```

```

Look for these values in the output:

```

```

## Unsupported Features

These features aren’t copied to the snapshot because they risk exposing sensitive data or authentication secrets.

-   Connected apps
-   External credentials
-   Named credentials

-   **[Get Started with Scratch Org Snapshots](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_get_started.htm)**
    Install the required Salesforce DX tools, then enable Dev Hub and Scratch Org Snapshots in an org, usually your production org.
-   **[Salesforce CLI Snapshot Commands](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_cli_commands.htm)**
    You must use Salesforce CLI commands to create and manage your scratch org snapshots.
-   **[Create a Scratch Org Snapshot](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_create.htm)**
    You can create a snapshot if the source scratch org wasn’t created using a snapshot or with a namespace.
-   **[Create a Snapshot for Use with Namespaced Scratch Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_namespace_limitations.htm)**
    While you can't use a namespaced scratch org to create a snapshot, you can create a namespaced scratch org from a snapshot. That way, you can deploy namespaced metadata to the scratch org. Snapshots are intended to include only dependent packages, metadata, and test data.
-   **[Create a Scratch Org Based on a Snapshot](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_create_scratch_org.htm)**
    The snapshot must belong to the Dev Hub that you’re using to create the scratch org. We recommend that you create a scratch org definition file that references the snapshot, although you can also reference it directly with the \--snapshot flag of org create scratch. Changing or deleting a scratch org has no effect on a snapshot.
-   **[Create a Package Version Based on a Snapshot](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_package_version.htm)**
    If you’re a partner or ISV who builds second-generation managed packages that depend on base packages, you can create package versions significantly faster by using scratch org snapshots. Using a snapshot to create a package version is a great choice if your dependent base packages are stable.
-   **[Manage and Maintain Your Snapshots](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_maintain.htm)**
    You can check the status of snapshot creation, list all snapshots, and delete a snapshot.

## Code Examples

```
sf org list limits -o <Dev Hub username or alias>
```

```
Name                  Remaining      Max       
───────────────────── ─────────      ───────── 
ActiveOrgSnapshots    38             40
DailyOrgSnapshots     35             40
```

## Related Topics

- Get Started with Scratch Org Snapshots (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_get_started.htm)
- Salesforce CLI Snapshot Commands (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_cli_commands.htm)
- Create a Scratch Org Snapshot (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_create.htm)
- Create a Snapshot for Use with Namespaced Scratch Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_namespace_limitations.htm)
- Create a Scratch Org Based on a Snapshot (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_create_scratch_org.htm)
- Create a Package Version Based on a Snapshot (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_package_version.htm)
- Manage and Maintain Your Snapshots (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_maintain.htm)
