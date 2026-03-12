---
title: "wkdw__EmployeeToPersonAccountFldMap__mdt"
domain: workdotcom-dev-guide
topic: wkdwemployeetopersonaccountfldmapmdt
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.529Z
estimatedTokens: 553
keywords: [mapping, creating, person, account, records, employee, Concierge, custom, metadata, orgs, installed, API, version, 51.0, later]
---

# wkdw__EmployeeToPersonAccountFldMap__mdt

> Defines the field mapping when creating person account records from employee
      records in Employee Concierge. This custom metadata type is available in orgs that have
    Employee Concierge installed in API version 51.0 and later.

# wkdw\_\_EmployeeToPersonAccountFldMap\_\_mdt

Defines the field mapping when creating person account records from employee records in Employee Concierge. This custom metadata type is available in orgs that have Employee Concierge installed in API version 51.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| wkdw__IsActive__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the mapping between this specific employee and person account is active or not. By default, the value for this field is true. |
| wkdw__SourceField__c | TypetextPropertiesFilter, Group, SortDescriptionThe employee record field that maps to the specified target field on the person account record. |
| wkdw__TargetField__c | TypetextPropertiesFilter, Group, SortDescriptionThe person account field that maps to the specified source field on the employee record. This field is unique within your organization. |

## Usage

Employee Concierge uses the Case object for storing and managing data related to employee support tickets. Data from employee records can’t, however, be directly associated with cases. To associate employee data with tickets, Employee Concierge uses person accounts. The custom metadata type wkdw\_\_EmployeeToPersonAccountFldMap\_\_mdt maps data from the employee records to person account records.

The related person field (RelatedPersonId) on an employee record links employees and person accounts. To review the default mapping between employee fields and person account fields, see [Salesforce Help: Employee to Person Account Field Mapping](https://help.salesforce.com/articleView?id=service.ec_employees_person_accounts_mapping.htm&type=5&language=en_US).

#### See Also

-   [Employee](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/sforce_api_objects_employee.htm "Represents an employee within a company or organization. This object is available in API version 48.0 and later. In API version 49.0 and later, this object supports reports, criteria-based sharing rules, and history tracking, plus you can exclude individual fields from custom page layouts.")

## Related Topics

- Employee (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/sforce_api_objects_employee.htm)
