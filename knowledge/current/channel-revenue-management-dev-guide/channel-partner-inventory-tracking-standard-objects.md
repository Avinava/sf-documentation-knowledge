---
title: "Channel Partner Inventory Tracking Standard Objects"
domain: channel-revenue-management-dev-guide
topic: channel-partner-inventory-tracking-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.863Z
estimatedTokens: 906
keywords: [Channel, Partner, Inventory, Tracking, Standard, Objects, data, model, monitor, levels, manage, stock, movements, track, product]
---

# Channel Partner Inventory Tracking Standard Objects

> Channel Partner Inventory Tracking data model provides objects and fields to monitor
    partner inventory levels, manage stock movements, and track product consumption. Use these
    objects to improve supply chain visibility and reduce revenue leakage by optimizing partner
    stock.

# Channel Partner Inventory Tracking Standard Objects

Channel Partner Inventory Tracking data model provides objects and fields to monitor partner inventory levels, manage stock movements, and track product consumption. Use these objects to improve supply chain visibility and reduce revenue leakage by optimizing partner stock.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Professional, and Unlimited Editions |


-   **[AccountLeadTime](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_accountleadtime.htm)**
    Represents the estimated lead time for an account for a specific activity type. The business specifies this value to indicate the time needed to complete the activity. This object is available in API version 65.0 and later.
-   **[PartnerStagedData](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partnerstageddata.htm)**
    Represents data from partners, such as point of sale and reported inventory data, stored for further processing before being used in downstream processes such as inventory tracking, inventory reconciliation, and ship and debit claim validation. This object is available in API version 64.0 and later.
-   **[PartnerUnsoldInvLedger](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partnerunsoldinvledger.htm)**
    Monitors the deduction details and links credit and debit transactions. This object is available in API version 64.0 and later.
-   **[PartnerUnsoldInventory](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partnerunsoldinventory.htm)**
    Tracks the product quantities available with a partner at a specific price. This object is available in API version 64.0 and later.
-   **[PtnrInvItmRecon](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_ptnrinvitmrecon.htm)**
    Represents a partner reported inventory reconciliation for a product at a location for a particular price. This object is available in API version 64.0 and later.
-   **[PtnrInvItmReconTrace](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_ptnrinvitmrecontrace.htm)**
    Represents the source of a partner's calculated unsold inventory on a specific date. This object is available in API version 64.0 and later.
-   **[PtnrInvRecon](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_ptnrinvrecon.htm)**
    Represents the reconciliation of a partner's reported inventory with the partner's calculated unsold inventory on a specific date. This object is available in API version 64.0 and later.
-   **[TransitTime](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_transittime.htm)**
    Represents the expected duration for a movement between locations. The business specifies the transit time required for inventory to move between two locations. This object is available in API version 65.0 and later.
-   **[Rebate Management Object in Channel Partner Inventory Tracking](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_object.htm)**
    Rebate Management provides access to a standard objects that you can use in Channel Partner Inventory Tracking for the transactions that need to be processed for a rebate program

## Related Topics

- AccountLeadTime (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_accountleadtime.htm)
- PartnerStagedData (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partnerstageddata.htm)
- PartnerUnsoldInvLedger (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partnerunsoldinvledger.htm)
- PartnerUnsoldInventory (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partnerunsoldinventory.htm)
- PtnrInvItmRecon (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_ptnrinvitmrecon.htm)
- PtnrInvItmReconTrace (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_ptnrinvitmrecontrace.htm)
- PtnrInvRecon (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_ptnrinvrecon.htm)
- TransitTime (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_transittime.htm)
- Rebate Management Object in Channel Partner Inventory Tracking (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/rebate_object.htm)
