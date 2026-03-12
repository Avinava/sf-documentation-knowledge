---
title: "Considerations for Multi-Resource Scheduling"
domain: salesforce-scheduler-developer-guide
topic: considerations-for-multi-resource-scheduling
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.059Z
estimatedTokens: 227
keywords: [Considerations, Multi-Resource, Scheduling, primary, service, resource, anchors, appointment, marked, resources, whose, skills, matched, skill, requirements]
---

# Considerations for Multi-Resource Scheduling

> In multi-resource scheduling, a primary service resource anchors the appointment and
   must be marked required. Primary service resources are the only required resources whose skills
   are matched to the skill requirements for an appointment. Other required service resources are
   matched to appointments based on their availability and the primary resource’s service
   territory.

# Considerations for Multi-Resource Scheduling

In multi-resource scheduling, a primary service resource anchors the appointment and must be marked required. Primary service resources are the only required resources whose skills are matched to the skill requirements for an appointment. Other required service resources are matched to appointments based on their availability and the primary resource’s service territory.

Here’s how matching is done for different types of service resources when multi-resource scheduling is enabled.

| Matches On | Primary Service Resource | Required Service Resource |
| --- | --- | --- |
| Skill Requirements | Yes | No |
| Service Territory | Yes | Yes |
| Availability in Time Slots | Yes | Yes |

-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_enable_multi_resource.htm "Enable Multi-Resource Scheduling")

## Related Topics

- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_enable_multi_resource.htm)
