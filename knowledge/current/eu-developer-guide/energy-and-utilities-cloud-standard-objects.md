---
title: "Energy and Utilities Cloud Standard Objects"
domain: eu-developer-guide
topic: energy-and-utilities-cloud-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.033Z
estimatedTokens: 4794
keywords: [Energy, Utilities, Cloud, Standard, Objects, work, E&U]
---

# Energy and Utilities Cloud Standard Objects

> Use standard objects to work with the E&U Cloud.

# Energy and Utilities Cloud Standard Objects

Use standard objects to work with the E&U Cloud.

The Energy and Utilities Cloud also include access to the following standard objects:

-   [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm?q=account)
-   [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm?q=contact)
-   [Contract](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contract.htm?q=contract)
-   [Product](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_product2.htm?q=product)
-   [Account Account Relationship](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfFieldRef.meta/sfFieldRef/salesforce_field_reference_AccountAccountRelation.htm)
-   [Account Contact Relationship](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountcontactrelation.htm)

-   **[AccountBillingAccount](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_accountbillingaccount.htm)**
    Represents a junction between Account objects and Billing Account objects. This object is available in API version 62.0 and later.
-   **[Address](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_address.htm)**
    Represents a mailing, billing, or home address. This object is available in API version 62.0 and later.
-   **[ApplicationFormTemplate](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_applicationformtemplate.htm)**
    Represents the fields to capture application metadata as a template which is used in application tracking and processing. This object is available in API version 59.0 and later.
-   **[AssetTimesheet](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_assettimesheet.htm)**
    Represents a junction between an asset and a time sheet or time sheet entry that records all vehicles and heavy equipment used by a technician during a job. This object is available in API version 66.0 and later.
-   **[BalanceAdjustmentRequest](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_balanceadjustmentrequest.htm)**
    The request to create a financial adjustment in a backend billing system. Adjustments requests can be for either debit or credit amounts. Often used to give the customer a goodwill gesture. This object is available in API version 62.0 and later.
-   **[Benefit](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/npc_pm_objects_benefit_standard_fields.htm)**
    Represents information about benefits associated with a program. This object is available with Program Management in API version 57.0 and later.
-   **[BenefitAssignment](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_benefitassignment.htm)**
    Represents the enrollment information of an individual or business that is captured in an application. For example, an individual who is unemployed can raise an application requesting help from the government. If it is approved, the individual is enrolled into the unemployment insurance benefit. This object is available in API version 52.0 and later.
-   **[BenefitDisbursement](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/npc_pm_objects_benefitdisbursement_standard_fields.htm)**
    Represents the allocation of an enrollee's benefit that can be made as monetary or non-monetary with different frequencies. This object is available with Program Management in API version 57.0 and later.
-   **[BenefitType](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/npc_pm_objects_benefittype_standard_fields.htm)**
    Represents information about the type of benefits such as Participatory Services available to the program manager. This object is available with Program Management in API version 57.0 and later.
-   **[BenefitSchedule](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_benefitschedule.htm)**
    Represents information about the plan for delivering the benefit. This object is available in API version 57.0 and later.
-   **[BenefitSession](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_benefitsession.htm)**
    Represents information about an instance of a planned benefit delivery This object is available in API version 57.0 and later.
-   **[BillingAccount](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_billingaccount.htm)**
    Represents the customer's billing controls in the backend system. Used to set up and maintain details such as bill frequency, bill format, and autopay details. This object is available in API version 62.0 and later.
-   **[BillingAccountContact](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_billingaccountcontact.htm)**
    Represents a junction between Billing Account objects and Contact objects. This object is available in API version 62.0 and later.
-   **[Budget](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_budget.htm)**
    Tracks an estimate of future revenue or expenses during a specific time period. This object is available in API version 53.0 and later.
-   **[BudgetCategory](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_budgetcategory.htm)**
    Represents the purpose of the budget line item. This object is available in API version 57.0 and later.
-   **[BudgetCategoryValue](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_budgetcategoryvalue.htm)**
    Captures budget values for category and time period. This object is available in API version 57.0 and later.
-   **[BudgetPeriod](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_budgetperiod.htm)**
    Defines a distinct time interval in which the estimate applies. This object is available in API version 57.0 and later.
-   **[CaseProgram](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_caseprogram.htm)**
    Represents the junction between Case and Program objects. This object is available in API version 57.0 and later.
