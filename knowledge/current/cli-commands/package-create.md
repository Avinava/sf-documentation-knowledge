---
title: "package create"
domain: cli-commands
topic: package-create
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.318Z
keywords: [package, create, Create, package., Description, Examples, Flags, Aliases]
---

# package create

> Create a package.

## package create

Create a package.

### Description for package create

First, use this command to create a package. Then create a package version.

If you don’t have a namespace defined in your sfdx-project.json file, use --no-namespace.

Your --name value must be unique within your namespace.

Run 'sf package list to list all packages in the Dev Hub org.

### Examples for package create

Create an unlocked package from the files in the "force-app" directory; uses your default Dev Hub org:

```

```

Create a managed packaged from the "force-app" directory files, give the package a description, and use the specified Dev Hub org:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-n | \--name NAME

Required

Name of the package to create.

Type: option

\-t | \--package-type PACKAGE-TYPE

Required

Type of package.

The options for package type are Managed and Unlocked (Managed=DeveloperManagedSubscriberManaged, Unlocked=DeveloperControlledSubscriberEditable). These options determine upgrade and editability rules.

Type: option

Permissible values are: Managed, Unlocked

\-d | \--description DESCRIPTION

Optional

Description of the package.

Type: option

\-e | \--no-namespace

Optional

Create the package with no namespace; available only for unlocked packages.

This flag is useful when you’re migrating an existing org to packages. But use a namespaced package for new metadata.

Type: boolean

\-r | \--path PATH

Required

Path to directory that contains the contents of the package.

Type: option

\--org-dependent

Optional

Depends on unpackaged metadata in the installation org; applies to unlocked packages only.

Use Source Tracking in Sandboxes to develop your org-dependent unlocked package. For more information, see "Create Org-Dependent Unlocked Packages" in the Salesforce DX Developer Guide.

Type: boolean

\-o | \--error-notification-username ERROR-NOTIFICATION-USERNAME

Optional

Active Dev Hub user designated to receive email notifications for package errors.

Email notifications include information about unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package.

Type: option

### Aliases for package create

```

```