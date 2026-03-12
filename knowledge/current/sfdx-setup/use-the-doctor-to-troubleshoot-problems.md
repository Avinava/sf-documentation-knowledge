---
title: "Use the Doctor to Troubleshoot Problems"
domain: sfdx-setup
topic: use-the-doctor-to-troubleshoot-problems
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.236Z
estimatedTokens: 2596
keywords: [Doctor, Troubleshoot, Problems, Quickly, gather, Salesforce, CLI, configuration, data, run, diagnostic, tests, command, main, case]
---

# Use the Doctor to Troubleshoot Problems

> Quickly gather Salesforce CLI configuration data and run diagnostic tests with the
      doctor command. The main use case of the command is to
    easily generate information files that you can attach to GitHub issues or provide to Salesforce
    Customer Support. You can also use the doctor command to
    troubleshoot Salesforce CLI problems by interpreting the output yourself.

# Use the Doctor to Troubleshoot Problems

Quickly gather Salesforce CLI configuration data and run diagnostic tests with the doctor command. The main use case of the command is to easily generate information files that you can attach to GitHub issues or provide to Salesforce Customer Support. You can also use the doctor command to troubleshoot Salesforce CLI problems by interpreting the output yourself.

Run without flags, the command first displays basic information, such as whether you're on the latest CLI version. It then writes your configuration and a detailed diagnosis to a JSON file in the current directory. Use the \--output-dir flag to specify a different directory. The name of the file is <timestamp>-diagnosis.json, such as 1708472775780-diagnosis.json.

```

```

The CLI doctor is in and ready to diagnose all your problems!

## Run the Doctor on a Specific Command or Plugin

Use the \--command flag to run a specific command in debug mode. Encapsulate the command in double quotes. The doctor generates two additional log files, one for the standard output (stdout) and another with debug information (stderr). The log files are called <timestamp>-command-stdout.log and <timestamp>-command-debug.log, respectively.

```

```

To run diagnostic tests on a specific plugin, rather than Salesforce CLI itself, use the \--plugin flag. If the plugin isn't listening to the doctor, then you get a warning and no data.

```

```

## Create a GitHub Issue

To create a [GitHub issue](https://github.com/forcedotcom/cli/issues), use the \--create-issue flag, enter a title at the prompt, and a browser window automatically opens with a partially filled GitHub issue. Enter the remaining information about your specific issue, click **Submit new issue**, and the Salesforce CLI team is alerted about your issue.

## Interpret the Initial Doctor Output

The doctor command first outputs basic information to the terminal about your Salesforce CLI installation in the form of diagnostic tests and whether they passed or failed, as shown in this sample output. The command outputs more comprehensive information to a file in the specified location.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_setup)

#### Note

The doctor command includes a set of diagnostic tests that always run. Plugin developers can also add custom diagnostic tests to the doctor command. If you’ve installed additional plugins that have these customizations, then your output looks different.

Each test that results in a fail or warn usually has a corresponding suggestion in the Suggestions section at the end of the output; make sure that you check them out!

Let’s look at the diagnostic tests that always run, and what you can do if they fail.

-   **Test Name**: salesforcedx plugin not installed

    **What it does**: Checks whether the salesforcedx plugin is installed. Having the plugin installed is an error, because the Salesforce CLI team stopped supporting it, and then removed it from the core CLI, many years ago. But some CLI installations continue to have it installed, which can cause problems.

    If you get a fail result for this test, then your installation includes the salesforcedx plugin. You must uninstall it and update to the latest CLI version:

    ```

    ```

-   **Test Name**: no linked plugins

    **What it does**: Checks for any linked plugins in the CLI. Because the test checks for an *absence* of linked plugins, a pass means no linked plugins are detected, and a fail means that the doctor command detected at least one linked plugin. Linked plugins are plugins that you install from local files with the plugins link command.

    If you get a fail for this test, see the Suggestions section at the end of the doctor output for the list of linked plugins. If you explicitly linked these plugins, great! If, however, you see a plugin that you don’t want linked, unlink it so you use the plugin version that’s included in Salesforce CLI. Another problem with linked plugins is that they aren’t updated when you update the CLI. Here’s how to unlink a plugin:

    ```

    ```

-   **Test Name**: \[@salesforce/plugin-deploy-retrieve\] sourceApiVersion matches apiVersion

    **What it does**: Checks whether the values of the apiVersion and sourceApiVersion variables are the same. Salesforce CLI uses the API version and source API version when deploying and retrieving metadata to and from the org.

    If you get a fail or a warn, see the Suggestions section at the end of the doctor output for an explanation of why the test didn’t pass. For example, the values might be the same because you haven’t explicitly set them, and so they both default to the same value. If you desire this behavior, you don’t need to do anything.

    See [How API Version and Source API Version Work in Salesforce CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_apiversion.htm "Salesforce CLI uses both the API version and source API version when deploying or retrieving metadata to or from an org. While they sound the same, and are often set to the same value, the two settings work differently.") for more information about how these two variables interact.

