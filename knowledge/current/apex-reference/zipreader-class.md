---
title: "ZipReader Class"
domain: apex-reference
topic: zipreader-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.823Z
estimatedTokens: 1426
namespace: Compression
keywords: [ZipReader, zip, entries, extract, content, file, data, entry, getEntries, getEntriesMap, getEntry, getEntryNames]
---

# ZipReader Class

> Contains methods to get information about zip entries and to extract content for
    specified zip entries from the zip file.

**Namespace:** `Compression`

# ZipReader Class

Contains methods to get information about zip entries and to extract content for specified zip entries from the zip file.

## Namespace

[Compression](atlas.en-us.apexref.meta/apexref/apex_namespace_compression.htm "The Compression namespace provides classes and methods to create and extract zip files.")

-   **[ZipReader Constructors](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_constructors)**

-   **[ZipReader Methods](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_methods)**


## ZipReader Constructors

The following are constructors for ZipReader.

-   **[ZipReader(data)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_ctor)**
    Creates a new instance of the ZipReader class using the specified blob data.

### ZipReader(data)

Creates a new instance of the ZipReader class using the specified blob data.

#### Signature

global ZipReader(Blob data)

#### Parameters

data

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Apex blob that contains the compressed content.

## ZipReader Methods

The following are methods for ZipReader.

-   **[extract(name)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_extract)**
    Extracts the bytes for the specified zip entry name and decompresses the content.
-   **[extract(entry)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_extract_2)**
    Extracts the bytes for the specified zip entry and decompresses the content.
-   **[getEntries()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_getEntries)**
    Gets a list of all the entries from the zip file.
-   **[getEntriesMap()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_getEntriesMap)**
    Gets a map of names and the corresponding zip entries from the zip file.
-   **[getEntry(name)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_getEntry)**
    Gets a zip entry for the specified name from the zip file.
-   **[getEntryNames()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm#apex_compression_zipreader_getEntryNames)**
    Gets a list of all the zip entry names from the zip file.

### extract(name)

Extracts the bytes for the specified zip entry name and decompresses the content.

#### Signature

public blob extract(string name)

#### Parameters

name

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Species the zip entry name to extract and decompress.

#### Return Value

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Apex blob that contains the decompressed content.

### extract(entry)

Extracts the bytes for the specified zip entry and decompresses the content.

#### Signature

public blob extract(Compression.ZipEntry entry)

#### Parameters

entry

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Species the zip entry to extract and decompress.

#### Return Value

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Apex blob that contains the decompressed content.

### getEntries()

Gets a list of all the entries from the zip file.

#### Signature

public List<compression.ZipEntry> getEntries()

#### Return Value

Type: List<[Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")\>

### getEntriesMap()

Gets a map of names and the corresponding zip entries from the zip file.

#### Signature

public Map<String,Compression.ZipEntry> getEntriesMap()

#### Return Value

Type: Map<[string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")\>

### getEntry(name)

Gets a zip entry for the specified name from the zip file.

#### Signature

public compression.ZipEntry getEntry(string name)

#### Parameters

name

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the zip entry.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Throws a ZipException if the specified name isn’t found.

### getEntryNames()

Gets a list of all the zip entry names from the zip file.

#### Signature

public List<String> getEntryNames()

#### Return Value

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

## Related Topics

- Compression (atlas.en-us.apexref.meta/apexref/apex_namespace_compression.htm)
- ZipReader Constructors (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm)
- ZipReader Methods (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm)
- ZipReader(data) (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm)
- Blob (atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm)
- extract(name) (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm)
- extract(entry) (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm)
- getEntries() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm)
- getEntriesMap() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm)
- getEntry(name) (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipreader.htm)
