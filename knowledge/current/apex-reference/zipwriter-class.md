---
title: "ZipWriter Class"
domain: apex-reference
topic: zipwriter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.853Z
estimatedTokens: 2977
namespace: Compression
keywords: [ZipWriter, add, zip, entries, generate, zipped, archive, result, Apex, blob, addEntry, data, prototype, comment, modTime]
---

# ZipWriter Class

> Contains methods to add zip entries, generate a zipped archive, and return the result as
    an Apex blob.

**Namespace:** `Compression`

# ZipWriter Class

Contains methods to add zip entries, generate a zipped archive, and return the result as an Apex blob.

## Namespace

[Compression](atlas.en-us.apexref.meta/apexref/apex_namespace_compression.htm "The Compression namespace provides classes and methods to create and extract zip files.")

## Example

This sample code compresses email attachments into a single file.

Compression.ZipWriter writer = new Compression.ZipWriter(); List<id> contentDocumentIds = new List<id>(); // Add IDs of documents to be compressed to contentDocumentIds for ( ContentVersion cv : \[SELECT PathOnClient, Versiondata FROM ContentVersion WHERE ContentDocumentId IN :contentDocumentIds\]) { writer.addEntry(cv.PathOnClient, cv.versiondata); } blob zipAttachment = writer.getArchive(); Messaging.EmailFileAttachment efa = new Messaging.EmailFileAttachment(); efa.setFileName('attachments.zip'); efa.setBody(zipAttachment); List<Messaging.EmailFileAttachment> fileAttachments = new List<Messaging.EmailFileAttachment>(); fileAttachments.add(efa); Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage(); // Set all the other email fields, such as addresses, subject, and body email.setFileAttachments(fileAttachments); Messaging.sendEmail(new Messaging.SingleEmailMessage\[\] { email });

-   **[ZipWriter Constructors](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_constructors)**

-   **[ZipWriter Methods](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_methods)**


## ZipWriter Constructors

The following are constructors for ZipWriter.

-   **[ZipWriter()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_ctor)**
    Creates a new instance of the ZipWriter class.

### ZipWriter()

Creates a new instance of the ZipWriter class.

#### Signature

global ZipWriter()

## ZipWriter Methods

The following are methods for ZipWriter.

-   **[addEntry(name, data)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_addEntry)**
    Adds an entry to the zip file with the specified name and content.
-   **[addEntry(prototype)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_addEntry_2)**
    Adds a copy of the specified prototype entry to the zip file and includes details such as the zip entry name, comment, last modification time, and content.
-   **[addEntry(name, comment, modTime, method, data)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_addEntry_3)**
    Adds an entry to the zip file with the specified name, comment, last modification time, compression method, and content.
-   **[getArchive()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_getArchive)**
    Compresses the zip entries and generates a ZIP archive.
-   **[getEntries()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_getEntries)**
    Gets a list of all the entries in the zip file.
-   **[getEntry(name)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_getEntry)**
    Gets the entry with the specified name from the zip file.
-   **[getEntryNames()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_getEntryNames)**
    Gets a set of all the zip entry names in the zip file.
-   **[getLevel()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_getLevel)**
    Gets the compression level of the zip file.
-   **[getMethod()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_getMethod)**
    Gets the compression method of the zip file.
-   **[removeEntry(name)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_removeEntry)**
    Removes the entry with the specified name from the zip file.
-   **[setLevel(level)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_setLevel)**
    Sets the compression level of the zip file.
