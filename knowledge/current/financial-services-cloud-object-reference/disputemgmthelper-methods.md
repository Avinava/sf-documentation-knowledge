---
title: "DisputeMgmtHelper Methods"
domain: financial-services-cloud-object-reference
topic: disputemgmthelper-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.032Z
estimatedTokens: 292
keywords: [DisputeMgmtHelper]
---

# DisputeMgmtHelper Methods

> The following are methods for DisputeMgmtHelper.

# DisputeMgmtHelper Methods

The following are methods for DisputeMgmtHelper.

DisputeMgmtHelper is a callable class. Its main method is call.

-   **[call(action, args)](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_disputemanagement_DisputeMgmtHelper_call.htm)**
    This method calls one of the available DisputeMgmtHelper actions and passes arguments to that action.
-   **[getDisputeItems(caseId)](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_disputemanagement_DisputeMgmtHelper_getDisputeItems.htm)**
    Returns disputed transactions related to the specified Case ID. Called by the createDisputeItemMerchAlert, getAlertStatusDetails, getDisputeBatchDetails actions of the call method.
-   **[getEthocaAPIRequest(disputeItems, disputeType, namedCredential)](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_disputemanagement_DisputeMgmtHelper_getEthocaAPIRequest.htm)**
    Prepares the payload used in the dispute flow and sends it to the integration provider, retrying if necessary.

## Related Topics

- call(action, args) (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_disputemanagement_DisputeMgmtHelper_call.htm)
- getDisputeItems(caseId) (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_disputemanagement_DisputeMgmtHelper_getDisputeItems.htm)
- getEthocaAPIRequest(disputeItems, disputeType, namedCredential) (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_disputemanagement_DisputeMgmtHelper_getEthocaAPIRequest.htm)
