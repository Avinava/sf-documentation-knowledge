---
title: "SelectedVerifiedResult Class"
domain: health-cloud-object-reference
topic: selectedverifiedresult-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.439Z
estimatedTokens: 399
keywords: [SelectedVerifiedResult, verified, secondary, search, verifiedDetails]
---

# SelectedVerifiedResult Class

> Contains information about the verified object that is used for the
      secondary search.

# SelectedVerifiedResult Class

Contains information about the verified object that is used for the secondary search.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[SelectedVerifiedResult Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedVerifiedResult.htm#apex_id_verification_SelectedVerifiedResult_properties)**


## SelectedVerifiedResult Properties

The following are properties for SelectedVerifiedResult.

-   **[verifiedDetails](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedVerifiedResult.htm#apex_id_verification_SelectedVerifiedResult_verifiedDetails)**
    A list of details about the verified object that is used for secondary search.

### verifiedDetails

A list of details about the verified object that is used for secondary search.

#### Signature

public List<id\_verification.VerifiedDetails> verifiedDetails {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.VerifiedDetails](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm#apex_class_id_verification_VerifiedDetails "Contains details about the verified object that is used for secondary search, including the process that’s used to verify the search object.")\>

## Code Examples

```
id_verification.SelectedVerifiedResult, verifiedDetails
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- SelectedVerifiedResult Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedVerifiedResult.htm)
- verifiedDetails (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SelectedVerifiedResult.htm)
- id_verification.VerifiedDetails (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerifiedDetails.htm)