-   **[setMethod(method)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm#apex_compression_zipwriter_setMethod)**
    Sets the compression method for the zip file.

### addEntry(name, data)

Adds an entry to the zip file with the specified name and content.

#### Signature

public Compression.ZipEntry addEntry(string name, blob data)

#### Parameters

name

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the zip entry.

data

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The content of the zip entry.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Zip entry added to the zip file.

### addEntry(prototype)

Adds a copy of the specified prototype entry to the zip file and includes details such as the zip entry name, comment, last modification time, and content.

#### Signature

public Compression.ZipEntry addEntry(compression.ZipEntry prototype)

#### Parameters

prototype

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Details of the entry to be added to the zip file.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

### addEntry(name, comment, modTime, method, data)

Adds an entry to the zip file with the specified name, comment, last modification time, compression method, and content.

#### Signature

public Compression.ZipEntry addEntry(String name, String comment, Datetime modTime, Compression.Method method, Blob data)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the zip entry.

comment

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The comment about the zip entry.

modTime

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The last modification timestamp of the zip entry.

method

Type: [Compression.Method](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Method.htm "Specifies the compression method for the zip entries.")

The compression method of the zip entry, which is either DEFLATED or STORED.

data

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The content of the zip entry.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

Zip entry added to the zip file.

### getArchive()

Compresses the zip entries and generates a ZIP archive.

#### Signature

public blob getArchive()

#### Return Value

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Apex blob that contains the bytes of the compression operation.

### getEntries()

Gets a list of all the entries in the zip file.

#### Signature

public List<Compression.ZipEntry> getEntries()

#### Return Value

Type: List<[Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")\>

### getEntry(name)

Gets the entry with the specified name from the zip file.

#### Signature

public compression.ZipEntry getEntry(string name)

#### Parameters

name

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the zip entry to be retrieved.

#### Return Value

Type: [Compression.ZipEntry](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

### getEntryNames()

Gets a set of all the zip entry names in the zip file.

#### Signature

public Set<String> getEntryNames()

#### Return Value

Type: [Set<String>](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")

### getLevel()

Gets the compression level of the zip file.

#### Signature

public Compression.Level getLevel()

#### Return Value

Type: [Compression.Level](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Level.htm "Specifies the compression level for creating a zip file.")

Uses the Level enum values to indicate the compression level as BEST\_COMPRESSION, BEST\_SPEED, DEFAULT\_LEVEL, or NO\_COMPRESSION.

### getMethod()

Gets the compression method of the zip file.

#### Signature

public Compression.Method getMethod()

#### Return Value

Type: [Compression.Method](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Method.htm "Specifies the compression method for the zip entries.")

Uses the Method enum values to indicate the compression method as DEFLATED or STORED.

### removeEntry(name)

Removes the entry with the specified name from the zip file.

#### Signature

public Void removeEntry(string name)

#### Parameters

name

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the zip entry to be removed. If an entry with this name isn’t found, the method throws a ZipException exception.

#### Return Value

Type: Void

### setLevel(level)

Sets the compression level of the zip file.

#### Signature

public Compression.ZipWriter setLevel(compression.Level value)

#### Parameters

value

Type: [Compression.Level](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Level.htm "Specifies the compression level for creating a zip file.")

Uses the Level enum to set the compression level.

#### Return Value

Type: [Compression.ZipWriter](#apex_class_compression_zipwriter "Contains methods to add zip entries, generate a zipped archive, and return the result as an Apex blob.")

Returns the zip file set with the specified compression level.

### setMethod(method)

Sets the compression method for the zip file.

#### Signature

public Compression.ZipWriter setMethod(compression.Method value)

#### Parameters

value

Type: [Compression.Method](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Method.htm "Specifies the compression method for the zip entries.")

Uses the Method enum to set the compression method.

#### Return Value

Type: [Compression.ZipWriter](#apex_class_compression_zipwriter "Contains methods to add zip entries, generate a zipped archive, and return the result as an Apex blob.")

Returns the zip file set with the specified compression method.

## Related Topics

- Compression (atlas.en-us.apexref.meta/apexref/apex_namespace_compression.htm)
- ZipWriter Constructors (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm)
- ZipWriter Methods (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm)
- ZipWriter() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm)
- addEntry(name, data) (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm)
- addEntry(prototype) (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm)
- addEntry(name, comment, modTime, method, data) (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm)
- getArchive() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm)
- getEntries() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm)
- getEntry(name) (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipwriter.htm)
