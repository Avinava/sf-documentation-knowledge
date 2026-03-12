---
title: "Create Scratch Orgs"
domain: sfdx-dev
topic: create-scratch-orgs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.374Z
estimatedTokens: 1775
keywords: [Scratch, Orgs, Easily, spin, org, open, directly, command, line, Ways, View, Creation, Progress, Salesforce, Release]
---

# Create Scratch Orgs

> Easily spin up a scratch org and open it directly from the command line.

# Create Scratch Orgs

Easily spin up a scratch org and open it directly from the command line.

Before you create a scratch org:

-   Set up your Salesforce DX project
-   Authorize the Dev Hub org
-   Create the scratch org definition file (build your own or use an org shape)

You can create scratch orgs for different functions, such as for feature development, for development of packages that contain a namespace, or for user acceptance testing.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

Delete any unneeded or malfunctioning scratch orgs in the Dev Hub org or via the command line so that they don’t count against your active scratch org allocations.

Indicate the path to the scratch definition file relative to your current directory. For sample repos and new projects, this file is located in the config directory.

## Ways to Create Scratch Orgs

Create a scratch org for development using a scratch org definition file, give the scratch org an alias, and indicate that this scratch org is the default. Use the \--target-dev-hub flag to specify your Dev Hub org’s username or alias; if you don’t specify this flag, the command uses your default Dev Hub.

```

```

You can override many of the options in the user definition file by specifying the corresponding flag at the command line when you run org create scratch. This technique allows multiple users or continuous integration jobs to share a base definition file and then customize options when they run the command. This example overrides the adminEmail and edition options.

```

```

You’re not required to specify a definition file when you create a scratch org, as long as you specify the required flag \--edition.

```

```

This example creates a scratch org from a snapshot with the specified name.

```

```

This example creates a scratch org from an org shape with the specified ID.

```

```

Create a scratch org for user acceptance testing or to test installations of packages. In this case, you don’t want to create a scratch org with a namespace. You can use this command to override the namespace value in the scratch org definition file. This example also specifies the scratch org’s duration, which indicates when the scratch org expires (in 1-30 days). The default duration is 7 days.

```

```

Specify the Salesforce release for the scratch org. During the Salesforce release transition, you can specify the release (preview or previous) when creating a scratch org. See [Select the Salesforce Release for a Scratch Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_version_selection.htm "During the Salesforce release transition, you can specify the release (preview or previous) when creating a scratch org.") for details.

```

```

Request a scratch org, but don’t wait for it complete, by specifying the \--async flag.

```

```

The command displays a job ID that you pass to the org resume scratch command. Use this command to also resume a scratch org creation that times out.

```

```

Create a scratch org with source tracking disabled.

```

```

## View Scratch Org Creation Progress

While executing, the org create scratch command displays running information about the background processes. When the command completes, it displays two important pieces of information: the org ID and the username.

```

```

## Open the Scratch Org

```

```

If you used the \--alias flag to set an alias, you can use that value for \--target-org.

```

```

## Salesforce Release Transition Periods

Timing is everything during the Salesforce release transition period. During the transition period, you can intend to create a scratch org on the current release but find that the scratch org is unexpectedly created on the preview release. If the instance on which the scratch is created transitions to the preview release after the creation request is initiated, the scratch org is created on the preview version instead of the current version. During this transition period, there’s no way to know when the sandbox (CS) instance will be upgraded.

If you open the scratch org and it isn’t on the expected version, you have some options. See “How Release Transitions Can Affect the Scratch Org Version” in [Select the Salesforce Release for a Scratch Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_version_selection.htm "During the Salesforce release transition, you can specify the release (preview or previous) when creating a scratch org.").

## Troubleshooting Tips

If the create command runs into an error, it’s not always clear if the scratch org was created. Issue this command on your Dev Hub org to see if it returns the scratch org ID, which confirms the existence of a scratch org that was created today and owned by you:

```

```

Use this information to determine if the creation actually worked. For example, let’s say your name is Jane Doe, and you created an alias for your Dev Hub org called DevHub:

```

```

#### See Also

-   [ScratchOrgInfo sObject API Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_scratchorginfo.htm "ScratchOrgInfo sObject API Reference - HTML (New Window)")

-   [Project Setup](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_workspace_setup.htm "A Salesforce DX project provides a project structure for your org’s metadata (code and configuration), org templates, sample data, and all your team’s tests. To bring consistency to your team’s development processes, store these items in a source control system (SCS). Retrieve the contents of your team’s repository when you’re ready to develop a new feature.")

-   [Authorization](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm "Authorization refers to logging into an org so you can run commands that require access to the org. Creating an org with a CLI command also automatically authorizes it. For example, you authorize a Dev Hub org to allow you to create, delete, and manage your Salesforce scratch orgs. After you set up your project on your local machine, you authorize the Dev Hub org before you can create a scratch org. When you run the command to create the scratch org, Salesforce CLI automatically authorizes it.")

-   [Build Your Own Scratch Org Definition File](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm "The scratch org definition file is a blueprint for a scratch org. It mimics the shape of an org that you use in the development lifecycle, such as sandbox, packaging, or production.")

-   [Deploy Source From Your Project to the Scratch Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm "After changing the source, you can sync the changes to your scratch org by deploying the changed source to it with the project deploy start command.")

-   [*VS Code Command*: SFDX: Create a Default Scratch Org](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/vscode-overview.html "VS Code Command: SFDX: Create a Default Scratch Org - HTML (New Window)")

## Code Examples

```
sf org create scratch --definition-file config/project-scratch-def.json --alias MyScratchOrg --set-default --target-dev-hub MyHub
```

```
sf org create scratch --definition-file config/project-scratch-def.json --admin-email me@email.com --edition developer
```

```
sf org create scratch --edition developer
```

```
sf org create scratch --snapshot dhsnapshot --wait 10 --target-dev-hub MyHub
```

```
sf org create scratch --source-org 00DB1230000Ifx5
```

## Related Topics

- Select the Salesforce Release for a Scratch Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_version_selection.htm)
- Project Setup (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_workspace_setup.htm)
- Authorization (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm)
- Build Your Own Scratch Org Definition File (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm)
- Deploy Source From Your Project to the Scratch Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)
