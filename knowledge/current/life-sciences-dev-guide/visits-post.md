---
title: "Visits (POST)"
domain: life-sciences-dev-guide
topic: visits-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.533Z
estimatedTokens: 566
keywords: [Visits, POST, sales, representatives]
---

# Visits (POST)

> Create visits for sales representatives.

# Visits (POST)

Create visits for sales representatives. For example, for a medical device visit, a sales representative visits the surgeon or a hospital location.

Resource

```

```

Resource example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

<CreateVisitInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| account | String | ID of the account that is associated with a visit. | Required | 55.0 |
| actionPlanTemplate | Action Plan Template Input | Represents the details of an action plan template. Action plan templates define the sets of tasks that your sales reps perform during visits. | Optional | 55.0 |
| context | String | Purpose of the visit, such as claim or work type. | Optional | 55.0 |
| place | String | Indicates the place that sales representatives visit. | Required | 55.0 |
| plannedVisitEndTime | String | Date and time when the visit is expected to end. | Optional | 55.0 |
| plannedVisitStartTime | String | Date and time when the visit is expected to start. | Required | 55.0 |
| productRequired | Product Required Attributes Input[] | Represents the products required for the visit. | Required | 55.0 |
| status | String | Indicates the status of the visit.Valid values are:AbondonedCompletedInProgressPlanned | Optional | 55.0 |
| statusRemarks | String | Additional remarks or comments provided by the sales representatives. | Optional | 55.0 |
| visitPriority | String | Priority of the visit.Valid values are:HighLowMedium | Optional | 55.0 |
| visitType | String | ID of the visit type. This field is a lookup to the Worktype object. | Optional | 55.0 |
| visitedParty | Visited Party Attributes Input[] | Represents the contacts from the customer organization who are being visited. | Optional | 55.0 |
| visitor | Visitor Attributes Input[] | Represents the service resources from the organization who are executing the visit. | Required | 55.0 |

Response body for POST

[Create Visit Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_create_visit_output.htm "Output representation of the create visit request.")

## Code Examples

```
/connect/general-visit/visits
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect/general-visit/visits
```

```
{
"visitType": "08qSG00000017VhYAI",
"place": "131SG0000006yazYAA",
"plannedVisitStartTime": "2023-12-28T09:07:21.205-07:00",
"status": "Planned",
"account": "001SG00000Cq7T8YAJ",
"visitor": [
{
"user": "005SG000003Z0p9YAC",
"primary": true
}
],
"productRequired": [
{
"productId": "01tSG000000KOxRYAW",
"quantity": 1
}
]
}
```

## Related Topics

- Action Plan
  Template Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_action_plan_template_input.htm)
- Product
                        Required Attributes Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_product_required_attribute.htm)
- Visited Party
                        Attributes Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_visited_party_attribute.htm)
- Visitor Attributes
                        Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_visitor_attribute.htm)
- Create Visit Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_create_visit_output.htm)