-   **[CaseRelatedSubject](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_caserelatedsubject.htm)**
    Represents a junction between a case and an object impacted by the case. This object is available in API version 62.0 and later.
-   **[CostCenter](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_costcenter.htm)**
    Represents the actual expenses that are compared to the budget. This object is available in API version 61.0 and later.
-   **[DifferentialShift](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_differentialshift.htm)**
    Represents a collection of fields to store the information about shifts different from the normal shifts of a resource. These shifts are marked against the timesheet entries. This object is available in API version 65.0 and later.
-   **[EnergyServiceAgreement](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_energyserviceagreement.htm)**
    The services or commodities purchased by a customer, for a specified product and optionally linked to a Contract. Contracted Services can be physical goods (eg. appliances), commodity services (eg. electricity, gas or water) or other miscellaneous services (eg. homeowner insurance, boiler maintenance contract). This object is available in API version 62.0 and later.
-   **[EnergyServiceAgreementItem](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_energyserviceagreementitem.htm)**
    Represents the details of the Energy Service Agreement object such as the time, location, and pricing information. This object is available in API version 62.0 and later.
-   **[IndicatorAssignment](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_indicatorassignment.htm)**
    This object is available in API version 59.0 and later.
-   **[IndividualApplicationItem](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_individualapplicationitem.htm)**
    Captures individual application input data that is used during run-time. This object is available in API version 58.0 and later.
-   **[IndividualApplication](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_individualapplication.htm)**
    Represents an application form submitted by an individual. This object is available in API version 50.0 and later.
-   **[JobExpenseType](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_jobexpensetype.htm)**
    Represents a unique expense type associated with a standard job in an organization, which is used to measure the job costs and budget. This object is available in API version 61.0 and later.
-   **[LaborUnion](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_laborunion.htm)**
    Represents the labor union organization that field technician is associated with. This association decides the wage classification, pay type, overtime code, supplemental compensation and wage calculation rules. This object is available in API version 62.0 and later.
-   **[Location](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_location.htm)**
    Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. This object is available in API version 59.0 and later.
-   **[OvertimeApprover](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_overtimeapprover.htm)**
    Represents a person who approves overtime hours. This object is available in API version 62.0 and later.
-   **[OvertimeType](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_overtimetype.htm)**
    Represents the overtime type code used to categorize overtime labor costs in the Enterprise Resource Planning system. This object is available in API version 62.0 and later.
-   **[PayGrade](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_paygrade.htm)**
    Represents a range of positions that require sufficiently similar responsibilities and competencies, and are associated with a common pay band. This object is available in API version 62.0 and later.
-   **[PayGroup](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_paygroup.htm)**
    Represents a set of employees who share the same payroll schedule and rules. This object is available in API version 66.0 and later.
-   **[PayPeriod](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_payperiod.htm)**
    Indicates the fixed time span of employee's work hours and earnings that are recorded and calculated for payroll. This object is available in API version 66.0 and later.
-   **[PayType](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_paytype.htm)**
    Represents the type of pay provided to the field service worker that determines the hourly rate based on a labor agreement. This object is available in API version 61.0 and later.
-   **[PreliminaryApplicationRef](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_preliminaryapplicationref.htm)**
    Represents the saved applications and pre-screening forms. This object is available in API version 49.0 and later.
-   **[Program](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_program.htm)**
    Represents information about the enrollment and disbursement of benefits in a program. This object is available in API version 57.0 and later.
-   **[ProgramApplnFormTemplate](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_programapplnformtemplate.htm)**
    Represents an application form template used to enroll in a program. This object is available in API version 62.0 and later.
-   **[ProgramEnrollment](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_programenrollment.htm)**
    This object is available in API version 59.0 and later.
-   **[ProgramProduct](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_programproduct.htm)**
    Represents a junction between Program and Product2. This will hold Product2 values related to a Program. This object is available in API version 59.0 and later.
-   **[ResourceAbsence](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_resourceabsence.htm)**
    Fields associated with a time period in which a service resource is unavailable to work in Field Service. This object is available in API version 64.0 and later.
-   **[ServicePoint](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_servicepoint.htm)**
    Represents an entry point for services to a premises. The service provided to each service point is separately metered (or measured). Useful for energy services including electricity, water and gas services. This object is available in API version 62.0 and later.
-   **[serviceresource](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_serviceresource.htm)**
    Represents a service technician or service crew in Field Service and Salesforce Scheduler, or an agent in Workforce Engagement. This object is available in API version 62.0 and later.
