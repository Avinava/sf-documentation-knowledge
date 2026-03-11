---
title: "CnfgMgmtDiscoveryTgtParm"
domain: agentforce
topic: cnfgmgmtdiscoverytgtparm
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:08:17.895Z
keywords: [CnfgMgmtDiscoveryTgtParm, Supported, Calls, Fields]
---

# CnfgMgmtDiscoveryTgtParm

# CnfgMgmtDiscoveryTgtParm

Represents the definition of parameters used to control or refine cloud infrastructure scans. For example, imported items such as virtual machines, ports, or host names. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CnfgMgmtDiscoveryProbe | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the probe type linked to this import setting. |
| CnfgMgmtDiscoveryTargetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the discovery target associated with this credential.This field is a relationship field.Relationship NameCnfgMgmtDiscoveryTargetRelationship TypeMaster-detailRefers ToCnfgMgmtDiscoveryTarget (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the record. |
| ParameterName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of item to import during a scan.Possible values are:AWS_AMI—AWS AMIAWS_AUTO_SCALING—AWS Auto ScalingAWS_DATABASES_AND_CLUSTERS—AWS Databases and ClustersAWS_DYNAMODB—AWS DynamoDBAWS_EBS—AWS EBSAWS_EC2_INSTANCE—AWS EC2 InstanceAWS_ECR—AWS ECRAWS_LOAD_BALANCER—AWS Load BalancerAWS_NAT_GATEWAYS—AWS Nat GatewaysAWS_NETWORK_ACLS—AWS Network ACLsAWS_S3—AWS S3AWS_SECURITY_GROUP—AWS Security GroupAWS_SNAPSHOT—AWS SnapshotAWS_VPC—AWS VPCAZURE_APPLICATION_GATEWAY—Application GatewayAZURE_APP_SERVICES—App ServicesAZURE_NETWORK_SECURITY_GROUP—Network Security GroupAZURE_SQL_MANAGED_INSTANCE—SQL Managed InstanceAZURE_SQL_SERVERS—SQL ServersAZURE_VIRTUAL_MACHINE—Virtual MachineAZURE_VIRTUAL_MACHINE_SCALESETS—Virtual Machine ScaleSetsAZURE_VIRTUAL_NETWORK—Virtual NetworkEXCLUDED_IP_RANGES—Excluded IP RangesHOSTS—HostsIP_RANGES—IP RangesPORT—Por |
| ParameterValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionList of values for the selected parameter. For example, 192.168.0.0/24. |