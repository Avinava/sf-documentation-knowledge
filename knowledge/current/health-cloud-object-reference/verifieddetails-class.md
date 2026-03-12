---
title: "VerifiedDetails Class"
domain: health-cloud-object-reference
topic: verifieddetails-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.476Z
estimatedTokens: 871
keywords: [VerifiedDetails, verified, secondary, search, including, process, that’s, verify, displayRecordId, displayRecordName, label, processDetailName, searchObjectName, verifiedId]
---

# VerifiedDetails Class

> Contains details about the verified object that is used for secondary
      search, including the process that’s used to verify the search object.

# VerifiedDetails Class

Contains details about the verified object that is used for secondary search, including the process that’s used to verify the search object.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[VerifiedDetails Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm#apex_id_verification_VerifiedDetails_properties)**


## VerifiedDetails Properties

The following are properties for VerifiedDetails.

-   **[displayRecordId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm#apex_id_verification_VerifiedDetails_displayRecordId)**
    ID of the record that's shown to the user after identity verification is successful.
-   **[displayRecordName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm#apex_id_verification_VerifiedDetails_displayRecordName)**
    Name of the record that's shown to the user after identity verification is successful.
-   **[label](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm#apex_id_verification_VerifiedDetails_label)**
    Specifies the label of the verified search object.
-   **[processDetailName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm#apex_id_verification_VerifiedDetails_processDetailName)**
    Specifies the name of the process that’s used to verify the search object.
-   **[searchObjectName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm#apex_id_verification_VerifiedDetails_searchObjectName)**
    Specifies the name of the object that is searched.
-   **[verifiedId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm#apex_id_verification_VerifiedDetails_verifiedId)**
    Specifies the ID of the verified search object.

### displayRecordId

ID of the record that's shown to the user after identity verification is successful.

#### Signature

public String displayRecordId {get; set;}

```

```

#### Property Value

Type: String

### displayRecordName

Name of the record that's shown to the user after identity verification is successful.

#### Signature

public String displayRecordName {get; set;}

```

```

#### Property Value

Type: String

### label

Specifies the label of the verified search object.

#### Signature

public String label {get; set;}

```

```

#### Property Value

Type: String

### processDetailName

Specifies the name of the process that’s used to verify the search object.

#### Signature

public String processDetailName {get; set;}

```

```

#### Property Value

Type: String

### searchObjectName

Specifies the name of the object that is searched.

#### Signature

public String searchObjectName {get; set;}

```

```

#### Property Value

Type: String

### verifiedId

Specifies the ID of the verified search object.

#### Signature

public String verifiedId {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
id_verification.VerifiedDetails, displayRecordId
```

```
id_verification.VerifiedDetails, displayRecordName
```

```
id_verification.VerifiedDetails, label
```

```
id_verification.VerifiedDetails, processDetailName
```

```
id_verification.VerifiedDetails, searchObjectName
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- VerifiedDetails Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm)
- displayRecordId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm)
- displayRecordName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm)
- label (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm)
- processDetailName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm)
- searchObjectName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm)
- verifiedId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm)