-   **[ServiceResourceCostRule](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_serviceresourcecostrule.htm)**
    Represents the rules that calculate the value of a meal or equivalent gifts awarded to the field service worker. This object is available in API version 62.0 and later.
-   **[ServiceResourceLeaveBalance](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_serviceresourceleavebalance.htm)**
    Stores the leave balances for service resources. This object is available in API version 64.0 and later.
-   **[SupplementalCompensation](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_supplementalcompensation.htm)**
    Represents the meals or equivalent gifts awarded to the field service worker according to the labor laws and company policies. This object is available in API version 61.0 and later.
-   **[TimeSheet](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_timesheet.htm)**
    Represents a schedule of a service resource’s time in Field Service or Workforce Engagement. This object is available in API version 62.0 and later.
-   **[TimeSheetEntry](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_timesheetentry.htm)**
    Represents a span of time that a service resource spends on a field service task. This object is available in API version 62.0 and later.
-   **[TimeSheetEntryItem](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_timesheetentryitem.htm)**
    Represents the details of the time sheet entry that is used by an Enterprise Asset Management system to pay the field service worker accroding to labor laws and company policy. This object is available in API version 62.0 and later.
-   **[TimeSheetValidationError](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_timesheetvalidationerror.htm)**
    Represents validation errors in time sheets, time sheet entries, and time sheet entry items based on the rules defined by the admin. This object is available in API version 62.0 and later.
-   **[TimeSheetWageTypeSummary](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_timesheetwagetypesummary.htm)**
    Represents a summary of the type of wages earned by a field service resource. This object is available in API version 62.0 and later.
-   **[UsageImpactFactor](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_usageimpactfactor.htm)**
    Represents a collection of fields to set up the Usage Impact Factors used across jurisdictions and programs.This object is available in API version 58.0 and later.
-   **[UsageImpactGroup](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_usageimpactgroup.htm)**
    Represents a collection of fields to set up the Usage Impact Groups used across jurisdictions and programs. This object is available in API version 58.0 and later.
-   **[UsageImpactGroupFactor](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_usageimpactgroupfactor.htm)**
    Represents a junction between an Usage Impact Group version and Usage Impact Factor. This object is available in API version 58.0 and later.
-   **[UsageImpactGroupPgmMeasure](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_usageimpactgrouppgmmeasure.htm)**
    Represents a junction between the program, product, and Usage Impact Group version. This object is available in API version 58.0 and later.
-   **[UsageImpactGroupVersion](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_usageimpactgroupversion.htm)**
    Represents a collection of fields to set up the versions of Usage Impact Groups. This object is available in API version 58.0 and later.
-   **[WorkOrder](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_workorder.htm)**
    Represents field service work to be performed for a customer. This object is available in API version 62.0 and later.
-   **[WorkOrderLineItem](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_workorderlineitem.htm)**
    Represents a subtask on a work order in field service. This object is available in API version 62.0 and later.
-   **[WorkReportLineItem](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_workreportlineitem.htm)**
    Represents one measure of work performed by a contractor business for a consumer at a location within a program. This object is available in API version 59.0 and later.
-   **[WorkReportError](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_workreporterror.htm)**
    Represents errors in the Work Report through the Work Report Line Item object. This object is available in API version 59.0 and later.
-   **[WorkReport](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_workreport.htm)**
    Represents the total work performed by a contractor business in a certain period of time for utility customers at one or more locations, providing services for one or more measures. This object is available in API version 59.0 and later.
-   **[worktype](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_worktype.htm)**
    Represents a type of work to be performed in Field Service and Lightning Scheduler. Work types are templates that can be applied to work order or work order line items. This object is available in API version 62.0 and later.

## Related Topics

- AccountBillingAccount (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_accountbillingaccount.htm)
- Address (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_address.htm)
- ApplicationFormTemplate (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_applicationformtemplate.htm)
- AssetTimesheet (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_assettimesheet.htm)
- BalanceAdjustmentRequest (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_balanceadjustmentrequest.htm)
- Benefit (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/npc_pm_objects_benefit_standard_fields.htm)
- BenefitAssignment (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_benefitassignment.htm)
- BenefitDisbursement (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/npc_pm_objects_benefitdisbursement_standard_fields.htm)
- BenefitType (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/npc_pm_objects_benefittype_standard_fields.htm)
- BenefitSchedule (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_benefitschedule.htm)
