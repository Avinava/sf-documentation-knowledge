---
title: "Move from sfdx (v7) to sf (v2)"
domain: sfdx-setup
topic: move-from-sfdx-v7-to-sf-v2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.200Z
estimatedTokens: 2411
keywords: [Move, sfdx, you’re, currently, highly, recommend, easy, uninstall, install, CLI, commands, you’ve, running, terminal, continuous]
---

# Move from sfdx (v7) to sf (v2)

> If you’re currently using sfdx (v7), we highly
    recommend that you move to sf (v2). The move is easy: you
    first uninstall sfdx (v7) and then install sf (v2). After you move, the CLI commands that you’ve been
    running in a terminal or continuous integration (CI) scripts continue to work as before.

# Move from sfdx (v7) to sf (v2)

If you’re currently using sfdx (v7), we highly recommend that you move to sf (v2). The move is easy: you first uninstall sfdx (v7) and then install sf (v2). After you move, the CLI commands that you’ve been running in a terminal or continuous integration (CI) scripts continue to work as before.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_setup)

#### Important

You must uninstall sfdx (v7) before you install sf (v2), or you can get an installation error. This requirement applies to all installation methods: npm, OS-specific installers, and TAR files.

To determine if sfdx (v7) is installed on your computer, run this command in a terminal (macOS and Linux) or command prompt (Windows):

```

```

If the displayed version starts with sfdx-cli/7, as shown, then sfdx (v7) is installed on your computer.

The sections in this document show how to move to sf (v2) for the three installation methods: npm, macOS or Windows installers, and TAR files. Pick the section that applies to your environment. If you’re not sure how you originally installed sfdx (v7), read [this document](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm#determine-how-you-installed). Are you using Docker? Read our updated [Docker instructions](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_docker.htm "Salesforce publishes Docker container images for Salesforce CLI on Docker Hub. We follow the same release process as our installers and npm packages. Each week we publish a Docker container image for that week’s release candidate (latest-rc). The following week we retag the image as latest. You can run the latest or latest-rc CLI versions, or a specific numbered version.") to see how to get the sf (v2) image.

## npm

1.  Open a terminal (macOS and Linux) or command prompt (Windows).
2.  Uninstall sfdx (v7) with this command:

    ```

    ```

3.  Verify that you've uninstalled sfdx (v7) by running the sfdx version command. If you uninstalled correctly, the command fails. For example, on macOS:

    ```

    ```

4.  Install sf (v2) with this command.

    ```

    ```

    If you already had sf (v1) installed, this command updates it to v2.

5.  Verify that you've installed sf (v2) by running this command:

    ```

    ```

    The version starts with @salesforce/cli/2. The following command also returns the same version because sfdx is now aliased to sf:

    ```

    ```


Congrats, you successfully moved to sf (v2)!

## macOS or Windows Installers

Installers refer to the Windows .exe or macOS .pkg installer files.

1.  [Uninstall your current sfdx (v7) installation.](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm "Uninstalling Salesforce CLI removes it entirely from your computer.")

    As of October 2021, if you originally installed Salesforce CLI using the OS-specific installers, you actually got *two* interoperable CLIs (AKA executables) bundled together: sfdx (v7) and sf (v1). When you uninstall Salesforce CLI, it removes both executables.

2.  Open a terminal (macOS) or command prompt (Windows).
3.  Verify that you've uninstalled sfdx (v7) by running the sfdx version command. If you uninstalled correctly, the command fails. For example, on macOS:

    ```

    ```

4.  Install sf (v2) using these installer links:
    -   macOS
        -   [Apple Silicon](https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-arm64.pkg)
        -   [Intel CPU](https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-x64.pkg)
    -   Windows
        -   [x64](https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-x64.exe)
        -   [x86](https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-x86.exe)
5.  Verify that you've installed sf (v2) by running this command:

    ```

    ```

    The version starts with @salesforce/cli/2. The following command also returns the same version because sfdx is now aliased to sf:

    ```

    ```


Congrats, you successfully moved to sf (v2)!

## TAR Files

Salesforce CLI distributes TAR files that you can install on all supported operating systems.

1.  [Uninstall your current sfdx (v7) installation](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm "Uninstalling Salesforce CLI removes it entirely from your computer.").

    As of October 2021, if you originally installed Salesforce CLI using TAR files, you actually got *two* interoperable CLIs (AKA executables) bundled together: sfdx (v7) and sf (v1). When you uninstall Salesforce CLI, it removes both executables.

2.  Open a terminal (macOS and Linux) or command prompt (Windows).
3.  Verify that you've uninstalled sfdx (v7) by running the sfdx version command. If you uninstalled correctly, the command fails. For example, on macOS:

    ```

    ```

4.  [Install sf (v2)](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_linux "Salesforce CLI distributes TAR files that you can install on all supported operating systems.").
5.  Verify that you've installed sf (v2) by running this command:

    ```

    ```

    The version starts with @salesforce/cli/2. The following command also returns the same version because sfdx is now aliased to sf:

    ```

    ```


Congrats, you successfully moved to sf (v2)!

## Update Your Continuous Integration (CI) Scripts

If you use Salesforce CLI in a continuous integration (CI) system, update your scripts to use sf (v2).

npm

If your CI scripts install Salesforce CLI with npm, update them to use this command to install sf (v2):

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_setup)

