---
title: "Create a Package Version Based on a Scratch Org Snapshot"
domain: pkg2-dev
topic: create-a-package-version-based-on-a-scratch-org-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.109Z
estimatedTokens: 698
keywords: [Package, Version, Scratch, Org, Snapshot, dependent, base, requires, stable, reduce, end-to-end, creation, time, creating]
---

# Create a Package Version Based on a Scratch Org Snapshot

> If the dependent package your base package requires is stable, you can reduce the
  end-to-end package version creation time by creating a scratch org snapshot.

# Create a Package Version Based on a Scratch Org Snapshot

If the dependent package your base package requires is stable, you can reduce the end-to-end package version creation time by creating a scratch org snapshot.

If you haven’t reviewed [When to Use Scratch Org Snapshots in Package Development](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_when_use_snapshot.htm "If the managed 2GP or unlocked package that you’re building depends on one or more large packages, it can take a long time for the package version creation CLI command to complete. Let’s talk about why that occurs, and how scratch org snapshots can dramatically reduce how long it takes to create a new package version."), review that topic before continuing.

There’s more than one workflow you can follow when creating a package version based on a scratch org snapshot. You can start by creating a scratch org, you can build your own scratch org definition file, or you can choose to use org shape to create a new scratch org. Whichever path you choose, after the scratch org is created, you install all the dependent packages into it, and then take a snapshot of the scratch org.

Sample Workflow

This workflow uses an org shape to create the initial scratch org where you’ll install the stable dependent packages, and then create a scratch org snapshot to create a package version.

1.  Create the org shape.

    ```

    ```

2.  Create a scratch org definition file that indicates the shape’s source org.

    ```

    ```

3.  Create a scratch org using the org shape.

    ```

    ```

    If your default Dev Hub org isn’t the one that owns the org shape, indicate it on the command line.

4.  Install the dependent packages.

    ```

    ```

5.  Create a snapshot of the scratch org.

    ```

    ```

6.  Create a new scratch org definition file and specify the snapshot name, then save the file.

    ```

    ```

7.  Create a package version using the org snapshot. This command is specifying the scratch org definition file that contains the snapshot information in it.

    ```

    ```


#### See Also

-   [When to Use Scratch Org Snapshots in Package Development](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_when_use_snapshot.htm "If the managed 2GP or unlocked package that you’re building depends on one or more large packages, it can take a long time for the package version creation CLI command to complete. Let’s talk about why that occurs, and how scratch org snapshots can dramatically reduce how long it takes to create a new package version.")

-   [*Salesforce DX Developer Guide*: Create Org Shapes](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm "Salesforce DX Developer Guide: Create Org Shapes - HTML (New Window)")

## Code Examples

```
sf org create shape --target-org source-org1
```

```
{
  "orgName": "Salesforce",
  "sourceOrg": "00DB1230400Ifx5"
}
```

```
sf org create scratch --duration-days 30 --no-namespace --no-ancestors --definition-file config/scratch-def-with-shape-id.json --alias dev1-with-shape
```

```
sf package install --package 04txx --target-org dev1-with-shape
```

```
sf org create snapshot --name dhsnapshot --source-org dev1-with-shape --target-dev-hub dev-hub
```

## Related Topics

- When to Use Scratch Org Snapshots in Package Development (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_when_use_snapshot.htm)
