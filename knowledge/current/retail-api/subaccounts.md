---
title: "SubAccounts"
domain: retail-api
topic: subaccounts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.600Z
estimatedTokens: 1129
keywords: [SubAccounts, Creates, empty, sub, accounts, structure, TPM, _SubAccounts, List<SubAccount>, getSubAccounts, API, Version, toGenericObject, toJSON, SubAccount]
---

# SubAccounts

> Creates an empty sub accounts structure.

# SubAccounts

Creates an empty sub accounts structure.

## Namespace

```

```

-   **[TPM\_SubAccounts Methods](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#tpm_sub_accounts_method)**


## TPM\_SubAccounts Methods

The following are methods for TPM\_Scenarios.ScenarioParameter.

-   **[global List<SubAccount> getSubAccounts](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#globalTPM_SubAccounts)**
    Returns the list of all sub accounts in the sub accounts instance.
-   **[global Object toGenericObject](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#oGenericObject)**
    Serializes the sub accounts information into a generic object. Useful for usage on remote calls.
-   **[global String toJSON](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#global_String)**
    Serializes the sub accounts information into a String used for storage.
-   **[global SubAccount addSubAccount](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#unique_2131827652)**
    Adds a sub account information to the current SubAccounts instance. The parameters are the Account External Id, a flag to determine if the sub account is included or excluded and it’s volume percentage (between 0 and 100).
-   **[global TPM\_SubAccounts](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#unique_481261390)**
    Creates an empty sub accounts structure.
-   **[global TPM\_SubAccounts load](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#unique_806818366)**
    Loads the serialized sub accounts information into the current instance. The current instance will be cleared and the sub accounts represented by the payload will be loaded.
-   **[global TPM\_SubAccounts load](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#unique_442569815)**
    Loads the sub accounts information from the parameter generic object. The current instance will be cleared and the sub accounts represented by the payload will be loaded.
-   **[global void clear](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#globalvoidclear)**
    Removes all information from the current instance and leaves it empty. Same state as the constructor.
-   **[global void removeSubAccount](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm#removeSubAccount)**
    Removes the parameter sub account from the instance. If the Sub Account is not part of the instance, nothing is removed.

### global List<SubAccount> getSubAccounts

Returns the list of all sub accounts in the sub accounts instance.

#### API Version

55

#### Signature

global List<SubAccount> getSubAccounts()

### global Object toGenericObject

Serializes the sub accounts information into a generic object. Useful for usage on remote calls.

#### API Version

55

#### Signature

global Object toGenericObject()

### global String toJSON

Serializes the sub accounts information into a String used for storage.

#### API Version

55

#### Signature

global String toJSON()

### global SubAccount addSubAccount

Adds a sub account information to the current SubAccounts instance. The parameters are the Account External Id, a flag to determine if the sub account is included or excluded and it’s volume percentage (between 0 and 100).

#### API Version

55

#### Signature

global SubAccount addSubAccount(String externalid, Boolean included, Decimal volume)

### global TPM\_SubAccounts

Creates an empty sub accounts structure.

#### API Version

55

#### Signature

global TPM\_SubAccounts

### global TPM\_SubAccounts load

Loads the serialized sub accounts information into the current instance. The current instance will be cleared and the sub accounts represented by the payload will be loaded.

#### API Version

55

#### Signature

global TPM\_SubAccounts load(String payload)

### global TPM\_SubAccounts load

Loads the sub accounts information from the parameter generic object. The current instance will be cleared and the sub accounts represented by the payload will be loaded.

#### API Version

55

#### Signature

global TPM\_SubAccounts load(Object data)

### global void clear

Removes all information from the current instance and leaves it empty. Same state as the constructor.

#### API Version

55

#### Signature

global void clear()

### global void removeSubAccount

Removes the parameter sub account from the instance. If the Sub Account is not part of the instance, nothing is removed.

#### API Version

55

#### Signature

global void removeSubAccount(SubAccount sa)

## Related Topics

- TPM_SubAccounts Methods (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm)
- global List<SubAccount> getSubAccounts (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm)
- global Object toGenericObject (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm)
- global String toJSON (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm)
- global SubAccount addSubAccount (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm)
- global TPM_SubAccounts (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm)
- global TPM_SubAccounts load (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm)
- global void clear (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm)
- global void removeSubAccount (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccounts.htm)
