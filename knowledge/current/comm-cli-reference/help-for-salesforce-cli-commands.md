---
title: "Help for Salesforce CLI Commands"
domain: comm-cli-reference
topic: help-for-salesforce-cli-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.998Z
estimatedTokens: 696
keywords: [Help, Salesforce, CLI, Commands, --help, topics, their]
---

# Help for Salesforce CLI Commands

> The -h | --help parameter shows details about Salesforce CLI topics and their
  commands.

# Help for Salesforce CLI Commands

The \-h | \--help parameter shows details about Salesforce CLI topics and their commands.

For namespaces, the \-h | \--help parameter lists all topics in the namespace. For example, to see names and descriptions of all topics in the force namespace, run sfdx force -h.

For topics, the \-h | \--help parameter lists the commands and their descriptions. For example, to see all commands in the org topic, run sfdx force:org -h.

For commands, adding the \-h | \--help parameter shows parameters and usage information. For example, to see help for the org:create command, run sfdx force:org:create -h.

Help for commands has four parts.

1.  **Short Description of Command**

    At the top of the \--help output (with no heading), a short description of the command is shown. For longer descriptions, see the Salesforce CLI Command Reference.

2.  **Usage**

    The command signature on the Usage line uses the docopt format.

    -   All available parameters are listed. Parameters that have short names are listed using their short names.
    -   Parameters that take a value show the value’s type (for example, <string>) in angle brackets immediately after the parameter’s name.
    -   Optional parameters are in square brackets (\[ … \]).
    -   Required parameters have no annotation.
    -   For parameters that accept a limited set of values, the values are shown after the parameter name, separated by pipes (\--parametername value1|value2|value3).
    -   Mutually exclusive options are shown in parentheses, separated by a pipe (( … | … )).

    If the command takes varargs (name-value pairs that aren’t parameters), the usage signature includes name=value....

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=comm_cli_reference)

    #### Tip

    To see all Salesforce CLI commands, run sfdx commands.

3.  **Options**

    The Options section lists all the command’s parameters, including their short name, long name, and purpose. For parameters that accept a value, the value name is written after an equals sign (\=). The equals sign is optional when you run the command—for example, you could run sfdx force:org:create \-f=config/enterprise-scratch-def.json -a TestOrg1 or sfdx force:org:create \-f config/enterprise-scratch-def.json -a TestOrg1 with the same results.

    Parameters that accept a limited list of values include the values in parentheses, with the default value indicated by an asterisk (\*).

    For more information about the parameters, see the Salesforce CLI Command Reference.

4.  **Description**

    Usage notes and examples are below the list of parameters, in the Description section. This information is also available in the Salesforce CLI Command Reference.
