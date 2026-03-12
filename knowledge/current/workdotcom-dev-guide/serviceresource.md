---
title: "ServiceResource"
domain: workdotcom-dev-guide
topic: serviceresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.541Z
estimatedTokens: 231
keywords: [ServiceResource, user, accept, shifts, Data, imported, employee, records, Service, Resource, Resources, linked, Territories, their, Territory]
---

# ServiceResource

> Represents a user who can accept shifts. Data is imported from employee records
      to create User and Service Resource records. Service Resources are linked to Service
      Territories through their Service Territory Membership. This object is available in API
    version 38.0 and later.

# ServiceResource

Represents a user who can accept shifts. Data is imported from employee records to create User and Service Resource records. Service Resources are linked to Service Territories through their Service Territory Membership. This object is available in API version 38.0 and later.

For standard fields on the ServiceResource object, see [Object Reference - ServiceResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceresource.htm).

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Custom Fields

| Field | Details |
| --- | --- |
| wkfsl__Employee__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmployee information for this resource. This field is available in API version 48.0 and later. |
