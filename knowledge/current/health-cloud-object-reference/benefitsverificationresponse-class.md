---
title: "BenefitsVerificationResponse Class"
domain: health-cloud-object-reference
topic: benefitsverificationresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.303Z
estimatedTokens: 1226
namespace: HealthCloudExt
keywords: [BenefitsVerificationResponse, verification, benefits, benefitPeriodEndDate, benefitPeriodStartDate, benefitsItem, benefitsRequestId, errorResponse, groupNumber, isCoverageActive, jsonResponse, memberNumber]
---

# BenefitsVerificationResponse Class

> Response for verification of benefits.

**Namespace:** `HealthCloudExt`

# BenefitsVerificationResponse Class

Response for verification of benefits.

## Namespace

[HealthCloudExt](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[BenefitsVerificationResponse Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_properties)**


## BenefitsVerificationResponse Properties

The following are properties for BenefitsVerificationResponse.

-   **[benefitPeriodEndDate](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_benefitPeriodEndDate)**
    Last day of the coverage benefit period.
-   **[benefitPeriodStartDate](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_benefitPeriodStartDate)**
    First day of the coverage benefit period.
-   **[benefitsItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_benefitsItem)**
    Specific service covered by the insurance plan.
-   **[benefitsRequestId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_benefitsRequestId)**
    Identifies the benefit verification request that this message responds to.
-   **[errorResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_errorResponse)**
    Use to respond with an error indication following errors such as request-forbidden responses, custom validation errors, or expired API tokens.
-   **[groupNumber](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_groupNumber)**

-   **[isCoverageActive](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_isCoverageActive)**
    Indicates whether the coverage benefit is currently in force.
-   **[jsonResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_jsonResponse)**
    Full JSON response from external system.
-   **[memberNumber](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_healthcloudext_BenefitsVerificationResponse_memberNumber)**


### benefitPeriodEndDate

Last day of the coverage benefit period.

#### Signature

public String benefitPeriodEndDate {get; set;}

```

```

#### Property Value

Type: String

### benefitPeriodStartDate

First day of the coverage benefit period.

#### Signature

public String benefitPeriodStartDate {get; set;}

```

```

#### Property Value

Type: String

### benefitsItem

Specific service covered by the insurance plan.

#### Signature

public List<healthcloudext.BenefitsItem> benefitsItem {get; set;}

```

```

#### Property Value

Type: List<healthcloudext.BenefitsItem>

### benefitsRequestId

Identifies the benefit verification request that this message responds to.

#### Signature

public String benefitsRequestId {get; set;}

```

```

#### Property Value

Type: String

### errorResponse

Use to respond with an error indication following errors such as request-forbidden responses, custom validation errors, or expired API tokens.

#### Signature

public String errorResponse {get; set;}

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

### isCoverageActive

Indicates whether the coverage benefit is currently in force.

#### Signature

public Boolean isCoverageActive {get; set;}

```

```

#### Property Value

Type: Boolean

### jsonResponse

Full JSON response from external system.

#### Signature

public String jsonResponse {get; set;}

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

## Code Examples

```
healthcloudext.BenefitsVerificationResponse, benefitPeriodEndDate
```

```
healthcloudext.BenefitsVerificationResponse, benefitPeriodStartDate
```

```
healthcloudext.BenefitsVerificationResponse, benefitsItem
```

```
healthcloudext.BenefitsVerificationResponse, benefitsRequestId
```

```
healthcloudext.BenefitsVerificationResponse, errorResponse
```

## Related Topics

- HealthCloudExt (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- BenefitsVerificationResponse Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
- benefitPeriodEndDate (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
- benefitPeriodStartDate (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
- benefitsItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
- benefitsRequestId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
- errorResponse (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
- groupNumber (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
- isCoverageActive (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
- jsonResponse (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
