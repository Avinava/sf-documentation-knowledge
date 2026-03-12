---
title: "Use the CLI to Install a Second-Generation Managed Package"
domain: pkg2-dev
topic: use-the-cli-to-install-a-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.065Z
estimatedTokens: 1096
keywords: [CLI, Install, Second-Generation, Managed, Package, you’re, working, Salesforce, command, packages, scratch, org, target, subscriber, Control]
---

# Use the CLI to Install a Second-Generation Managed Package

> If you’re working with the Salesforce CLI, you can use the sf
   package install command to install packages in a scratch org or target subscriber
  org.

# Use the CLI to Install a Second-Generation Managed Package

If you’re working with the Salesforce CLI, you can use the sf package install command to install packages in a scratch org or target subscriber org.

Before you install a second-generation managed package (managed 2GP) in a scratch org, run this command to list all the packages and locate the ID or package alias.

```

```

Identify the version you want to install. Enter this command, supplying the package alias or package ID (starts with 04t).

```

```

By default, the package install command provides admins access to the installed package. To provide access to all users, specify \--security-type AllUsers when you run the package install command.

If you’ve already set the scratch org with a default username, enter just the package version ID.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

If you’ve defined an alias (with the \-a parameter), you can specify the alias instead of the username for \--target-org.

The CLI displays status messages regarding the installation.

```

```

## Control Managed 2GP Package Installation Timeouts

When you issue a sf package install command, it takes a few minutes for a package version to become available in the target org and for installation to complete. To allow sufficient time for a successful install, use these parameters that represent mutually exclusive timers.

-   \--publish-wait defines the maximum number of minutes that the command waits for the package version to be available in the target org. The default is 0. If the package is not available in the target org in this time frame, the install is terminated.

    Setting \--publish-wait is useful when you create a new package version and then immediately try to install it to target orgs.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

    #### Note

    If \--publish-wait is set to 0, the package installation immediately fails, unless the package version is already available in the target org.

-   \--wait defines the maximum number of minutes that the command waits for the installation to complete after the package is available. The default is 0. When the --wait interval ends, the install command completes, but the installation continues until it either fails or succeeds. You can poll the status of the installation using sf package install report.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

    #### Note

    The \--wait timer takes effect after the time specified by \--publish-wait has elapsed. If the \--publish-wait interval times out before the package is available in the target org, the \--wait interval never starts.


For example, consider a package called Expense Manager that takes five minutes to become available on the target org, and 11 minutes to install. The following command has publish-wait set to three minutes and wait set to 10 minutes. Because Expense Manager requires more time than the set publish-wait interval, the installation is aborted at the end of the three-minute publish-wait interval.

```

```

The following command has publish-wait set to six minutes and wait set to 10 minutes. If not already available, Expense Manager takes five minutes to become available on the target org. The clock then starts ticking for the 10-minute wait time. At the end of 10 minutes, the command completes because the wait time interval has elapsed, although the installation is not yet complete. At this point, sf package install report indicates that the installation is in progress. After one more minute, the installation completes and sf package install report indicates a successful installation.

```

```

#### See Also

-   [*Salesforce CLI Command Reference* package install](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_package_commands_unified.htm#cli_reference_package_install_unified "Salesforce CLI Command Reference package install - HTML (New Window)")

-   [*Salesforce Help:* Determine Which Users Can Access a Package](https://help.salesforce.com/s/articleView?id=xcloud.pkg_subscriber_determine_access.htm&type=5&language=en_US "Salesforce Help:  Determine Which Users Can Access a Package
    - HTML (New Window)")

## Code Examples

```
sf package version list
```

```
sf package install --package "Expense Manager@1.2.0-12" --target-org jdoe@example.com
```

```
sf package install --package "Expense Manager@1.2.0-12"
```

```
Waiting for the subscriber package version install request to get processed. Status = InProgress Successfully installed the subscriber package version: 04txx0000000FIuAAM.
```

```
sf package install --package "Expense Manager@1.2.0-12" --publish-wait 3 --wait 10
```
