---
title: "Business Object API Entity"
domain: retail-api
topic: business-object-api-entity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.719Z
estimatedTokens: 667
keywords: [Business, API, Entity, entities, created, part, configuration, support, Promotion, cases]
---

# Business Object API Entity

> The following entities are created as part of the default configuration to support
        Promotion use cases.

# Business Object API Entity

The following entities are created as part of the default configuration to support Promotion use cases.

| Entity Name | Location | Path | Description |
| --- | --- | --- | --- |
| Promotion | Input |  | Represents the input Promotion. The attributes for the object are defined in the Workflow Rules that use this Entity. |
| Tactic | Input | .Tactics[*] | Represents an input Tactic. The attributes for the object are defined in the Workflow Rules that use this Entity. |
| ManualInputs | Input | .ManualInputs,.Tactics[*].ManualInputs | Represents a Manual Inputs Array. The attributes for the object are defined in the Workflow Rules that use this Entity. |
| ProductFilter | Input | .ProductFilter,.Tactics[*].ProductFilter | Represents a Product Filter Structure. The attributes for the object are defined in the Workflow Rules that use this Entity. |
| TPM_Promotion | Output |  | Represents the TPM_Promotion Instance with all the promotion data. |
| TPM_Promotion.Promotion | Output |  | Represents a TPM_Promotion.Record instance with all the Promotion SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.Tactic | Output |  | Represents a TPM_Promotion.TacticRecord instance with all the Tactic SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.Attachment | Output |  | Represents a TPM_Promotion.Record instance with all the Promotion Attachment SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.AttachmentLink | Output |  | Represents a TPM_Promotion.Record instance with all the Promotion Attachment Link SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.ProductFilter | Output |  | Represents a TPM_ProductFilter instance with all the Promotion Product filter information. |
| TPM_Promotion.ProductShare | Output |  | Represents a TPM_Promotion.Record instance with all the Promotion Product Share SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.TacticConditionCreationDefinition | Output |  | Represents a TPM_Promotion.Record instance with all the Tactic Condition Creation Definition SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.TacticFund | Output |  | Represents a TPM_Promotion.Record instance with all the Tactic Fund SObject Data. SObject fields can be used with dot notation. |
| TPM_Promotion.TacticProductFilter | Output |  | Represents a TPM_ProductFilter instance with all the Tactic Product filter information. |
| CustomState | Output |  | Represents a generic Object that will be passed to the Promotion Saving Process while saving. |
