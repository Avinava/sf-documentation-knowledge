---
title: "Install Salesforce CLI"
domain: sfdx-setup
topic: install-salesforce-cli
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:19.166Z
estimatedTokens: 3952
keywords: [Install, Salesforce, CLI, computer, operating, system-specific, artifacts, pkg, macOS, TAR, files, npm, Windows, File, Older]
---

# Install Salesforce CLI

> Install Salesforce CLI on your computer using operating system-specific artifacts, such
    as .pkg on macOS, TAR files, or with npm.

# Install Salesforce CLI

Install Salesforce CLI on your computer using operating system-specific artifacts, such as .pkg on macOS, TAR files, or with npm.

Choose one method to install on your computer. For example, don’t install on macOs with both a .pkg file and npm. Installing it both ways can lead to confusing path issues on your computer, sometimes without an explicit error and thus difficult to diagnose.

-   **[Install the CLI on macOS](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_macos)**
    Install Salesforce CLI on macOS with a .pkg file.
-   **[Install the CLI on Windows](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_windows)**
    Install Salesforce CLI on Windows with an .exe file.
-   **[Install the CLI with a TAR File](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_linux)**
    Salesforce CLI distributes TAR files that you can install on all supported operating systems.
-   **[Install the CLI with npm](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_npm)**
    If you've installed Node.js on your computer, you can use npm to install Salesforce CLI. This method lets you install Salesforce CLI from the command line and can be especially useful for continuous integration (CI) use cases.
-   **[Install Older Versions of Salesforce CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_olderversions)**
    We recommend that you always use the latest version or release candidate of Salesforce CLI. However, we also understand that sometimes you want an older version of the CLI.
-   **[Verify Your Installation and Get Version Information](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_verify)**
    To ensure that you’ve installed Salesforce CLI correctly, run these commands to view the version and list of available commands.

## Install the CLI on macOS

Install Salesforce CLI on macOS with a .pkg file.

1.  Open the [Salesforce CLI download page](https://developer.salesforce.com/tools/salesforcecli) in your browser and click **macOS**.
2.  Click the download button that applies to the processor of your macOS computer.

    For example, if your processor is Apple Silicon, click **Download for macOS (Apple Silicon)**, which downloads an sf-arm64.pkg file.

3.  Run the .pkg file, such as double-clicking it from Finder, and answer all the prompts.
4.  After the installation completes, restart your Terminal windows or IDEs to make sure Salesforce CLI is available.

#### See Also

-   [Verify Your Installation and Get Version Information](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_verify "To ensure that you’ve installed Salesforce CLI correctly, run these commands to view the version and list of available commands.")

-   [Disable Automatic Update of the CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_disable_autoupdate.htm "When you run a command, Salesforce CLI checks to see if you have the latest version. If not, the CLI automatically updates itself. You can disable this automatic update with an environment variable.")


## Install the CLI on Windows

Install Salesforce CLI on Windows with an .exe file.

1.  Open the [Salesforce CLI download page](https://developer.salesforce.com/tools/salesforcecli) in your browser and click **Windows**.
2.  Click the download button that applies to the architecture of your Windows computer.

    For example, if you're using a 64-bit version of the Windows operating system that's built for the x86-64 architecture, click **Download for Windows x64**, which downloads an sf-x64.exe file.

3.  Run the .exe file, such as double-clicking it from Windows Explorer, and answer all the prompts.

    (Optional) In the Choose Components window, if you want Microsoft Defender Antivirus to exclude the installed Salesforce CLI files when it scans, select **Add %LOCALAPPDATA%\\sf to Windows Defender exclusions**.

    This option is initially deselected because we want the default Windows installation to be more secure. But excluding the CLI files from the antivirus scans improves the performance of Salesforce CLI, which is why we give you the option. Use with care.

4.  After the installation completes, close and then restart all your your command prompts, PowerShell windows, and IDEs to make sure Salesforce CLI is available.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_setup)

#### Warning

Salesforce CLI works best within the native Windows command prompt (cmd.exe) and the Microsoft Windows PowerShell. We don’t recommend using Salesforce CLI with a Linux terminal emulator, such as Windows 10 Subsystem for Linux, cygwin, or MinGW, because support for bugs is limited.

#### See Also

-   [Verify Your Installation and Get Version Information](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_verify "To ensure that you’ve installed Salesforce CLI correctly, run these commands to view the version and list of available commands.")

-   [Disable Automatic Update of the CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_disable_autoupdate.htm "When you run a command, Salesforce CLI checks to see if you have the latest version. If not, the CLI automatically updates itself. You can disable this automatic update with an environment variable.")


## Install the CLI with a TAR File

Salesforce CLI distributes TAR files that you can install on all supported operating systems.

Use this table to find the unversioned URLs for the TAR file (.tar.gz or .tar.xz ) for your operating system. When we release a new version of Salesforce CLI every week, we also update these URLs so they point to the most up-to-date version. Unversioned URLs are especially useful for CI use cases. The table also includes manifest URLs that show the versioned URL for each file.

| Operating System | Tar Files | Manifest |
| --- | --- | --- |
| Linux | sf-linux-x64.tar.gzsf-linux-x64.tar.xzsf-linux-arm64.tar.gzsf-linux-arm64.tar.xz | sf-linux-x64-buildmanifestsf-linux-arm64-buildmanifest |
| macOS | sf-darwin-x64.tar.gz (Intel CPU)sf-darwin-x64.tar.xz (Intel CPU)sf-darwin-arm64.tar.gz (Apple Silicon)sf-darwin-arm64.tar.xz (Apple Silicon) | sf-darwin-x64-buildmanifest (Intel CPU)sf-darwin-arm64-buildmanifest (Apple Silicon) |
| Windows | sf-win32-x64.tar.gzsf-win32-x64.tar.xz | sf-win32-x64-buildmanifest |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_setup)

