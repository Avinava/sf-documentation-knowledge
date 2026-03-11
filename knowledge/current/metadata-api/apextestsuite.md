---
title: "ApexTestSuite"
domain: metadata-api
topic: apextestsuite
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.575Z
keywords: [ApexTestSuite, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ApexTestSuite

# ApexTestSuite

Represents a suite of Apex test classes to include in a test run.

## File Suffix and Directory Location

ApexTestSuite components have the suffix .testSuite and are stored in the testSuites folder.

## Version

ApexTestSuite components are available in API version 38.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| testClassName | string[] | A list of Apex test classes, specified by name, to include in this test suite. |

## Declarative Metadata Sample Definition

To include namespaced tests in an Apex test suite, specify each namespace individually. Local Apex tests consist of all tests in the org that don’t originate from managed packages.

```

```

These syntaxes are supported in package.xml. If the test classes in your suites are already present in the target org, you can omit the ApexClass type in package.xml.

```

```

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").