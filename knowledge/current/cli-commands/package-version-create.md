---
title: "package version create"
domain: cli-commands
topic: package-version-create
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, version, create, Create, Dev, Hub, org., Description, Examples, Flags, Aliases]
---

# package version create

> Create a package version in the Dev Hub org.

## package version create

Create a package version in the Dev Hub org.

### Description for package version create

The package version is based on the package contents in the specified directory.

To retrieve details about a package version create request, including status and package version ID (04t), run "sf package version create report -i 08c...".

We recommend that you specify the --installation-key parameter to protect the contents of your package and to prevent unauthorized installation of your package.

To list package version creation requests in the org, run "sf package version create list".

To promote a package version to released, you must use the --code-coverage parameter. The package must also meet the code coverage requirements. This requirement applies to both managed and unlocked packages.

We don’t calculate code coverage for org-dependent unlocked packages, or for package versions that specify --skip-validation.

### Examples for package version create

Create a package version from the contents of the "common" directory and give it an installation key of "password123"; uses your default Dev Hub org:

```

```

Create a package version from a package with the specified alias; uses the Dev Hub org with username devhub@example.com:

```

```

Create a package version from a package with the specified ID:

```

```

Create a package version and skip the validation step:

```

```

Create a package version and perform package validations asynchronously:

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

\-b | \--branch BRANCH

Optional

Name of the branch in your source control system that the package version is based on.

Type: option

\-c | \--code-coverage

Optional

Calculate and store the code coverage percentage by running the packaged Apex tests included in this package version.

Before you can promote and release a managed or unlocked package version, the Apex code must meet a minimum 75% code coverage requirement. We don’t calculate code coverage for org-dependent unlocked packages or for package versions that specify --skip-validation.

Type: boolean

\-f | \--definition-file DEFINITION-FILE

Optional

Path to a definition file similar to scratch org definition file that contains the list of features and org preferences that the metadata of the package version depends on.

For a patch version, the features specified in this file are ignored, and instead the features specified for the ancestor version are used.

Type: option

\-k | \--installation-key INSTALLATION-KEY

Optional

Installation key for key-protected package. (either --installation-key or --installation-key-bypass is required)

Type: option

\-x | \--installation-key-bypass

Optional

Bypass the installation key requirement. (either --installation-key or --installation-key-bypass is required)

If you bypass this requirement, anyone can install your package.

Type: boolean

\-p | \--package PACKAGE

Optional

ID (starts with 0Ho) or alias of the package to create a version of.

Type: option

\-d | \--path PATH

Optional

Path to the directory that contains the contents of the package.

Type: option

\--post-install-script POST-INSTALL-SCRIPT

Optional

Name of the post-install script; applies to managed packages only.

The post-install script is an Apex class within this package that is run in the installing org after installations or upgrades of this package version.

Type: option

\--post-install-url POST-INSTALL-URL

Optional

Post-install instructions URL.

The contents of the post-installation instructions URL are displayed in the UI after installation of the package version.

Type: option

\--releasenotes-url RELEASENOTES-URL

Optional

Release notes URL.

This link is displayed in the package installation UI to provide release notes for this package version to subscribers.

Type: option

\--skip-ancestor-check

Optional

Override ancestry requirements, which allows you to specify a package ancestor that isn’t the highest released package version.

Type: boolean

\--skip-validation

Optional

Skip validation during package version creation; you can’t promote unvalidated package versions.

Skips validation of dependencies, package ancestors, and metadata during package version creation. Skipping validation reduces the time it takes to create a new package version, but you can promote only validated package versions. Skipping validation can suppress important errors that can surface at a later stage. You can specify skip validation or code coverage, but not both. Code coverage is calculated during validation.

Type: boolean

\--async-validation

Optional

Return a new package version before completing package validations.

Specifying async validation returns the package version earlier in the process, allowing you to install and test the new version right away. If your development team is using continuous integration (CI) scripts, async validation can reduce your overall CI run time.

Type: boolean

\--generate-pkg-zip

Optional

Generate a package ZIP file that you can use for debugging or to examine the package contents.

Type: boolean

\-t | \--tag TAG

Optional

Package version’s tag.

Type: option

\--uninstall-script UNINSTALL-SCRIPT

Optional

Uninstall script name; applies to managed packages only.

The uninstall script is an Apex class within this package that is run in the installing org after uninstallations of this package.

Type: option

\-e | \--version-description VERSION-DESCRIPTION

Optional

Description of the package version to be created; overrides the sfdx-project.json value.

Type: option

\-a | \--version-name VERSION-NAME

Optional

Name of the package version to be created; overrides the sfdx-project.json value.

Type: option

\-n | \--version-number VERSION-NUMBER

Optional

Version number of the package version to be created; overrides the sfdx-project.json value.

For information about the format of the version number, see https://developer.salesforce.com/docs/atlas.en-us.pkg2\_dev.meta/pkg2\_dev/sfdx\_dev2gp\_config\_file.htm.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the package version to be created.

Type: option

Default value: 0 minutes

\--language LANGUAGE

Optional

Language for the package.

Specify the language using a language code listed under "Supported Languages" in Salesforce Help. If no language is specified, the language defaults to the language of the Dev Hub user who created the package.

Type: option

\--verbose

Optional

Display verbose command output.

Display verbose command output. When polling for the status of the creation, this will output status and timeout data on a separate line for each poll request, which is useful in CI systems where timeouts can occur with long periods of no output from commands.

Type: boolean

### Aliases for package version create

```

```