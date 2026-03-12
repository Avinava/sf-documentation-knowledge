---
title: "Program Management Business APIs"
domain: nonprofit-cloud
topic: program-management-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:02.076Z
estimatedTokens: 402
keywords: [Program, Management, Business, APIs, RESTful, sometimes, Apex, classes]
---

# Program Management Business APIs

> Program Management Business APIs are RESTful APIs that are sometimes available as Apex
    classes and methods.

# Program Management Business APIs

Program Management Business APIs are RESTful APIs that are sometimes available as Apex classes and methods.

| Available in: Lightning Experience |
| --- |
| Available in: Program Management is available with Enterprise, Unlimited, and Performance Editions with the Impact Cloud. |


Program Management has these resources.

| Resource | Description |
| --- | --- |
| /connect/program-mgmt/programs/${programId}/enrollments | Enroll participants in a program. An enrollee can either be a contact or an account. |
| /connect/program-mgmt/programs/${programId}/enrollments | Update program enrollments. |
| /connect/program-mgmt/benefit-schedules | Create a preview of the benefit scheduling session. |
| /connect/program-mgmt/benefit-schedules/${benefitScheduleId}/sessions | Create a benefit schedule for a benefit session. |
| /connect/program-mgmt/benefit-schedules/${benefitScheduleId}/participants | Add participants to a benefit schedule. |
| /connect/program-mgmt/benefit-schedules/${benefitScheduleId}​/benefit-sessions/${benefitSessionId}/participants | Add participants to a benefit session. |
| /connect/program-mgmt/benefit/${benefitId}/benefit-disbursements | Create benefit disbursements for ad hoc walk-in participants. |
| /connect/program-mgmt/case-programs/${caseId} | Create case programs. |

-   **[REST Reference](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/program_mgmt_business_apis_rest_references.htm)**
    You can access Program Management Business APIs using REST endpoints. These REST APIs follow similar conventions as Connect REST APIs.

## Related Topics

- /connect/program-mgmt/programs/${programId}/enrollments (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_resources_enroll_participants_in_program.htm)
- /connect/program-mgmt/programs/${programId}/enrollments (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_resources_update_enroll_participants_in_program.htm)
- /connect/program-mgmt/benefit-schedules (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_resources_benefit_scheduling_session_preview.htm)
- /connect/program-mgmt/benefit-schedules/${benefitScheduleId}/sessions (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_resources_create_benefit_schedule.htm)
- /connect/program-mgmt/benefit-schedules/${benefitScheduleId}/participants (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_resources_add_participants_to_benefit_schedule.htm)
- /connect/program-mgmt/benefit-schedules/${benefitScheduleId}​/benefit-sessions/${benefitSessionId}/participants (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_resources_add_participants_to_benefit_session.htm)
- /connect/program-mgmt/benefit/${benefitId}/benefit-disbursements (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_resources_add_benefit_disbursements.htm)
- /connect/program-mgmt/case-programs/${caseId} (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_resources_add_case_programs.htm)
- REST Reference (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/program_mgmt_business_apis_rest_references.htm)
