---
title: "Group Membership Locking"
domain: draes
topic: group-membership-locking
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.628Z
estimatedTokens: 1469
keywords: [Group, Membership, Locking, updating, role, hierarchy, Setup, API, customers, occasionally, receive, “could, acquire, lock”, operation]
---

# Group Membership Locking

> When updating the role hierarchy or group membership in Setup or through the API,
  customers can occasionally receive a “could not acquire lock” or "Group membership operation
  already in progress" error and have to repeat the operation. This error occurs because the sharing
  system locks the tables holding group membership information during updates to prevent
  incompatible simultaneous updates or timing issues, both of which could lead to inaccurate data
  about users’ access rights.

# Group Membership Locking

When updating the role hierarchy or group membership in Setup or through the API, customers can occasionally receive a “could not acquire lock” or "Group membership operation already in progress" error and have to repeat the operation. This error occurs because the sharing system locks the tables holding group membership information during updates to prevent incompatible simultaneous updates or timing issues, both of which could lead to inaccurate data about users’ access rights.

Typically, these locks are held only very briefly, so most customers never see a lock conflict error. In some scenarios—such as a change in role triggering a sharing rule recalculation—locks can be held for a longer time, and conflicts can occur.

Customers who experience these locking errors are typically executing large-scale data loads or integrations with other internal systems that are making changes to role and group structure, user assignments to roles and groups, or both. When these processes are running—and a Salesforce admin tries to change a user’s role, or the customer tries to provision a new external user—one of these simultaneous operations might be unable to secure the lock it requires. The most likely time for this failure to occur is during periodic organizational realignment events, such as end-of-year or end-of-quarter processing, where many account assignments and user roles are changing.

Customers can lessen the chance of locking errors by:

-   Scheduling separate group maintenance processes carefully so they don’t overlap
-   Implementing retry logic in integrations and other automated group maintenance processes to recover from a failure to acquire a lock
-   Trying both serial processing and parallel processing to see if one method reduces locking errors.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=draes)

#### Note

You can also receive locking errors if you’re updating the role hierarchy or group membership while running other deployments that also update group membership information or have Apex tests that do so. If you receive locking errors, wait for the deployment operation or Apex tests to finish.

By default, granular locking is enabled, which allows some group maintenance operations to proceed simultaneously if there’s no hierarchical or other relationship between the roles or groups involved in the updates. Admins can adjust their maintenance processes and integration code to take advantage of this limited concurrency to process large-scale updates faster, all while still avoiding locking errors.

The key advantages of granular locking are that:

-   Groups that are in separate hierarchies can be manipulated concurrently.
-   Public groups and roles that don't include territories aren't blocked by territory operations.
-   Users can be added concurrently to territories and public groups.
-   User provisioning can occur in parallel.
    -   External user creation requires locks only if new external roles are being created.
    -   Provisioning new external users in existing accounts occurs concurrently.
-   A single-long running process, such as a role delete, blocks only a small subset of operations.

This table lists all the operations that can occur in parallel. If a specific grouping of operations isn’t listed in the table, then concurrent processing isn’t supported and group membership locking can occur. Note that certain operations, such as reparenting (moving roles within the role hierarchy), still block almost all other group updates.

| Group Operation | Can be Performed Concurrently with... |
| --- | --- |
| Role creation | User role change1Territory reparentingTerritory deletionTerritory creationRemoval of user from territoryAddition of user to territoryUser provisioning2 |
| Role deletion | Territory reparentingTerritory deletionTerritory insertionRemoval of user from territoryAddition of user to territory |
| Role reparenting (includes change of customer or partner account owner) | Territory creation |
| Adding user to territory | Role deletionRole insertionTerritory creationAddition of user to territoryUser provisioning3 |
| Removing user from territory | Role deletionRole insertionTerritory creationUser provisioning3 |
| Territory reparenting | Role deletionRole insertionUser provisioning3 |
| Territory deletion | Role deletionRole insertionUser provisioning3 |
| Territory creation | Role reparentingRole deletionRole insertionUser role change1Addition of user to territoryRemoval of user from territoryUser provisioning3 |
| Provisioning internal user with an existing role | Role insertionUser role change1Territory reparentingTerritory deletionTerritory creationRemoval of user from territoryAddition of user to territoryUser provisioning3 |
| Changing user role (User must not own any customer or partner accounts.) | Role insertionTerritory insertionUser provisioning3 |
| Provisioning first customer or partner user under an account | User role change1Territory reparentingTerritory deletionTerritory creationRemoval of user from territoryAddition of user to territoryUser provisioning2 |
| Creating second customer or partner user under an account | Role insertionUser role change1Territory reparentingTerritory deletionTerritory creationRemoval of user from territoryAddition of user to territoryUser provisioning3 |
| Provisioning high-volume Experience Cloud site user | Any group membership operation |
| Changing customer or partner account owner | Territory creation |
| Changing role of a user who owns a customer or partner account | Territory creation |

1 The user must not own any customer or partner accounts.

2 Provisioning standard user or external user in an existing role

3 Provisioning any standard or external user, including the first customer or partner user under an account
