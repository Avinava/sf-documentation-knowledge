---
title: "Considerations for Installing Data Loader"
domain: dataLoader
topic: considerations-for-installing-data-loader
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:24.228Z
estimatedTokens: 1173
keywords: [Considerations, Installing, Data, Loader, download, install, understand, installation, login, release, own, operating, systems, hardware, requirements]
---

# Considerations for Installing Data Loader

> Before you download and install Data Loader, understand the installation and login
      considerations. Each release of Data Loader has its own list of supported operating systems
      and hardware requirements.

# Considerations for Installing Data Loader

Before you download and install Data Loader, understand the installation and login considerations. Each release of Data Loader has its own list of supported operating systems and hardware requirements.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


| User Permissions Needed |
| --- |
| To use Data Loader: | API EnabledANDThe appropriate user permission for the operation you’re doing, for example, Create on accounts to insert new accountsANDBulk API Hard Delete (only if you configure Data Loader to use Bulk API to hard-delete records) |

## System Requirements for Windows

Data Loader is signed for Windows. See [Salesforce Data Loader](https://developer.salesforce.com/tools/data-loader) and the Salesforce Release Notes for the most current information.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

Salesforce no longer bundles Java with the Data Loader for Windows installer. Download and install Java Runtime Environment (JRE) on your Windows computer.

## System Requirements for macOS

See [Salesforce Data Loader](https://developer.salesforce.com/tools/data-loader) and the Salesforce Release Notes for the most current information.

## Installation Considerations

Over time, several versions of the Data Loader client application have been available for download. Some earlier versions were called “AppExchange Data Loader” or “Sforce Data Loader.” You can run different versions at the same time on one computer. However, don’t install more than one copy of the same version. If you’ve installed the latest version and want to install it again, first remove the version on your computer.

As of Data Loader v56.0.0, if the latest version of Data Loader isn’t compatible with your org's current API version, your installed version of Data Loader automatically attempts to use the previous API version to resolve compatibility with your org. For example, if your org doesn’t support API v56.0, Data Loader v56.0.0 tries making requests with API v55.0.

Download Data Loader from the [Tools section of the Salesforce Developer website](https://developer.salesforce.com/tools/data-loader).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

Install Java Runtime Environment (JRE) version 17 or later, before installing Data Loader.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=dataLoader)

#### Tip

If you experience login issues in the command-line interface after upgrading Data Loader, try encrypting your password again to solve the problem.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

To change the source code, download the open-source version of Data Loader from [https://github.com/forcedotcom/dataloader](https://github.com/forcedotcom/dataloader).

## Login Considerations

-   When using Data Loader from the command line or UI, you can log using either OAuth 2.0 Web Server Flow (Data Loader version v64.0.1 and later) or password authentication. See [OAuth Authentication](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_authenticate.htm&language=en_US) for more information.
-   If your organization restricts IP addresses, logins from untrusted IPs are blocked until they’re activated. Salesforce automatically sends you an activation email that you can use to log in. The email contains a security token that you add to the end of your password. For example, if your password is mypassword, and your security token is XXXXXXXXXX, you must enter mypasswordXXXXXXXXXX to log in.
-   Salesforce Communities users always log in using OAuth 2.0 Web Server Flow (Data Loader v64.1.0 and later). To enable OAuth for Digital Experiences, modify the config.properties.

    -   Change the portion in bold in the following line to the login URL of the site. Don’t add a forward slash (/) to the end of the line.

        ```

        ```

        For example:

        ```

        ```

    -   Change the portion in bold in the following line to the hostname of the site.

        ```

        ```

        For example:

        ```

        ```


    The config.properties file is in the configs default configuration directory, which is installed in these locations.

    -   macOS: /Users/{userName}/dataloader/version/configs
    -   Windows: C:\\Users\\{userName}\\dataloader\\version\\configs

## Code Examples

```
sfdc.oauth.Production.server=​https\://login.salesforce.com
```

```
sfdc.oauth.Production.server=​https\://MyDomainName.my.site.com/test
```

```
sfdc.oauth.Production.redirecturi=​https\://login.salesforce.com/services/oauth2/success
```

```
sfdc.oauth.Production.redirecturi=​https\:/MyDomainName.my.site.com/services/oauth2/success
```
