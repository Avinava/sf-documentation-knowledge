---
title: "ApexTestSuite"
domain: metadata-api
topic: apextestsuite
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.926Z
estimatedTokens: 364
keywords: [ApexTestSuite, Represents, suite, Apex, test, classes, include, run., File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# ApexTestSuite

> Represents a suite of Apex test classes to include in a test
         run.

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

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ApexTestSuite xmlns="http://soap.sforce.com/2006/04/metadata">
   <testClassName>LocalTestClass</testClassName>
      <!-- LocalTestClass adds the test class named LocalTestClass. -->
   <testClassName>A*Class</testClassName>
      <!-- A*Class adds AClass, AnotherClass, AwesomeClass, and so on. -->
   <testClassName>Namespace1.NamespacedTestClass</testClassName>
   <testClassName>*</testClassName> <!-- Adds all local tests. -->
   <testClassName>Namespace1.*</testClassName> <!-- Adds all tests in Namespace1. -->
   <testClassName>Namespace2.*</testClassName> <!-- Adds all tests in Namespace2. -->
</ApexTestSuite>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>ApexClass</name>
   </types>
   <types>
      <members>*</members>
      <name>ApexTestSuite</name>
   </types>
   <version>38.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>ApexClass</name>
   </types>
   <types>
      <members>Suite1</members>
      <members>Suite2</members>
      <name>ApexTestSuite</name>
   </types>
   <version>38.0</version>
</Package>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
