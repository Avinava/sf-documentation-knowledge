---
title: "Party Identification DMO"
domain: data-cloud
topic: party-identification-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.838Z
keywords: [Party, Identification, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Party Identification DMO

# Party Identification DMO

The Party Identification DMO is a Data Cloud data model object for the ways to identify a party, such as a driver’s license or a birth certificate.

## Object API Name

ssot\_\_PartyIdentification\_\_dlm

## Category

Other

## Primary Subject Area

Party

## Primary Key

Party Identification (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Party Identification | Party | Many To One (N:1) | Individual | Individual ID |
| Party Identification | Party Identification ID | One to One (1:1) | Party Identification Identity Link | Party Identification ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Expiry Date | ssot__ExpiryDate__c | The date the identification expires. | dateTime |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Identification Name | ssot__Name__c | A required field used to specify the name of the identification, for example, California State issued Driver's License or LinkedIn URL. | text |
| Identification number | ssot__Identificationnumber__c | The value of the identification, for example, driver license B1234456.TipAlso used in identity resolution. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Issued At Location | ssot__IssuedAtLocation__c | The location where the identification was issued. | text |
| Issued By Authority | ssot__IssuedByAuthority__c | The authority who issued the identification. | text |
| Issued Date | ssot__IssuedDate__c | The date the identification was issued. | dateTime |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group.TipThis ID is the same as the one used in the individual object. | text |
| Party Identification ID | ssot__Id__c | A unique ID used as the primary key for the party identification DMO. | text |
| Party Identification Type | ssot__PartyIdentificationTypeId__c | A reference ID to the additional information about a party used for greater organization. | text |
| Party Role | ssot__PartyRoleId__c | A reference ID to the associated party role, for example, a customer, supplier, or competitor. | text |
| Verified By User | ssot__VerifiedByUserId__c | A reference ID for the user who verified the document. | text |
| Verified Date | ssot__VerifiedDate__c | The date identification was verified. | dateTime |