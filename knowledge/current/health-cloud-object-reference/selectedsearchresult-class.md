---
title: "SelectedSearchResult Class"
domain: health-cloud-object-reference
topic: selectedsearchresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.436Z
estimatedTokens: 1270
keywords: [SelectedSearchResult, record, selected, verification, selectedRecordId, objectName, selectedRecordObject]
---

# SelectedSearchResult Class

> Contains the details of the record that has been selected for
      verification.

# SelectedSearchResult Class

Contains the details of the record that has been selected for verification.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[SelectedSearchResult Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_id_verification_SelectedSearchResult_constructors)**

-   **[SelectedSearchResult Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_id_verification_SelectedSearchResult_properties)**


## SelectedSearchResult Constructors

The following are constructors for SelectedSearchResult.

-   **[SelectedSearchResult(selectedRecordId, objectName, selectedRecordObject)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_id_verification_SelectedSearchResult_ctor)**
    Creates an instance of the [SelectedSearchResult](#apex_class_id_verification_SelectedSearchResult "Contains the details of the record that has been selected for verification.") class with the specified parameter values.
-   **[SelectedSearchResult()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_id_verification_SelectedSearchResult_ctor_2)**
    Creates an instance of the [SelectedSearchResult](#apex_class_id_verification_SelectedSearchResult "Contains the details of the record that has been selected for verification.") class.

### SelectedSearchResult(selectedRecordId, objectName, selectedRecordObject)

Creates an instance of the [SelectedSearchResult](#apex_class_id_verification_SelectedSearchResult "Contains the details of the record that has been selected for verification.") class with the specified parameter values.

#### Signature

public SelectedSearchResult(String selectedRecordId, String objectName, List<id\_verification.FieldValue> selectedRecordObject)

```

```

#### Parameters

selectedRecordId

Type: String

Required. Specifies the object record ID on which the data is to be verified.

objectName

Type: String

Required. Specifies the name of the object to be verified.

selectedRecordObject

Type: List<[id\_verification.FieldValue](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_class_id_verification_FieldValue "Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.")\>

Specifies the object record fields on which the data is to be verified.

### SelectedSearchResult()

Creates an instance of the [SelectedSearchResult](#apex_class_id_verification_SelectedSearchResult "Contains the details of the record that has been selected for verification.") class.

#### Signature

public SelectedSearchResult()

```

```

## SelectedSearchResult Properties

The following are properties for SelectedSearchResult.

-   **[objectName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_id_verification_SelectedSearchResult_objectName)**
    Specifies the name of the object to be verified.
-   **[selectedRecordId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_id_verification_SelectedSearchResult_selectedRecordId)**
    Specifies the object record ID on which the data is to be verified.
-   **[selectedRecordObject](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm#apex_id_verification_SelectedSearchResult_selectedRecordObject)**
    Specifies the object record fields on which the data is to be verified.

### objectName

Specifies the name of the object to be verified.

#### Signature

public String objectName {get; set;}

```

```

#### Property Value

Type: String

### selectedRecordId

Specifies the object record ID on which the data is to be verified.

#### Signature

public String selectedRecordId {get; set;}

```

```

#### Property Value

Type: String

### selectedRecordObject

Specifies the object record fields on which the data is to be verified.

#### Signature

public List<id\_verification.FieldValue> selectedRecordObject {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.FieldValue](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_class_id_verification_FieldValue "Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.")\>

## Code Examples

```apex
id_verification.SelectedSearchResult, newinstance, [String, String, List<id_verification.FieldValue>], id_verification.SelectedSearchResult
```

```
id_verification.SelectedSearchResult, newinstance, [], id_verification.SelectedSearchResult
```

```
id_verification.SelectedSearchResult, objectName
```

```
id_verification.SelectedSearchResult, selectedRecordId
```

```
id_verification.SelectedSearchResult, selectedRecordObject
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- SelectedSearchResult Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm)
- SelectedSearchResult Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm)
- SelectedSearchResult(selectedRecordId, objectName, selectedRecordObject) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm)
- SelectedSearchResult() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm)
- id_verification.FieldValue (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
- objectName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm)
- selectedRecordId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm)
- selectedRecordObject (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedSearchResult.htm)
