---
title: "Install First-Generation Managed Packages Using Metadata API"
domain: pkg1-dev
topic: install-first-generation-managed-packages-using-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.523Z
estimatedTokens: 763
namespace: MyNamespace
keywords: [Install, First-Generation, Managed, Packages, Metadata, API, upgrade, uninstall, instead, user, Automating, repeated, tasks, help, work]
---

# Install First-Generation Managed Packages Using Metadata API

> You can install, upgrade, and uninstall managed packages using the Metadata API,
    instead of the user interface. Automating these repeated tasks can help you can work more
    efficiently and speed up application development.

**Namespace:** `MyNamespace`

# Install First-Generation Managed Packages Using Metadata API

You can install, upgrade, and uninstall managed packages using the Metadata API, instead of the user interface. Automating these repeated tasks can help you can work more efficiently and speed up application development.

To install, upgrade, or uninstall a package, use the standard Metadata API deploy() call with the InstalledPackage metadata type. The following operations are supported.

-   Deploying an InstalledPackage installs the package in the deploying organization.
-   Deploying a newer version of a currently installed package upgrades the package.
-   Deploying an InstalledPackage using a manifest called destructiveChanges.xml, instead of package.xml, uninstalls it from the organization.

To specify whether all users, or only admins, can access the package you’re installing, use the securityType field on the InstalledPackage metadata type. The default value is AllUsers. This field is available in API version 57.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

InstalledPackage must be the only metadata type specified in the manifest file.

The following is a typical project manifest (package.xml) for installing a package. The manifest must not contain a fullName or namespacePrefix element.

```

```

The package is specified in a file called MyNamespace.installedPackage, where MyNamespace is the namespace prefix of the package. The file must be in a directory called installedPackages, and its contents must have this format.

```

```

The securityType field is optional. If it’s not specified, the default security type is AllUsers.

InstalledPackage in API version 43.0 and later must include the activateRSS field set to either of these values.

true

Keep the isActive state of any Remote Site Settings(RSS) or Content Security Policies(CSP) in the package.

false

Override the isActive state of any RSS or CSP in the package and set it to false.

The default value is false.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Regardless of what activateRSS is set to, a retrieve of InstalledPackage always returns <activateRSS xsi:nil=”true”/>. Therefore, before you deploy a package, inspect the information you’ve retrieved from InstalledPackage and set activateRSS to the desired value.

To uninstall a package, deploy this destructiveChanges.xml manifest file in addition to the package.xml file.

```

```

Retrieving an InstalledPackage, using the retrieve() call creates an XML representation of the package installed in an org. If the installed package has a password or security type specified, that information isn’t retrieved. Deploying the retrieved file in a different org installs the package in that organization.

For more information on the deploy() and retrieve() commands, see the [*Metadata API Developer’s Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/ "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
  <Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
      <members>*</members>
       <name>InstalledPackage</name>
     </types>
    <version>28.0</version>
  </Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
  <InstalledPackage xmlns="http://soap.sforce.com/2006/04/metadata">
    <versionNumber>1.0</versionNumber>
    <password>optional_password</password>
    <securityType>AdminsOnly</securityType>
  </InstalledPackage>
```

```
<?xml version="1.0" encoding="UTF-8"?>
  <Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
      <members>MyNamespace</members>
      <name>InstalledPackage</name>
     </types>
  </Package>
```
