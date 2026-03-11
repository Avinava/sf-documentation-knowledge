---
title: "project convert source"
domain: cli-commands
topic: project-convert-source
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, convert, source, Convert, source-formatted, files, metadata, deploy, Metadata, API., Description, Examples, Flags, Aliases]
---

# project convert source

> Convert source-formatted files into metadata that you can deploy using Metadata API.

## project convert source

Convert source-formatted files into metadata that you can deploy using Metadata API.

### Description for project convert source

To convert source-formatted files into the metadata format, so that you can deploy them using Metadata API, run this command. Then deploy the metadata using "sf project deploy".

To convert Metadata API–formatted files into the source format, run "sf project convert mdapi".

To specify a package name that includes spaces, enclose the name in single quotes.

To convert multiple components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project convert source

Convert source-formatted files in the specified directory into metadata-formatted files; writes converted files into a new directory:

```

```

Similar to previous example, but writes converted files to the specified output directory and associates the files with the specified package:

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

\--api-version API-VERSION

Optional

API Version to use in the generated project's manifest. By default, will use the version from sfdx-project.json

Override the api version used for api requests made by this command

Type: option

\-r | \--root-dir ROOT-DIR

Optional

Source directory other than the default package to convert.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Output directory to store the Metadata API–formatted files in.

Type: option

Default value: metadataPackage\_1772650329005

\-n | \--package-name PACKAGE-NAME

Optional

Name of the package to associate with the metadata-formatted files.

Type: option

\-x | \--manifest MANIFEST

Optional

Path to the manifest (package.xml) file that specifies the metadata types to convert.

If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-p | \--source-dir SOURCE-DIR

Optional

Paths to the local source files to convert.

The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).

If you specify this flag, don’t specify --manifest or --metadata.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to convert.

Type: option

### Aliases for project convert source

```

```