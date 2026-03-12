---
title: "Specify Topics and Commands in Any Order"
domain: sfdx-setup
topic: specify-topics-and-commands-in-any-order
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.227Z
estimatedTokens: 326
keywords: [Specify, Topics, Commands, Any, Order, command, terminal, prompt, enter, Salesforce, CLI, determines, mean, automatically, runs]
---

# Specify Topics and Commands in Any Order

> When you type a command at a terminal or command prompt, you can enter the topics and
    commands in any order. Salesforce CLI determines which command you mean and automatically runs
    it without errors.

# Specify Topics and Commands in Any Order

When you type a command at a terminal or command prompt, you can enter the topics and commands in any order. Salesforce CLI determines which command you mean and automatically runs it without errors.

For example, let's say you want to log into an org using JWT but you forgot the exact command. All of these commands work without returning a Command not found error:

```

```

If you remember only parts of a command, run the partial command anyway to see a list of all the commands that contain the parts. Use arrows to highlight the one you want, then press return to choose it.

For example, when you type sf list, you see this dialogue where you can choose the command you want:

```

```

To narrow down a long list of possible commands, provide a flag. For example, if you run sf list --all, it displays only the env list and org list commands because they’re the only ones that have the \--all flag.

Each command still has a canonical signature, which we use in the \--help examples and to organize the Salesforce CLI Command Reference.

#### See Also

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference "Salesforce CLI Command Reference - HTML (New Window)")

## Code Examples

```
sf login org jwt <flags>
sf org login jwt <flags>
sf jwt org login <flags>
```

```
sf list
? Which of these commands do you mean (Use arrow keys)
❯ community list template         Retrieve the list of templates available in your org. 
  env list                        List the environments you’ve created or logged into. 
  env logdrain list               List log drains connected to a specified environment. 
  env var list                    List your environment's config vars in a table. 
  org list shape                  List all org shapes you’ve created. 
  org list snapshot               List scratch org snapshots. 
  package installed list          List the org’s installed packages.
```
