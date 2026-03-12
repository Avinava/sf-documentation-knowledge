---
title: "Create, Clone, or Refresh a Sandbox"
domain: sfdx-dev
topic: create-clone-or-refresh-a-sandbox
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.172Z
estimatedTokens: 2018
keywords: [Clone, Refresh, Sandbox, development, testing, training, copy, data, metadata, another, latest, sometimes, source, org, Why]
---

# Create, Clone, or Refresh a Sandbox

> Create a sandbox to use for development, testing, or training. Clone a sandbox to copy
    its data and metadata to another sandbox. Refresh an existing sandbox to get the latest
    metadata, and sometimes data, from the source org.

# Create, Clone, or Refresh a Sandbox

Create a sandbox to use for development, testing, or training. Clone a sandbox to copy its data and metadata to another sandbox. Refresh an existing sandbox to get the latest metadata, and sometimes data, from the source org.

Before you create or clone a sandbox:

-   Create a Salesforce DX project with a manifest file.
-   Authorize to a production org with available sandbox licenses.
-   Create the sandbox definition file.

## Why We Recommend Using Aliases

When you create or clone a sandbox, the usernames generated in the sandbox are based on the usernames present in the production org or sandbox. The username looks like an email address, such as username@company.com.dev1. If the resulting username isn’t unique, we prepend some characters and digits to the username. The modified username looks something like 00x7Vqusername@company.com.dev1.

As you can imagine, remembering these usernames can be challenging, especially if you have several sandboxes you’re managing. Aliasing is a powerful way to manage and track your orgs, and we consider it a best practice. So when you issue a command that requires the username, using an alias that you can remember can speed up things.

If you didn’t set an alias when you created the sandbox, you can set one later.

```

```

## Create a Sandbox

Optional: [Create a Sandbox Definition File](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_sandbox_definition.htm "Before you can create a sandbox using Salesforce CLI, define the configuration for it in a sandbox definition file. The sandbox definition file is a blueprint for the sandbox. You can create different definition files for each sandbox type that you use in the development process.")

When you create a sandbox, Salesforce copies the metadata and data (for Partial Copy and Full) from your production org to a sandbox org. Specify the username or alias of your production org with the \--target-org flag.

```

```

The command asks you to confirm the sandbox configuration and then shows information as the sandbox is being created.

The \--set-default flag indicates that this sandbox is your default org for all CLI commands. If you’re working with several orgs and you don’t want this one to be the default, exclude this flag.

To directly define the required sandbox options, or to override the values defined in the sandbox definition file, specify appropriate flags on the command line.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

Because the sandbox is processed in a queue, the sandbox creation process can take longer than the default wait time of 6 minutes. We recommend setting a larger value for \--wait, for example, 30 minutes.

How long the creation process takes depends on the size and complexity of your production org. You see status messages posted to output:

```

```

After the wait period is over, you can run the org resume sandbox command to check the status of the sandbox creation process. If the sandbox is created within the wait time, Salesforce CLI automatically authenticates in to the sandbox. And the sandbox appears in the output of the org list command. Team members can authenticate to the sandbox by running the org web login command and providing their usernames and passwords.

```

```

## Clone a Sandbox

You can create a sandbox by cloning an existing sandbox rather than using your production org as your source. You can save time by customizing a sandbox with a set of data and metadata and then replicating it. Use the \--source-sandbox-name flag to specify the existing sandbox name and the \--name flag to the name of the new sandbox. You can also use the \--sourceId flag to specify the existing sandbox by its ID rather than its name. Both sandboxes must be associated with the specified production org that contains the sandbox licenses. (\--target-org flag).

Sandbox cloning simplifies having multiple concurrent streams of work in your application lifecycle. You can set up a sandbox for each type of work, such as development, testing, and staging. Your colleagues can easily clone individual sandboxes instead of sharing one sandbox and stepping on each other’s toes.

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

Because the sandbox is processed in a queue, the sandbox cloning process can take longer than the default wait time of 6 minutes. We recommend setting a larger value for \--wait, for example, 30 minutes.

