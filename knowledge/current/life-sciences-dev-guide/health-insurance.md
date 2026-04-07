---
title: "Health Insurance"
domain: life-sciences-dev-guide
topic: health-insurance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:57.228Z
estimatedTokens: 296
keywords: [Health, Insurance, model, managing, ways, care, paid, participants, employment, coverage, dependents, manage, benefits, provided, plans, members, treatment, preauthorization, requests, made, providers]
---

> The health insurance data model provides objects for managing the ways care is paid for.
  It represents information about participants such as employment, insurance coverage, and
  dependents. You can manage details of the benefits provided by plans to members and treatment
  preauthorization requests made by members or providers.

# Health Insurance

The health insurance data model provides objects for managing the ways care is paid for. It represents information about participants such as employment, insurance coverage, and dependents. You can manage details of the benefits provided by plans to members and treatment preauthorization requests made by members or providers.

The health insurance data model includes standard objects and record types. You need the Health Cloud Starter permission set to create, edit, and delete records in the data model.

-   **[Purchaser Group](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/health_purchaser_group.htm)**
    A purchaser group is a subset of the purchaser. For example, your company may have individual employee groups in different regions of the country. Each purchaser group can have separate options for insurance plans.
-   **[Purchaser Group Member Association](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/health_purchaser_group_member_association.htm)**
    An association that records the members who belong to a purchaser group. This association is represented by records on the AccountContactRelation object.

## Related Topics

- Purchaser Group (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/health_purchaser_group.htm)
- Purchaser Group Member Association (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/health_purchaser_group_member_association.htm)
