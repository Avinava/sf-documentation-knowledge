---
title: "project retrieve start"
domain: cli-commands
topic: project-retrieve-start
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, retrieve, start, Retrieve, metadata, org, local, project., Description, Examples, Flags, Aliases]
---

# project retrieve start

> Retrieve metadata from an org to your local project.

## project retrieve start

Retrieve metadata from an org to your local project.

### Description for project retrieve start

You must run this command from within a project.

Metadata components are retrieved in source format by default. Retrieve them in metadata format by specifying the --target-metadata-dir flag, which retrieves the components into a ZIP file in the specified directory.

If your org allows source tracking, then this command tracks the changes in your source. Some orgs, such as production orgs, never allow source tracking. Source tracking is enabled by default on scratch and sandbox orgs; you can disable source tracking when you create the orgs by specifying the --no-track-source flag on the "sf org create scratch|sandbox" commands.

To retrieve multiple metadata components, either use multiple --metadata <name> flags or use a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project retrieve start

Retrieve all remote changes from your default org:

```

```

Retrieve the source files in the "force-app" directory from an org with alias "my-scratch":

```

```

Retrieve all the Apex classes and custom objects whose source is in the "force-app" directory. The list views, layouts, etc, that are associated with the custom objects are also retrieved. Both examples are equivalent:

```

```

```

```

Retrieve all Apex classes that are in all package directories defined in the "sfdx-project.json" file:

```

```

Retrieve a specific Apex class; ignore any conflicts between the local project and org (be careful with this flag, because it will overwrite the Apex class source files in your local project if there are conflicts!):

```

```

Retrieve specific Apex classes that match a pattern; in this example, retrieve Apex classes whose names contain the string "MyApex":

```

```

Retrieve a custom object called ExcitingObject that's in the SBQQ namespace:

```

```

Retrieve all custom objects in the SBQQ namespace by using a wildcard and quotes:

```

```

Retrieve all list views for the Case standard object:

```

```

Retrieve all custom objects and Apex classes found in all defined package directories (both examples are equivalent):

```

```

```

```

Retrieve all metadata components listed in a manifest:

```

```

Retrieve metadata from a package:

```

```

Retrieve metadata from multiple packages, one of which has a space in its name (both examples are equivalent):

```

```

```

```

Retrieve the metadata components listed in the force-app directory, but retrieve them in metadata format into a ZIP file in the "output" directory:

```

```

Retrieve in metadata format and automatically extract the contents into the "output" directory:

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

\-a | \--api-version API-VERSION

Optional

Target API version for the retrieve.

Use this flag to override the default API version, which is the latest version supported the CLI, with the API version in your package.xml file.

Type: option

\-c | \--ignore-conflicts

Optional

Ignore conflicts and retrieve and save files to your local filesystem, even if they overwrite your local changes.

This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as production orgs.

Type: boolean

\-x | \--manifest MANIFEST

Optional

File path for the manifest (package.xml) that specifies the components to retrieve.

If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to retrieve. Wildcards (\`\*\`) supported as long as you use quotes, such as \`ApexClass:MyClass\*\`.

Type: option

\-n | \--package-name PACKAGE-NAME

Optional

Package names to retrieve. Use of this flag is for reference only; don't use it to retrieve packaged metadata for development.

The metadata of the supplied package name(s) will be retrieved into a child directory of the project. The name of that child directory matches the name of the package. The retrieved metadata is meant for your reference only, don't add it to a source control system for development and deployment. For package development, retrieve the metadata using a manifest (\`--manifest\` flag) or by targeting a source controlled package directory within your project (\`--source-dir\` flag).

Type: option

\-r | \--output-dir OUTPUT-DIR

Optional

Directory root for the retrieved source files.

The root of the directory structure into which the source files are retrieved.

If the target directory matches one of the package directories in your sfdx-project.json file, the command fails.

Running the command multiple times with the same target adds new files and overwrites existing files.

Type: option

\--single-package

Optional

Indicates that the zip file points to a directory structure for a single package.

Type: boolean

\-d | \--source-dir SOURCE-DIR

Optional

File paths for source to retrieve from the org.

The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all source files in the directory and its subdirectories).

Type: option

\-t | \--target-metadata-dir TARGET-METADATA-DIR

Optional

Directory that will contain the retrieved metadata format files or ZIP.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results to the terminal window.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you.

Type: option

Default value: 33 minutes

\-z | \--unzip

Optional

Extract all files from the retrieved zip file.

Type: boolean

\--zip-file-name ZIP-FILE-NAME

Optional

File name to use for the retrieved zip file.

Type: option

### Aliases for project retrieve start

```

```