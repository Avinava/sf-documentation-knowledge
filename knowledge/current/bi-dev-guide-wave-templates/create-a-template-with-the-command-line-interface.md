---
title: "Create a Template with the Command Line Interface"
domain: bi-dev-guide-wave-templates
topic: create-a-template-with-the-command-line-interface
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.469Z
estimatedTokens: 451
keywords: [Template, Command, Line, analytics, commands, templates, Salesforce, CLI, manage]
---

# Create a Template with the Command Line Interface

> Use analytics template commands to create templates
    with the Salesforce Analytics Command Line Interface (CLI). You can also use the CLI to manage
    existing templates.

# Create a Template with the Command Line Interface

Use analytics template commands to create templates with the Salesforce Analytics Command Line Interface (CLI). You can also use the CLI to manage existing templates.

1.  Get a list of available apps. In the CLI, enter the command sf analytics app list. The command returns a list of all apps in your org.

    ```

    ```

2.  Look for your source app. If you haven’t already identified its folderID, find it in the response to the list command.
3.  Create the template. Enter the command analytics template create. Here’s syntax for the command.

    analytics template create -f folderid \[-u username --apiversion api\_version --json --loglevel log\_level\]

    | folderid | Required.The ID of the source app to use when creating the template. You can use analytics:app:list to see information about the apps on your org. |
    | --- | --- |
    | username | The user name or alias of the target org. If not specified, CRM Analytics uses the default org. |
    | api_version | The API version to use for this command. |
    | --json | Use this flag to specify format the output as JSON. |
    | --loglevel | Specify the log level for this command. Allowed values are trace, debug, info, warn, error, and fatal |

    The command returns something like the following: Successfully created analytics template \[0Nk0S0000008OJNSA2\]

    The WaveTemplate object and all its files are on your scratch org. Next, retrieve the object by pulling the files to your local workstation for editing.


#### See Also

-   [Salesforce Analytics Plugin CLI Command Reference: template Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_template_unified.htm)

## Code Examples

```
>>sf analytics app list

NAME        LABEL       FOLDERID            STATUS           TEMPLATESOURCEID  
──────────  ──────────  ───────────  ──────
MyNewApp  MyNewTemplate  00l0S000000MmGQQA0  newstatus
SharedApp1  Shared App  00l0S000000Mm9tQAC  completedstatus  0Nk0S0000008OJDSA2
SharedApp   Shared App  00l0S000000EEVUQA4  newstatus        0Nk0S0000008OJDSA2
```
