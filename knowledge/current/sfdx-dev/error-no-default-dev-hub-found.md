---
title: "Error: No default dev hub found"
domain: sfdx-dev
topic: error-no-default-dev-hub-found
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.712Z
estimatedTokens: 497
keywords: [Error, dev, hub, found, try, scratch, org, due, authorization, issue]
---

# Error: No default dev hub found

> You see this error when you try to create a scratch org due to an authorization issue.

# Error: No default dev hub found

You see this error when you try to create a scratch org due to an authorization issue.

Let’s say you successfully authorize a Dev Hub org using the \--set-default-dev-hub flag. The username associated with the org is your default Dev Hub username. You then successfully create a scratch org without using the \--target-dev-hub flag. But when you try to create a scratch org another time using the same CLI command, you get this error:

```

```

What happened?

**Answer**: You’re no longer in the directory where you ran the authorization command. The directory from which you use the \--set-default-dev-hub flag matters.

If you run the authorization command from the root of your project directory, the target-dev-hub config variable is set locally. The value applies only when you run the command from the same project directory. If you change to a different directory and run org create scratch, the local setting of the default Dev Hub org no longer applies and you get an error.

Solve the problem by doing one of the following.

-   Set target-dev-hub globally so that you can run org create scratch from any directory.

    ```

    ```

-   Run org create scratch from the same project directory where you authorized your Dev Hub org.

-   Use the \--target-dev-hub flag with org create scratch to run it from any directory.

    ```

    ```

-   To check whether you’ve set configuration values globally or locally, use this command and check the Location column.

    ```

    ```


#### See Also

-   [How Salesforce Developer Experience (DX) Tooling Changes the Way You Work](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm "Salesforce DX tooling provides modern experience to manage and develop apps on the platform across their entire lifecycle. It brings together source-driven development, team collaboration with governance, and new levels of agility for custom app development on Salesforce based on modern best practices.")

## Code Examples

```
Error (1): No default dev hub found. Use -v or --target-dev-hub to specify an environment.
```

```apex
sf config set target-dev-hub=<devhubusername> --global
```

```
sf target-dev-hub --definition-file <file> --target-dev-hub <devhubusername> --alias my-scratch-org
```

```
sf config list
```

## Related Topics

- How Salesforce Developer Experience (DX) Tooling Changes the Way You Work (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
