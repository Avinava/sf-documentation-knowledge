---
title: "Troubleshoot Salesforce CLI"
domain: sfdx-setup
topic: troubleshoot-salesforce-cli
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.251Z
estimatedTokens: 684
keywords: [Troubleshoot, Salesforce, CLI, Here’s, errors, how, fix]
---

# Troubleshoot Salesforce CLI

> Here’s a list of Salesforce CLI errors and how to fix them.

# Troubleshoot Salesforce CLI

Here’s a list of Salesforce CLI errors and how to fix them.

-   **[Check Our GitHub Repository for Issues and Discussions](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_gh_issues.htm)**
    Don't see your problem in this section? Then check out the issues that our customers and open-source community enter in the top-level Salesforce CLI GitHub repository.
-   **[Use the Doctor to Troubleshoot Problems](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_doctor.htm#sfdx_setup_trouble_doctor)**
    Quickly gather Salesforce CLI configuration data and run diagnostic tests with the doctor command. The main use case of the command is to easily generate information files that you can attach to GitHub issues or provide to Salesforce Customer Support. You can also use the doctor command to troubleshoot Salesforce CLI problems by interpreting the output yourself.
-   **[Debug Errors When Deploying or Retrieving Source](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_temp_mdapi_dir.htm)**
    When you run project deploy start or project retrieve start, Salesforce CLI creates a temporary directory with all the metadata files, and then deletes the directory upon successful completion of the command. If you run into errors when executing either command, retaining these files can be useful for debugging purposes.
-   **[Error: Bad CPU Type](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_macos_cpu.htm)**
    You get the error Bad CPU type in executable when you try to install Salesforce CLI on macOS.
-   **[Where is Salesforce CLI Installed?](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_install_dirs.htm)**
    When troubleshooting installation problems, it's often useful to know which directories Salesforce CLI is installed in.
-   **[Error: Command Failed with ENOENT](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_node.htm)**
    After recently installing Salesforce CLI, you get this error when you run a command such as project generate.
-   **[Error After Installing Salesforce CLI on PowerShell Using npm](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_power_npm.htm)**
    After installing Salesforce CLI on Windows PowerShell using npm, you get a security policy error whenever you try to execute any CLI command. Installing with the Windows-specific installer works correctly.
-   **[Error Installing on Windows About the PATH Not Updated](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_windows_path_var.htm)**
    While installing Salesforce CLI on Windows using the \*.exe installer executable, you get the error PATH not updated, original length XX > 1024, where XX is a number greater than 1024.

## Related Topics

- Check Our GitHub Repository for Issues and Discussions (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_gh_issues.htm)
- Use the Doctor to Troubleshoot Problems (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_doctor.htm)
- Debug Errors When Deploying or Retrieving Source (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_temp_mdapi_dir.htm)
- Error: Bad CPU Type (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_macos_cpu.htm)
- Where is Salesforce CLI Installed? (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_install_dirs.htm)
- Error: Command Failed with ENOENT (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_node.htm)
- Error After Installing Salesforce CLI on PowerShell Using npm (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_power_npm.htm)
- Error Installing on Windows About the PATH Not Updated (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_windows_path_var.htm)
