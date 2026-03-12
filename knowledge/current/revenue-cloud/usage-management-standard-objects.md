---
title: "Usage Management Standard Objects"
domain: revenue-cloud
topic: usage-management-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.998Z
estimatedTokens: 2098
keywords: [Usage, Management, Standard, Objects, data, model, provides, objects, fields, set, manage, consumption, usage-based, products.]
---

# Usage Management Standard Objects

> The Usage Management data model provides objects and fields to set up and manage
  consumption of usage-based products.

# Usage Management Standard Objects

The Usage Management data model provides objects and fields to set up and manage consumption of usage-based products.

-   **[ProductUsageGrant](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productusagegrant.htm)**
    Represents the details of a grant associated with a resource, product, or service, such as the purchased quantity, renewal and rollover policy, and validity of the grant. This object is available in API version 62.0 and later.
-   **[ProductUsageResource](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productusageresource.htm)**
    Represents the mapping of a product and its usage resources. This object is available in API version 64.0 and later.
-   **[ProductUsageResourcePolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productusageresourcepolicy.htm)**
    Represents the policies applicable to the usage resource when it’s associated with a sellable product. These policies are derived from the parent usage resource and can be overridden when setting up usage modeling.This object is available in API version 65 and later.
-   **[TransactionUsageEntitlement](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_transactionusageentitlement.htm)**
    Represents the details of each usage entitlement that's granted with the purchased sellable product, such as quantity and date when the entitlements were granted. This object is available in API version 63.0 and later.
-   **[UnitOfMeasure](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_unitofmeasure.htm)**
    Defines the units and systems of units used to account for quantities of a usage resource. This object is available for usage management in API version 62.0 and later.
-   **[UnitOfMeasureClass](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_unitofmeasureclass.htm)**
    Represents a standard unit of measure dimension. This object is available in API version 63.0 and later.
-   **[UsageBillingPeriodItem](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usagebillingperioditem.htm)**
    Represents the calculated overages for the usage entitlement and the amount that's charged for these overages. This object is available in API version 63.0 and later.
-   **[UsageCmtAssetRelatedObj](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usagecmtassetrelatedobj.htm)**
    Represents the relation between an asset for the commitment-based usage product and an asset, account, contract, or custom object. This object is available in API version 64.0 and later.
-   **[UsageCommitmentPolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usagecommitmentpolicy.htm)**
    Represents the set of rules that determines how commitments are applied to a usage resource. This object is available in API version 65 and later.
-   **[UsageEntitlementAccount](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageentitlementaccount.htm)**
    Represents the entitlement account details related to the asset that holds the wallet with the granted units. This object is available in API version 63.0 and later.
-   **[UsageEntitlementBucket](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageentitlementbucket.htm)**
    Represents a usage entitlement that's granted with the sellable product. This object is available in API version 63.0 and later.
-   **[UsageEntitlementEntry](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageentitlemententry.htm)**
    Represents the usage entitlement details, such as the usage consumption, rollovers, and details of expired units for each tenure. This object is available in API version 63.0 and later.
-   **[UsageGrantRenewalPolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usagegrantrenewalpolicy.htm)**
    Represents a policy about the rollover of a usage grant. This object is available in API version 62.0 and later.
-   **[UsageGrantRolloverPolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usagegrantrolloverpolicy.htm)**
    Represents a policy about the rollover of a usage grant.This object is available in API version 62.0 and later.
-   **[UsageOveragePolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageoveragepolicy.htm)**
    Represents the set of rules that determine the management of usage resource’s units consumed beyond the granted limit. This object is available in API version 65 and later.
-   **[UsagePrdGrantBindingPolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageprdgrantbindingpolicy.htm)**
    Represents the association of a usage resource's grants with a sellable product. This object is available in API version 63.0 and later.
-   **[UsageRatableSummary](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageratablesummary.htm)**
    Represents the aggregation of the usage summaries that are used to calculate the rate at which the overages are charged. This object is available in API version 63.0 and later.
-   **[UsageRatableSumCmtAssetRt](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageratablesumcmtassetrt.htm)**
    Represents the rate that’s calculated and applicable for the usage resource associated with the commitment assets related to an anchor. This object is available in API version 65.0 and later.
-   **[UsageResource](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageresource.htm)**
    Represents an entitlement granted to a user or party by a provider, such as data storage, computing power, bandwidth, or any other product or service. Additionally, this object is used to represent resources consumed over time. This object is available in API version 62.0 and later.
-   **[UsageResourcePolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageresourcepolicy.htm)**
    Represents the policies applicable to the usage resource whether it’s associated with a sellable product or not. This object is available in API version 65 and later.
-   **[UsageResourceBillingPolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageresourcebillingpolicy.htm)**
    Represents information about how the usage is accumulated before rating a usage resource.This object is available in API version 62.0 and later.
-   **[UsageSummary](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usagesummary.htm)**
    Represents the aggregation of the entries in the transaction journal for a usage entitlement for a specified period. This object is available in API version 63.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Object Reference for the Salesforce Platform: Overview of Salesforce Objects
    and Fields  - HTML (New Window)")

-   [*SOAP API Developer Guide*: Introduction to SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "SOAP API Developer Guide: Introduction to SOAP API - HTML (New Window)")

## Related Topics

- ProductUsageGrant (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productusagegrant.htm)
- ProductUsageResource (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productusageresource.htm)
- ProductUsageResourcePolicy (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productusageresourcepolicy.htm)
- TransactionUsageEntitlement (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_transactionusageentitlement.htm)
- UnitOfMeasure (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_unitofmeasure.htm)
- UnitOfMeasureClass (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_unitofmeasureclass.htm)
- UsageBillingPeriodItem (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usagebillingperioditem.htm)
- UsageCmtAssetRelatedObj (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usagecmtassetrelatedobj.htm)
- UsageCommitmentPolicy (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usagecommitmentpolicy.htm)
- UsageEntitlementAccount (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_usageentitlementaccount.htm)
