---
title: "How Does a Post Install Script Work?"
domain: pkg2-dev
topic: how-does-a-post-install-script-work
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.779Z
estimatedTokens: 892
keywords: [How, Post, Install, Script, Work, Apex, implements, InstallHandler]
---

# How Does a Post Install Script Work?

> A post install script is an Apex class that implements the InstallHandler interface.

# How Does a Post Install Script Work?

A post install script is an Apex class that implements the InstallHandler interface.

This interface has a single method called onInstall that specifies the actions to be performed on installation.

```

```

The onInstall method takes a context object as its argument, which provides the following information.

-   The org ID of the organization in which the installation takes place.
-   The user ID of the user who initiated the installation.
-   The version number of the previously installed package (specified using the Version class). This is always a three-part number, such as 1.2.0.
-   Whether the installation is an upgrade
-   Whether the installation is a push

The context argument is an object whose type is the InstallContext interface. This interface is automatically implemented by the system. The following definition of the InstallContext interface shows the methods you can call on the context argument.

```

```

**Version Methods and Class**

You can use the methods in the System.Version class to get the version of a managed package and to compare package versions. A package version is a number that identifies the set of components in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). The major and minor numbers increase to a chosen value during every non-patch release. Major and minor number increases always use a patch number of 0.

The following are instance methods for the System.Version class.

| Method | Arguments | Return Type | Description |
| --- | --- | --- | --- |
| compareTo | System.Version version | Integer | Compares the current version with the specified version and returns one of the following values:Zero if the current package version is equal to the specified package versionAn Integer value greater than zero if the current package version is greater than the specified package versionAn Integer value less than zero if the current package version is less than the specified package versionIf a two-part version is being compared to a three-part version, the patch number is ignored and the comparison is based only on the major and minor numbers. |
| major |  | Integer | Returns the major package version of the calling code. |
| minor |  | Integer | Returns the minor package version of the calling code. |
| patch |  | Integer | Returns the patch package version of the calling code or null if there’s no patch version. |

The System class contains two methods that you can use to specify conditional logic, so different package versions exhibit different behavior.

-   System.requestVersion: Returns a two-part version that contains the major and minor version numbers of a package.Using this method, you can determine the version of an installed instance of your package from which the calling code is referencing your package. Based on the version that the calling code has, you can customize the behavior of your package code.
-   System.runAs(System.Version): Changes the current package version to the package version specified in the argument.

When a subscriber has installed multiple versions of your package and writes code that references Apex classes or triggers in your package, they must select the version they’re referencing. You can execute different code paths in your package’s Apex code based on the version setting of the calling Apex code making the reference. You can determine the calling code’s package version setting by calling the System.requestVersion method in the package code.

## Code Examples

```apex
global interface InstallHandler {
  void onInstall(InstallContext context)
}
```

```apex
global interface InstallContext { 
  ID organizationId();
  ID installerId();
  Boolean isUpgrade();
  Boolean isPush(); 
  Version previousVersion();
}
```
