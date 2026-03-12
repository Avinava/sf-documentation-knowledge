---
title: "BenefitsVerificationRequest Class"
domain: health-cloud-object-reference
topic: benefitsverificationrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.293Z
estimatedTokens: 1186
namespace: HealthCloudExt
keywords: [BenefitsVerificationRequest, verification, benefits, benefitsRequestId, encounterDate, groupNumber, memberAccountId, memberNumber, payerId, providerNpi, providerOrganizationName, providerType, serviceTypeCodes]
---

# BenefitsVerificationRequest Class

> Request for verification of benefits.

**Namespace:** `HealthCloudExt`

# BenefitsVerificationRequest Class

Request for verification of benefits.

## Namespace

[HealthCloudExt](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[BenefitsVerificationRequest Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_properties)**


## BenefitsVerificationRequest Properties

The following are properties for BenefitsVerificationRequest.

-   **[benefitsRequestId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_benefitsRequestId)**
    Identifies the associated case.
-   **[encounterDate](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_encounterDate)**

-   **[groupNumber](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_groupNumber)**

-   **[memberAccountId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_memberAccountId)**

-   **[memberNumber](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_memberNumber)**

-   **[payerId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_payerId)**

-   **[providerNpi](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_providerNpi)**
    Default National Provider Identifier to be used in the benefits verification request.
-   **[providerOrganizationName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_providerOrganizationName)**
    Specifies the organization name to use for the benefits verification request service.
-   **[providerType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_providerType)**

-   **[serviceTypeCodes](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_healthcloudext_BenefitsVerificationRequest_serviceTypeCodes)**
    Represents the code of the service type to be performed.

### benefitsRequestId

Identifies the associated case.

#### Signature

public String benefitsRequestId {get; set;}

```

```

#### Property Value

Type: String

### encounterDate

#### Signature

public String encounterDate {get; set;}

```

```

#### Property Value

Type: String

### groupNumber

#### Signature

public String groupNumber {get; set;}

```

```

#### Property Value

Type: String

### memberAccountId

#### Signature

public String memberAccountId {get; set;}

```

```

#### Property Value

Type: String

### memberNumber

#### Signature

public String memberNumber {get; set;}

```

```

#### Property Value

Type: String

### payerId

#### Signature

public String payerId {get; set;}

```

```

#### Property Value

Type: String

### providerNpi

Default National Provider Identifier to be used in the benefits verification request.

#### Signature

public String providerNpi {get; set;}

```

```

#### Property Value

Type: String

### providerOrganizationName

Specifies the organization name to use for the benefits verification request service.

#### Signature

public String providerOrganizationName {get; set;}

```

```

#### Property Value

Type: String

### providerType

#### Signature

public String providerType {get; set;}

```

```

#### Property Value

Type: String

### serviceTypeCodes

Represents the code of the service type to be performed.

#### Signature

public List<String\> serviceTypeCodes {get; set;}

```

```

#### Property Value

Type: List<String>

## Code Examples

```
healthcloudext.BenefitsVerificationRequest, benefitsRequestId
```

```
healthcloudext.BenefitsVerificationRequest, encounterDate
```

```
healthcloudext.BenefitsVerificationRequest, groupNumber
```

```
healthcloudext.BenefitsVerificationRequest, memberAccountId
```

```
healthcloudext.BenefitsVerificationRequest, memberNumber
```

## Related Topics

- HealthCloudExt (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- BenefitsVerificationRequest Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- benefitsRequestId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- encounterDate (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- groupNumber (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- memberAccountId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- memberNumber (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- payerId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- providerNpi (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- providerOrganizationName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
