---
title: "IBenefitsVerificationInterOp Interface"
domain: health-cloud-object-reference
topic: ibenefitsverificationinterop-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.667Z
estimatedTokens: 569
namespace: HealthCloudExt
keywords: [IBenefitsVerificationInterOp, Apex, implementation, verification, benefits, verifyBenefits, var1]
---

# IBenefitsVerificationInterOp Interface

> Contains default Apex implementation for verification of
      benefits.

**Namespace:** `HealthCloudExt`

# IBenefitsVerificationInterOp Interface

Contains default Apex implementation for verification of benefits.

## Namespace

[HealthCloudExt](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[IBenefitsVerificationInterOp Methods](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IBenefitsVerificationInterOp.htm#apex_healthcloudext_IBenefitsVerificationInterOp_methods)**

-   **[IBenefitsVerificationInterOp Example Implementation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IBenefitsVerificationInterOp.htm#apex_interface_healthcloudext_IBenefitsVerificationInterOp_Example)**


## IBenefitsVerificationInterOp Methods

The following are methods for IBenefitsVerificationInterOp.

-   **[verifyBenefits(var1)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IBenefitsVerificationInterOp.htm#apex_healthcloudext_IBenefitsVerificationInterOp_verifyBenefits)**
    Verifies the benefits.

### verifyBenefits(var1)

Verifies the benefits.

#### Signature

public List<healthcloudext.BenefitsVerificationResponse> verifyBenefits(List<healthcloudext.BenefitsVerificationRequest> var1)

```

```

#### Parameters

var1

Type: List<[healthcloudext.BenefitsVerificationRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm#apex_class_healthcloudext_BenefitsVerificationRequest "Request for verification of benefits.")\>

#### Return Value

Type: List<[healthcloudext.BenefitsVerificationResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm#apex_class_healthcloudext_BenefitsVerificationResponse "Response for verification of benefits.")\>

## IBenefitsVerificationInterOp Example Implementation

This is an example implementation of the healthcloudext.IBenefitsVerificationInterOp interface.

```

```

## Code Examples

```apex
healthcloudext.IBenefitsVerificationInterOp, verifyBenefits, [List<healthcloudext.BenefitsVerificationRequest>], List<healthcloudext.BenefitsVerificationResponse>
```

```apex
global class BenefitsVerificationInterImpl implements healthcloudext.IBenefitsVerificationInterOp {
    
     /*
      @Method Name: verifyBenefits
      @Param: List of BenefitsVerificationRequests
      @Desc: Method which will do external callout to get the benefits verification information and transform this information in the form of the BenefitsVerificationResponse 
    */
    public List<healthcloudext.BenefitsVerificationResponse> verifyBenefits(List<healthcloudext.BenefitsVerificationRequest> request) {
        List<healthcloudext.BenefitsVerificationResponse> responses = new List<healthcloudext.BenefitsVerificationResponse>();
        
        // Customer code to perform external callout to retrieve benefits verification information and transform response
        return responses;
    }
}
```

## Related Topics

- HealthCloudExt (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- IBenefitsVerificationInterOp Methods (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IBenefitsVerificationInterOp.htm)
- IBenefitsVerificationInterOp Example Implementation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IBenefitsVerificationInterOp.htm)
- verifyBenefits(var1) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_IBenefitsVerificationInterOp.htm)
- healthcloudext.BenefitsVerificationRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationRequest.htm)
- healthcloudext.BenefitsVerificationResponse (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BenefitsVerificationResponse.htm)
