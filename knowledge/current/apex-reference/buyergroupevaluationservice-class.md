---
title: "BuyerGroupEvaluationService Class"
domain: apex-reference
topic: buyergroupevaluationservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.355Z
estimatedTokens: 1186
namespace: CommerceBuyGrp
keywords: [BuyerGroupEvaluationService, define, execute, custom, business, logic, dynamically, assigning, users, buyer, groups, Unlike, out-of-the-box, configurations, limited]
---

# BuyerGroupEvaluationService Class

> The BuyerGroupEvaluationService class allows
            you define and execute custom business logic for dynamically assigning users to buyer
            groups. Unlike out-of-the-box configurations limited to account, market, or data
        segment-based buyer groups, this service supports extensibility and empowers you to
        implement tailored buyer group evaluation strategies. It supports both guest and logged-in
        user scenarios, enabling highly customizable and context-specific buyer group
        determination.

**Namespace:** `CommerceBuyGrp`

# BuyerGroupEvaluationService Class

The BuyerGroupEvaluationService class allows you define and execute custom business logic for dynamically assigning users to buyer groups. Unlike out-of-the-box configurations limited to account, market, or data segment-based buyer groups, this service supports extensibility and empowers you to implement tailored buyer group evaluation strategies. It supports both guest and logged-in user scenarios, enabling highly customizable and context-specific buyer group determination.

## Namespace

[CommerceBuyGrp](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceBuyGrp.htm "The CommerceBuyGrp namespace provides classes and methods for retrieving information about the buyer groups associated with a user.")

## Consideration

When implementing the BuyerGroupEvaluationService, remember these key points:

-   The number of buyer groups that can be assigned to a user is determined by the limit set in your Salesforce org. See [Shopper Buyer Groups and Accounts Data Limits Groups](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-b2c-comm-data-model-shopper-buyer-groups-accounts-limits.html "HTML (New Window)").
-   Supported for B2B stores and D2C stores with custom checkout enabled. It isn't available for stores using managed checkout. See [Configure Custom Checkout for a B2B or D2C Store](https://help.salesforce.com/s/articleView?id=commerce.comm_custom_checkout.htm&language=en_US "HTML (New Window)").
-   Buyer group assignments may not take effect immediately if caching is enabled. To make sure the buyer group extensibility service functions properly and to avoid caching-related issues, disable both the Salesforce Content Delivery Network (CDN) and Salesforce Edge Network.

    Test these changes in your sandbox org before applying them in production. Go to **My Domain Settings** and disable both options for enhanced domains.

    See [Considerations for the Salesforce CDN](https://help.salesforce.com/s/articleView?id=platform.community_builder_cdn_considerations.htm&language=en_US "HTML (New Window)") and [Considerations for Salesforce Edge Network](https://help.salesforce.com/s/articleView?id=xcloud.domain_name_edge_network_considerations.htm&language=en_US "HTML (New Window)").


## Usage

Use the BuyerGroupEvaluationService to implement custom logic for assigning users to buyer groups. By integrating your logic with this service, you can evaluate and assign buyer groups in real time based on criteria specific to your organization.

-   Define Custom Logic—Create your own business rules to evaluate and assign users to appropriate Buyer Groups.
-   Integration with the Service—Integrate your custom logic into the BuyerGroupEvaluationService to dynamically determine buyer group membership at runtime.
-   Test and Validate—Test your implementation to ensure it behaves as expected and doesn’t introduce errors or inconsistencies in group assignments.

## Example

For an example implementation of the CommerceBuyGrp.BuyerGroupEvaluationService class, see [Commerce Extensibility](https://github.com/forcedotcom/commerce-extensibility/blob/main/commerce/domain/buyergroup/service/classes/BuyerGroupEvaluationServiceSample.cls "HTML (New Window)").

-   **[BuyerGroupEvaluationService Methods](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupEvaluationService.htm#apex_CommerceBuyGrp_BuyerGroupEvaluationService_methods)**


## BuyerGroupEvaluationService Methods

The following are methods for BuyerGroupEvaluationService.

-   **[getBuyerGroupIds(request)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupEvaluationService.htm#apex_CommerceBuyGrp_BuyerGroupEvaluationService_getBuyerGroupIds)**
    Retrieves a list of evaluated buyer group IDs assigned to a user based on custom or predefined business logic.

### getBuyerGroupIds(request)

Retrieves a list of evaluated buyer group IDs assigned to a user based on custom or predefined business logic.

#### Signature

public CommerceBuyGrp.BuyerGroupResponse getBuyerGroupIds(CommerceBuyGrp.BuyerGroupRequest request)

#### Parameters

request

Type: [CommerceBuyGrp.BuyerGroupRequest](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupRequest.htm#apex_class_CommerceBuyGrp_BuyerGroupRequest "Contains methods to retrieve account and store details used to identify the buyer groups associated with a user.")

#### Return Value

Type: CommerceBuyGrp.BuyerGroupResponse[CommerceBuyGrp.BuyerGroupResponse](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_class_CommerceBuyGrp_BuyerGroupResponse "Contains constructors and methods to retrieve the buyer groups associated with a user.")

## Related Topics

- CommerceBuyGrp (atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceBuyGrp.htm)
- BuyerGroupEvaluationService Methods (atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupEvaluationService.htm)
- getBuyerGroupIds(request) (atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupEvaluationService.htm)
- CommerceBuyGrp.BuyerGroupRequest (atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupRequest.htm)
- CommerceBuyGrp.BuyerGroupResponse (atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm)
