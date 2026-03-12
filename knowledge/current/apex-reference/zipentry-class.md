---
title: "ZipEntry Class"
domain: apex-reference
topic: zipentry-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.781Z
estimatedTokens: 2392
namespace: Compression
keywords: [ZipEntry, zip, file, entry, equals, obj, hashcode, getComment, getCompressedSize, getContent, getCrc, getLastModifiedTime, getMethod, getName, getUncompressedSize]
---

# ZipEntry Class

> Contains methods to get and set information about a zip file entry.

**Namespace:** `Compression`

# ZipEntry Class

Contains methods to get and set information about a zip file entry.

## Namespace

[Compression](atlas.en-us.apexref.meta/apexref/apex_namespace_compression.htm "The Compression namespace provides classes and methods to create and extract zip files.")

-   **[ZipEntry Methods](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_methods)**


## ZipEntry Methods

The following are methods for ZipEntry.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_equals)**
    Compares this object with the specified object and returns true if both objects are equal; otherwise, returns false.
-   **[hashcode()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_hashcode)**
    Returns the hash code value for the zip entry.
-   **[getComment()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_getComment)**
    Gets the comment string for the zip entry.
-   **[getCompressedSize()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_getCompressedSize)**
    Gets the size in bytes of the compressed zip entry.
-   **[getContent()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_getContent)**
    Gets the content of the zip entry. This method doesn’t work with the ZipReader class.
-   **[getCrc()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_getCrc)**
    Gets the cyclic redundancy check (CRC) value for the zip entry.
-   **[getLastModifiedTime()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_getLastModifiedTime)**
    Gets the last modification timestamp of the zip entry.
-   **[getMethod()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_getMethod)**
    Gets the compression method of the zip entry.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_getName)**
    Gets the name of the zip entry.
-   **[getUncompressedSize()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_getUncompressedSize)**
    Gets the uncompressed size in bytes of the zip entry content.
-   **[setComment(comment)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_setComment)**
    Sets the comment string for the zip entry that’s written to the Zip archive. This method doesn’t work with the ZipReader class.
-   **[setContent(blob)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_setContent)**
    Sets the content of the zip entry that’s written to the Zip archive. This method doesn’t work with the ZipReader class.
-   **[setLastModifiedTime(modTime)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_setLastModifiedTime)**
    Sets the last modification time of the zip entry that’s written to the Zip archive. This method doesn’t work with the ZipReader class.
-   **[setMethod(method)](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_setMethod)**
    Sets the compression method for the zip entry that’s written to the zip archive. This method doesn’t work with the ZipReader class.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm#apex_compression_zipentry_toString)**
    Returns a string representation of the zip entry.

### equals(obj)

Compares this object with the specified object and returns true if both objects are equal; otherwise, returns false.

#### Signature

public Boolean equals(Object obj)

#### Parameters

obj

Type: Object

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashcode()

Returns the hash code value for the zip entry.

#### Signature

public Integer hashcode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getComment()

Gets the comment string for the zip entry.

#### Signature

public string getComment()

#### Return Value

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getCompressedSize()

Gets the size in bytes of the compressed zip entry.

#### Signature

public long getCompressedSize()

#### Return Value

Type: [long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### getContent()

Gets the content of the zip entry. This method doesn’t work with the ZipReader class.

#### Signature

public blob getContent()

#### Return Value

Type: [blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

### getCrc()

Gets the cyclic redundancy check (CRC) value for the zip entry.

#### Signature

public long getCrc()

#### Return Value

Type: [long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### getLastModifiedTime()

Gets the last modification timestamp of the zip entry.

#### Signature

public Datetime getLastModifiedTime()

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### getMethod()

Gets the compression method of the zip entry.

#### Signature

public Compression.Method getMethod()

#### Return Value

Type: [Compression.Method](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Method.htm "Specifies the compression method for the zip entries.")

Uses values from the Method enum and indicates whether the zip entry has DEFLATED or STORED method.

### getName()

Gets the name of the zip entry.

#### Signature

public string getName()

#### Return Value

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUncompressedSize()

Gets the uncompressed size in bytes of the zip entry content.

#### Signature

public long getUncompressedSize()

#### Return Value

Type: [long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### setComment(comment)

Sets the comment string for the zip entry that’s written to the Zip archive. This method doesn’t work with the ZipReader class.

#### Signature

public Compression.ZipEntry setComment(String comment)

#### Parameters

comment

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Compression.ZipEntry](#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

### setContent(blob)

Sets the content of the zip entry that’s written to the Zip archive. This method doesn’t work with the ZipReader class.

#### Signature

public Compression.ZipEntry setContent(Blob blob)

#### Parameters

blob

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

#### Return Value

Type: [Compression.ZipEntry](#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

### setLastModifiedTime(modTime)

Sets the last modification time of the zip entry that’s written to the Zip archive. This method doesn’t work with the ZipReader class.

#### Signature

public Compression.ZipEntry setLastModifiedTime(Datetime modTime)

#### Parameters

modTime

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: [Compression.ZipEntry](#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

### setMethod(method)

Sets the compression method for the zip entry that’s written to the zip archive. This method doesn’t work with the ZipReader class.

#### Signature

public Compression.ZipEntry setMethod(Compression.Method method)

#### Parameters

method

Type: [Compression.Method](atlas.en-us.apexref.meta/apexref/apex_enum_compression_Method.htm "Specifies the compression method for the zip entries.")

Uses the Method enum values and sets the compression method as DEFLATED or STORED.

#### Return Value

Type: [Compression.ZipEntry](#apex_class_compression_zipentry "Contains methods to get and set information about a zip file entry.")

### toString()

Returns a string representation of the zip entry.

#### Signature

public string toString()

#### Return Value

Type: [string](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Compression (atlas.en-us.apexref.meta/apexref/apex_namespace_compression.htm)
- ZipEntry Methods (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm)
- equals(obj) (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm)
- hashcode() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm)
- getComment() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm)
- getCompressedSize() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm)
- getContent() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm)
- getCrc() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm)
- getLastModifiedTime() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm)
- getMethod() (atlas.en-us.apexref.meta/apexref/apex_class_compression_zipentry.htm)
