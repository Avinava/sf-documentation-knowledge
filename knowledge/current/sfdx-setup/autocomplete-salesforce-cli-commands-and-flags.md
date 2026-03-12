---
title: "Autocomplete Salesforce CLI Commands and Flags"
domain: sfdx-setup
topic: autocomplete-salesforce-cli-commands-and-flags
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.038Z
estimatedTokens: 933
keywords: [Autocomplete, Salesforce, CLI, Commands, Flags, quickly, exact, command, flag, want, execute, Configure]
---

# Autocomplete Salesforce CLI Commands and Flags

> Use autocomplete to quickly find the exact Salesforce CLI command and flag you want to
  execute.

# Autocomplete Salesforce CLI Commands and Flags

Use autocomplete to quickly find the exact Salesforce CLI command and flag you want to execute.

You must set up the autocomplete feature before you can use it. Autocomplete supports these shells:

-   Bash: macOS and Linux
-   Z shell (zsh): macOS and Linux
-   PowerShell: Typically used on Microsoft Windows, although you can also install PowerShell on macOS and Linux.

## Configure Autocomplete

The CLI command to configure autocomplete is the same on all shells. But the output of the command, which provides the next steps, differs depending on the shell you’re on.

1.  Open a terminal window (macOS and Linux) or Powershell command window (Windows).
2.  Run this command, which builds the autocomplete cache on your computer:

    ```

    ```

3.  Follow the displayed instructions, which reflect the shell you’re currently using.

If autocomplete doesn’t work immediately after configuration, open a new terminal or command window and try again.

After you update Salesforce CLI to a new version, run sf autocomplete --refresh-cache to ensure that autocomplete works correctly on any new commands.

## Use Autocomplete

Partially type a Salesforce CLI command and then press the tab key (<TAB>) to autocomplete it. The autocomplete feature also works on Salesforce CLI flags and their values. Depending on the shell you're using, you might have to type <TAB> twice to get completion suggestions; keep tabbing until you see something.

Let’s look at some examples using Z shell (zsh). In a terminal or command window, type sf, a space, and then <TAB> until you see the full list of top-level topics and commands with their summaries.

![zsh terminal showing autocomplete suggestions for 'sf <TAB>'.](/docs/resources/img/en-us/260.0?doc_id=sfdx_setup%2Fimages%2Fsfdx_setup_autocomplete_start.png&folder=sfdx_setup)

Let’s say you want to deploy metadata from your Salesforce DX project; the project topic looks promising! To see the list of sub-topics under project, type the letters pr and then <TAB>.

![zsh terminal showing autocomplete suggestions for 'sf project <TAB>'.](/docs/resources/img/en-us/260.0?doc_id=sfdx_setup%2Fimages%2Fsfdx_setup_autocomplete_project.png&folder=sfdx_setup)

The output includes a deploy sub-topic; we’re getting there! To drill down, type the letters dep and <TAB>, and the commands in the deploy sub-topic are displayed. Keep typing and tabbing this way until you get to the full command to deploy metadata, which is project deploy start.

Now that you found the correct command, you probably now want to see the available flags. Simply type \- (hyphen) and <TAB> to see the full list of flags, with their short and long names and summaries:

![zsh terminal showing autocomplete suggestions for 'sf project deploy start - <TAB>'.](/docs/resources/img/en-us/260.0?doc_id=sfdx_setup%2Fimages%2Fsfdx_setup_autocomplete_flags.png&folder=sfdx_setup)

Type the first letter of a flag, then <TAB> until you’ve autocompleted the flag name.

You can also use autocomplete to specify a value for some flags. For example, if your current directory is a Salesforce DX project and you want to specify a manifest file for the \--manifest flag, press <TAB> after the flag to see a list of files. Then enter the first letter and <TAB> until you complete the name of the file, such as package.xml.

![zsh terminal showing autocomplete suggestions for 'sf project deploy start --manifest <TAB>'.](/docs/resources/img/en-us/260.0?doc_id=sfdx_setup%2Fimages%2Fsfdx_setup_autocomplete_files.png&folder=sfdx_setup)

#### See Also

-   [PowerShell Documentation](https://learn.microsoft.com/en-us/powershell/ "PowerShell Documentation - HTML (New Window)")
