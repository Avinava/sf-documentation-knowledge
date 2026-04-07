---
title: "GitHub Repositories GitHub Repositories"
domain: mobile-sdk
topic: github-repositories-github-repositories
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:30.850Z
estimatedTokens: 1313
keywords: [GitHub, Repositories, adventurous, developers, delve, SDK, keep, latest, changes, possibly, contribute, development, monitor, source, code]
---

# GitHub Repositories GitHub Repositories

> More adventurous developers can delve into the SDK, keep up with the latest changes, and
    possibly contribute to SDK development through GitHub. Using GitHub allows you to monitor source
    code in public pre-release development branches. In this scenario, your app includes the SDK
    source code, which is built along with your app.

# GitHub Repositories GitHub Repositories

More adventurous developers can delve into the SDK, keep up with the latest changes, and possibly contribute to SDK development through GitHub. Using GitHub allows you to monitor source code in public pre-release development branches. In this scenario, your app includes the SDK source code, which is built along with your app.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

You don’t have to sign up for GitHub to access the Mobile SDK, but it’s a good idea to join this social coding community. [https://github.com/forcedotcom](https://github.com/forcedotcom)

You can always find the latest Mobile SDK releases in our public repositories:

-   [https://github.com/forcedotcom/SalesforceMobileSDK-iOS](https://github.com/forcedotcom/SalesforceMobileSDK-iOS)
-   [https://github.com/forcedotcom/SalesforceMobileSDK-Android](https://github.com/forcedotcom/SalesforceMobileSDK-Android)

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

To submit pull requests for any Mobile SDK platform, check out the **dev** branch as the basis for your changes.

If you’re using GitHub only to build source code for the current release, check out the **master** branch.

## Cloning the Mobile SDK for iOS GitHub Repository (Optional)

Many tools exist for cloning and managing local GitHub repos. The following instructions show three popular ways to clone Mobile SDK plus an important post-clone installation step.

1.  Clone the repo. For example, you can use one of the following options.
    -   Command line:
        1.  In the OS X Terminal app, use the git command, which is installed with Xcode:

            ```

            ```

    -   Xcode:
        1.  Select **Source Control** | **Clone**.
        2.  For Save As, accept the default or type a custom directory name.
        3.  For Where, choose a convenient parent directory.
        4.  Click **Clone**.
    -   GitHub Desktop for Mac ([https://desktop.github.com/](https://desktop.github.com/ "HTML (New Window)")):
        1.  Click **Clone a Repository from the Internet**.
        2.  Click **URL**.
        3.  For Repository URL or GitHub username and repository, type [https://github.com/forcedotcom/SalesforceMobileSDK-iOS](https://github.com/forcedotcom/SalesforceMobileSDK-iOS).
        4.  Set Local Path to a destination of your choice.
        5.  Click **Clone**.
2.  In the OS X Terminal app, change to the directory in which you cloned the repo (SalesforceMobileSDK-iOS by default).
3.  Run the install script from the command line: ./install.sh

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

The install.sh script checks that you have the correct platform development tools installed. It then syncs external submodules required for Mobile SDK development to your local clone. If your development machine has stored obsolete Mobile SDK project templates for Xcode, the script removes those unnecessary files.

## Cloning the Mobile SDK for Android GitHub Repository (Optional)

1.  In your browser, navigate to the Mobile SDK for Android GitHub repository: [https://github.com/forcedotcom/SalesforceMobileSDK-Android](https://github.com/forcedotcom/SalesforceMobileSDK-Android).
2.  Clone the repository to your local file system by issuing the following command:

    ```

    ```

3.  Open a terminal prompt or command window in the directory where you installed the cloned repository.
4.  Run ./install.sh on Mac, or cscript install.vbs on Windows

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

The install scripts sync external submodules required for Mobile SDK development to your local clone. After you’ve run cscript install.vbs on Windows, git status returns a list of modified and deleted files. This output is an unfortunate side effect of resolving symbolic links in the repo. Do not clean or otherwise revert these files.

## Creating Android Projects with the Cloned GitHub Repository

To create native and hybrid projects with the cloned SalesforceMobileSDK-Android repository, follow the instructions in native/README.md and hybrid/README.md files.

## Creating iOS Projects with the Cloned GitHub Repository

To create projects with the cloned SalesforceMobileSDK-iOS repository, follow the instructions in the repository’s readme.md file.

#### See Also

-   [Install Node.js, npm, and Git Command Line](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_node_js.htm "Many mobile developers want to use Mobile SDK as a “black box” and begin creating apps as quickly as possible. For this use case, Mobile SDK offers a variety of npm command line scripts that help you create apps. If you plan to take advantage of these npm tools, you first install Node.js. The Node.js installer automatically installs npm. You also install the latest version of the Git command line.")

## Code Examples

```
git clone git://github.com/forcedotcom/SalesforceMobileSDK-iOS.git
```

```
git clone git://github.com/forcedotcom/SalesforceMobileSDK-Android.git
```

## Related Topics

- Install Node.js, npm, and Git Command Line (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_node_js.htm)
