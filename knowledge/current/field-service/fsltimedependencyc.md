---
title: "FSL__Time_Dependency__c"
domain: field-service
topic: fsltimedependencyc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.144Z
estimatedTokens: 693
keywords: [FSL__Time_Dependency__c, Represents, dependency, between, two, service, appointments., used, define, scheduling, relationships, allows, determine, order, timing, which, dependent, appointments, should, scheduled.]
---

# FSL__Time_Dependency__c

> Represents a dependency between two service appointments. This object
         is used to define scheduling relationships between two appointments. It allows you to
         determine the order and timing in which dependent appointments should be
      scheduled.

# FSL\_\_Time\_Dependency\_\_c

Represents a dependency between two service appointments. This object is used to define scheduling relationships between two appointments. It allows you to determine the order and timing in which dependent appointments should be scheduled.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available in orgs that have the Field Service managed package installed. Records of this object are subject to standard sharing and security settings.

## Fields

| Field | Details |
| --- | --- |
| FSL__Dependency__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the dependency.Possible values are:Immediately FollowSame StartStart After FinishStart After Finish And Same DayThe default value is Same Start. |
| FSL__Root_Service_Appointment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service appointment that’s the root appointment of the entire dependency chain. The root appointment is the same service appointment for all the dependencies in the chain. This field is automatically populated by the system when creating a dependency. When creating a dependency via API, the API user must have permissions for this field. We recommend leaving this field empty when a dependency is created and avoiding any custom modifications.This field is a relationship field.Relationship NameFSL__Root_Service_Appointment__rRelationship TypeLookupRefers ToServiceAppointment |
| FSL__Same_Resource__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAn indication of whether the two service appointments that share a dependency should be assigned to the same service resource.The default value is false. |
| FSL__Service_Appointment_1__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe first service appointment on which the second service appointment is dependent.This field is a relationship field.Relationship NameFSL__Service_Appointment_1__rRelationship TypeMaster-detailRefers ToServiceAppointment (the master object) |
| FSL__Service_Appointment_2__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe second service appointment that’s dependent on the first service appointment.This field is a relationship field.Relationship NameFSL__Service_Appointment_2__rRelationship TypeLookupRefers ToServiceAppointment |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated unique identifier for the appointment dependency record. |
