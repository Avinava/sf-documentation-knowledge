---
title: "Agentforce IT Service Standard Objects"
domain: agentforce
topic: agentforce-it-service-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:08:17.643Z
keywords: [Agentforce, Service, Standard, Objects]
---

# Agentforce IT Service Standard Objects

# Agentforce IT Service Standard Objects

Agentforce IT Service data model provides objects and fields to track and manage IT issues and service requests. Use these objects to manage your IT service processes.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, and Unlimited Editions |
  

-   **[ChangeRequestCnfgItem](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_changerequestcnfgitem.htm)**  
    Represents the relationship between a change request and a configuration item reference. This object is available in API version 65.0 and later.
-   **[ConfigurationItem](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_configurationitem.htm)**  
    Represents a record in the core Salesforce system that refers to a configuration item record stored in an external system. This object is available in API version 65.0 and later.
-   **[CnfgMgmtCredential](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_cnfgmgmtcredential.htm)**  
    Represents authentication information needed to access and interact with various IT devices and systems during the discovery processes. For example, SSH key. This object is available in API version 65.0 and later.
-   **[CnfgMgmtDiscoveryAgent](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_cnfgmgmtdiscoveryagent.htm)**  
    Represents an installed discovery agent on a system. Serves as a child object of Discovery Agent and tracks individual agent instances across the environment. This object is available in API version 65.0 and later.
-   **[CnfgMgmtDiscoveryAgentDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_cnfgmgmtdiscoveryagentdef.htm)**  
    Represents discovery agents installed on various operating systems. Acts as a parent object that groups agent instances by type and operating system. Captures metadata such as version and upgrade preferences. This object is available in API version 65.0 and later.
-   **[CnfgMgmtDiscoveryApp](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_cnfgmgmtdiscoveryapp.htm)**  
    Represents the definition of a discovery application used for agentless discovery. These applications are installed on customer network hosts and are used to scan other devices in the environment. This object is available in API version 65.0 and later.
-   **[CnfgMgmtDiscoveryProbe](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_cnfgmgmtdiscoveryprobe.htm)**  
    Represents the definition of probe types that determine which commands or scripts are executed during a discovery scan. For example, deep host scan, basic host scan, or vcenter scan. This object is available in API version 65.0 and later.
-   **[CnfgMgmtDiscoverySchd](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_cnfgmgmtdiscoveryschd.htm)**  
    Represents the definition of a schedule that controls when a discovery scan should run. For example, a daily or weekly cron-based schedule for scanning cloud infrastructure. This object is available in API version 65.0 and later.
-   **[CnfgMgmtDiscoveryTarget](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_cnfgmgmtdiscoverytarget.htm)**  
    Represents the definition of a logical grouping of endpoints or environments to be scanned during IT infrastructure or asset discovery. For example, New York datacenter, Washington office ground floor, or AWS Staging. This object is available in API version 65.0 and later.
-   **[CnfgMgmtDiscoveryTgtCrdl](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_cnfgmgmtdiscoverytgtcrdl.htm)**  
    Represents the credentials associated with a specific discovery target. Credentials are used to authenticate and execute commands during the scan. This object is available in API version 65.0 and later.
-   **[CnfgMgmtDiscoveryTgtParm](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_cnfgmgmtdiscoverytgtparm.htm)**  
    Represents the definition of parameters used to control or refine cloud infrastructure scans. For example, imported items such as virtual machines, ports, or host names. This object is available in API version 65.0 and later.
-   **[IncidentConfigurationItem](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_incidentconfigurationitem.htm)**  
    Represents the relationship between an incident and a configuration item reference. This object is available in API version 65.0 and later.
-   **[ObjectMilestonePauseTime](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_objectmilestonepausetime.htm)**  
    Represents the details related to the duration, start and end times of when users pause and resume milestones for a specific object. This object is available in API version 65.0 and later.
-   **[ProblemConfigurationItem](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_problemconfigurationitem.htm)**  
    Represents the relationship between a problem and a configuration item reference. This object is available in API version 65.0 and later.
-   **[Release](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_release.htm)**  
    Represents a release for service management operations, such as incidents, problems, and change requests. A release is a period during which new or updated service operations are deployed. This object is available in API version 65.0 and later.
-   **[ReleaseParticipant](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_releaseparticipant.htm)**  
    Represents the relationship between a release and a user or group who participates in a release, such as an owner or a manager. This object is available in API version 65.0 and later.
-   **[ReleaseRelatedRecord](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_releaserelatedrecord.htm)**  
    Represents the relationship between a release and a record, such as incident, problem, or change request. This object is available in API version 65.0 and later.
-   **[SrvcMgmntApprovalAssignment](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_srvcmgmntapprovalassignment.htm)**  
    Represents the relationship between a service operation and a group or user to which the operation is assigned by default for approval. This object is available in API version 65.0 and later.
-   **[SrvcMgmntRecEvntAsgnt](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_srvcmgmntrecevntasgnt.htm)**  
    Represents the relationship between events automatically created by the system and assigned to a related record, such as a release or a change request. This object is available in API version 65.0 and later.
-   **[SrvcMgmntRuleAssignment](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_objects_srvcmgmntruleassignment.htm)**  
    Represents the relationship between a business operation and a group or user to which the operation is assigned by default. This object is available in API version 65.0 and later.