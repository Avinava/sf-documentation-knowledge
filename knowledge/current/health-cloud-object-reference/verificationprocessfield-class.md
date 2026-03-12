---
title: "VerificationProcessField Class"
domain: health-cloud-object-reference
topic: verificationprocessfield-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.464Z
estimatedTokens: 1912
keywords: [VerificationProcessField, search, verification, process, developerName, dataSourceType, fieldType, label, fieldName, dataType, fieldValueFormula, isManualInput]
---

# VerificationProcessField Class

> Contains details of the fields used for both search and the
      verification process.

# VerificationProcessField Class

Contains details of the fields used for both search and the verification process.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[VerificationProcessField Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_constructors)**

-   **[VerificationProcessField Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_properties)**


## VerificationProcessField Constructors

The following are constructors for VerificationProcessField.

-   **[VerificationProcessField(developerName, dataSourceType, fieldType, label, fieldName, dataType, fieldValueFormula, isManualInput)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_ctor)**
    Creates an instance of the [VerificationProcessField](#apex_class_id_verification_VerificationProcessField "Contains details of the fields used for both search and the verification process.") class with the specified parameter values.
-   **[VerificationProcessField()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_ctor_2)**
    Creates an instance of the [VerificationProcessField](#apex_class_id_verification_VerificationProcessField "Contains details of the fields used for both search and the verification process.") class.

### VerificationProcessField(developerName, dataSourceType, fieldType, label, fieldName, dataType, fieldValueFormula, isManualInput)

Creates an instance of the [VerificationProcessField](#apex_class_id_verification_VerificationProcessField "Contains details of the fields used for both search and the verification process.") class with the specified parameter values.

#### Signature

public VerificationProcessField(String developerName, String dataSourceType, String fieldType, String label, String fieldName, String dataType, String fieldValueFormula, Boolean isManualInput)

```

```

#### Parameters

developerName

Type: String

Required. Specifies the developer name of the field.

dataSourceType

Type: String

Required. Specifies the source type of the data.

fieldType

Type: String

Required. Specifies the type of the field.

label

Type: String

Specifies the label of the field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

If you don’t specify a label, the field label from the object is used.

fieldName

Type: String

Required. Specifies the name of the field that contains the verification data based on the selected field type.

dataType

Type: String

Required. Specifies the data type of the field.

fieldValueFormula

Type: String

Stores the formula to specify search filter that’s applied to the field value.

isManualInput

Type: Boolean

Indicates whether the user can manually enter the identity verification details (true) or not (false). The default value is false.

### VerificationProcessField()

Creates an instance of the [VerificationProcessField](#apex_class_id_verification_VerificationProcessField "Contains details of the fields used for both search and the verification process.") class.

#### Signature

public VerificationProcessField()

```

```

## VerificationProcessField Properties

The following are properties for VerificationProcessField.

-   **[dataSourceType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_dataSourceType)**
    Specifies the source type of the data.
-   **[dataType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_dataType)**
    Specifies the data type of the field.
-   **[developerName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_developerName)**
    Specifies the developer name of the field.
-   **[fieldName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_fieldName)**
    Specifies the name of the field that contains the verification data based on the selected field type.
-   **[fieldType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_fieldType)**
    Specifies the type of the field.
-   **[fieldValueFormula](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_fieldValueFormula)**
    Stores the formula to specify search filter that’s applied to the field value.
-   **[isManualInput](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_isManualInput)**
    Indicates whether the user can manually enter the identity verification details (true) or not (false). The default value is false.
-   **[label](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm#apex_id_verification_VerificationProcessField_label)**
    Specifies the label of the field.

### dataSourceType

Specifies the source type of the data.

Possible value is:

-   Salesforce

#### Signature

public String dataSourceType {get; set;}

```

```

#### Property Value

Type: String

### dataType

Specifies the data type of the field.

#### Signature

public String dataType {get; set;}

```

```

#### Property Value

Type: String

### developerName

Specifies the developer name of the field.

#### Signature

public String developerName {get; set;}

```

```

#### Property Value

Type: String

### fieldName

Specifies the name of the field that contains the verification data based on the selected field type.

#### Signature

public String fieldName {get; set;}

```

```

#### Property Value

Type: String

### fieldType

Specifies the type of the field.

#### Signature

public String fieldType {get; set;}

```

```

#### Property Value

Type: String

### fieldValueFormula

Stores the formula to specify search filter that’s applied to the field value.

#### Signature

public String fieldValueFormula {get; set;}

```

```

#### Property Value

Type: String

### isManualInput

Indicates whether the user can manually enter the identity verification details (true) or not (false). The default value is false.

#### Signature

public Boolean isManualInput {get; set;}

```

```

#### Property Value

Type: Boolean

### label

Specifies the label of the field.

#### Signature

public String label {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
id_verification.VerificationProcessField, newinstance, [String, String, String, String, String, String, String, Boolean], id_verification.VerificationProcessField
```

```
id_verification.VerificationProcessField, newinstance, [], id_verification.VerificationProcessField
```

```
id_verification.VerificationProcessField, dataSourceType
```

```
id_verification.VerificationProcessField, dataType
```

```
id_verification.VerificationProcessField, developerName
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- VerificationProcessField Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
- VerificationProcessField Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
- VerificationProcessField(developerName, dataSourceType, fieldType, label, fieldName, dataType, fieldValueFormula, isManualInput) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
- VerificationProcessField() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
- dataSourceType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
- dataType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
- developerName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
- fieldName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
- fieldType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationProcessField.htm)
