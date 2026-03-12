---
title: "Download and Install Data Loader"
domain: dataLoader
topic: download-and-install-data-loader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.280Z
estimatedTokens: 943
keywords: [Download, Install, Data, Loader, MacOS, Windows, operating, systems, configure, app, local, machine]
---

# Download and Install Data Loader

> Data Loader is available for MacOS and Windows operating systems. Download to install
    and configure the app on your local machine.

# Download and Install Data Loader

Data Loader is available for MacOS and Windows operating systems. Download to install and configure the app on your local machine.


| User Permissions Needed |
| --- |
| To use Data Loader: | API EnabledANDThe appropriate user permission for the operation you’re doing, for example, Create on accounts to insert new accountsANDBulk API Hard Delete (only if you configure Data Loader to use Bulk API to hard-delete records) |

Data Loader is updated in every Salesforce Release. The major version number corresponds to the currently available API version.

1.  Install Java Runtime Environment (JRE) version 17 or later for your operating system. Tips for downloading JRE:
    -   Download the JRE java package, or a JDK package that contains a JRE.
    -   If unsure of the version to choose, select the latest.
    -   Make sure to select a download that matches your operating system and CPU architecture.
    -   Some examples of sites that make JRE available include [Azul Zulu](https://www.azul.com/downloads/?package=jre#zulu) ([documentation](https://docs.azul.com/core/)), or [Adoptium Eclipse Temurin](https://adoptium.net/temurin/releases/) ([documentation](https://adoptium.net/installation/)).
2.  Set your JAVA\_HOME environment variable to point to the directory in which you installed the JRE.
3.  Download the most recent version of Data Loader at [https://developer.salesforce.com/tools/data-loader](https://developer.salesforce.com/tools/data-loader).
4.  Optionally, verify that the downloaded Data Loader zip file is signed by Salesforce. On macOS or Windows, run the command jarsigner -verify dataloader\_v<version>.zip. Replace <version> with the version string in the download's filename. For example,

    ```

    ```

5.  After the download completes, open the .zip file and select **Extract All**.
6.  On Windows, in the Data Loader folder, run the **install.bat** file.
7.  On MacOS, in the Data Loader folder, run the **installer.command** file.
    1.  On MacOS 15, if there's an error that **installer.command** can't be opened, open the macOS **Privacy & Security** panel. Scroll to the **Security** section, then click **Open Anyway** next to **"install.command" was blocked to protect your Mac"**. Click **Open Anyway** on the **Open "install.command"?** window.
    2.  On MacOS earlier than version 15, an error is shown when you first double-click **install.command** after extracting zip file content.

        ![Unidentified developer error on macOS](/docs/resources/img/en-us/260.0?doc_id=images%2Fdata_loader_open_error.png&folder=dataLoader)

        Ignore the error and click **OK**.
    3.  On macOS earlier than version 15, ignore any error regarding an unidentified developer message. Press the Control key while clicking the **installer.command** file, and select **Open** from the menu. An error is shown:

        ![Cannot verify developer error on macOS](/docs/resources/img/en-us/260.0?doc_id=images%2Fdata_loader_verify_dev_error.png&folder=dataLoader)

        Ignore the error and click **Open**.
8.  Specify a directory for the Data Loader installation. Overwrite the contents if there’s an existing Data Loader directory.
9.  Answer the prompts and decide your preferences to complete the installation.

To open Data Loader, use the Data Loader desktop icon, or find it from the Start menu (Windows) or in your Applications folder (macOS). You can also run **dataloader.app** (macOS) or **dataloader.bat** (Windows) from the installation folder.

If you want to retain your settings after installing a new version of data loader, move **config.properties** from the configs sub-folder of the previously installed version to the configs sub-folder of the newly installed version.

## Code Examples

```
jarsigner -verify dataloader_v58.0.3.zip
```
