---
title: "Health Insurance"
domain: health-cloud-object-reference
topic: health-insurance
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:34.106Z
estimatedTokens: 1192
keywords: [Health, Insurance, data, model, objects, managing, ways, care, paid, participants, employment, coverage, dependents, manage, benefits]
---

# Health Insurance

> The health insurance data model provides objects for managing the ways care is paid for.
  It represents information about participants such as employment, insurance coverage, and
  dependents. You can manage details of the benefits provided by plans to members and treatment
  preauthorization requests made by members or providers.

# Health Insurance

The health insurance data model provides objects for managing the ways care is paid for. It represents information about participants such as employment, insurance coverage, and dependents. You can manage details of the benefits provided by plans to members and treatment preauthorization requests made by members or providers.

Ensure that the Health Cloud managed package is installed in your org as the package contains fields on standard objects used by the health insurance data model.

The health insurance data model includes standard objects and record types. You need the Health Cloud Platform permission set license to create, edit, and delete records in the data model.

![Health insurance data model entity-relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhealth_insurance_claims_datamodel.png&folder=health_cloud_object_reference)

-   **[CarePreauth](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepreauth.htm)**
    Represents the details of preauthorizations for care under a member’s plan.
-   **[CarePreauthItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepreauthitem.htm)**
    Represents the details of items included in a preauthorization for care under a member’s plan.
-   **[CoverageBenefit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefit.htm)**
    Represents the benefits provided to a covered member by a purchaser’s plan.
-   **[CoverageBenefitItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititem.htm)**
    Specific service covered by the insurance plan. This object is available in API version 53.0 and later.
-   **[Member](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_member.htm)**
    A member is a person who is the primary subscriber, a dependent, or anyone else who is covered under the insurance plan.
-   **[MemberPlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_memberplan.htm)**
    Represents details about the insurance coverage for a member or subscriber.
-   **[Payer](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_payer.htm)**
    A payer is a health insurance company that helps cover the cost of member care. payer is represented by records on the Account object.
-   **[PlanBenefit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_planbenefit.htm)**
    Represents the standard benefits available under a plan that the purchaser offers to their members.
-   **[PlanBenefitItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_planbenefititem.htm)**
    Represents the details of a benefit available under a purchaser’s plan that is offered to their members.
-   **[Purchaser](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_purchaser.htm)**
    A purchaser is the organization (an employer) that is providing medical insurance plans for their members (employees).
-   **[Purchaser Group](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_purchaser_group.htm)**
    A purchaser group is a subset of the purchaser. For example, your company may have individual employee groups in different regions of the country. Each purchaser group can have separate options for insurance plans.
-   **[Purchaser Group Member Association](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_purchaser_group_member_association.htm)**
    An association that records the members who belong to a purchaser group. This association is represented by records on the AccountContactRelation object.
-   **[PurchaserPlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_purchaserplan.htm)**
    Represents the payer plan that a purchaser makes available to its members and members’ dependents.
-   **[PurchaserPlanAssn](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_purchaserplanassn.htm)**
    Represents a junction object that associates the purchaser to the plans they offer to members.
-   **[Purchaser Payer Association](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_purchaser_payer_association.htm)**
    An association that records the purchasers who purchase plans from payers. This association is represented by records on the AccountAccountRelation object.

## Related Topics

- CarePreauth (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepreauth.htm)
- CarePreauthItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepreauthitem.htm)
- CoverageBenefit (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefit.htm)
- CoverageBenefitItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititem.htm)
- Member (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_member.htm)
- MemberPlan (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_memberplan.htm)
- Payer (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_payer.htm)
- PlanBenefit (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_planbenefit.htm)
- PlanBenefitItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_planbenefititem.htm)
- Purchaser (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/health_purchaser.htm)
