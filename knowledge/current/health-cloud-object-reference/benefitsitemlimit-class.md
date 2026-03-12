---
title: "BenefitsItemLimit Class"
domain: health-cloud-object-reference
topic: benefitsitemlimit-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.283Z
estimatedTokens: 997
namespace: HealthCloudExt
keywords: [BenefitsItemLimit, Services, covered, expenditures, coverage, benefitCode, benefitMetricType, benefitValue, coverageLevel, limitNotes, networkType, termType]
---

# BenefitsItemLimit Class

> Services not covered, or expenditures required for coverage.

**Namespace:** `HealthCloudExt`

# BenefitsItemLimit Class

Services not covered, or expenditures required for coverage.

## Namespace

[HealthCloudExt](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[BenefitsItemLimit Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm#apex_healthcloudext_BenefitsItemLimit_properties)**


## BenefitsItemLimit Properties

The following are properties for BenefitsItemLimit.

-   **[benefitCode](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm#apex_healthcloudext_BenefitsItemLimit_benefitCode)**

-   **[benefitMetricType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm#apex_healthcloudext_BenefitsItemLimit_benefitMetricType)**

-   **[benefitValue](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm#apex_healthcloudext_BenefitsItemLimit_benefitValue)**

-   **[coverageLevel](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm#apex_healthcloudext_BenefitsItemLimit_coverageLevel)**
    Defines the persons eligible for the benefit item. Possible values are EmployeeSpouse, Family, Individual.
-   **[limitNotes](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm#apex_healthcloudext_BenefitsItemLimit_limitNotes)**
    General information about the limit.
-   **[networkType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm#apex_healthcloudext_BenefitsItemLimit_networkType)**
    Specifies whether the benefit refers to in-network providers or out-of-network providers.
-   **[termType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm#apex_healthcloudext_BenefitsItemLimit_termType)**
    Specifies the type of time period during which the benefit item is available. Possible values are Calendar Year, Day, Month, Year to Date. To save the benefitValue in the AllowedLimitfield, set the termType to a value other than Remaining.

### benefitCode

#### Signature

public String benefitCode {get; set;}

```

```

#### Property Value

Type: String

### benefitMetricType

#### Signature

public String benefitMetricType {get; set;}

```

```

#### Property Value

Type: String

### benefitValue

#### Signature

public String benefitValue {get; set;}

```

```

#### Property Value

Type: String

### coverageLevel

Defines the persons eligible for the benefit item. Possible values are EmployeeSpouse, Family, Individual.

#### Signature

public String coverageLevel {get; set;}

```

```

#### Property Value

Type: String

### limitNotes

General information about the limit.

#### Signature

public String limitNotes {get; set;}

```

```

#### Property Value

Type: String

### networkType

Specifies whether the benefit refers to in-network providers or out-of-network providers.

Possible values are:

-   In—In-network providers
-   NA—Not applicable
-   Out—Out-of-network providers

#### Signature

public String networkType {get; set;}

```

```

#### Property Value

Type: String

### termType

Specifies the type of time period during which the benefit item is available. Possible values are Calendar Year, Day, Month, Year to Date. To save the benefitValue in the AllowedLimitfield, set the termType to a value other than Remaining.

#### Signature

public String termType {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
healthcloudext.BenefitsItemLimit, benefitCode
```

```
healthcloudext.BenefitsItemLimit, benefitMetricType
```

```
healthcloudext.BenefitsItemLimit, benefitValue
```

```
healthcloudext.BenefitsItemLimit, coverageLevel
```

```
healthcloudext.BenefitsItemLimit, limitNotes
```

## Related Topics

- HealthCloudExt (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- BenefitsItemLimit Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm)
- benefitCode (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm)
- benefitMetricType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm)
- benefitValue (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm)
- coverageLevel (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm)
- limitNotes (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm)
- networkType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm)
- termType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItemLimit.htm)
