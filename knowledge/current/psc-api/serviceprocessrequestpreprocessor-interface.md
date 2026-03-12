---
title: "ServiceProcessRequestPreProcessor Interface"
domain: psc-api
topic: serviceprocessrequestpreprocessor-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.717Z
estimatedTokens: 682
keywords: [ServiceProcessRequestPreProcessor, Implement, preprocessor, transforms, validates, data, custom, attributes, Service, Catalog, Connect, REST, API, processServiceProcessRequest, serviceProcessDefId]
---

# ServiceProcessRequestPreProcessor Interface

> Implement the ServiceProcessRequestPreProcessor interface to create a
      preprocessor class that transforms and validates data for custom attributes in the Service
      Catalog Connect REST API. Using a preprocessor is optional.

# ServiceProcessRequestPreProcessor Interface

Implement the ServiceProcessRequestPreProcessor interface to create a preprocessor class that transforms and validates data for custom attributes in the Service Catalog Connect REST API. Using a preprocessor is optional.

## Namespace

[industriesserviceprocess](atlas.en-us.psc_api.meta/psc_api/apex_namespace_industriesserviceprocess.htm "The industriesserviceprocess namespace provides an interface for a preprocessor class that transforms and validates data for custom attributes in the Service Catalog Connect REST API.")

-   **[ServiceProcessRequestPreProcessor Methods](atlas.en-us.psc_api.meta/psc_api/apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor.htm#apex_industriesserviceprocess_ServiceProcessRequestPreProcessor_methods)**

-   **[ServiceProcessRequestPreProcessor Example Implementation](atlas.en-us.psc_api.meta/psc_api/apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor.htm#apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor_Example)**
    This is an example implementation of the industriesserviceprocess.ServiceProcessRequestPreProcessor interface.

## ServiceProcessRequestPreProcessor Methods

The following are methods for ServiceProcessRequestPreProcessor.

-   **[processServiceProcessRequest(serviceProcessDefId, caseInfo, serviceProcessAttrs)](atlas.en-us.psc_api.meta/psc_api/apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor.htm#apex_industriesserviceprocess_ServiceProcessRequestPreProcessor_processServiceProcessRequest)**
    Transforms and validates Case attributes or service request attributes. The processServiceProcessRequest is an abstract method.

### processServiceProcessRequest(serviceProcessDefId, caseInfo, serviceProcessAttrs)

Transforms and validates Case attributes or service request attributes. The processServiceProcessRequest is an abstract method.

#### Signature

ServiceProcessPreProcessorResponse processServiceProcessRequest(String serviceProcessDefId, Map<String, Object\> caseInfo, Map<String, Object\> serviceProcessAttrs)

#### Parameters

serviceProcessDefId

Type: String

Represents the Developer Name of the service request.

caseInfo

Type: Map<String,Object>

Represents Case attributes in the input payload in key-value pair format.

serviceProcessAttrs

Type: Map<String,Object>

Represents service request attributes in the input payload in key-value pair format.

#### Return Value

Type: ServiceProcessPreProcessorResponse object

## ServiceProcessRequestPreProcessor Example Implementation

This is an example implementation of the industriesserviceprocess.ServiceProcessRequestPreProcessor interface.

```

```

## Code Examples

```apex
public class StopCheckPayment implements industriesserviceprocess.ServiceProcessRequestPreProcessor {
  public industriesserviceprocess.ServiceProcessPreProcessorResponse processServiceProcessRequest 
        (String serviceProcessDefId, Map<String, Object> caseInfo, Map<String, Object> serviceProcessAttrs) {
            industriesserviceprocess.ServiceProcessPreProcessorResponse response = null;    
            Date paymentDate = (Date) serviceProcessAttrs.get('paymentDate');
            if(paymentDate < Date.today()) {
                response = 
                new industriesserviceprocess.ServiceProcessPreProcessorResponse('Payment Date cannot be before the current date', 
                          false, industriesserviceprocess.ServiceProcessPreProcessorErrorTypes.VALIDATION_ERROR);
            } else {
                response = 
                new industriesserviceprocess.ServiceProcessPreProcessorResponse(true);
            }
            return response;
        }
}
```

## Related Topics

- industriesserviceprocess (atlas.en-us.psc_api.meta/psc_api/apex_namespace_industriesserviceprocess.htm)
- ServiceProcessRequestPreProcessor Methods (atlas.en-us.psc_api.meta/psc_api/apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor.htm)
- ServiceProcessRequestPreProcessor Example Implementation (atlas.en-us.psc_api.meta/psc_api/apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor.htm)
- processServiceProcessRequest(serviceProcessDefId, caseInfo, serviceProcessAttrs) (atlas.en-us.psc_api.meta/psc_api/apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor.htm)