After the wait period is over, you can run the org resume sandbox command to check the status of the sandbox cloning process. If the sandbox is cloned within the wait time, the CLI automatically authenticates in to the sandbox. And the sandbox appears in the output of the org list command. Team members can authenticate to the sandbox by running the org web login command and providing their usernames and passwords.

```

```

## Check the Sandbox Status

Creating or cloning a sandbox can take several minutes. If the command times out, it displays a job ID that you can pass to the org resume sandbox command to report on creation or cloning status. When the sandbox is ready, this command also authenticates to the sandbox.

```

```

If the org create sandbox command times out, the alias isn’t set. However, you can set it using the alias set command:

```

```

## Open a Sandbox

After the sandbox is ready, you can open it by specifying its username or alias. However, you don’t have to provide its password because the CLI manages the authentication details for you.

```

```

## Refresh a Sandbox

Refreshing an existing sandbox updates its metadata from the source org. If the sandbox is a clone or if it uses a sandbox template, the refresh process also updates the sandbox org’s data.

```

```

Be sure the value of \--name is the sandbox name, and not its alias. The \--target-org flag can be either the username or alias of the source org.

To change the configuration of the refreshed sandbox, specify a definition file with the \--definition-file flag. Then include the configuration options you want to change, such as licenseType, templateID, or copyArchivedActivities (full sandbox only.) You can’t, however, change the sandbox name using the org refresh sandbox command. To change the sandbox name, first delete it with the org delete sandbox command. Then recreate it with the org create sandbox command and give it a new name.

## Delete a Sandbox

You can delete a sandbox using Salesforce CLI, whether you created it locally with org create sandbox or logged into an existing sandbox with a org login command. You must also have previously logged into the production org that contains the sandbox license.

```

```

## Next:

-   Retrieve metadata from your sandbox to your local DX project.
-   Develop directly in your sandbox, then retrieve the changes to your local DX project.
-   Deploy local changes to a sandbox.

#### See Also

-   [*Salesforce Help*: Deploy Enhancements from Sandboxes](https://help.salesforce.com/articleView?id=deploy_sandboxes_parent.htm&language=en_US "Salesforce Help: Deploy Enhancements from Sandboxes - HTML (New Window)")

-   [*Salesforce Help*: Create, Clone, or Refresh a Sandbox Using Setup UI](https://help.salesforce.com/articleView?id=data_sandbox_create_parent.htm&language=en_US "Salesforce Help: Create, Clone, or Refresh a Sandbox Using Setup
    UI - HTML (New Window)")

-   [Authorize an Org Using the JWT Flow](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm#sfdx_dev_auth_jwt_flow "Use the JWT flow to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.")

-   [Authorize an Org Using a Browser](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm "Authorize an org with a browser by running a CLI command and entering your credentials in the browser that automatically opens. That’s it!")

## Code Examples

```
sf alias set MyDevSandbox username@company.com.dev1
```

```
sf org create sandbox --target-org prodOrg --definition-file config/dev-sandbox-def.json --alias MyDevSandbox --set-default --wait 30
```

```
sf org create sandbox --name FullSbx --license-type=Full --target-org prodOrg --alias MyFullSandbox --wait 30
```

```
Sandbox Create... ⣾ 00:28:00 until timeout. 26%
 Field         Value                        
 ───────────── ──────────────────────────── 
 Id            0GR1Q888800HORuWAO           
 SandboxName   dev11                        
 Status        Processing                   
 LicenseType   DEVELOPER                    
 SandboxInfoId 0GQ1Q000009999mWAO           
 Created Date  2023-10-17T21:42:49.000+0000 
 CopyProgress  26%                          
 SandboxOrg    00DP0099993zEZj              
---------------------
Sandbox Create Stages
✓ - Pending
… - Processing
… - Activating
… - Authenticating
```

```
sf org web login --instance-url https://test.salesforce.com
```

## Related Topics

- Create a Sandbox Definition File (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_sandbox_definition.htm)
- Authorize an Org Using the JWT Flow (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm)
- Authorize an Org Using a Browser (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm)