-   **Test Name**: using latest or latest-rc CLI version

    **What it does**: Checks whether the Salesforce CLI version is either the latest or the release candidate.

    If you get a fail, we recommend that you update to the latest release of Salesforce CLI if possible. See [Update Salesforce CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm "If you want to ensure that you’re running the latest version of Salesforce CLI, you can manually update it.") for more information.

    The doctor command also checks whether you’re using sfdx (v7) or sf (v1), both of which are deprecated. If you see this warning, read [Move from sfdx (v7) to sf (v2)](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_move_to_sf_v2.htm "If you’re currently using sfdx (v7), we highly recommend that you move to sf (v2). The move is easy: you first uninstall sfdx (v7) and then install sf (v2). After you move, the CLI commands that you’ve been running in a terminal or continuous integration (CI) scripts continue to work as before.") for information on how to move to sf (v2).


## Interpret the Diagnostic File Information

After displaying basic information in the terminal, the doctor command then creates a JSON diagnostic file in the current directory, or the directory specified by the \--output-dir flag. Let’s look at the main JSON objects and keys, and the diagnostic information they provide.

### versionDetail

Provides version information about Salesforce CLI and your computer, similar to the output of the sf version --verbose command. The JSON key names are self-explanatory, but here’s a recap anyway.

-   cliVersion—Version of the installed Salesforce CLI.
-   nodeVersion—Version of Node.js that Salesforce CLI is using.
-   osVersion and architecture—Operating system version and architecture of your computer.
-   rootPath—Location of the Salesforce CLI binary file.
-   pluginVersions—List of core and user-installed plugins, along with their versions. User-installed plugins include the JIT plugins, such as packaging and devops-center.

### sfdxEnvVars and sfEnvVars

Lists the environment variables that are set for your Salesforce CLI installation. The list includes user environment variables that you’ve explicitly set and internal variables that Salesforce CLI sets. See [Salesforce CLI Environment Variables](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm#sfdx_dev_cli_env_variables "You can set environment variables to configure certain values that Salesforce CLI uses.") for list of user environment variables.

The sfdxEnvVars JSON object lists the deprecated SFDX\_ environment variables. Even though they’re deprecated, they still affect the behavior of Salesforce CLI. The sfEnvVars object lists the SF\_ environment variables.

Most of the deprecated SFDX\_ environment variables have an SF\_ equivalent with a similar name, such as SFDX\_HIDE\_RELEASE\_NOTES and SF\_HIDE\_RELEASE\_NOTES. Some environment variables had bigger name changes between SFDX and SF, see the [Environment Variables section of the Migration Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_mig_env_config.htm) for details. If you set these SFDX\_ and SF\_ equivalent pairs to different values, the SF\_ environment variable takes precedence.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_setup)

#### Note

We highly recommend that you use only the SF\_ environment variables.

Check the values of the user environment variables and ensure they’re what you expect and want. If you see a value you don’t want, determine how you’ve set the environment variable and change it as needed.

### cliConfig

Lists the Salesforce CLI configuration settings, most of which are used by the underlying [oclif framework](https://oclif.io/), which Salesforce CLI is built on. A few examples include:

-   binPath—Name and location of the sf binary.
-   cacheDir—Directory that Salesforce CLI uses for internal caching.
-   configDir—Directory in which Salesforce CLI stores internal configuration data.
-   dataDir—Directory in which Salesforce CLI stores data.
-   name—The npm name of Salesforce CLI, which is @salesforce/cli.
-   theme—The default color theme for \--help messages.
-   shell—Shell you’re using, such as bash or zsh. The value is oclif’s best guess, but this information is notoriously difficult to glean, so the value can be wrong or unknown, especially on Windows computers.

See the [oclif documentation](https://oclif.io/docs/config/) for more information.

### pluginSpecificData

If you ran the doctor command with either the \--command or \--plugin flag, and the associated plugin is listening to the doctor, then this section contains additional diagnostic information about the plugin. If the plugin isn’t listening, then this section is empty.

By default, the doctor runs all diagnostic tests, including all plugin-defined tests. You can target tests for a specific plugin using the \--plugin flag as a way to reduce some noise or if you're a plugin author writing new doctor tests.

## Code Examples

```
sf doctor --output-dir diagnostic-files
```

```
sf doctor --command "org list --all"
```

```
sf doctor --plugin @salesforce/plugin-deploy-retrieve
```

```
sf doctor --output-dir diagnostic-files
=== Running all diagnostics

pass - salesforcedx plugin not installed
fail - no linked plugins
warn - [@salesforce/plugin-deploy-retrieve] sourceApiVersion matches apiVersion
pass - using latest or latest-rc CLI version
...
```

```
sf plugins uninstall salesforcedx
sf update
```

## Related Topics

- How API Version and Source API Version Work in Salesforce CLI (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_apiversion.htm)
- Update Salesforce CLI (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm)
- Move from sfdx (v7) to sf (v2) (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_move_to_sf_v2.htm)
- Salesforce CLI Environment Variables (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm)
