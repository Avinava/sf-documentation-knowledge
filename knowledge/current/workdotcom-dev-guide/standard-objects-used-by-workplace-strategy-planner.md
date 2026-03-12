---
title: "Standard Objects Used by Workplace Strategy Planner"
domain: workdotcom-dev-guide
topic: standard-objects-used-by-workplace-strategy-planner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.643Z
estimatedTokens: 757
keywords: [Standard, Objects, Workplace, Strategy, Planner, requires, Command, Center, uses, Location, Crisis, Address, Employee, custom]
---

# Standard Objects Used by Workplace Strategy Planner

> Workplace Strategy Planner requires Workplace Command Center and uses the standard
    objects Location, Crisis, Address, and Employee. Strategy Planner also uses custom fields on the
    standard objects Address and Employee.

# Standard Objects Used by Workplace Strategy Planner

Workplace Strategy Planner requires Workplace Command Center and uses the standard objects Location, Crisis, Address, and Employee. Strategy Planner also uses custom fields on the standard objects Address and Employee.

## Standard Objects Used by Strategy Planner

[Address](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_address.htm)

Data from the standard fields PartentId, City, and State are included in workplace locations.

[Employee](https://developer.salesforce.com/docs/atlas.en-us.260.0.workdotcom_dev_guide.meta/workdotcom_dev_guide/sforce_api_objects_employee.htm)

Workplace Strategy Planner uses the standard field LocationId to associated employees with locations.

[Location](https://developer.salesforce.com/docs/atlas.en-us.260.0.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm)

Location records in your Work.com org are used as the unique workplace locations assessed for opening or closing in Workplace Strategy Planner. Strategy Planner uses the standard fields Name, Description and visitorAddressID.

[Crisis](https://developer.salesforce.com/docs/atlas.en-us.260.0.workdotcom_dev_guide.meta/workdotcom_dev_guide/sforce_api_objects_crisis.htm)

Workplace Strategy Planner references a crisis, like COVID-19, in your Work.com org using the standard fields CrisisType and Name.

## Custom Fields on Standard Objects Used by Workplace Strategy Planner

[Address](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_address.htm "Work.com uses the Address standard object to store data about a workplace location address. The Workplace Command Center managed package installs custom fields for the Address standard object.")

An address represents a mailing, billing, or home address. Workplace Strategy Planner relies on the custom fields wkcc\_\_Region\_\_c and wkcc\_\_County\_\_c for each location to populate some crisis metrics with data from the COVID-19 public data source. These fields are installed through the Workplace Command Center managed package.

[Employee](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_employee.htm "Work.com uses the Employee standard object to track information about users who are students, volunteers, and other roles in addition to employees. Some managed packages also install custom fields for the Employee standard object.")

Represents an employee within a company or organization. Workplace Strategy Planner uses the custom field wkcc\_\_ReadyToReturn\_\_c as a metric that indicates percent of employees with “Available to Work” Wellness Status. To use this field and metric out of the box, the employee wellness survey must be configured in your org using the suggested mappings and values, though you can create and use a custom survey and value. This field is installed through the Workplace Command Center managed package.

## Related Topics

- Address (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_address.htm)
- Employee (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_employee.htm)
