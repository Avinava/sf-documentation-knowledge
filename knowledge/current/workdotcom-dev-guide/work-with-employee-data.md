---
title: "Work with Employee Data"
domain: workdotcom-dev-guide
topic: work-with-employee-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.460Z
estimatedTokens: 562
keywords: [Work, Employee, Data, Work.com, uses, track, solutions, may, already, alternate, model, tracks, employees, apply, full]
---

# Work with Employee Data

> While Work.com uses Employee to track employee information, existing solutions may
  already have an alternate data model that tracks employees. To apply the full power of Work.com,
  solutions may need to correlate or synchronize their data with Employee data.

# Work with Employee Data

While Work.com uses Employee to track employee information, existing solutions may already have an alternate data model that tracks employees. To apply the full power of Work.com, solutions may need to correlate or synchronize their data with Employee data.

The following are recommended approaches for working with Employee data.

Create a process that synchronizes Employee data with solution data. This synchronization has to be done on an ongoing basis for any new and changed records. You may also have to keep some amount of duplicate data between Employee records and solution data.

Add custom data to Employee to link Employee records with your solution’s data. This ensures that anything that relies on Employee records still will work with Workplace Command Center, but the rest of your data can be kept with your solution’s data model. You will need to include a data synchronization process to keep your custom Employee data in synch with your solution’s data. If custom fields are added to Employee to aid with synchronization, these fields should be clearly documented for solution users and admins.

Create a new solution, or revise your solution to only work with the Work.com data model. This requires some way to migrate your customers using any previous solution, and creates extra support work.

#### See Also

-   [Link Employee with Other Objects](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_use_individual.htm "Connect the Employee object to other objects.")

-   [Synchronize Work.com Data Between Orgs](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_synch_data_between_orgs.htm "Users are encouraged to install and use Work.com in an org dedicated to Work.com. This may result in scenarios where data in an existing org has to be migrated or kept in synch with a new Work.com org.")

-   [Command Center Data Triggers](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_triggers.htm "Work.com installs and uses Command Center data triggers on Employee, Individual, User, and Location. Adding or modifying records for these objects can trigger changes in related objects. It’s also possible to disable the triggers for data loads.")

## Related Topics

- Link Employee with Other Objects (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_use_individual.htm)
- Synchronize Work.com Data Between Orgs (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_synch_data_between_orgs.htm)
- Command Center Data Triggers (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_triggers.htm)
