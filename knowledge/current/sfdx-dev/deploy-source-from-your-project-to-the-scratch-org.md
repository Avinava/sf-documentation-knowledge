---
title: "Deploy Source From Your Project to the Scratch Org"
domain: sfdx-dev
topic: deploy-source-from-your-project-to-the-scratch-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.344Z
estimatedTokens: 1652
keywords: [Deploy, Source, Project, Scratch, Org, changing, sync, changes, deploying, changed, start, command, Preview, Deployment, Select]
---

# Deploy Source From Your Project to the Scratch Org

> After changing the source, you can sync the changes to your scratch org by deploying
    the changed source to it with the project deploy start
    command.

# Deploy Source From Your Project to the Scratch Org

After changing the source, you can sync the changes to your scratch org by deploying the changed source to it with the project deploy start command.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Scratch orgs have source tracking enabled by default. But sometimes you don’t want source tracking, such as in a continuous integration environment when you want to speed up deployments. You can opt out of source tracking when you create the scratch org by specifying the \--no-track-source flag.

```

```

See [Create Scratch Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Easily spin up a scratch org and open it directly from the command line.") for more reasons to disable source tracking.

The first time you deploy source to the org, all source in the package directories in the sfdx-project.json file is deployed to the scratch org to complete the initial setup. At this point, Salesforce CLI starts source-tracking locally on the file system and remotely in the scratch org to determine which metadata has changed. Let’s say you deployed an Apex class to a scratch org and then decide to modify the class in the scratch org instead of your local file system. Salesforce CLI tracks in which local package directory the class was created, so when you retrieve it back to your project, it knows where it belongs.

To run the deploy commands described in the remainder of this topic, first open a terminal (macOS and Linux) or command window (Windows) and then change to your Salesforce DX project directory.

## Preview a Deployment

Before you deploy source to an org, you can preview the components that will be deployed, the potential conflicts, and the ignored files by executing project deploy preview. For example, this command displays a preview of deploying all the source in your project to a scratch org with alias MyGroovyScratchOrg.

```

```

Use flags to target the source you want to preview, such as only the source listed in a manifest. In this example, \--target-org points to the scratch org’s username.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

You can create an alias for an org using alias set. To display the usernames and aliases of all the scratch orgs you’ve created, run org list.

## Deploy Source to a Scratch Org

To deploy changed local source to your default scratch org, run this command.

```

```

The command displays what it deployed. This sample output shows a deployment of the PropertyController Apex class.

```

```

Use flags to target the source you want to deploy, rather than everything that’s changed.

-   Use the \--metadata flag to deploy specific metadata components, such as Apex classes.
-   Use the \--manifest flag to deploy components in a manifest file.
-   Use \--source-dir to deploy source in a package directory.

See the reference information about [project deploy start](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_start_unified) for examples and other flags you can specify.

## Select Files to Ignore During Deploys

It’s likely that you have some files that you don’t want to sync between the project and scratch org. Add these files to the .forceignore file so they’re ignored by the deploy command.

## If the Deploy Detects Warnings

If you run project deploy start, and warnings occur, Salesforce CLI doesn’t deploy the source. Warnings can occur, for example, if your project source is using an outdated version. If you want to ignore these warnings and deploy the source to the scratch org, run:

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

Although you can successfully deploy using this option, we recommend addressing the issues in the source files. For example, if you see a warning because a Visualforce page is using an outdated version, consider updating your page to the current version of Visualforce. This way, you can take advantage of new features and performance improvements.

## If the Deploy Detects File Conflicts

During development, you change files locally in your file system and change the scratch org directly using the builders and editors that Salesforce supplies. Usually, these changes don’t cause a conflict and involve unique files. Also, the project deploy start command doesn’t handle merges. Projects and scratch orgs are meant to be used by one developer.

However, if you run project deploy start, and conflicts are detected, Salesforce CLI terminates the operation and doesn’t deploy the source. Instead, it displays conflict information, such as this sample output. The PropertyController Apex class has been changed both locally and in the org, but the changes are in conflict.

```

```

First decide which change you want to keep. To keep the local change, rerun the deploy and specify the \--ignore-conflicts flag.

```

```

To keep the change that’s in the org, run the project retrieve start command to retrieve the change to your local project, and specify the \--ignore-conflicts flag.

```

```

#### See Also

-   [How to Exclude Source When Syncing](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm "When syncing metadata between your local file system and a target org, you often have source files you want to exclude. Similarly, you often want to exclude certain files when converting source to Salesforce DX source format. In both cases, you can exclude individual files or all files in a specific directory with a .forceignore file.")

-   [Retrieve Source from the Scratch Org to Your Project](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm "After you do an initial deploy, your changes are tracked between your local file system and your scratch org. If you change metadata in your scratch org, retrieve those changes to your local project to keep both in sync.")

-   [Track Changes Between Your Project and Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking.htm "Use source tracking to track the changes between your local project and a scratch org or sandbox when you create, update, or delete source code.")

-   [*VS Code Command*: SFDX: Deploy Source to Org](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/deploy-changes.html "VS Code Command: SFDX: Deploy Source to Org - HTML (New Window)")

## Code Examples

```
sf org create scratch --definition-file config/project-scratch-def.json --no-track-source
```

```
sf project deploy preview --target-org MyGroovyScratchOrg
```

```
sf project deploy preview --manifest package.xml --target-org test-am6xqkossaq8@example.com
```

```
sf project deploy start
```

```
Deploying v58.0 metadata to test-am6xqkossaq8@example.com using the v59.0 SOAP API.
Deploy ID: 0Af7e00001WsuoSCAR
Status: Succeeded | ████████████████████████████████████████ | 1/1 Components (Errors:0) | 0/0 Tests (Errors:0)

Deployed Source
=====================================================================================================
| State   Name               Type      Path                                                           
| ─────── ────────────────── ───────── ────────────────────────────────────────────────────────────── 
| Changed PropertyController ApexClass force-app/main/default/classes/PropertyController.cls          
| Changed PropertyController ApexClass force-app/main/default/classes/PropertyController.cls-meta.xml
```

## Related Topics

- Create Scratch Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)
- How to Exclude Source When Syncing (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm)
- Retrieve Source from the Scratch Org to Your Project (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm)
- Track Changes Between Your Project and Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking.htm)
