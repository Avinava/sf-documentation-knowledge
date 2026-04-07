---
title: "SubAccounts.SubAccount"
domain: retail-api
topic: subaccountssubaccount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:10.689Z
estimatedTokens: 620
keywords: [SubAccounts.SubAccount, APEX, programmatic, Sub, Account, contained, TPM_SubAccounts, instance, TPM, _SubAccounts.SubAccount, isIncluded, API, Decimal, getVolume, getAccountExternalId, SubAccount, setAccountExternalId, setIncluded, setVolume]
---

> This APEX class provides programmatic access to a single Sub Account information
  contained in a TPM_SubAccounts instance.

# SubAccounts.SubAccount

This APEX class provides programmatic access to a single Sub Account information contained in a TPM\_SubAccounts instance.

## Namespace

```

```

-   **[TPM\_SubAccounts.SubAccount Methods](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm#unique_1901642379)**


## TPM\_SubAccounts.SubAccount Methods

The following are methods for TPM\_SubAccounts.SubAccount.

-   **[global Boolean isIncluded](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm#method_promotion.do.work)**
    Gets the included/excluded status of the sub account.
-   **[global Decimal getVolume](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm#unique_486780521)**
    Get the volume percent of the sub account.
-   **[global String getAccountExternalId](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm#unique_1124812373)**
    Gets the sub account Account External ID.
-   **[global SubAccount setAccountExternalId](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm#unique_459434134)**
    Sets the sub account account external ID.
-   **[global SubAccount setIncluded](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm#global_SubAccount)**
    Sets the sub account as included or excluded.
-   **[global SubAccount setVolume](atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm#unique_1933766784)**
    Sets the sub account volume percent (Decimal between 0 and 100)

### global Boolean isIncluded

Gets the included/excluded status of the sub account.

#### API Version

55

#### Signature

global Boolean isIncluded()

### global Decimal getVolume

Get the volume percent of the sub account.

#### API Version

55

#### Signature

global Decimal getVolume()

### global String getAccountExternalId

Gets the sub account Account External ID.

#### API Version

55

#### Signature

global String getAccountExternalId()

### global SubAccount setAccountExternalId

Sets the sub account account external ID.

#### API Version

55

#### Signature

global SubAccount setAccountExternalId(String value)

### global SubAccount setIncluded

Sets the sub account as included or excluded.

#### API Version

55

#### Signature

global SubAccount setIncluded(Boolean value)

### global SubAccount setVolume

Sets the sub account volume percent (Decimal between 0 and 100)

#### API Version

55

#### Signature

global SubAccount setVolume(Decimal volume)

## Related Topics

- TPM_SubAccounts.SubAccount Methods (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm)
- global Boolean isIncluded (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm)
- global Decimal getVolume (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm)
- global String getAccountExternalId (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm)
- global SubAccount setAccountExternalId (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm)
- global SubAccount setIncluded (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm)
- global SubAccount setVolume (atlas.en-us.retail_api.meta/retail_api/TPM_SubAccountsSubAccount.htm)
