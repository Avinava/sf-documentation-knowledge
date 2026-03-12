---
title: "Salesforce CLI Configuration and Tips"
domain: sfdx-setup
topic: salesforce-cli-configuration-and-tips
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.034Z
estimatedTokens: 1433
keywords: [Salesforce, CLI, Configuration, Tips, development, testing, tasks, include, authorizing, Dev, Hub, org, creating, scratch, synchronizing]
---

# Salesforce CLI Configuration and Tips

> Use Salesforce CLI for most development and testing tasks. These tasks include
    authorizing a Dev Hub org, creating a scratch org, synchronizing source code between your
    scratch orgs and VCS, and running tests.

# Salesforce CLI Configuration and Tips

Use Salesforce CLI for most development and testing tasks. These tasks include authorizing a Dev Hub org, creating a scratch org, synchronizing source code between your scratch orgs and VCS, and running tests.

You can start using Salesforce CLI right after you install it.

The CLI commands are grouped into top-level topics. For example, the org top-level topic contains commands to create and manage orgs, such as org list, org create sandbox, and org generate password. The config top-level topic contains commands for managing configuration variables.

Run \--help at each level to get more information.

```

```

Run this command to view all available Salesforce CLI commands:

```

```

To see all commands with their flags, run the command with the \--json flag:

```

```

-   **[Autocomplete Salesforce CLI Commands and Flags](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_autocomplete.htm#sfdx_dev_cli_autocomplete)**
    Use autocomplete to quickly find the exact Salesforce CLI command and flag you want to execute.
-   **[Use Salesforce CLI from Behind a Company Firewall or Web Proxy](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli_firewall.htm)**
    If you install or update Salesforce CLI on a computer that’s behind a company firewall or web proxy, you sometimes receive error messages. In this case, you must further configure your system.
-   **[Windows Performance Suggestions](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_perf_windows.htm)**
    Follow these suggestions to improve the performance of Salesforce CLI on Windows.
-   **[Configuration Variables](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm#sfdx_dev_cli_config_values)**
    You can set configuration (config) variables for your current project or for all projects. You can set two kinds of config variables: global and local. Global config variables apply to all projects on your computer. Local config variables apply to a specific project. Local config variables override global ones when commands are run from within a Salesforce DX project directory.
-   **[Salesforce CLI Environment Variables](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm#sfdx_dev_cli_env_variables)**
    You can set environment variables to configure certain values that Salesforce CLI uses.
-   **[How API Version and Source API Version Work in Salesforce CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_apiversion.htm)**
    Salesforce CLI uses both the API version and source API version when deploying or retrieving metadata to or from an org. While they sound the same, and are often set to the same value, the two settings work differently.
-   **[CLI Parameter Resolution Order](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_param_resolution.htm)**
    Because you can specify parameters for a given Salesforce CLI command in several ways, it’s important to know the order of resolution.
-   **[Support for JSON Responses](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_json_support.htm#sfdx_dev_cli_json_support)**
    Salesforce CLI commands typically display their output to the terminal or command prompt (stdout) in non-structured, human-readable format. Messages written to the log file (stderr) are always in JSON format.
-   **[Specify Topics and Commands in Any Order](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_taxfree.htm)**
    When you type a command at a terminal or command prompt, you can enter the topics and commands in any order. Salesforce CLI determines which command you mean and automatically runs it without errors.
-   **[Customize the Colors in Help Output](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_help_theme.htm)**
    When you run a command with the \--help or \-h flag, the help output uses colors to highlight certain parts, such as command and flag descriptions, executable name, and more. If you don’t like the default colors, you can customize them.
-   **[Specify Flag Values in Files](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_flag_values_in_files.htm)**
    When you run a Salesforce CLI command, you can optionally store the command's flag values in local text files rather than specify the flag values at the command line. This feature is useful if your command has many flags, or the flag values are very long, and the resulting command exceeds the maximum string length you can use at a terminal or command prompt.
-   **[Log Messages and Log Levels](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_log_messages.htm)**
    Salesforce CLI writes all log messages to a rotating file in the user’s home directory whose name is based on the day. For example, the logs for August 8, 2024 are written to the file USER\_HOME\_DIR/.sf/sf-2024-08-07.log. Salesforce CLI command invocations append log messages to this running log file. Only errors are output to the terminal or command window from which you run the CLI.
-   **[Enable 256-Bit Encryption of Local Authorization Files](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_enable_256_bit_encryption.htm)**
    Salesforce CLI uses 128-bit encryption to encrypt its local internal files, such as the authorization (auth) files associated with the orgs you’ve logged into. For increased security, you can enable 256-bit encryption.
-   **[Disable Salesforce CLI Data Collection and Metrics](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_telemetry.htm)**
    Salesforce collects usage data and metrics (telemetry) to help improve Salesforce CLI. We collect anonymous information related to the use of Salesforce CLI and plugins, such as which commands and flags were run, and performance and error data.

## Code Examples

```
sf --help                      // lists all top-level topics
sf org --help                  // lists all the topics and commands under "org"
sf org create --help           // lists all the commands in the subtopic "org create"
sf org create sandbox --help   // detailed info about the "org create sandbox" command
sf org create sandbox -h       // quick and short info about the "org create sandbox" command
```

```
sf commands
```

```
sf commands --json
```

## Related Topics

- Autocomplete Salesforce CLI Commands and Flags (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_autocomplete.htm)
- Use Salesforce CLI from Behind a Company Firewall or Web Proxy (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli_firewall.htm)
- Windows Performance Suggestions (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_perf_windows.htm)
- Configuration Variables (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm)
- Salesforce CLI Environment Variables (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm)
- How API Version and Source API Version Work in Salesforce CLI (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_apiversion.htm)
- CLI Parameter Resolution Order (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_param_resolution.htm)
- Support for JSON Responses (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_json_support.htm)
- Specify Topics and Commands in Any Order (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_taxfree.htm)
- Customize the Colors in Help Output (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_help_theme.htm)