#### Important

We highly recommended that you [use the installers](https://developer.salesforce.com/tools/salesforcecli) or npm to install Salesforce CLI on Windows. If, however, you decide to use the Windows TAR files, you must first install a separate program, such as 7Zip, to extract the file contents.

In these examples it’s assumed that you’re installing Salesforce CLI on Linux and in the cli/sf subdirectory of your home directory.

1.  Open a terminal window.
2.  Download one of these TAR files. Alternatively, run wget in the terminal to get a TAR file.

    ```

    ```

3.  Create the directory where you want to install Salesforce CLI.

    ```

    ```

4.  Unpack the contents for your TAR file:

    ```

    ```

    \-C unpacks the contents in the ~/cli/sf directory, while \--strip-components 1 removes the root path component.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_setup)

    #### Note

    This example shows just one possible set of flags for the tar command on Linux. For other options on your operating system, refer to the tar documentation.

5.  Update your PATH environment variable to include the Salesforce CLI bin directory. For example, to set it for your current terminal session:

    ```

    ```

    To update your PATH permanently, add the appropriate entry to your shell’s configuration file. For example, if you use the Bash shell, add this line to your ~/.bashrc or ~/.bash\_profile file:

    ```

    ```


#### See Also

-   [Verify Your Installation and Get Version Information](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_verify "To ensure that you’ve installed Salesforce CLI correctly, run these commands to view the version and list of available commands.")

-   [Disable Automatic Update of the CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_disable_autoupdate.htm "When you run a command, Salesforce CLI checks to see if you have the latest version. If not, the CLI automatically updates itself. You can disable this automatic update with an environment variable.")


## Install the CLI with npm

If you've installed Node.js on your computer, you can use npm to install Salesforce CLI. This method lets you install Salesforce CLI from the command line and can be especially useful for continuous integration (CI) use cases.

This installation method is a good option if you don’t have administrator permissions on your workstation, or if group policy blocks CLI installation and updates. Installing Salesforce CLI with npm doesn’t require root permissions.

1.  Open a terminal (macOS and Linux) or command prompt (Windows).
2.  Ensure that the long-term support (Active LTS) version of Node.js is installed on your computer. To install the LTS version, go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/ "HTML (New Window)"). To check your version number, run this command from the terminal or command prompt:

    ```

    ```

3.  To install Salesforce CLI, run this command.

    ```

    ```

    If you receive a permission error when installing Salesforce CLI using npm macOS or Linux, we don’t recommend using sudo. See [Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions).


#### See Also

-   [Verify Your Installation and Get Version Information](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_verify "To ensure that you’ve installed Salesforce CLI correctly, run these commands to view the version and list of available commands.")

