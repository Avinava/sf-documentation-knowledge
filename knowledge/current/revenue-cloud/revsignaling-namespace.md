---
title: "RevSignaling Namespace"
domain: revenue-cloud
topic: revsignaling-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:05.304Z
estimatedTokens: 478
namespace: RevSignaling
keywords: [RevSignaling, includes, extend, standard, procedure, plan, implementation, through, custom, logic., extension, support, tailor, implementations, unique, requirements., Usage]
---

# RevSignaling Namespace

> The RevSignaling Namespace includes properties and methods to extend the standard
    procedure plan implementation through custom logic. Using this extension support, you can tailor
    implementations to your unique requirements.

**Namespace:** `RevSignaling`

# RevSignaling Namespace

The RevSignaling Namespace includes properties and methods to extend the standard procedure plan implementation through custom logic. Using this extension support, you can tailor implementations to your unique requirements.

## Usage

To use this namespace, enable the **Procedure Plan Orchestration for Pricing** toggle from the Revenue Settings page from Setup.

The RevSignaling namespace includes these classes.

-   **[ProcedurePlan Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_ProcedurePlan.htm#apex_class_RevSignaling_ProcedurePlan)**
    Represents the instance of the current pricing procedure plan that you're working on.
-   **[SignalingApexProcessor Interface](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_RevSignaling_SignalingApexProcessor.htm#apex_interface_RevSignaling_SignalingApexProcessor)**
    Defines the context-driven orchestration logic based on procedure plan instance and contextual instance.
-   **[TransactionRequest Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm#apex_class_RevSignaling_TransactionRequest)**
    Represents the transaction request to the signaling Apex processor.
-   **[TransactionResponse Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm#apex_class_RevSignaling_TransactionResponse)**
    Represents the transaction response from the signaling Apex processor.
-   **[TransactionStatus Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSignaling_TransactionStatus.htm)**
    Specifies the status of the transaction request.

## Related Topics

- ProcedurePlan Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_ProcedurePlan.htm)
- SignalingApexProcessor Interface (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_interface_RevSignaling_SignalingApexProcessor.htm)
- TransactionRequest Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionRequest.htm)
- TransactionResponse Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSignaling_TransactionResponse.htm)
- TransactionStatus Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSignaling_TransactionStatus.htm)
