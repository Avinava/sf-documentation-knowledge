---
title: "ParticipatingCustomers.ParticipatingCustomer Class"
domain: retail-api
topic: participatingcustomersparticipatingcustomer-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.532Z
estimatedTokens: 536
keywords: [APEX, programmatic, access, Participating, Customer, associated, instance, TPM_ParticipatingCustomers, TPM, isIncluded, API, Version, ParticipatingCustomer, setIncluded, setAccountExternalId]
---

# ParticipatingCustomers.ParticipatingCustomer Class

> This APEX class provides programmatic access to a Participating Customer associated to
  an instance of TPM_ParticipatingCustomers.

# ParticipatingCustomers.ParticipatingCustomer Class

This APEX class provides programmatic access to a Participating Customer associated to an instance of TPM\_ParticipatingCustomers.

## Namespace

cgcloud

-   **[TPM\_ParticipatingCustomers.ParticipatingCustomer Methods](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm#TPM_ParticipatingCustomers_ParticipatingCustomerClass)**


## TPM\_ParticipatingCustomers.ParticipatingCustomer Methods

The following are methods for TPM\_ParticipatingCustomers.ParticipatingCustomer.

-   **[global Boolean isIncluded](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm#global_boolean)**
    Returns true if the Participating customer is included, false otherwise.
-   **[global ParticipatingCustomer setIncluded](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm#global_partcipating_customer)**
    Sets the Participating customer as included or excluded.
-   **[global ParticipatingCustomer setAccountExternalId](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm#unique_1504483453)**
    Sets the Participating Customer Account External Id value
-   **[global String getAccountExternalId](atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm#unique_675167697)**
    Returns the Account External ID of the Participating Customer.

### global Boolean isIncluded

Returns true if the Participating customer is included, false otherwise.

#### API Version

55

#### Signature

global Boolean isIncluded()

### global ParticipatingCustomer setIncluded

Sets the Participating customer as included or excluded.

#### API Version

55

#### Signature

global ParticipatingCustomer setIncluded(Boolean value)

### global ParticipatingCustomer setAccountExternalId

Sets the Participating Customer Account External Id value

#### API Version

55

#### Signature

global ParticipatingCustomer setAccountExternalId(String value)

### global String getAccountExternalId

Returns the Account External ID of the Participating Customer.

#### API Version

55

#### Signature

global String getAccountExternalId()

## Related Topics

- TPM_ParticipatingCustomers.ParticipatingCustomer Methods (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm)
- global Boolean isIncluded (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm)
- global ParticipatingCustomer setIncluded (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm)
- global ParticipatingCustomer setAccountExternalId (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm)
- global String getAccountExternalId (atlas.en-us.retail_api.meta/retail_api/TPM_ParticipatingCustomer_2.htm)