#### Warning

When updating your CI script, if it includes this command to install sfdx (v7), you must remove it:

```

```

If you keep both commands, the command to install sf (v2) returns an error and your script fails.

TAR Files

If your CI scripts install Salesforce CLI with TAR files, update the download URLs to point to the sf (v2) downloads. For example, change this URL:

```

```

To this URL:

```

```

See [Install the CLI with a TAR File](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_linux "Salesforce CLI distributes TAR files that you can install on all supported operating systems.") for the URLs for all operating systems.

## After You Move to sf (v2)

Here are a few things to be aware of after you make the move.

-   Regenerate your autocomplete cache by running this command in a terminal (macOS and Linux) or command prompt (Windows).

    ```

    ```

    Open a new terminal for the change to take effect. Autocomplete doesn’t work correctly until you regenerate its cache.

-   Every CLI command execution, VS Code invocation of Salesforce CLI, and CI script works the same in both sfdx (v7) and sf (v2). If you find a difference, open a [GitHub issue](https://github.com/forcedotcom/cli/issues).
-   You can run commands with either sfdx or sf; they’re now the same. For example, these two command executions are the same.

    ```

    ```

    Everything that was in sfdx is available in sf, with the same names and flags.


## Why Should You Move?

sf (v2) became generally available on July 12, 2023. At that time we stopped publishing updates to sfdx (v7) and sf (v1). To get new Salesforce CLI features and bug fixes, you must use sf (v2).

Also, sfdx (v7) is twice the size of sf (v2) because it also includes sf (v1). To reduce the size of your Salesforce CLI installation and downloads, we recommend you move to sf (v2).

## Troubleshoot npm Error: code EEXIST

If you try to install sf (v2) using npm without first uninstalling sfdx (v7), you get this error:

```

```

You can also encounter this error in your continuous integration (CI) system when sf (v2) becomes generally available. If your CI scripts already use npm to install both sfdx (v7) and sf (v1), and you don’t update the script, the error can start happening automatically as of July 12, 2023.

To fix the problem, remove this command from your script.

```

```

Keep this command, which installs sf (v2).

```

```

## Return to sfdx (v7)

We don’t anticipate any reason for you to move back to sfdx (v7). However, if you must return, follow these steps.

1.  [Uninstall sf (v2)](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm "Uninstalling Salesforce CLI removes it entirely from your computer.").
2.  Install sfdx (v7).

    For npm, run this command in a terminal (macOS and Linux) or command prompt (Windows).

    ```

    ```

    For the installers and TAR files, refer to the sfdx (v7) JSON files that list the recent download URLs for each supported operating system. See [this topic](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#install-sfdx) for details.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_setup)

    #### Note

    As of July 12, 2023, the [web page to download Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli) has been updated to download only sf (v2).

3.  In your CI scripts, go back to the npm commands or TAR download URLs you were using before.

#### See Also

-   [*Salesforce CLI Command Reference*: Migrate sfdx-Style Commands to the New sf-Style](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_migrate.htm "Salesforce CLI Command Reference: Migrate sfdx-Style Commands to the New sf-Style - HTML (New Window)")

## Code Examples

```
sfdx version
sfdx-cli/7.208.10 darwin-arm64 node-v18.16.0
```

```apex
npm uninstall sfdx-cli --global
```

```
sfdx version
-bash: sfdx: command not found
```

```apex
npm install @salesforce/cli --global
```

```
sf version
@salesforce/cli/2.0.1 darwin-arm64 node-v18.16.0
```

## Related Topics

- this document (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm)
- Docker instructions (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_docker.htm)
- Uninstall your current sfdx (v7)
            installation. (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm)
- Uninstall your current sfdx (v7)
            installation (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm)
- Install sf
          (v2) (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
- Install the CLI with a TAR File (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
- Uninstall sf (v2) (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm)
- this topic (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
