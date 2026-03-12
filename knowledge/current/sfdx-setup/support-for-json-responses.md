---
title: "Support for JSON Responses"
domain: sfdx-setup
topic: support-for-json-responses
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.074Z
estimatedTokens: 1070
keywords: [Support, JSON, Responses, Salesforce, CLI, commands, typically, display, their, output, terminal, command, prompt, stdout, non-structured]
---

# Support for JSON Responses

> Salesforce CLI commands typically display their output to the terminal or command prompt
      (stdout) in non-structured, human-readable format.
    Messages written to the log file (stderr) are always in
    JSON format.

# Support for JSON Responses

Salesforce CLI commands typically display their output to the terminal or command prompt (stdout) in non-structured, human-readable format. Messages written to the log file (stderr) are always in JSON format.

To view the console output in JSON format, specify the \--json flag for a particular CLI command.

```

```

Most CLI commands support JSON output. To confirm, run the command with the \--help flag to view the supported flags. The \--json flag is listed under GLOBAL FLAGS.

To get JSON responses to all Salesforce CLI commands without specifying the \--json flag each time, set the SF\_CONTENT\_TYPE environment variable to JSON.

```

```

## JSON Response Change Policy

Salesforce reserves the right to change the human-readable output of a Salesforce CLI command at any time. It also reserves the right to make non-breaking changes to the JSON response of a Salesforce CLI command at any time. Examples of non-breaking JSON changes include:

-   Adding JSON properties.
-   Changing the values of JSON properties that are meant for human consumption, such as warning messages.

When Salesforce intends to make a breaking change to the JSON response of a CLI command, the change first goes through an official deprecation process. Examples of breaking changes to a JSON response include:

-   Removing JSON properties.
-   Changing the type of a JSON property, such as switching an array for an object.

Before making such a change, the change is announced and released behind an environment variable. Users can test the change by setting this environment variable. Not setting the environment variable keeps the current behavior. After the deprecation period (4 months or more), Salesforce CLI switches the behavior so that the new JSON response is outputted by default.

## JSON Schema Files

Scripts, such as those for continuous integration (CI) jobs, often use the JSON response of a CLI command to get information that’s used later when executing a different CLI command. Knowing the structure of the JSON response is therefore useful when you create these scripts. Each Salesforce CLI command has a JSON schema file that describes the structure of the response.

For example, let’s say the CI script first runs the org list --json command to get the list of available orgs. The command’s response is in the result JSON object, as shown in this partial example.

```

```

The CI script then parses this JSON response to find an org to deploy to with the project deploy start command.

## Find the JSON Schema File for a Command

The JSON schema file for a Salesforce CLI command is stored in the associated plugin’s GitHub repository.

1.  Run the which command, which returns the npm name of the plug-in that contains the CLI command.

    This example shows that the org list command is in the @salesforce/plugin-org plugin.

    ```

    ```

2.  Go to the [Salesforce CLI Status](https://github.com/salesforcecli/status) page and find the npm plugin name in the Package column. Click the left **Repository** link, which takes you to the GitHub repository that stores the plugin’s source code.

    In our example, the GitHub repository for the @salesforce/plugin-org plugin is [https://github.com/salesforcecli/plugin-org](https://github.com/salesforcecli/plugin-org).

3.  In the GitHub repository, search the top-level schemas directory for the command’s JSON schema file. The name of the file is the same as the command name, with hyphens instead of spaces.

    In our example, the schema file for the org list command is called org-list.json and is [https://github.com/salesforcecli/plugin-org/blob/main/schemas/org-list.json](https://github.com/salesforcecli/plugin-org/blob/main/schemas/org-list.json).


The definitions object in the JSON schema file describes the response when you run a CLI command with the \--json flag. Here’s a snippet of the JSON schema file for the org list command.

```

```

The schema snippet shows, for example, that the isExpired key is a Boolean value in a scratchOrgs object.

#### See Also

-   [CLI Deprecation Policy](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_deprecation.htm "Salesforce deprecates CLI commands and flags when, for example, the underlying API changes.")

## Code Examples

```
sf org display --json
```

```
export SF_CONTENT_TYPE=JSON
```

```
{       
  "status": 0,
  "result": {
    "other": [],
    "scratchOrgs": [
      {
        "accessToken": "<SALESFORCE_ACCESS_TOKEN>",
        "instanceUrl": "https://connect.scratch.my.salesforce.com",
        "orgId": "00DIfakefx2AC",
        "username": "test-fake@example.com",
        "loginUrl": "https://connect.scratch.my.salesforce.com",
        "clientId": "PlatformCLI",
        "isDevHub": false,
        "devHubUsername": "jules@sf.com",
        "created": "1715292658000",
        "expirationDate": "2024-05-16",
        "createdOrgInstance": "USA198S",
        "isScratch": true,
        "isSandbox": false,
        "instanceApiVersion": "61.0",
        "instanceApiVersionLastRetrieved": "5/9/2024, 3:11:22 PM",
        "tracksSource": true,
        "alias": "myscratch",
        "isDefaultDevHubUsername": false,
        "isDefaultUsername": false,
        "lastUsed": "2024-05-09T22:11:24.935Z",
        "signupUsername": "test-5endbwn8yjaj@example.com",
        "createdBy": "jules@sf.com",
        "createdDate": "2024-05-09T22:10:58.000+0000",
        "devHubOrgId": "00DB0000000c7jiMAA",
        "devHubId": "00DB0000000c7jiMAA",
        "attributes": {
          "type": "ScratchOrgInfo",
          "url": "/services/data/v61.0/sobjects/ScratchOrgInfo/2SR1QavjWAC"
        },
        "orgName": "Dreamhouse",
        "edition": "Developer",
        "status": "Active",
        "isExpired": false,
        "namespace": null
      }
    ],
...<more information about other orgs>
  "warnings": []
}
```

```
$ sf which org list
=== org list

plugin: @salesforce/plugin-org
```

```
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$ref": "#/definitions/OrgListResult",
  "definitions": {
    "OrgListResult": {
      "type": "object",
      "properties": {
        "scratchOrgs": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/FullyPopulatedScratchOrgFields"
          }
        },
<lotsa stuff>
    "FullyPopulatedScratchOrgFields": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "isExpired": {
          "type": "boolean"
        },
        "expirationDate": {
          "type": "string"
        },
        "devHubUsername": {
          "type": "string"
        },
<more stuff>
```

## Related Topics

- CLI Deprecation Policy (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_deprecation.htm)
