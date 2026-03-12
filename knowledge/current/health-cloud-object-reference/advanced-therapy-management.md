---
title: "Advanced Therapy Management"
domain: health-cloud-object-reference
topic: advanced-therapy-management
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.843Z
estimatedTokens: 1786
keywords: [Advanced, Therapy, Management, helps, streamline, complex, procedures, involve, multiple, appointments, across, different, locations, Management’s, Multi-Step]
---

# Advanced Therapy Management

> Advanced Therapy Management helps streamline complex procedures that involve multiple
  appointments across different locations. Use Advanced Therapy Management’s Multi-Step Scheduling
  solution for easy scheduling of appointments for program participants. Configure procedure steps
  based on lead times and set up affiliated service territories to establish where work types are
  sequentially performed.

# Advanced Therapy Management

Advanced Therapy Management helps streamline complex procedures that involve multiple appointments across different locations. Use Advanced Therapy Management’s Multi-Step Scheduling solution for easy scheduling of appointments for program participants. Configure procedure steps based on lead times and set up affiliated service territories to establish where work types are sequentially performed.

Advanced Therapy Management’s Multi-Step Scheduling is powered by Salesforce Scheduler to search for available slots at affiliated service territories. With the combined help of new Advanced Therapy Management objects and existing Scheduler objects, Multi-Step Scheduling provides a centralized platform that helps users book, reschedule, and cancel slots for various procedure steps.

Advanced Therapy Management helps pharmaceutical companies conduct complex therapies like cell and gene therapy with ease. Treatment center coordinators can schedule appointments for procedure steps like apheresis, manufacturing, and infusion at one go. Service territory relationships streamline search results by defining relationships between affiliated sites where consecutive therapy steps are performed. Salesforce Scheduler’s existing objects support effective slot management by helping users configure service resources, assets, and their availabilities at designated locations.

Advanced Therapy Management objects are available to users with the Multi-Step Scheduling permission set and permission set license. Admins must also purchase the Asset Scheduler Add-On license for each asset assigned to a service territory.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhealth-cloud-advanced-therapy-management-data-model.png&folder=health_cloud_object_reference)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/advanced-therapy-management.html "HTML (New Window)").

-   **[AdvTherapyFieldOptOverride](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_advtherapyfieldoptoverride.htm)**
    Represents a list of fields with changed optionality, based on certain parameters. This object is available in API version 59.0 and later.
-   **[CarePgmEnrolleeWorkOrder](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepgmenrolleeworkorder.htm)**
    Represents information about the work order that's executed for the care program enrollee. This object is available in API version 58.0 and later.
-   **[CarePgmEnrolleeWkOrdStep](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepgmenrolleewkordstep.htm)**
    Represents information about the step in a work order that's executed for the care program enrollee. This object is available in API version 58.0 and later.
-   **[CareProgramEnrollee](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_atm_objects_careprogramenrollee.htm)**
    Represents a participant enrolled in a care program.
-   **[CustodyChainEntry](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_custodychainentry.htm)**
    Represents information about an entry or event in the chain of custody. This object is available in API version 59.0 and later.
-   **[CustodyItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_custodyitem.htm)**
    Represents information about an item in the custody chain. This object is available in API version 59.0 and later.
-   **[CustodyVerfcTypeOverride](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_custodyverfctypeoverride.htm)**
    Represents information about the verification of an entry in the chain of custody. This object is available in API version 59.0 and later.
-   **[ServiceAppointmentGroup](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceappointmentgroup.htm)**
    Stores information about a group of related service appointments. This object is available in API version 56.0 and later.
-   **[ServiceTerritoryRelationship](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceterritoryrelationship.htm)**
    Represents the relationship between service territories based on work types performed. This object is available in API version 56.0 and later.
-   **[Team](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_team.htm)**
    Represents the team of members associated with an organization. This object is available in API version 58.0 and later.
-   **[TeamMember](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_teammember.htm)**
    Represents the member associated with a team. This object is available in API version 58.0 and later.
-   **[WorkProcedure](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_workprocedure.htm)**
    Represents information about a procedure or process that's part of a program, such as a care program in Health Cloud or Life Sciences Cloud.
-   **[WorkProcedureStep](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_workprocedurestep.htm)**
    Represents information about the work type that's a part of a work procedure.
-   **[WorkTypeExtension](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypeextension.htm)**
    Represents additional information about a work type.
-   **[WorkTypeStep](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypestep.htm)**
    Represents each step within a work type.
-   **[WorkTypeStepLdTimeOvride](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypestepldtimeovride.htm)**
    Represents the lead time that's used to override the default lead time required for the work procedure, work type, or work type step that's performed at a service territory in a country. This object is available in API version 59.0 and later.
-   **[WorkTypeSvcTerrSchdPrio](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypesvcterrschdprio.htm)**
    Represents the priority of the combination of the service territory, work type, and work procedure while fetching appointment slots. This object is available in API version 59.0 and later.

#### See Also

-   [*Salesforce Scheduler Developer Guide*: Salesforce Scheduler Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/salesforce_scheduler_objects_overview.htm)

## Related Topics

- AdvTherapyFieldOptOverride (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_advtherapyfieldoptoverride.htm)
- CarePgmEnrolleeWorkOrder (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepgmenrolleeworkorder.htm)
- CarePgmEnrolleeWkOrdStep (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_carepgmenrolleewkordstep.htm)
- CareProgramEnrollee (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_atm_objects_careprogramenrollee.htm)
- CustodyChainEntry (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_custodychainentry.htm)
- CustodyItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_custodyitem.htm)
- CustodyVerfcTypeOverride (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_custodyverfctypeoverride.htm)
- ServiceAppointmentGroup (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceappointmentgroup.htm)
- ServiceTerritoryRelationship (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceterritoryrelationship.htm)
- Team (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_team.htm)