-   [npm Documentation](https://docs.npmjs.com/getting-started/what-is-npm)


## Install Older Versions of Salesforce CLI

We recommend that you always use the latest version or release candidate of Salesforce CLI. However, we also understand that sometimes you want an older version of the CLI.

### Installers

If you installed Salesforce CLI with the installers, update to an older version with the \--version flag. For example, to update to version 2.0.1, run this command in a terminal (macOS and Linux) or command prompt (Windows).

```

```

Use the \--available flag to list all available older versions to which you can update. The output also shows whether you already have a local copy or if it must be downloaded.

```

```

Use \--interactive to choose a version interactively.

Use this command to return to the current version.

```

```

### npm

To update to an older version of Salesforce CLI using npm, specify the version using @<version> after the @salesforce/cli package name. For example, to update to version 2.0.1, run this command in a terminal (macOS and Linux) or command prompt (Windows).

```

```

To return to the current version, run this command.

```

```

See the [Salesforce CLI npmjs.com](https://www.npmjs.com/package/@salesforce/cli?activeTab=versions) page for a list of all versions. We keep all old versions of the [@salesforce/cli](https://www.npmjs.com/package/@salesforce/cli) and [sfdx-cli](https://www.npmjs.com/package/sfdx-cli) (deprecated) npm packages.

### TAR Files

We publish JSON files that list the download URLs for recent versions of the installers and TAR files for each supported operating system. We continually add new versions to the lists; versions remain on the list for 20 weeks. We keep the TAR and installer files themselves for 40 weeks minimum.

**sf (v2)**

| Operating System | File Type | TAR Compression Type | Link to JSON File |
| --- | --- | --- | --- |
| Linux ARM (Deprecated) | TAR | gz | sf-linux-arm-tar-gz.json |
| Linux ARM (Deprecated) | TAR | xz | sf-linux-arm-tar-xz.json |
| Linux 64 | TAR | gz | sf-linux-x64-tar-gz.json |
| Linux 64 | TAR | xz | sf-linux-x64-tar-xz.json |
| Windows 64 | TAR | gz | sf-win32-x64-tar-gz.json |
| Windows 64 | TAR | xz | sf-win32-x64-tar-xz.json |
| Windows x86 (Deprecated) | TAR | gz | sf-win32-x86-tar-gz.json |
| Windows x86 (Deprecated) | TAR | xz | sf-win32-x86-tar-xz.json |
| macOS (Intel CPU) | TAR | gz | sf-darwin-x64-tar-gz.json |
| macOS (Intel CPU) | TAR | xz | sf-darwin-x64-tar-xz.json |
| macOS (Apple Silicon) | TAR | gz | sf-darwin-arm64-tar-gz.json |
| macOS (Apple Silicon) | TAR | xz | sf-darwin-arm64-tar-xz.json |
| Windows 64 | Installer |  | sf-x64-exe.json |
| Windows x86 | Installer |  | sf-x86-exe.json |
| macOS (Intel CPU) | Installer |  | sf-x64-pkg.json |
| macOS (Apple Silicon) | Installer |  | sf-arm64-pkg.json |

**sfdx (v7) - Deprecated**

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_setup)

#### Note

As of July 12, 2023, we no longer update sfdx (v7). We keep these old versions for historical reasons only.

| Operating System | File Type | TAR Compression Type | Link to JSON File |
| --- | --- | --- | --- |
| Linux ARM | TAR | gz | sfdx-linux-arm-tar-gz.json |
| Linux ARM | TAR | xz | sfdx-linux-arm-tar-xz.json |
| Linux 64 | TAR | gz | sfdx-linux-x64-tar-gz.json |
| Linux 64 | TAR | xz | sfdx-linux-x64-tar-xz.json |
| Windows 64 | TAR | gz | sfdx-win32-x64-tar-gz.json |
| Windows 64 | TAR | xz | sfdx-win32-x64-tar-xz.json |
| Windows x86 | TAR | gz | sfdx-win32-x86-tar-gz.json |
| Windows x86 | TAR | xz | sfdx-win32-x86-tar-xz.json |
| macOS (Intel CPU) | TAR | gz | sfdx-darwin-x64-tar-gz.json |
| macOS (Intel CPU) | TAR | xz | sfdx-darwin-x64-tar-xz.json |
| macOS (Apple Silicon) | TAR | gz | sfdx-darwin-arm64-tar-gz.json |
| macOS (Apple Silicon) | TAR | xz | sfdx-darwin-arm64-tar-xz.json |
| Windows 64 | Installer |  | sfdx-x64-exe.json |
| Windows x86 | Installer |  | sfdx-x86-exe.json |
| macOS (Intel CPU) | Installer |  | sfdx-x64-pkg.json |
| macOS (Apple Silicon) | Installer |  | sfdx-arm64-pkg.json |

## Verify Your Installation and Get Version Information

To ensure that you’ve installed Salesforce CLI correctly, run these commands to view the version and list of available commands.

1.  Open a terminal (macOS and Linux) or a command prompt (Windows) on your computer.
2.  To view the Salesforce CLI version that you’ve installed, run this command.

    ```

    ```

    The command returns details about the version, such as this example output.

    ```

    ```

3.  To view the installed core plugins and their versions, run this command.

    ```

    ```

    The command displays information such as this sample output.

    ```

    ```

4.  To view all available Salesforce CLI commands and a summary, run this command.

    ```

    ```

5.  To display the release notes for the version of Salesforce CLI that’s currently installed on your computer, run this command.

    ```

    ```


#### See Also

-   [Salesforce CLI Plugins](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_plugins_overview.htm "Salesforce CLI consists of an npm (Node.js package manager) package called @salesforce/cli and multiple plugins—also npm packages—that contain commands. Node.js is a JavaScript (also Typescript) runtime environment that supports execution outside of a browser. Most of the core functionality that Salesforce CLI provides comes from plugins.")

## Code Examples

```
wget https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-linux-x64.tar.xz
```

```
mkdir -p ~/cli/sf
```

```
tar xJf sf-linux-x64.tar.xz -C ~/cli/sf --strip-components 1
```

```
export PATH=~/cli/sf/bin:$PATH
```

```
PATH=~/cli/sf/bin:$PATH
```

## Related Topics

- Install the CLI on macOS (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
- Install the CLI on Windows (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
- Install the CLI with a TAR File (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
- Install the CLI with npm (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
- Install Older Versions of Salesforce CLI (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
- Verify Your Installation and Get Version Information (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
- Disable Automatic Update of the CLI (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_disable_autoupdate.htm)
- Salesforce CLI Plugins (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_plugins_overview.htm)
