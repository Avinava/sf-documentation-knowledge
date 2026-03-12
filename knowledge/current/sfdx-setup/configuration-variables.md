---
title: "Configuration Variables"
domain: sfdx-setup
topic: configuration-variables
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.046Z
estimatedTokens: 1653
keywords: [Configuration, Variables, config, current, project, projects, two, kinds, local, apply, computer, specific, override, ones, commands]
---

# Configuration Variables

> You can set configuration (config) variables for your current project or for all
    projects. You can set two kinds of config variables: global and local. Global config variables
    apply to all projects on your computer. Local config variables apply to a specific project.
    Local config variables override global ones when commands are run from within a Salesforce DX
    project directory.

# Configuration Variables

You can set configuration (config) variables for your current project or for all projects. You can set two kinds of config variables: global and local. Global config variables apply to all projects on your computer. Local config variables apply to a specific project. Local config variables override global ones when commands are run from within a Salesforce DX project directory.

To set a config variable for the current project:

```

```

For local config variables, you must issue the command from within the Salesforce DX project directory.

To set the config variable for all your projects:

```

```

You can issue global commands anywhere or within any Salesforce DX project, yet they apply to all the Salesforce CLI commands you run.

View the local and global config variables that you have set with the config list command. The output lists the local variables for the project directory from which you’re running the command and all global variables.

```

```

```

```

To return one or more previously set config variables, use config get. It’s often useful to specify JSON output for this command for easier parsing in a continuous integration (CI) environment. For example, to return the value of target-org and target-dev-hub:

```

```

To unset a config variable, run the config unset command. For example, to unset the org-instance-url config variable:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_setup)

#### Note

Alternately, you can set all CLI config variables as environment variables. Environment variables override config variables.

## List of Configuration Variables

These are the Salesforce CLI configuration variables.

### org-api-version

The API version for a specific project or all projects. Normally, Salesforce CLI assumes that you’re using the same version of the CLI as the Dev Hub org.

This example sets the API version for all projects (globally) to 57.0.

```

```

Be sure not to confuse this config variable with the [sourceApiVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) project option, which has a similar name. See [How API Version and Source API Version Work in Salesforce CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_apiversion.htm "Salesforce CLI uses both the API version and source API version when deploying or retrieving metadata to or from an org. While they sound the same, and are often set to the same value, the two settings work differently.") for more information.

Environment variable: SF\_ORG\_API\_VERSION

```

```

### org-capitalize-record-types

Specifies whether Salesforce CLI capitalizes the first letter of a default record type when it creates a scratch org. Valid values are true or false. The default value is true.

Default record types are defined in the objectSettings option of a scratch org definition file, as described in [Scratch Org Definition File Options](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm). The setting is required before installing a package that creates record types.

```

```

Environment variable: SF\_CAPITALIZE\_RECORD\_TYPES

### org-custom-metadata-templates

Specifies either a local directory or a cloned GitHub repository that contains the default custom code templates used by the project generate command. The GitHub URL points to either the root directory that contains your templates or to a subdirectory on a branch in the repo that contains your templates. For example:

```

```

Environment variable: SF\_ORG\_CUSTOM\_METADATA\_TEMPLATES

```

```

### target-org

The username or alias for an org that all commands run against by default.

```

```

Environment variable: SF\_TARGET\_ORG

```

```

### target-dev-hub

The username or alias for your default Dev Hub org.

```

```

Environment variable: SF\_TARGET\_DEV\_HUB

```

```

### target-devops-center (DevOps Center commands only)

The username or alias for the org in which DevOps Center is installed.

```

```

### disable-telemetry

By default, Salesforce CLI collects usage information, user environment information, and crash reports. This option allows you to opt out.

```

```

Environment variable: SF\_DISABLE\_TELEMETRY

### org-instance-url

The URL of the Salesforce instance that’s hosting your org. Default value is https://login.salesforce.com. We recommend that you set this config variable to the My Domain login URL for your org. You can find the My Domain login URL on the My Domain page in Setup.

```

```

Environment variable: SF\_ORG\_INSTANCE\_URL

```

```

### org-max-query-limit

The maximum number of Salesforce records returned by a Salesforce CLI command. Default value is 10,000.

For example, let’s say you run sf org list metadata -m Role on a Salesforce org that has 15,000 roles. By default the command displays only 10,000 roles. A message warns you that the command retrieved only some of the roles. To see all of them, set this config variable to a larger number.

```

```

Environment variable: SF\_ORG\_MAX\_QUERY\_LIMIT

```

```

### org-metadata-rest-deploy

If true, Salesforce CLI uses Metadata REST API for deployments. By default, Salesforce CLI uses SOAP. Deployments using REST aren’t bound by the 39-MB.zip file size limit that applies to SOAP deployments.

```

```

Environment variable: SF\_ORG\_METADATA\_REST\_DEPLOY

#### See Also

-   [Disable Salesforce CLI Data Collection and Metrics](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_telemetry.htm "Salesforce collects usage data and metrics (telemetry) to help improve Salesforce CLI. We collect anonymous information related to the use of Salesforce CLI and plugins, such as which commands and flags were run, and performance and error data.")

-   [CLI Parameter Resolution Order](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_param_resolution.htm "Because you can specify parameters for a given Salesforce CLI command in several ways, it’s important to know the order of resolution.")

-   [*Salesforce DX Developer Guide*: Salesforce DX Usernames and Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_usernames_orgs.htm "Salesforce DX Developer Guide: Salesforce DX Usernames and Orgs - HTML (New Window)")

-   [*Salesforce DX Developer Guide*: Authorization](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm "Salesforce DX Developer Guide: Authorization - HTML (New Window)")

## Code Examples

```
sf config set name <value>
```

```apex
sf config set name <value> --global
```

```
sf config list
```

```
List Config
==========================================================
| Name                Value                       Location 
| ─────────────────── ─────────────────────────── ──────── 
| org-instance-url    https://test.salesforce.com Local    
| org-max-query-limit 20000                       Local    
| target-dev-hub      DevHub                      Local
```

```
sf config get target-org target-dev-hub --json
```

## Related Topics

- How API Version and Source API Version Work in Salesforce CLI (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_apiversion.htm)
- Disable Salesforce CLI Data Collection and Metrics (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_telemetry.htm)
- CLI Parameter Resolution Order (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_param_resolution.htm)
