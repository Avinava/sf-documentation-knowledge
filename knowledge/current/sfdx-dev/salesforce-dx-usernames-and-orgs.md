---
title: "Salesforce DX Usernames and Orgs"
domain: sfdx-dev
topic: salesforce-dx-usernames-and-orgs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.158Z
estimatedTokens: 1814
keywords: [Salesforce, Usernames, Orgs, CLI, commands, connect, org, their, task, scratch, command, creates, connects, Dev, Hub]
---

# Salesforce DX Usernames and Orgs

> Many Salesforce CLI commands connect to an org to complete their task. For example, the
      org create scratch command, which creates a scratch org,
    connects to a Dev Hub org. The project deploy start and
      project retrieve start commands synchronize source code
    between your project and an org. In each case, the CLI command requires a username to determine
    which org to connect to. Usernames are unique within the entire Salesforce ecosystem and are
    associated with just one org.

# Salesforce DX Usernames and Orgs

Many Salesforce CLI commands connect to an org to complete their task. For example, the org create scratch command, which creates a scratch org, connects to a Dev Hub org. The project deploy start and project retrieve start commands synchronize source code between your project and an org. In each case, the CLI command requires a username to determine which org to connect to. Usernames are unique within the entire Salesforce ecosystem and are associated with just one org.

When you create a scratch org, the CLI generates a username. The username looks like an email address, such as test-wvkpnfm5z113@example.com. You don’t need a password to connect to or open a scratch org, although you can generate one later with the org generate password command.

Salesforce recommends that you set the org that you connect to the most during development as your default org. The easiest way to set it is when you log in to a Dev Hub org or create a scratch org; you can also [use the config commands](#config). Specify the \--set-default-dev-hub or \--set-default flag, respectively. You can also create an alias to make the org’s usernames more readable and intuitive. You can use usernames or their aliases interchangeably for all CLI commands that connect to an org.

These examples set the default org and aliases when you log in and authorize an org, in this case a Dev Hub org, and then when you create a scratch org.

```

```

To verify whether a CLI command requires an org connection, look at its flag list with the \-h flag. Commands that have the \--target-dev-hub flag connect to the Dev Hub org. Similarly, commands that have \--target-org connect to scratch orgs, sandboxes, and so on. This example displays the flag list and help information about org create scratch.

```

```

When you run a CLI command that requires an org connection and you don’t specify a username, the command uses the default. To display all the orgs that you've authorized or created, run [org list](#list). The default Dev Hub and scratch orgs are marked with an emoji on the left; see the legend at the end of the display for details.

Let's run through a few examples. This example deploys source code to the org that you've set as the default.

```

```

To specify an org other than the default, use \--target-org. For example, let’s say you created a scratch org with the alias my-other-scratch-org. It’s not the default but you still want to deploy source to it.

```

```

This example shows how to use the \--target-dev-hub flag to specify a non-default Dev Hub org when creating a scratch org.

```

```

## More About Setting Default Orgs

If you’ve already created a scratch org, you can set it, or any other org, as your default by running the config set command from your project directory.

```

```

The command sets the value locally, so it works only for the current project. To use the default org for all projects on your computer, specify the \--global flag. You can run this command from any directory. Local project defaults override global defaults.

```

```

The process is similar to set a default Dev Hub org, except you use the target-dev-hub config variable.

```

```

To unset a config variable, run the config unset command. Use the \--global flag to unset it for all your Salesforce DX projects.

```

```

To view all the configuration variables you’ve set, run config list; if you run it from a project directory it also lists the local ones.

```

```

## More About Aliasing

Use the alias set command to set an alias for a scratch org you’ve already created, or any org after you’ve authorized it. You can create an alias for any org: Dev Hub, scratch org, production, sandbox, and so on. So when you issue a command that requires the org’s username, using an easily-remembered alias speeds things up.

```

```

An alias also makes it easy to set a default org. The previous example of using config set to set target-org now becomes much more digestible when you use an alias rather than the actual username.

```

```

Set multiple aliases with a single command by separating the name-value pairs with a space; in this case you must use the equal sign.

```

```

You can associate an alias with only one username at a time. If you set it multiple times, the alias points to the most recent username. For example, if you run the following two commands, the alias my-org is set to test-wvkpnfm5z113@example.com.

```

```

To view all aliases that you’ve set, use one of the following commands.

```

```

To remove an alias, use the alias unset command.

```

```

## List All Your Orgs

Use the org list command to display the usernames and aliases for the orgs that you’ve authorized and the active scratch orgs that you’ve created.

```

```

The output lists the orgs that you’ve authorized or created, including Dev Hub orgs, production orgs, scratch orgs, and sandboxes. The table displays the usernames that you specified when you authorized the orgs, their aliases, their IDs, and whether the CLI can connect to it. An emoji on the left points to the default org or Dev Hub; refer to the legend at the bottom for details. Scratch orgs also display their expiration dates.

To view more information, such as the scratch org creation date and associated DevHub org, and instance URL for all orgs, use the \--verbose flag.

```

```

Use the \--clean flag to remove non-active scratch orgs from the list. The command prompts you before it does anything.

```

```

#### See Also

-   [Authorization](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm "Authorization refers to logging into an org so you can run commands that require access to the org. Creating an org with a CLI command also automatically authorizes it. For example, you authorize a Dev Hub org to allow you to create, delete, and manage your Salesforce scratch orgs. After you set up your project on your local machine, you authorize the Dev Hub org before you can create a scratch org. When you run the command to create the scratch org, Salesforce CLI automatically authorizes it.")

-   [Build Your Own Scratch Org Definition File](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm "The scratch org definition file is a blueprint for a scratch org. It mimics the shape of an org that you use in the development lifecycle, such as sandbox, packaging, or production.")

-   [Create Scratch Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Easily spin up a scratch org and open it directly from the command line.")

-   [Generate or Change a Password for a Scratch Org User](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_passwd.htm "By default, new scratch orgs contain one administrator user with no password. Use the org generate password CLI command to generate or change a password for this admin user. After it's set, you can’t unset a password, you can only change it.")

-   [Deploy Source From Your Project to the Scratch Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm "After changing the source, you can sync the changes to your scratch org by deploying the changed source to it with the project deploy start command.")

## Code Examples

```
sf org login web --set-default-dev-hub --alias my-hub-org
sf org create scratch --definition-file config/project-scratch-def.json --set-default --alias my-scratch-org
```

```
sf org create scratch -h
```

```
sf project deploy start
```

```
sf project deploy start --target-org my-other-scratch-org
```

```
sf org create scratch --target-dev-hub jdoe@mydevhub.com --definition-file my-org-def.json --alias yet-another-scratch-org
```

## Related Topics

- Authorization (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm)
- Build Your Own Scratch Org Definition File (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm)
- Create Scratch Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)
- Generate or Change a Password for a Scratch Org User (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_passwd.htm)
- Deploy Source From Your Project to the Scratch Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)
