---
title: "sf"
domain: cli-commands
topic: sf
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-11T10:26:31.431Z
---

# sf

# sf

Commands to manage Salesforce DX projects, create and manage scratch orgs and sandboxes, synchronize source to and from orgs, create and install packages, and more.

This version of the sf command reference includes details about version 2.126.1 of the sf executable of Salesforce CLI and the following plug-in versions:

-   @salesforce/plugin-deploy-retrieve version 3.24.11
-   @salesforce/plugin-settings version 2.4.60
-   @salesforce/plugin-info version 3.4.107
-   @salesforce/plugin-sobject version 1.4.85
-   @salesforce/plugin-limits version 3.3.79
-   @salesforce/plugin-schema version 3.3.96
-   @salesforce/plugin-custom-metadata version 3.3.80
-   @salesforce/plugin-data version 4.0.75
-   @salesforce/plugin-community version 3.3.48
-   @salesforce/plugin-signups version 2.6.56
-   @salesforce/plugin-user version 3.6.53
-   @salesforce/plugin-org version 5.9.71
-   @salesforce/plugin-packaging version 2.25.5
-   @salesforce/plugin-templates version 56.9.2
-   @salesforce/plugin-apex version 3.9.11
-   @salesforce/plugin-auth version 4.2.0
-   @salesforce/plugin-dev version 2.5.2
-   @salesforce/sfdx-plugin-lwc-test version 1.2.1
-   @salesforce/plugin-devops-center version 1.2.27
-   @salesforce/plugin-marketplace version 1.3.10
-   @salesforce/plugin-code-analyzer version 5.10.0
-   @salesforce/plugin-api version 1.3.11
-   @salesforce/plugin-agent version 1.30.11
-   @salesforce/plugin-flow version 1.0.5

For information about installing Salesforce CLI, see the [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm "HTML (New Window)").

For information about Salesforce CLI changes, see the [Salesforce CLI Release Notes](https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md "HTML (New Window)").

-   **[agent Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_commands_unified)**  
    Commands to work with agents.
-   **[alias Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_alias_commands_unified.htm#cli_reference_alias_commands_unified)**  
    Use the alias commands to manage your aliases.
-   **[apex Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_unified.htm#cli_reference_apex_commands_unified)**  
    Use the apex commands to create Apex classes, execute anonymous blocks, view your logs, run Apex tests, and view Apex test results.
-   **[api Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_api_commands_unified.htm#cli_reference_api_commands_unified)**  
    Commands to interact with API calls.
-   **[cmdt Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm#cli_reference_cmdt_commands_unified)**  
    Generate custom metadata types and their records.
-   **[code-analyzer Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_code-analyzer_commands_unified.htm#cli_reference_code-analyzer_commands_unified)**  
    Analyze your code to ensure it adheres to best practices.
-   **[community Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_community_commands_unified.htm#cli_reference_community_commands_unified)**  
    Create and publish an Experience Cloud site.
-   **[config Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm#cli_reference_config_commands_unified)**  
    Commands to configure Salesforce CLI.
-   **[data Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_commands_unified)**  
    Manage records in your org.
-   **[dev Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm#cli_reference_dev_commands_unified)**  
    Commands for sf plugin development.
-   **[doctor Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_doctor_commands_unified.htm#cli_reference_doctor_commands_unified)**  
    Tools for diagnosing problems with Salesforce CLI.
-   **[flow Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_flow_commands_unified.htm#cli_reference_flow_commands_unified)**  
    Commands for testing flows
-   **[force Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm#cli_reference_force_commands_unified)**  
    Legacy commands for backward compatibility.
-   **[info Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_info_commands_unified.htm#cli_reference_info_commands_unified)**  
    Access Salesforce CLI information from the command line.
-   **[logic Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_logic_commands_unified.htm#cli_reference_logic_commands_unified)**  
    Use the logic commands to run Apex and Flow tests and view the test results.
-   **[org Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_commands_unified)**  
    Commands to create and manage orgs and scratch org users.
-   **[package Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_commands_unified)**  
    Commands to develop and install unlocked packages and managed 2GP packages.
-   **[package1 Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package1_commands_unified.htm#cli_reference_package1_commands_unified)**  
    Commands to develop first-generation managed and unmanaged packages.
-   **[plugins Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_plugins_commands_unified.htm#cli_reference_plugins_commands_unified)**  
    Find and manage plugins
-   **[project Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_commands_unified)**  
    Work with projects, such as deploy and retrieve metadata.
-   **[schema Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_schema_commands_unified.htm#cli_reference_schema_commands_unified)**  
    Generate metadata files.
-   **[sobject Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_sobject_commands_unified.htm#cli_reference_sobject_commands_unified)**  
    Commands to interact with Salesforce objects.
-   **[template Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_template_commands_unified.htm#cli_reference_template_commands_unified)**  
    Collection of Salesforce templates.
-   **[Help for sf Commands](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_help_unified.htm)**  
    The \-h and \--help flags show details about sf topics and their commands.