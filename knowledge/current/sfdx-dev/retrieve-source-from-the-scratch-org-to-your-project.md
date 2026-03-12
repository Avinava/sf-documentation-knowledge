---
title: "Retrieve Source from the Scratch Org to Your Project"
domain: sfdx-dev
topic: retrieve-source-from-the-scratch-org-to-your-project
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.337Z
estimatedTokens: 1318
keywords: [Retrieve, Source, Scratch, Org, Project, initial, deploy, changes, tracked, local, file, system, change, metadata, keep]
---

# Retrieve Source from the Scratch Org to Your Project

> After you do an initial deploy, your changes are tracked between your local file system
      and your scratch org. If you change metadata in your scratch org, retrieve those changes to
      your local project to keep both in sync.

# Retrieve Source from the Scratch Org to Your Project

After you do an initial deploy, your changes are tracked between your local file system and your scratch org. If you change metadata in your scratch org, retrieve those changes to your local project to keep both in sync.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Scratch orgs have source tracking enabled by default. But sometimes you don’t want source tracking, such as in a continuous integration environment when you want to speed up deployments. You can opt out of source tracking when you create the scratch org by specifying the \--no-track-source flag.

```

```

See [Create Scratch Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Easily spin up a scratch org and open it directly from the command line.") for more reasons to disable source tracking.

To run the retrieve commands described in the remainder of this topic, first open a terminal (macOS and Linux) or command window (Windows) and then change to your Salesforce DX project directory.

## Preview a Retrieve

Before you retrieve metadata from an org, you can preview the components that will be retrieved, the potential conflicts, and the ignored files by executing project retrieve preview. For example, this command displays a preview of retrieving changed metadata from a scratch org with the alias MyGroovyScratchOrg to your local project.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

You can create an alias for an org using alias set. To display the usernames and aliases of all the scratch orgs you’ve created, run org list.

## Retrieve Metadata from Your Scratch Org

To retrieve changed source from your default scratch org to your project, run this command

```

```

The command displays what it retrieved and where in your local Salesforce DX project it puts it. This sample output shows a retrieve of the DiscountSpecial Apex class and DiscountPermSet permission set into the force-app/main/default directory.

```

```

Use flags to target the source you want to retrieve, rather than everything that’s changed.

-   Use the \--metadata flag to retrieve specific metadata components, such as Apex classes.
-   Use the \--manifest flag to retrieve components in a manifest file.
-   Use \--source-dir to retrieve source in a package directory.

See the reference information about [project retrieve start](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_retrieve_start_unified) for examples and other flags you can specify.

## Select Files to Ignore During Retrieves

It’s likely that you have some files that you don’t want to sync between the project and scratch org. Add these files to the .forceignore file so they’re ignored by the retrieve command.

## If the Retrieve Detects File Conflicts

During development, you change files locally in your file system and change the scratch org using builders and editors. Usually, these changes don’t cause a conflict and involve unique files. Also, the project retrieve start command doesn’t handle merges. Projects and scratch orgs are meant to be used by one developer.

However, if you run project retrieve start, and conflicts are detected, Salesforce CLI terminates the operation and doesn’t retrieve the source. Instead, it displays conflict information, such as this sample output. The PropertyController Apex class has been changed both locally and in the org, but the changes are in conflict.

```

```

First decide which change you want to keep. To keep the change that’s in the org, rerun the retrieve and specify the \--ignore-conflicts flag.

```

```

To keep the local change, run the project deploy start command to deploy the change to your org, and specify the \--ignore-conflicts flag.

```

```

#### See Also

-   [Retrieve Source from the Scratch Org to Your Project](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm "After you do an initial deploy, your changes are tracked between your local file system and your scratch org. If you change metadata in your scratch org, retrieve those changes to your local project to keep both in sync.")

-   [How to Exclude Source When Syncing](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm "When syncing metadata between your local file system and a target org, you often have source files you want to exclude. Similarly, you often want to exclude certain files when converting source to Salesforce DX source format. In both cases, you can exclude individual files or all files in a specific directory with a .forceignore file.")

-   [Track Changes Between Your Project and Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking.htm "Use source tracking to track the changes between your local project and a scratch org or sandbox when you create, update, or delete source code.")

-   [*VS Code Command*: SFDX: Retrieve Source to Org](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/deploy-changes.html "VS Code Command: SFDX: Retrieve Source to Org - HTML (New Window)")

## Code Examples

```
sf org create scratch --definition-file config/project-scratch-def.json --no-track-source
```

```
sf project retrieve preview --target-org MyGroovyScratchOrg
```

```
sf project retrieve start
```

```
Preparing retrieve request... ⣟
Preparing retrieve request... Succeeded

Retrieved Source
====================================================================================================================
| State   Name            Type          Path                                                                         
| ─────── ─────────────── ───────────── ──────────────────────────────────────────────────────────────────────────── 
| Created DiscountSpecial ApexClass     force-app/main/default/classes/DiscountSpecial.cls                           
| Created DiscountSpecial ApexClass     force-app/main/default/classes/DiscountSpecial.cls-meta.xml                  
| Created DiscountPermSet PermissionSet force-app/main/default/permissionsets/DiscountPermSet.permissionset-meta.xml
```

```
sf project retrieve start
Preparing retrieve request... ⣾ Sending request to org
 STATE    FULL NAME          TYPE      FILE PATH                                                                                                 
 ──────── ────────────────── ───────── ─────────────────────────────────────────────────────────────────── 
 Conflict PropertyController ApexClass <dir>force-app/main/default/classes/PropertyController.cls-meta.xml 
Preparing retrieve request... Error
Error (1): There are changes in your local files that conflict with the org changes you're trying to retrieve.
```

## Related Topics

- Create Scratch Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)
- Retrieve Source from the Scratch Org to Your Project (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm)
- How to Exclude Source When Syncing (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm)
- Track Changes Between Your Project and Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking.htm)
