---
title: "BenefitsItem Class"
domain: health-cloud-object-reference
topic: benefitsitem-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.276Z
estimatedTokens: 841
namespace: HealthCloudExt
keywords: [BenefitsItem, Specific, service, covered, insurance, plan, benefitsCategory, benefitsItemLimit, inPlanNetworkIndicator, notes, serviceType, serviceTypeCode]
---

# BenefitsItem Class

> Specific service covered by the insurance
  plan.

**Namespace:** `HealthCloudExt`

# BenefitsItem Class

Specific service covered by the insurance plan.

## Namespace

[HealthCloudExt](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[BenefitsItem Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm#apex_healthcloudext_BenefitsItem_properties)**


## BenefitsItem Properties

The following are properties for BenefitsItem.

-   **[benefitsCategory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm#apex_healthcloudext_BenefitsItem_benefitsCategory)**
    Name of the category this benefit is in.
-   **[benefitsItemLimit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm#apex_healthcloudext_BenefitsItem_benefitsItemLimit)**

-   **[inPlanNetworkIndicator](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm#apex_healthcloudext_BenefitsItem_inPlanNetworkIndicator)**
    Indicates whether the benefit is available only in-network (true) or both in-network and out-of-network (false). The default value is 'false'.
-   **[notes](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm#apex_healthcloudext_BenefitsItem_notes)**
    Description of the coverage for non-preferred providers.
-   **[serviceType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm#apex_healthcloudext_BenefitsItem_serviceType)**
    The type of service this plan benefit item provides.
-   **[serviceTypeCode](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm#apex_healthcloudext_BenefitsItem_serviceTypeCode)**
    The code for the type of service this plan benefit item provides.

### benefitsCategory

Name of the category this benefit is in.

#### Signature

public String benefitsCategory {get; set;}

```

```

#### Property Value

Type: String

### benefitsItemLimit

#### Signature

public List<healthcloudext.BenefitsItemLimit> benefitsItemLimit {get; set;}

```

```

#### Property Value

Type: List<healthcloudext.BenefitsItemLimit>

### inPlanNetworkIndicator

Indicates whether the benefit is available only in-network (true) or both in-network and out-of-network (false). The default value is 'false'.

#### Signature

public Boolean inPlanNetworkIndicator {get; set;}

```

```

#### Property Value

Type: Boolean

### notes

Description of the coverage for non-preferred providers.

#### Signature

public String notes {get; set;}

```

```

#### Property Value

Type: String

### serviceType

The type of service this plan benefit item provides.

#### Signature

public String serviceType {get; set;}

```

```

#### Property Value

Type: String

### serviceTypeCode

The code for the type of service this plan benefit item provides.

#### Signature

public String serviceTypeCode {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
healthcloudext.BenefitsItem, benefitsCategory
```

```
healthcloudext.BenefitsItem, benefitsItemLimit
```

```
healthcloudext.BenefitsItem, inPlanNetworkIndicator
```

```
healthcloudext.BenefitsItem, notes
```

```
healthcloudext.BenefitsItem, serviceType
```

## Related Topics

- HealthCloudExt (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- BenefitsItem Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm)
- benefitsCategory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm)
- benefitsItemLimit (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm)
- inPlanNetworkIndicator (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm)
- notes (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm)
- serviceType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm)
- serviceTypeCode (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsItem.htm)
