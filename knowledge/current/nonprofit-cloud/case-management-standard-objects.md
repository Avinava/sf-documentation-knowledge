---
title: "Case Management Standard Objects"
domain: nonprofit-cloud
topic: case-management-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.369Z
estimatedTokens: 1169
keywords: [Case, Management, Standard, Objects, data, model, manage, cases, care, plans, nonprofit, organization]
---

# Case Management Standard Objects

> Case Management data model provides objects and fields to manage cases and care plans
  for your nonprofit organization.

# Case Management Standard Objects

Case Management data model provides objects and fields to manage cases and care plans for your nonprofit organization.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise and Unlimited Editions. |


-   **[CarePlan](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_careplan.htm)**
    Represents an instantiation of a care plan template for a particular individual in order to reach specific goals. This object is available in API version 55.0 and later.
-   **[CarePlanTemplate](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_careplantemplate.htm)**
    Represents the template for a type of care plan that can be offered for a household scenario. This object is available in API version 55.0 and later.
-   **[CarePlanTemplateBenefit](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_careplantemplatebenefit.htm)**
    Represents a junction between a care plan template and a benefit. This object stores the benefit details of a care plan. This object is available in API version 55.0 and later.
-   **[CarePlanTemplateGoal](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_careplantemplategoal.htm)**
    Represents a junction between a care plan template and a goal definition. This object stores the goal details of a care plan template. This object is available in API version 55.0 and later.
-   **[CaseParticipant](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_caseparticipant.htm)**
    Represents a junction between a case, and an account or a contact. This object stores the details of the participant associated with a case. This participant could be the applicant, co-applicant, a household, or even a business account. This object is available in API version 54.0 and later.
-   **[ComplaintCase](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_complaintcase.htm)**
    Represents the association between a public complaint and its corresponding case. This object is available in API version 52.0 and later.
-   **[ComplaintParticipant](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_complaintparticipant.htm)**
    Represents a junction between a public complaint, and an account or a contact. This object stores the details of the participant who registers a complaint with the authorities. This participant could be the applicant, co-applicant, a household, or even a business account. This object is available in API version 54.0 and later.
-   **[GoalAssignment](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_goalassignment.htm)**
    Represents the assignment of a goal. This object is available in API version 55.0 and later.
-   **[GoalDefinition](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_goaldefinition.htm)**
    Represents a goal or a business objective that’s used as a reference. When instantiated, GoalDefinition records create GoalAssignment records that serve as goals in care plans.
-   **[Interaction](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_psc_api_objects_interaction.htm)**
    Represents an interaction (phone call, in-person meeting, or video conference) between two or more people (attendees), typically including at least one representative and one customer or partner.
-   **[InteractionAttendee](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_psc_api_objects_interactionattendee.htm)**
    Represents an attendee of an interaction.
-   **[InteractionRelatedAccount](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_psc_api_objects_interactionrelatedaccount.htm)**
    Represents a junction between an interaction and account that's related to that interaction.
-   **[InteractionSummary](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_psc_api_objects_interactionsummary.htm)**
    Represents the summary of an interaction, including confidentiality information.
-   **[InteractionSumDiscussedAccount](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_psc_api_objects_interactionsumdiscussedaccount.htm)**
    Represents information about the companies discussed in an interaction.
-   **[PublicComplaint](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_publiccomplaint.htm)**
    Represents the complaints submitted by public users. This object is available in API version 49.0 and later.
-   **[Referral](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_referral.htm)**
    Represents the information on client referrals in an organization. This object is available in API version 56.0 and later.

## Related Topics

- CarePlan (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_careplan.htm)
- CarePlanTemplate (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_careplantemplate.htm)
- CarePlanTemplateBenefit (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_careplantemplatebenefit.htm)
- CarePlanTemplateGoal (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_careplantemplategoal.htm)
- CaseParticipant (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_caseparticipant.htm)
- ComplaintCase (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_complaintcase.htm)
- ComplaintParticipant (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_complaintparticipant.htm)
- GoalAssignment (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_goalassignment.htm)
- GoalDefinition (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_goaldefinition.htm)
- Interaction (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_psc_api_objects_interaction.htm)
