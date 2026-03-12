---
title: "Salesforce CLI Environment Variables"
domain: sfdx-setup
topic: salesforce-cli-environment-variables
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:19.069Z
estimatedTokens: 6350
keywords: [Salesforce, CLI, Environment, Variables, configure, certain, uses, FORCE, _OPEN, _URL, _SHOW, _SPINNER, _DELAY, _ACCESS, _TOKEN]
---

# Salesforce CLI Environment Variables

> You can set environment variables to configure certain values that Salesforce CLI uses.

# Salesforce CLI Environment Variables

You can set environment variables to configure certain values that Salesforce CLI uses.

How you set an environment variable depends on your operating system and whether you want it to apply to only the current session or always. The exact steps are beyond the scope of this document, but here are some hints.

-   **Windows:** Use the Control Panel (**System** > **Advanced System Settings** > **Environment Variables**) or the command-line set command. See the [Windows documentation](https://learn.microsoft.com/en-us/windows/) for details.
-   **macOS or Linux**: Open a terminal and use the export command to set it for your current shell session:

    ```

    ```

    To set an environment for all shell sessions, edit your shell configuration files like .bashrc or .zshrc .


Environment variables override [Configuration Variables](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm#sfdx_dev_cli_config_values "You can set configuration (config) variables for your current project or for all projects. You can set two kinds of config variables: global and local. Global config variables apply to all projects on your computer. Local config variables apply to a specific project. Local config variables override global ones when commands are run from within a Salesforce DX project directory."). To set an environment variable for only the command you’re running, prepend the variable:

```

```

## FORCE\_OPEN\_URL

Specifies the web page that opens in your browser when you run org open. For example, to open Lightning Experience, set to lightning.

Equivalent to the \--path flag of org open.

## FORCE\_SHOW\_SPINNER

Set to true to show a spinner animation on the command line when running asynchronous CLI commands. Default is false.

## FORCE\_SPINNER\_DELAY

Specifies the speed of the spinner in milliseconds. The default value is 60.

## SF\_ACCESS\_TOKEN

Specifies an access token when using the org login access-token command. If you don’t set this environment variable, the command prompts you for the access token. Useful for continuous integration (CI) scripts.

## SF\_APPLY\_REPLACEMENTS\_ON\_CONVERT

Set to true to test string replacement without actually deploying files to the org. Instead, run project convert source to convert the files to metadata format and then inspect the files to see what will be deployed.

See [Replace Strings in Code Before Deploying](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_string_replace.htm) for details.

## SF\_AUDIENCE\_URL

Overrides the **aud** (audience) field used for JWT authentication so that it matches the expected value of the authorization server URL for the org you’re logging into. For example, https://MyDomainName.my.salesforce.com or https://login.salesforce.com for a production org, and https://MyDomainName\--SandboxName.sandbox.my.salesforce.com or https://test.salesforce.com for a sandbox.

Example:

```

```

## SF\_CAPITALIZE\_RECORD\_TYPES

Specifies whether Salesforce CLI capitalizes the first letter of a default record type when it creates a scratch org. Valid values are true or false. The default value is true.

Default record types are defined in the objectSettings option of a scratch org definition file, as described in [Scratch Org Definition File Options](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm). The setting is required before installing a package that creates record types.

Example:

```

```

## SF\_CI\_HEARTBEAT\_FREQUENCY\_MS

Defines how frequently a CLI command repeats the last status message if no new update is received from the org. This environment variable applies only to commands that produce multi-stage output in continuous integration (CI) environments.

Some commands, such as org create scratch and project deploy start, display the stages they are going through as they interact with the org. In a CI job, if no new status is received within 5 minutes, then the command displays the last status message again. Use this environment variable to change this interval.

The default value is 300000 (5 minutes).

For example, to specify a 10-minute interval:

```

```

## SF\_CI\_UPDATE\_FREQUENCY\_MS

Specifies the wait time between CLI command status updates. This environment variable applies only to commands that produce multi-stage output in continuous integration (CI) environments.

Some commands, such as org create scratch and project deploy start, display the stages they are going through as they interact with the org. In a CI job, the command might attempt to update the output 10 times within a 5-second interval (for example), but the command actually displays only one of the updates. Use this environment variable to change the interval.

The default value is 5000 (5 seconds).

For example, to specify a 10-second interval:

```

```

## SF\_CONTAINER\_MODE

When set to true, certain commands change their behavior when run in a headless environment. Specifically, the org open command returns a one-time URL rather than open a browser. The org login web command outputs authentication alternatives that don't require opening a browser.

When set to false (the default value), the two commands open the org in a browser.

This environment variable is useful in headless environments, such as Docker or continuous integration.

## SF\_CONTENT\_TYPE

When set to JSON, specifies that all CLI commands output results in JSON format. If you set the environment variable to any other value, or unset it, the CLI commands output their results as specified by the flags.

Example:

```

```

## SF\_CRYPTO\_V2

Used to enable 256-bit encryption of internal Salesforce CLI files, such as the authorization (auth) files associated with the orgs you’ve logged into. Salesforce CLI uses 128-bit encryption by default.

For more information, see [Enable 256-Bit Encryption of Authorization Files](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_enable_256_bit_encryption.htm).

## SF\_CUSTOM\_ORG\_METADATA\_TEMPLATES

Specifies either a local directory or a cloned GitHub repository that contains the default custom code templates used by the project create command. The GitHub URL points to either the root directory that contains your templates or to a subdirectory on a branch in the repo that contains your templates.

Example:

```

```

## SF\_DEPLOY\_SIZE\_THRESHOLD

Salesforce CLI displays a warning when you run project deploy start and either the total size of the metadata or the number of metadata files is over 80% of the corresponding [Metadata API limit](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_metadata.htm). Use this environment variable to change the threshold by setting it to a number from 1 through 100. The default value is 80.

This example sets the threshold to 70%, which means that you get the warning when you try to deploy metadata that's over 70% of the limit.

```

```

Salesforce CLI always attempts to deploy the metadata when you run the project deploy start command, even if it determines that the metadata size or file count is likely over the limit.

## SF\_DISABLE\_AUTOUPDATE or SF\_AUTOUPDATE\_DISABLE (either var works)

Set to true to disable the auto-update feature of the CLI. By default, the CLI periodically checks for and installs updates.

## SF\_DISABLE\_DNS\_CHECK

Set to true to stop the Salesforce CLI commands that require an org to check whether the org is connected. For example, the org create scratch command requires a Dev Hub org. The default value is false (always check.)

This environment variable is useful if you get this error when running certain Salesforce CLI commands.

```

```

First try setting the SF\_DNS\_TIMEOUT environment variable to increase the number of seconds that Salesforce CLI waits for a response. If that doesn’t work, try disabling the check entirely with the SF\_DISABLE\_DNS\_CHECK environment variable.

## SF\_DISABLE\_SOURCE\_MEMBER\_POLLING

Set to true to disable polling of your org’s SourceMember object when you run the project deploy|retrieve commands.

The commands poll the SourceMember object to track what's changed between your local source and the org after the deploy or retrieve completes. If you have a large metadata deployment, however, the polling can take a while, or even time out. Sometimes you don't require source tracking at all, such as in a continuous integration (CI) job. These use cases are good candidates for setting this environment variable.

The environment variable works with both scratch orgs and sandboxes.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_setup)

#### Warning

When you disable SourceMember polling, the CLI’s internal tracking of what’s changed between your local source and org metadata gets out of sync. As a result, subsequent runs of the project deploy|retrieve commands are unreliable, and it’s up to you to synchronize your source. To reset source tracking, use the project reset tracking command.

## SF\_DISABLE\_SOURCE\_MOBILITY

Set to true to disable the source mobility feature.

With source mobility you can move source files within your local Salesforce DX project without the source-tracking feature determining that you've deleted and then recreated a metadata component.

The default value of this environment variable is false, which means that source mobility is enabled by default.

## SF\_DISABLE\_TELEMETRY

Set to true to disable the CLI from collecting usage information, user environment information, and crash reports.

## SF\_DNS\_TIMEOUT

Specifies the number of seconds that Salesforce CLI commands that require an org wait for a response when checking whether the org is connected. For example, the org create scratch command requires a Dev Hub org. If the commands don’t receive a response in that time, they time out. The default value is 3.

This environment variable is useful if you get this error when running certain Salesforce CLI commands.

```

```

First try setting the SF\_DNS\_TIMEOUT environment variable to increase the number of seconds that Salesforce CLI waits for a response. If that doesn’t work, try disabling the check entirely with the SF\_DISABLE\_DNS\_CHECK environment variable.

## SF\_DOMAIN\_RETRY

Specifies the time, in seconds, that the CLI waits for the Lightning Experience domain to resolve and become available in a newly created scratch org.

The default value is 240 (4 minutes). Set the variable to 0 to bypass the Lightning Experience domain check entirely.

## SF\_HIDE\_RELEASE\_NOTES

Set to true to silence the automatic display of the release notes when you run sf update. The default value is false.

Example:

```

```

## SF\_HIDE\_RELEASE\_NOTES\_FOOTER

Set to true to silence the boilerplate footer about displaying the release notes when you run sf update. The default value is false.

Example:

```

```

## SF\_IMPROVED\_CODE\_COVERAGE

Scopes Apex test results to the classes entered during a test run when running apex run test and apex get test. Set to true to improve code coverage.

## SF\_JSON\_TO\_STDOUT

Sends messages when Salesforce CLI commands fail to stdout instead of stderr. Setting this environment variable to true is helpful for scripting use cases.

Example:

```

```

## SF\_LIST\_METADATA\_BATCH\_SIZE

Specifies the number of concurrent API requests that the project generate manifest --from-org command makes when discovering the metadata that exists in an org and using it to generate a manifest. Set the environment variable to a batch size that works best for your org and environment. The default value is 500.

This example limits the number of concurrent API calls to 20:

```

```

If you experience timeouts or inconsistent manifest contents, then setting this environment variable can improve accuracy when running project generate manifest. However, the command takes longer to run because it sends fewer requests at a time.

## SF\_LOG\_LEVEL

Sets the level of messages that the CLI writes to the log file.

Example:

```

```

## SF\_LOG\_ROTATION\_PERIOD

Time period after which Salesforce CLI rotates the log file. Rotating the log file refers to making a backup copy of the file and then clearing out the current log file to start afresh. For example, if set to 1d, Salesforce CLI rotates the log file daily at midnight.

You can set this variable to 1h (one hour) or 1m (one minute) if you want more, but smaller, log files. Any other value is treated as 1d, which is the default value.

Example:

```

```

## SF\_MDAPI\_TEMP\_DIR

Directory that holds the retrieved, deployed, or converted metadata files when you run these CLI commands:

-   project retrieve start
-   project deploy start
-   project delete source
-   project convert mdapi|source

If you don’t set this environment variable, the commands automatically delete the directory after they finish executing.

Retaining these files can be useful for several reasons. You can debug problems that occur during command execution. You can use the generated package.xml when running subsequent commands, or as a starting point for creating a manifest that includes all the metadata you care about.

For more information, see [Debug Errors When Deploying or Retrieving Source](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_trouble_temp_mdapi_dir.htm).

```

```

## SF\_NEW\_VERSION\_CHECK\_FREQ

A number that specifies the frequency that a warning message is displayed about the availability of a new Salesforce CLI version. By default, every CLI command execution checks whether there's a new Salesforce CLI version available, and prints out a warning message if it finds one. Use this environment variable with SF\_NEW\_VERSION\_CHECK\_FREQ\_UNIT to change the frequency that the message is displayed. To disable the version check completely, use SF\_SKIP\_NEW\_VERSION\_CHECK.

The default value is 0, which means that the warning message is displayed each time a new version is found.

For example, to see the warning message one time a day:

```

```

## SF\_NEW\_VERSION\_CHECK\_FREQ\_UNIT

The unit of time for the frequency that a warning message is displayed about the availability of a new Salesforce CLI version. By default, every CLI command execution checks whether there's a new Salesforce CLI version available, and prints out a warning message if it finds one. Use this environment variable with SF\_NEW\_VERSION\_CHECK\_FREQ to change the frequency that the message is displayed. To disable the version check completely, use SF\_SKIP\_NEW\_VERSION\_CHECK.

Possible values are days, hours, minutes, seconds, and milliseconds. The default value is minutes.

For example, to see the warning message one time a day:

```

```

## SF\_NETWORK\_MUTEX\_PORT

Specifies the local network server’s port when you set SF\_USE\_NETWORK\_MUTEX to true to enable the yarn \--mutex network option when installing or updating Salesforce CLI.

This variable affects your environment only if you also set SF\_USE\_NETWORK\_MUTEX. The default value is 31997.

## SF\_NO\_TABLE\_STYLE

Set to true to remove all stylings, such as borders and colors, from command output presented in table format. An example of a command that produces table output is org list limits. The default value is false.

Example:

```

```

## SF\_NPM\_REGISTRY

Sets the URL to a private npm server, where all packages that you publish are private. We support only repositories that don’t require authentication.

Example:

```

```

[Verdaccio](https://www.verdaccio.org/) is an example of a lightweight private npm proxy registry.

## SF\_ORG\_API\_VERSION

The API version for a specific project or all projects. Normally, the Salesforce CLI assumes that you’re using the same version of the CLI as your Dev Hub.

## SF\_ORG\_INSTANCE\_URL

The URL of the Salesforce instance that’s hosting your org. The default value is https://login.salesforce.com. We recommend that you set this value to the My Domain login URL for your org. You can find the My Domain login URL on the My Domain page in Setup.

## SF\_ORG\_MAX\_QUERY\_LIMIT

The maximum number of Salesforce records returned by a CLI command. The default value is 10,000.

Example:

```

```

## SF\_ORG\_METADATA\_REST\_DEPLOY

Set to true to make Salesforce CLI use the Metadata REST API for deployments. By default, Salesforce CLI uses SOAP. Deployments using REST aren’t bound by the 39-MB .zip file size limit that applies to SOAP deployments.

## SF\_PRECOMPILE\_ENABLE

Set to true to enable Apex pre-compile before the tests are run. This variable works with the apex run test command. Default is false.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_setup)

#### Important

The duration of an Apex test pre-compilation can be inconsistent. As a result, runs of the same Apex tests are sometimes quick and other times they time out. We recommend that you set this variable to true only if your Apex tests (without pre-compile) activate multiple concurrent Apex compilations that consume many system resources.

## SF\_PROJECT\_AUTOUPDATE\_DISABLE\_FOR\_PACKAGE\_CREATE

For package create, disables automatic updates to the sfdx-project.json file.

## SF\_PROJECT\_AUTOUPDATE\_DISABLE\_FOR\_PACKAGE\_VERSION\_CREATE

For package version create, disables automatic updates to the sfdx-project.json file.

## SF\_SKIP\_NEW\_VERSION\_CHECK

Set to true to disable Salesforce CLI version checking. By default, every CLI command execution checks whether there's a new Salesforce CLI version available, and prints out a warning message if it finds one. While this message is useful, it’s often unwanted, especially in continuous integration (CI) environments. Default is false.

To continue checking for a new CLI version, but change the frequency of the displayed warning message, use the SF\_NEW\_VERSION\_CHECK\_FREQ and SF\_NEW\_VERSION\_CHECK\_FREQ\_UNIT environment variables.

## SF\_SOURCE\_MEMBER\_POLLING\_TIMEOUT

Set to the number of seconds you want the project deploy start command to keep polling the SourceMember object before the command times out. The project deploy start command polls the SourceMember object to track what's changed between your local source and the org after the deploy completes. Salesforce CLI calculates a time-out for each project deploy start command run based on the number of components it deploys. Use this environment variable to override the calculated time-out.

For example, if the deployment times out after 3 minutes, try setting a time-out of 5 minutes (300 seconds):

```

```

## SF\_SOURCE\_TRACKING\_BATCH\_SIZE

Sets the source-tracked file batch size during a deploy or retrieve. The default value is 8,000 (Windows) or 15,000 (Linux/macOS).

This environment variable is useful when deploying or retrieving a large project that contains many source-tracked files, and you exceed your operating system open file limit. While the deploy or retrieve likely complete successfully, source-tracking can run into errors in this case. Either increase your open file limit, such as with the ulimit -Hn <number> command (Linux/macOS), or set the SF\_SOURCE\_TRACKING\_BATCH\_SIZE environment variable to a number significantly lower than the output of ulimit -Hn.

## SF\_TABLE\_OVERFLOW

Specifies how to handle text in table-formatted command output that is too wide for its column. An example of a command that produces table output is org list limits. Valid values are:

-   wrap: Wrap text within a cell.
-   truncate: Truncate the end of the text; same as truncate-end.
-   truncate-middle: Truncate the middle of the text.
-   truncate-start: Truncate the start of the text.
-   truncate-end: Truncate the end of the text; same as truncate.

The default value is truncate, unless the table implementation for that command specifically overrides that default.

For example, to specify that you want the end of the text to be wrapped:

```

```

## SF\_TABLE\_BORDER\_STYLE

Specifies how to display the borders of table-formatted command output, such as whether the table has an outline or vertical lines between columns. An example of a command that produces table output is org list limits. Valid values are:

-   all: Display all vertical and horizontal lines, giving every cell a complete border.
-   headers-only: Display a border around the headers only.
-   headers-only-with-outline: Display a border around the headers and the entire table.
-   headers-only-with-underline: Display a horizontal line between the headers and the table content, but no other borders.
-   horizontal: Display horizontal lines between all rows, including headers, but no vertical lines.
-   horizontal-with-outline: Display horizontal lines between all rows, including headers, and a border around the entire table.
-   none: Don't display any lines or borders.
-   ouline: Display a border around the entire table, but no other lines.
-   vertical: Display vertical lines between table columns only.
-   vertical-with-outline: Display vertical lines between columns, a line between headers and content, and a border around the entire table.

The default value is vertical-with-outline.

For example, to specify that tables display a border around the headers and the entire table:

```

```

## SF\_TARGET\_DEV\_HUB

Specifies the username of your default Dev Hub org so you don’t have to use the \--target-dev-hub flag. Overrides the value of the target-dev-hub configuration value.

Example of setting it to an alias:

```

```

Example of setting it to an org username:

```

```

## SF\_TARGET\_ORG

Specifies the username of your default org so you don’t have to use the \--target-org flag. Overrides the value of the target-org configuration variable.

Example of setting it to an alias:

```

```

Example of setting it to a username:

```

```

## SF\_USE\_GENERIC\_UNIX\_KEYCHAIN

(Linux and macOS only) Set to true if you want to use the generic UNIX keychain instead of the Linux libsecret library or macOS keychain. Specify this variable when using Salesforce CLI with ssh or "headless" in a CI environment.

## SF\_USE\_NETWORK\_MUTEX

Set to true to enable the yarn \--mutex network option when installing or updating Salesforce CLI. The default value is false (which enables the \--mutex file option.)

Salesforce CLI plugin installs use yarn under the hood. If you run into errors during installs or updates, try setting this environment variable to true to open a local network to manage the concurrent yarn instances. This behavior is more reliable and can sometimes fix install errors. The default port for this local network server is 31997. Set the SF\_NETWORK\_MUTEX\_PORT environment variable to use a different port.

See the [yarn documentation](https://classic.yarnpkg.com/lang/en/docs/cli/#toc-concurrency-and-mutex) for more information.

## SF\_WEB\_OAUTH\_SERVER\_TIMEOUT

Specifies the number of milliseconds that the org login web command waits for an org login issue to resolve itself before it times out. The default value is 120000 (two minutes).

This example shows how to set the time out to three minutes (180,000 milliseconds).

```

```

## General Environment Variables

These environment variables aren't specific to Salesforce CLI but are general variables that you might want to set.

### HTTP\_PROXY

If you receive an error when you install or update the Salesforce CLI on a computer that’s behind a firewall or web proxy, set this environment variable. Use the URL and port of your company proxy, for example:

```

```

### HTTPS\_PROXY

If you receive an error when you install or update the Salesforce CLI on a computer that’s behind a firewall or web proxy, set this environment variable. Use the URL and port of your company proxy, for example:

```

```

### NODE\_EXTRA\_CA\_CERTS

Installs your self-signed certificate. Indicate the fully qualified path to the certificate file name. Then run sf update.

See [NODE\_EXTRA\_CA\_CERTS=file](https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file) for more details.

### NODE\_TLS\_REJECT\_UNAUTHORIZED

To allow Node.js to use the self-signed certificate in the certificate chain, indicate 0.

#### See Also

-   [Log Messages and Log Levels](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_log_messages.htm "Salesforce CLI writes all log messages to a rotating file in the user’s home directory whose name is based on the day. For example, the logs for August 8, 2024 are written to the file USER_HOME_DIR/.sf/sf-2024-08-07.log. Salesforce CLI command invocations append log messages to this running log file. Only errors are output to the terminal or command window from which you run the CLI.")

-   [Support for JSON Responses](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_json_support.htm#sfdx_dev_cli_json_support "Salesforce CLI commands typically display their output to the terminal or command prompt (stdout) in non-structured, human-readable format. Messages written to the log file (stderr) are always in JSON format.")

## Code Examples

```
export SF_MDAPI_TEMP_DIR=/users/myName/myDXProject/metadata
```

```
SF_ORG_API_VERSION=57.0 sf org create scratch -<options>
```

```
SF_AUDIENCE_URL=https://MyDomainName.my.salesforce.com
```

```
SF_CAPITALIZE_RECORD_TYPES=false
```

```
SF_CI_HEARTBEAT_FREQUENCY_MS=600000
```

## Related Topics

- Configuration Variables (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm)
- Log Messages and Log Levels (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_log_messages.htm)
- Support for JSON Responses (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_json_support.htm)
