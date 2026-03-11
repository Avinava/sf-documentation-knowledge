---
title: "project convert mdapi"
domain: cli-commands
topic: project-convert-mdapi
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, convert, mdapi, Convert, metadata, retrieved, via, Metadata, API, source, format, used, Salesforce, projects., Description, Examples, Flags, Aliases]
---

# project convert mdapi

> Convert metadata retrieved via Metadata API into the source format used in Salesforce DX projects.

## project convert mdapi

Convert metadata retrieved via Metadata API into the source format used in Salesforce DX projects.

### Description for project convert mdapi

To use Salesforce CLI to work with components that you retrieved via Metadata API, first convert your files from the metadata format to the source format using this command.

To convert files from the source format back to the metadata format, run "sf project convert source".

To convert multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project convert mdapi

Convert metadata formatted files in the specified directory into source formatted files; writes converted files to your default package directory:

```

```

Similar to previous example, but writes converted files to the specified output directory:

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

Override the api version used for api requests made by this command

Type: option

\-r | \--root-dir ROOT-DIR

Required

Root directory that contains the Metadata API–formatted metadata.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory to store your files in after they’re converted to source format; can be an absolute or relative path.

Type: option

\-x | \--manifest MANIFEST

Optional

File path to manifest (package.xml) of metadata types to convert.

If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-p | \--metadata-dir METADATA-DIR

Optional

Root of directory or zip file of metadata formatted files to convert.

The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).

If you specify this flag, don’t specify --manifest or --metadata. If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of double quotes.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to convert.

Type: option

### Aliases for project convert mdapi

```

```