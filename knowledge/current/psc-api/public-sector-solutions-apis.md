---
title: "Public Sector Solutions APIs"
domain: psc-api
topic: public-sector-solutions-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.592Z
estimatedTokens: 326
keywords: [Sector, Solutions, APIs, Business, care, plan, templates, plans, Special, Access, Rules, Resources]
---

# Public Sector Solutions APIs

> Use the Public Sector Solutions Business APIs to create care plan
      templates and care plans.

# Public Sector Solutions APIs

Use the Public Sector Solutions Business APIs to create care plan templates and care plans.

## Special Access Rules

To use care plans, users need the Care Plans Access and Benefit Management Access permission sets.

## Available Resources

| Resource | Description |
| --- | --- |
| /connect/careplan/care-plans | Use the POST request to create care plan records. |
| /connect/careplan/care-plans/${carePlanId} | Use the PATCH request to update a care plan record. |
| /connect/careplan/care-plans/${carePlanId} | Use the GET request to retrieve the care plan details. |
| /connect/careplan/careplan-templates/​${carePlanTemplateId}/actions/${actionType} | Use the POST request to create care plan template records. |
| /connect/careplan/careplan-templates/​${carePlanTemplateId} | Use the GET request to retrieve the care plan template details. |
| /connect/careplan/definitions/${definitionId} | Use the GET request to retrieve details about a specified definition record that is related to goal definition and the benefits of a care plan. |

-   **[REST Reference](atlas.en-us.psc_api.meta/psc_api/psi_apis_rest_references.htm)**
    You can access Public Sector Solutions APIs using REST endpoints. These REST APIs follow similar conventions as Connect REST APIs.

## Related Topics

- /connect/careplan/care-plans (atlas.en-us.psc_api.meta/psc_api/connect_resources_create_careplans_records.htm)
- /connect/careplan/care-plans/${carePlanId} (atlas.en-us.psc_api.meta/psc_api/connect_resources_get_careplans_details.htm)
- /connect/careplan/careplan-templates/​${carePlanTemplateId}/actions/${actionType} (atlas.en-us.psc_api.meta/psc_api/connect_resources_create_careplan_template_child_records.htm)
- /connect/careplan/careplan-templates/​${carePlanTemplateId} (atlas.en-us.psc_api.meta/psc_api/connect_resources_get_careplan_template_child_records.htm)
- /connect/careplan/definitions/${definitionId} (atlas.en-us.psc_api.meta/psc_api/connect_resources_get_care_plan_definitions.htm)
- REST Reference (atlas.en-us.psc_api.meta/psc_api/psi_apis_rest_references.htm)
