---
title: "wkcc__CommandCenterMapping__c"
domain: workdotcom-dev-guide
topic: wkcccommandcentermappingc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.358Z
estimatedTokens: 1175
keywords: [wkcc__CommandCenterMapping__c, Stores, mappings, tabs, Command, Center, Settings, app, access, Launcher, orgs, Workplace, installed, wkcc, _CommandCenterMapping]
---

# wkcc__CommandCenterMapping__c

> Stores the mappings for all tabs in the Command Center Settings app, which you
      access from App Launcher. This object is available in orgs that have Workplace Command
    Center installed.

# wkcc\_\_CommandCenterMapping\_\_c

Stores the mappings for all tabs in the Command Center Settings app, which you access from App Launcher. This object is available in orgs that have Workplace Command Center installed.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=workdotcom_dev_guide)

#### Warning

Update records associated with this object only with the tabs in the Command Center Settings app, which you access from App Launcher. The app provides a UI to create and modify mappings. Don’t use the Command Center Mappings tab directly.

A single mapping in a Command Center Settings app tab corresponds to multiple records in wkcc\_\_CommandCenterMapping\_\_c, based on the number of columns in the mapping. The multiple records are correlated with the Name field; each record with the same Name link together to form one mapping. This dynamic method of storing different types of mappings in the same object makes it easier to add other types of mappings in the future.

For example, the Wellness Status Mapping tab (in the Command Center Settings app) allows you to create mappings between crisis assessment values and wellness status values. Let’s say it contains these mappings.
| CRISIS ASSESSMENT | WELLNESS STATUS |
| --- | --- |
| Declined | Remote Work Only |
| COVID-19 Symptoms or Exposed | Unavailable |
| COVID-19 No Symptoms | Available to Work |

Because the Wellness Status Mapping has two columns, each mapping corresponds to two records in the wkcc\_\_CommandCenterMapping\_\_c object. The Name field is the same for each record. The wkcc\_\_MappedValue\_\_c field contains the actual values or a reference to an object ID. The wkcc\_Mapping\*\_\_c fields are used for internal processing, such as populating dropdown lists with picklists values. Here’s an example of two wkcc\_\_CommandCenterMapping\_\_c records associated with the Declined mapping; only relevant fields of the object are shown.
| Name | wkcc__MappedValue__c | wkcc__MappingKey__c | wkcc__MappingType__c |
| --- | --- | --- | --- |
| WellnessStatusMap3 | Declined | WSAssessment | WellnessStatusMap |
| WellnessStatusMap3 | Remote Work Only | WSCurrentWellnessStatus | WellnessStatusMap |

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that the record was only referenced and not viewed. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe record name. This field groups multiple records into a single mapping of a tab in the Command Center Settings app. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API to perform the create operation. |
| wkcc__MappedValueName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the wkcc__MappedValue__c field contains an object ID, this field contains the name associated with the object. Otherwise, this field is blank. |
| wkcc__MappedValue__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of one of the columns of the mapping. |
| wkcc__MappingKey__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey for looking up values in an internal custom metadata type. |
| wkcc__MappingTypeId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID for a value in an internal custom metadata type. |
| wkcc__MappingType__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue from an internal custom metadata type. |

#### See Also

-   [*Salesforce Help*: Configure Employee Wellness Check Survey Mappings](https://help.salesforce.com/articleView?id=wcc_setup_configure_employee_wellness_survey.htm&language=en_US "Salesforce Help: Configure Employee Wellness Check Survey Mappings - HTML (New Window)")

-   [*Salesforce Help*: How Do Survey Responses Map to the Data Model?](https://help.salesforce.com/articleView?id=wcc_setup_survey_mapping_about.htm&language=en_US "Salesforce Help: How Do Survey Responses Map to the Data Model? - HTML (New Window)")
