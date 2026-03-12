---
title: "Understand the Work.com Data Model"
domain: workdotcom-dev-guide
topic: understand-the-workcom-data-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.304Z
estimatedTokens: 1256
keywords: [Understand, Work.com, Data, Model, Workplace, Command, Center, uses, mix, standard, Salesforce, objects, custom, Metadata, represent]
---

# Understand the Work.com Data Model

> The Workplace Command Center uses a mix of standard Salesforce objects, custom objects,
  and Metadata types to represent workspace information, employee status and health assessments,
  consent and authorization information, and employee survey information.

# Understand the Work.com Data Model

The Workplace Command Center uses a mix of standard Salesforce objects, custom objects, and Metadata types to represent workspace information, employee status and health assessments, consent and authorization information, and employee survey information.

Standard Salesforce Objects that Workplace Command Center uses as-is include:

-   AuthorizationForm, AuthorizationFormConsent, AuthorizationFormText: Used to capture employee's consent for collecting and storing health information.
-   Individual: Used to connect Employee data with privacy and consent information.
-   Survey, SurveyResponse, SurveyVersion: Used for Work.com Wellness Check health questionnaires for employees.

Location is used by Work.com to represent a physical organization location, with extra custom fields added by Work.com.

Objects added specifically for Work.com are:

-   Employee: Represents an employee within a company or organization.
-   InternalOrganizationUnit: Represents an organization that an Employee belongs to.
-   EmployeeCrisisAssessment: Represents a crisis assessment of an Employee.
-   Crisis: Represents a major crisis event that affects an Employee in an InternalOrganizationUnit.

The relationships between objects used for Workplace Command Center are described in the following diagram:

![Workplace Command Center ERD](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fworkdotcom%2Fimages%2Fworkdotcom_cc_erd.png&folder=workdotcom_dev_guide)

-   **[Work with Employee Data](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_work_with_employee_data.htm)**
    While Work.com uses Employee to track employee information, existing solutions may already have an alternate data model that tracks employees. To apply the full power of Work.com, solutions may need to correlate or synchronize their data with Employee data.
-   **[Link Employee with Other Objects](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_use_individual.htm)**
    Connect the Employee object to other objects.
-   **[Synchronize Work.com Data Between Orgs](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_synch_data_between_orgs.htm)**
    Users are encouraged to install and use Work.com in an org dedicated to Work.com. This may result in scenarios where data in an existing org has to be migrated or kept in synch with a new Work.com org.
-   **[Authenticate Between Work.com and Other Orgs](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_auth_between_orgs.htm)**
    If Work.com has been installed in a new, dedicated org, but your solution must access the original org, you need a strategy for authenticating to the other org.
-   **[Understand Location Data](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_location.htm)**
    Work.com uses Location to associate Employees to physical and abstract locations. Existing solutions may already have an alternate data model that tracks employee locations. To apply the full power of Work.com, solutions may need to correlate or synchronize their data with Location data.
-   **[Command Center Data Triggers](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_triggers.htm)**
    Work.com installs and uses Command Center data triggers on Employee, Individual, User, and Location. Adding or modifying records for these objects can trigger changes in related objects. It’s also possible to disable the triggers for data loads.
-   **[Understand Logging](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_logging.htm)**
    Work.com captures errors and exceptions that originate from Workplace Command Center and Wellness Check and adds them as log messages to the wkcc\_\_CmdCtrLog\_\_c custom object.
-   **[Standard Objects Used by Work.com](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_standard_objects.htm)**
    The Work.com data model includes several standard Salesforce objects.
-   **[Custom Objects and Fields Used by Work.com](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_custom_objects.htm)**
    The Work.com data model includes several custom objects and fields.
-   **[Custom Metadata Types Used by Work.com](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_custom_metadata_types.htm)**
    The Work.com data model includes these custom metadata types.

#### See Also

-   [*Salesforce Object Reference*: Salesforce Surveys Object Model](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_objects_salesforce_surveys_object_model.htm "
    Salesforce Object Reference: Salesforce Surveys Object Model - HTML (New Window)")

-   [*Salesforce Object Reference*: Salesforce Consent Object Model](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_erd_consent.htm "
    Salesforce Object Reference: Salesforce Consent Object Model - HTML (New Window)")

## Related Topics

- Work with Employee Data (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_work_with_employee_data.htm)
- Link Employee with Other Objects (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_use_individual.htm)
- Synchronize Work.com Data Between Orgs (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_synch_data_between_orgs.htm)
- Authenticate Between Work.com and Other Orgs (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_auth_between_orgs.htm)
- Understand Location Data (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_location.htm)
- Command Center Data Triggers (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_triggers.htm)
- Understand Logging (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_logging.htm)
- Standard Objects Used by Work.com (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_standard_objects.htm)
- Custom Objects and Fields Used by Work.com (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_custom_objects.htm)
- Custom Metadata Types Used by Work.com (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_custom_metadata_types.htm)
