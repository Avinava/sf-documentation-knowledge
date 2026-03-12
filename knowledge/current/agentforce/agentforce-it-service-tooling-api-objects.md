---
title: "Agentforce IT Service Tooling API Objects"
domain: agentforce
topic: agentforce-it-service-tooling-api-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.820Z
estimatedTokens: 1515
keywords: [Agentforce, Service, Tooling, API, Objects, metadata, developer, access, REST, SOAP, API’s, SOQL, capabilities, allow, retrieve]
---

# Agentforce IT Service Tooling API Objects

> Tooling API exposes metadata used in developer tooling that
        you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types
        allow you to retrieve smaller pieces of metadata. For more information about Tooling API
        objects and to find a complete reference of all the supported objects, see Introducing Tooling API.

# Agentforce IT Service Tooling API Objects

Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. For more information about Tooling API objects and to find a complete reference of all the supported objects, see **[Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm)**.

-   **[CnfgItemAttrDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrdef.htm)**
    Represents the definition of an attribute or a property for a configuration item. For example, CI name, CI owner, Status, and so on. This object is available in API version 65.0 and later.
-   **[CnfgItemAttrPcklstValDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrpcklstvaldef.htm)**
    Represents a specific value for a configuration item attribute. For example, high, medium, and low are picklist values of the attribute Business Criticality. This object is available in API version 65.0 and later.
-   **[CnfgItemAttrPicklistDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrpicklistdef.htm)**
    Represents a definition for a configuration item attribute that allows multiple possible values. For example, the attribute Business Criticality can have multiple values. This object is available in API version 65.0 and later.
-   **[CnfgItemAttrSetAttr](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrsetattr.htm)**
    Specifies the attribute set to which an attribute belongs. For example, Stakeholders attribute set definition contains the attribute owner. This object is available in API version 65.0 and later.
-   **[CnfgItemAttrSetDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrsetdef.htm)**
    Represents the definition of a logical grouping of configuration item attributes that's used to display similar attributes together. For example, Stakeholder attribute set has the attributes owner, business owner, escalation group, and support group This object is available in API version 65.0 and later.
-   **[CnfgItemTypeAttrRelDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemtypeattrreldef.htm)**
    Represents the definition of a relationship between a configuration item type and an attribute that's applicable for the item type. For exampe, a server configuration item type has the attributes manufacturer, name, and IP address. This object is available in API version 65.0 and later.
-   **[CnfgItemTypeDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemtypedef.htm)**
    Represents the definition of a configuration item type. A configuration item type represents a category that is used to classify configuration items. The components share common characteristics. For example, server, application, and network device. This object is available in API version 65.0 and later.
-   **[CnfgItemTypeRelationDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemtyperelationdef.htm)**
    Represents how the configuration items are related to each other within a CMDB. For example, Payroll Application RUNS ON App1 WebServer. This object is available in API version 65.0 and later.
-   **[CnfgMgmtRelationTypeDef](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgmgmtrelationtypedef.htm)**
    Represents the relationship between configuration item types or configuration items as defined in the CMDB. For example, Depends on or Connected to. This object is available in API version 65.0 and later.
-   **[ServiceMgmtKnwlgArtclConfig](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_servicemgmtknwlgartclconfig.htm)**
    Represents a collection of settings to configure Service Management Knowledge. This object is available in API version 65.0 and later.
-   **[ServiceOpPriorityConfig](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_serviceoppriorityconfig.htm)**
    Represents the configuration that determines the priority of a service operation, such as an incident, problem, or a change request based on impact and urgency. This object is available in API version 65.0 and later.
-   **[SrvcMgmntEmailRoutgAddr](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_srvcmgmntemailroutgaddr.htm)**
    Represents the relationship between an email address and a generated email address for a specific type of service management operation, such as an incident. This object is available in API version 65.0 and later.
-   **[SrvcMgmtObjCollabAppCnfg](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_srvcmgmtobjcollabappcnfg.htm)**
    Represents the configuration for a specific service management object and the types of collaboration apps supported for that object, such as whether swarming is enabled or not, the record type and page layout of the object that's supported for a specific app within the collaboration app, and more. This object is available in API version 65.0 and later.
-   **[StaticDynamicValMapping](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_staticdynamicvalmapping.htm)**
    Represents the mapping configuration between values of a dynamic picklist on a source object to the values of a static picklist on a target object. This object is available in API version 65.0 and later.

## Related Topics

- CnfgItemAttrDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrdef.htm)
- CnfgItemAttrPcklstValDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrpcklstvaldef.htm)
- CnfgItemAttrPicklistDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrpicklistdef.htm)
- CnfgItemAttrSetAttr (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrsetattr.htm)
- CnfgItemAttrSetDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemattrsetdef.htm)
- CnfgItemTypeAttrRelDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemtypeattrreldef.htm)
- CnfgItemTypeDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemtypedef.htm)
- CnfgItemTypeRelationDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemtyperelationdef.htm)
- CnfgMgmtRelationTypeDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgmgmtrelationtypedef.htm)
- ServiceMgmtKnwlgArtclConfig (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_servicemgmtknwlgartclconfig.htm)
