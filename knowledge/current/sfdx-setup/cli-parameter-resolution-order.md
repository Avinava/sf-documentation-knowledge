---
title: "CLI Parameter Resolution Order"
domain: sfdx-setup
topic: cli-parameter-resolution-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.081Z
estimatedTokens: 610
keywords: [CLI, Resolution, Order, Because, specify, Salesforce, command, several, ways, it’s, know]
---

# CLI Parameter Resolution Order

> Because you can specify parameters for a given Salesforce CLI command in several ways,
        it’s important to know the order of resolution.

# CLI Parameter Resolution Order

Because you can specify parameters for a given Salesforce CLI command in several ways, it’s important to know the order of resolution.

Salesforce CLI resolves command-line flags and arguments, definition files, environment variables, and settings in this order, which means items at the top of the list take precedence over items lower down:

-   Command-line flags such as \--target-org.
-   Options listed in a file specified at the command line. An example is a scratch org definition in a file, which you specify with the \--definition-file flag of org create scratch. If you specify a flag at the command line, such as \--edition, whose value differs from what exists in the definition file, the command-line flag takes precedence.
-   Environment variables, such as SF\_TARGET\_ORG.
-   Local configuration variables, such as target-org or target-dev-hub. To view the local configuration variables, run sf config list from your project directory.
-   Global CLI configuration variables. To view the global configuration variables, run sf config list --global from any directory.

Remember, command-line flags are at the top of the precedence list. For example, let’s say you set the SF\_TARGET\_ORG environment variable to myorg@mydomain.com. If you specify \--target-org myotherorg@myotherdomain.com when you run a command, it connects to an org with the myotherorg@myotherdomain.com username.

Similarly, let’s say you set the configuration variable target-org to myorg@mydomain.com. If you specify \--target-org myotherorg@myotherdomain.com when you run a command, you connect to an org with the myotherorg@myotherdomain.com username.

#### See Also

-   [Configuration Variables](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm#sfdx_dev_cli_config_values "You can set configuration (config) variables for your current project or for all projects. You can set two kinds of config variables: global and local. Global config variables apply to all projects on your computer. Local config variables apply to a specific project. Local config variables override global ones when commands are run from within a Salesforce DX project directory.")

-   [Salesforce CLI Environment Variables](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm#sfdx_dev_cli_env_variables "You can set environment variables to configure certain values that Salesforce CLI uses.")

## Related Topics

- Configuration Variables (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm)
- Salesforce CLI Environment Variables (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm)
