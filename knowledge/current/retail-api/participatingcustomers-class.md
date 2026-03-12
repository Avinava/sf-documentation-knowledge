---
title: "ParticipatingCustomers Class"
domain: retail-api
topic: participatingcustomers-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.539Z
estimatedTokens: 1387
keywords: [ParticipatingCustomers, APEX, programmatic, access, TPM, Promotion, Participating, Customers, Push, process, _ParticipatingCustomers, toGenericObject, API, Version, ParticipatingCustomer]
---

# ParticipatingCustomers Class

> This APEX class provides programmatic access to the TPM Promotion Participating
  Customers List used in the Promotion Push process.

# ParticipatingCustomers Class

This APEX class provides programmatic access to the TPM Promotion Participating Customers List used in the Promotion Push process.

## Namespace

```

```

-   **[TPM\_ParticipatingCustomers Methods](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#tpm_participating_customers)**


## TPM\_ParticipatingCustomers Methods

The following are methods for TPM\_ParticipatingCustomers.

-   **[global Object toGenericObject](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#object_data_global)**
    Serializes the information of the participating customers to a generic Object instance. Useful for using the information in Remote calls.
-   **[global ParticipatingCustomer addParticipatingCustomer](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#global_participation)**
    Adds a new Participating Customer to the instance. The input parameters are the external id of the Account records and a boolean parameter to determine if the participating customer is included or excluded.
-   **[global List<ParticipatingCustomer> getParticipatingCustomers](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#global_participation_2)**
    Adds a new Participating Customer to the instance. The input parameters are the external id of the Account records and a boolean parameter to determine if the participating customer is included or excluded.
-   **[global void removeParticipatingCustomer](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#global_participation_3)**
    Removes the passed in participating customer from the instance. If the participating customers is not contained in the instance, nothing is removed.
-   **[global String toJSON](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#object_data_json)**
    Serializes the information of the participating customers information for storage.
-   **[global TPM\_ParticipatingCustomers](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#global_TPM_Participating)**
    Creates an empty structure with no participating customers.
-   **[global TPM\_ParticipatingCustomers load](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#object_data)**
    Deserializes the information of the participating customers from the input generic object. The current instance will be cleared and the participating customers represented by the input will be loaded.
-   **[global TPM\_ParticipatingCustomers load](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#string_payload)**
    Deserializes the information of the participating customers from the input payload. The current instance will be cleared and the participating customers represented by the payload will be loaded.
-   **[global void clear](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm#global_void_clear)**
    Removes all information about all participating customers for the current instance.

### global Object toGenericObject

Serializes the information of the participating customers to a generic Object instance. Useful for using the information in Remote calls.

#### API Version

55

#### Signature

global Object toGenericObject()

### global ParticipatingCustomer addParticipatingCustomer

Adds a new Participating Customer to the instance. The input parameters are the external id of the Account records and a boolean parameter to determine if the participating customer is included or excluded.

#### API Version

55

#### Signature

global ParticipatingCustomer addParticipatingCustomer(String externalid, Boolean included)

### global List<ParticipatingCustomer> getParticipatingCustomers

Adds a new Participating Customer to the instance. The input parameters are the external id of the Account records and a boolean parameter to determine if the participating customer is included or excluded.

#### API Version

55

#### Signature

global List<ParticipatingCustomer> getParticipatingCustomers()

### global void removeParticipatingCustomer

Removes the passed in participating customer from the instance. If the participating customers is not contained in the instance, nothing is removed.

#### API Version

55

#### Signature

global void removeParticipatingCustomer(ParticipatingCustomer sa)

### global String toJSON

Serializes the information of the participating customers information for storage.

#### API Version

55

#### Signature

global String toJSON()

### global TPM\_ParticipatingCustomers

Creates an empty structure with no participating customers.

#### API Version

55

#### Signature

global TPM\_ParticipatingCustomers()

### global TPM\_ParticipatingCustomers load

Deserializes the information of the participating customers from the input generic object. The current instance will be cleared and the participating customers represented by the input will be loaded.

#### API Version

55

#### Signature

global TPM\_ParticipatingCustomers load(Object data)

### global TPM\_ParticipatingCustomers load

Deserializes the information of the participating customers from the input payload. The current instance will be cleared and the participating customers represented by the payload will be loaded.

#### API Version

55

#### Signature

global TPM\_ParticipatingCustomers load(String payload)

### global void clear

Removes all information about all participating customers for the current instance.

#### API Version

55

#### Signature

global void clear()

## Related Topics

- TPM_ParticipatingCustomers Methods (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm)
- global Object toGenericObject (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm)
- global ParticipatingCustomer addParticipatingCustomer (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm)
- global List<ParticipatingCustomer> getParticipatingCustomers (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm)
- global void removeParticipatingCustomer (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm)
- global String toJSON (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm)
- global TPM_ParticipatingCustomers (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm)
- global TPM_ParticipatingCustomers load (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm)
- global void clear (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomers.htm)
