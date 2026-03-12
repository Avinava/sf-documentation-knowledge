---
title: "Key Account Management"
domain: life-sciences-dev-guide
topic: key-account-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:43.693Z
estimatedTokens: 2481
keywords: [Key, Account, Management, Managers, KAM, strategically, manage, engage, their, customers, comprehensive, territory, plans, KAMs, clear]
---

# Key Account Management

> Key Account Management enables Key Account Managers (KAM) to strategically manage and
  engage with their most important customers. By using comprehensive account and territory plans,
  KAMs can set clear business objectives, track progress, and ensure alignment across global,
  affiliate, and territory levels. This structured approach enhances customer targeting accuracy and
  drives effective execution of strategic initiatives. With capabilities for creating multiple
  plans, defining specific objectives, and assigning tasks, the Key Account Management ensures
  alignment, collaboration, and effective execution of strategies to achieve desired business
  outcomes.

# Key Account Management

Key Account Management enables Key Account Managers (KAM) to strategically manage and engage with their most important customers. By using comprehensive account and territory plans, KAMs can set clear business objectives, track progress, and ensure alignment across global, affiliate, and territory levels. This structured approach enhances customer targeting accuracy and drives effective execution of strategic initiatives. With capabilities for creating multiple plans, defining specific objectives, and assigning tasks, the Key Account Management ensures alignment, collaboration, and effective execution of strategies to achieve desired business outcomes.

## Account Plan

Key account managers use Account Plans to enhance the accuracy of customer targeting and management by defining business objectives at the global, affiliate, and territory levels. Key Account Management in Life Sciences Cloud consists of five stages: Goal Setting, Targeting, Strategic Planning, Execution, and Reporting. An account can have multiple account plans, each with one or more objectives. Each objective can have one or more tactics, which are groups of tasks that can be tracked for progress and rolled up to higher objectives. Assign tasks and tactics to various team members for stakeholders and track them through sprints.

![images/lsc_key_account_plan_data_model.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_key_account_plan_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/key-account-management-account-plan.html "HTML (New Window)").

## Territory Plan

Key account managers use Territory Plans to enhance the accuracy of customer targeting and management by establishing business objectives at the Global, Affiliate, and Territory levels. These plans include setting goals, tracking progress, and reporting outcomes through the KAM operating model, which consists of five stages: Goal Setting, Execution, and Reporting. There are three types of objectives: Global Business objectives, Affiliate objectives, and Territory objectives, each serving a specific tracking purpose. Territory Plans can contain multiple objectives, each with corresponding tactics to monitor progress and achieve set goals effectively. Tracking tasks from tactics to objectives ensures a comprehensive approach to managing territories and achieving desired outcomes.

![images/lsc_general_events_data_model.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_key_territory_plan_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/key-account-management-territory-plan.html "HTML (New Window)").

-   **[AccountPlanParticipant](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanparticipant.htm)**
    Represents the team members participating in the account plan. This object is available in API version 65.0 and later.
-   **[AccountPlanProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanproduct.htm)**
    Represents all the products associated with an account plan or its objectives. This object is available in API version 65.0 and later.
-   **[AccountPlanRelaObjAnalysis](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanrelaobjanalysis.htm)**
    Represents the strategic analysis done on objects related to the account plan. This object helps to identify internal and external factors that could potentially affect the plan, its objectives, or any related objects. This object is available in API version 65.0 and later.
-   **[AccountPlanRelationship](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanrelationship.htm)**
    Represents the relationship between multiple account plans for key account management. This object is available in API version 65.0 and later.
-   **[AcctPlanPtcpStakeholder](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_acctplanptcpstakeholder.htm)**
    Represents a junction between an account plan participant and an account plan stakeholder. Stores information about the account plan participant who collaborates with the account plan stakeholder for performing account plan tasks. This object is available in API version 65.0 and later.
-   **[AccountPlanStakeholder](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstakeholder.htm)**
    Represents the key individuals who can influence an account's actions or have a vested interest in its outcomes. This object is available in API version 65.0 and later.
-   **[AccountPlanStkhldrAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstkhldraction.htm)**
    Represents a junction between an account plan stakeholder and an action. Stores information about an action for an account plan that's associated with a stakeholder. This object is available in API version 65.0 and later.
-   **[AccountPlanStkhldrProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstkhldrproduct.htm)**
    Represents a junction between an account plan stakeholder and a product. Stores information about the products associated with a stakeholder for an account plan. This object is available in API version 65.0 and later.
-   **[ActionPlanTemplate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplantemplate.htm)**
    Represents the instance of an action plan template.
-   **[ActionPlanTemplateAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_actionplantemplateassignment.htm)**
    Represents the association of an action plan template with its related care plan template, goal, or problem definition. When instantiated, the action plan generates the corresponding intervention tasks and links them to the appropriate record, such as a condition, goal, or care plan.
-   **[ActionPlanTemplateItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplantemplateitem.htm)**
    Represents the instance of an item on an action plan template version.
-   **[AssessmentTask](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_assessmenttask.htm)**
    Perform activities such as patient registration or order authorization to capture information.
-   **[GoalAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_goalassignment.htm)**
    Represents the goals that are part of a care plan.
-   **[GoalDefinition](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_goaldefinition.htm)**
    Represents a goal or a business objective that’s used as a reference. When instantiated, GoalDefinition records create GoalAssignment records that serve as goals in care plans.
-   **[GoalDefinitionProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_goaldefinitionproduct.htm)**
    Represents a junction between a goal definition and a product. Stores information about the goal definition that defines the business objective for a product. This object is available in API version 65.0 and later.
-   **[Sprint](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_sprint.htm)**
    Represents a specific timeframe within which account action plans are executed within key account management. This object is available in API version 65.0 and later.
-   **[TerritoryBusinessPlan](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territorybusinessplan.htm)**
    Represents the detailed, strategic outline of vital customer information. This object is used to effectively manage and expand customer relationships within a specific territory. This object is available in API version 65.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: AssessmentTask](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_assessmenttask.htm "Perform activities such as patient registration or order authorization to capture information.")

-   [*Object Reference for the Salesforce Platform*: ActionPlanItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplanitem.htm)

-   [*Object Reference for the Salesforce Platform*: ActionPlanTemplateVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplantemplateversion.htm)

-   [*Object Reference for the Salesforce Platform*: ActionPlanTemplateItemValue](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplantemplateitemvalue.htm)

-   [*Object Reference for the Salesforce Platform*: ActionPlanTemplateAssignment](https://developer.salesforce.com/docs/atlas.en-us.260.0.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_actionplantemplateassignment.htm)

-   [*Object Reference for the Salesforce Platform*: ActionPlan](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplan.htm)

-   [*Object Reference for the Salesforce Platform*: ActionPlanTemplate](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplantemplate.htm)

## Related Topics

- AccountPlanParticipant (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanparticipant.htm)
- AccountPlanProduct (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanproduct.htm)
- AccountPlanRelaObjAnalysis (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanrelaobjanalysis.htm)
- AccountPlanRelationship (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanrelationship.htm)
- AcctPlanPtcpStakeholder (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_acctplanptcpstakeholder.htm)
- AccountPlanStakeholder (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstakeholder.htm)
- AccountPlanStkhldrAction (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstkhldraction.htm)
- AccountPlanStkhldrProduct (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accountplanstkhldrproduct.htm)
- ActionPlanTemplate (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionplantemplate.htm)
- ActionPlanTemplateAssignment (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_actionplantemplateassignment.htm)
