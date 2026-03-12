---
title: "Create a Scratch Org Snapshot"
domain: sfdx-dev
topic: create-a-scratch-org-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.615Z
estimatedTokens: 559
keywords: [Scratch, Org, Snapshot, source, wasn’t, created]
---

# Create a Scratch Org Snapshot

> You can create a snapshot if the source scratch org wasn’t created using a snapshot or
        with a namespace.

# Create a Scratch Org Snapshot

You can create a snapshot if the source scratch org wasn’t created using a snapshot or with a namespace.

Before you begin:

-   Enable Dev Hub in your production org, or another org you use to create scratch orgs.
-   Enable Scratch Org Snapshots in the Dev Hub org.
-   Be sure that non-admin users have the proper permissions to use scratch orgs and snapshots. See [Assign a License and Permissions to Snapshot Users](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_assign_permset_and_licenses.htm "Provide all non-admin Scratch Org Snapshots users with a supported license and access to the required scratch org and snapshot objects. Dev Hub (production org) admins can create and manage snapshots by default.") for details.

A snapshot captures the state of a scratch org at a point in time. To update your snapshot, delete it and create another snapshot. Unlike an org shape, a snapshot includes installed packages, metadata, and data. The time to create a snapshot depends on the size of the source scratch org. To speed up snapshot creation time, include only what’s necessary for your project.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

If you continue to modify the source scratch org after you run the snapshot command, not all the modifications will be reflected in the snapshot. Instead, complete the configuration of the source scratch org before creating the snapshot.

Command syntax:

```

```

A snapshot name can have a maximum length of 15 characters. It can contain only alphanumeric characters (no special characters or spaces, even if the name is surrounded by quotation marks during creation).

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

To view the aliases, usernames, and IDs of your authenticated orgs and scratch orgs, run the org list command.

Example:

```

```

Your request is initially InProgress:

```

```

To check the status of the request, see [Manage and Maintain Your Snapshots](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_maintain.htm "You can check the status of snapshot creation, list all snapshots, and delete a snapshot.").

## Code Examples

```
sf org create snapshot --name <name> --source-org <ID or alias of scratch org> \
--target-dev-hub <username or alias of Dev Hub org> --description <text>
```

```
sf org create snapshot --name dhsnapshot --source-org dreamhouse-scratch \
--target-dev-hub my-dev-hub --description "Dreamhouse app"
```

```
Name               Value      
──────────────────  ──────────────────── 
Id                  0Oo1Q0000004C93SXX   
Snapshot Name       dhsnapshot           
Description         Dreamhouse app       
Status              InProgress           
Source Org          00D050000004ipAEXX   
Created Date        09/22/2023, 02:07 PM 
Last Modified Date  09/22/2023, 02:07 PM 
Expiration Date     2023-12-21
```

## Related Topics

- Assign a License and Permissions to Snapshot Users (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_assign_permset_and_licenses.htm)
- Manage and Maintain Your Snapshots (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_maintain.htm)
