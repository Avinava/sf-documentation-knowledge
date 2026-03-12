---
title: "Manage and Maintain Your Snapshots"
domain: sfdx-dev
topic: manage-and-maintain-your-snapshots
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.634Z
estimatedTokens: 327
keywords: [Manage, Maintain, Snapshots, check, status, snapshot, creation, Scratch, Org]
---

# Manage and Maintain Your Snapshots

> You can check the status of snapshot creation, list all snapshots, and delete a
        snapshot.

# Manage and Maintain Your Snapshots

You can check the status of snapshot creation, list all snapshots, and delete a snapshot.

## Check the Status of a Snapshot Creation

Creating a snapshot can take a while. Use the snapshot name or ID to check its creation status.

```

```

For example:

```

```

After the status changes to Active, you can use the snapshot to create scratch orgs.

```

```

## List All Scratch Org Snapshots

You can view all the snapshots in a Dev Hub org that you have access to. If you’re an admin, you can see all snapshots associated with the Dev Hub org. If you’re a user, you can see only your snapshots, unless a Dev Hub admin gives you View All Records permissions.

```

```

## Delete a Scratch Org Snapshot

If you don’t need a snapshot anymore or run out of active snapshots, you can delete a snapshot. Dev Hub admins can delete any snapshot, while users can delete only their snapshots unless a Dev Hub admin gives the user Modify All Records permissions. Deleting a snapshot frees up a license to create an additional snapshot, but the associated data is retained for 100 days after the snapshot was created.

This example identifies the snapshot for deletion by snapshot name.

```

```

This example identifies the snapshot for deletion by snapshot ID.

```

```

## Code Examples

```
sf org get snapshot --snapshot <name or ID> --target-dev-hub <username or alias>
```

```
sf org get snapshot --snapshot dhsnapshot --target-dev-hub my-dev-hub
```

```
Name               Value        
 ──────────────────  ──────────────────── 
 Id                  0Oo1Q0000004C93SXX   
 Snapshot Name       dhsnapshot           
 Description         Dreamhouse app       
 Status              Active               
 Source Org          00D050000004ipAEXX   
 Created Date        09/22/2023, 02:07 PM 
 Last Modified Date  09/22/2023, 02:14 PM 
 Expiration Date     2024-09-21           
 Last Cloned Date                        
 Last Cloned By Id
```

```
sf org list snapshot --target-dev-hub <username or alias>
```

```
sf org delete snapshot --snapshot dhsnapshot --target-dev-hub my-dev-hub
```
