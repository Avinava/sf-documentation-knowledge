---
title: "Enable Source Tracking in Sandboxes"
domain: sfdx-dev
topic: enable-source-tracking-in-sandboxes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.009Z
estimatedTokens: 1127
keywords: [Enable, Source, Tracking, Sandboxes, enabling, Developer, Pro, Salesforce, tooling, automatically, track, new, changed, deleted, metadata]
---

# Enable Source Tracking in Sandboxes

> By enabling source tracking in Developer and Developer Pro sandboxes, Salesforce DX
  tooling can automatically track new, changed, and deleted metadata components. You can then select
  and determine which changes to move forward in the development cycle and release. For DX tooling
  that uses a Salesforce DX project or source control repository, source tracking can aid in
  conflict detection and resolution. And best of all, because source tracking identifies which
  metadata components changed, you no longer have to manually keep track of changes.

# Enable Source Tracking in Sandboxes

By enabling source tracking in Developer and Developer Pro sandboxes, Salesforce DX tooling can automatically track new, changed, and deleted metadata components. You can then select and determine which changes to move forward in the development cycle and release. For DX tooling that uses a Salesforce DX project or source control repository, source tracking can aid in conflict detection and resolution. And best of all, because source tracking identifies which metadata components changed, you no longer have to manually keep track of changes.

You can enable source tracking in Developer and Developer Pro sandboxes in two ways: in your production org for all sandboxes created from it, or for a specific sandbox. After you turn on source tracking, you can disable it at any time.

-   For all Developer and Developer Pro sandboxes—when you enable the feature in your production org, all newly created and refreshed sandboxes use source tracking. Existing sandboxes don’t have source tracking enabled until you refresh them.
-   For a specific Developer or Developer Pro sandbox—if you don’t want to enable source tracking in all sandboxes, or want to enable source tracking without refreshing the sandbox, you can enable it directly in the sandbox from the Sandbox Settings Setup page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Source tracking isn’t supported and can’t be enabled for Partial Copy sandboxes, Full sandboxes, or Developer Edition orgs. Source tracking can result in metadata deployments taking longer to complete.

#### See Also

-   [*Salesforce Help*: Refresh Your Sandbox](https://help.salesforce.com/s/articleView?id=platform.data_sandbox_refresh.htm&language=en_US "Salesforce Help: Refresh Your Sandbox - HTML (New Window)")


## Enable Source Tracking for All Developer and Developer Pro Sandboxes

Enable source tracking for all Developer and Developer Pro sandboxes in your production org from the Dev Hub Setup page.

| Available in: Enterprise, Performance, and Unlimited Editions. For Professional and Database.com Editions, you can only enable source tracking directly in the sandbox. |
| --- |


| User Permissions Needed |
| --- |
| To view a sandbox: | View Setup and Configuration AND Customize Applications |
| To create, refresh, activate, and delete a sandbox: | Manage Dev Sandboxes (Developer or Developer Pro only) or Manage Sandboxes (all sandbox types) |

1.  Log in to the source (production) org.
2.  From Setup, find and select **Dev Hub**.

    If you don't see Dev Hub in the Setup menu, make sure that the source org is one of the supported editions.

3.  Select **Enable Source Tracking in Developer and Developer Pro Sandboxes**.
4.  Refresh any existing Developer or Developer Pro sandboxes to enable this feature.

    Source tracking is automatically enabled for any newly created or refreshed Developer or Developer Pro sandboxes.


You can disable this feature at any time by clicking the toggle. When the sandbox is refreshed, all source tracking information is deleted.

## Enable Source Tracking in a Specific Sandbox

Enable source tracking for a specific Developer or Developer Pro sandbox in its Settings Setup page. If you refresh a sandbox, you must re-enable this feature.

| Available in: Lightning Experience in Developer and Developer Pro sandboxes |
| --- |


| User Permissions Needed |
| --- |
| To view a sandbox: | View Setup and Configuration AND Customize Applications |
| To create, refresh, activate, and delete a sandbox: | Manage Dev Sandboxes (Developer or Developer Pro only) or Manage Sandboxes (all sandbox types) |

1.  Log in to the Developer or Developer Pro sandbox.
2.  From Setup, find and select **Sandbox Settings**.
3.  Click **Enable Source Tracking in This Sandbox**.

Metadata changes from this point forward are tracked, but existing metadata changes made before you enabled this feature aren’t tracked. When the sandbox is refreshed, all source tracking information is deleted. If you haven’t enabled source tracking in the production org for all Developer and Developer Pro sandboxes, and you want the refreshed sandbox to use source tracking, you must re-enable the feature in the Sandbox Settings page.

If you disable source tracking, it can take several days to clean up the source tracking records. The process isn’t instantaneous. You can re-enable source tracking after the cleanup process is finished.
