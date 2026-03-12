---
title: "Link Employee with Other Objects"
domain: workdotcom-dev-guide
topic: link-employee-with-other-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.458Z
estimatedTokens: 328
keywords: [Link, Employee, Objects, Connect]
---

# Link Employee with Other Objects

> Connect the Employee object to other objects.

# Link Employee with Other Objects

Connect the Employee object to other objects.

Employee has an Employee.UserId lookup field to the User object. Also, the Employee object is linked to Individual. PersonAccount, for example, is sometimes used to represent employees. PersonAccount could be linked to an Employee via Individual.

Other examples for utilizing Individual’s connection to Work.com include:

-   Solutions leveraging Contact can tie back via Contact > Individual < Employee.
-   Solutions leveraging PersonAccount can tie back via PersonAccount > Individual < Employee.
-   Solutions leveraging custom Employee objects can tie back via Employee > Individual < Custom employee object.

Data synchronization is still required, depending on your own data model. The Command Center package ships with triggers that are designed to populate Individuals based on Employees, and associate Individuals to Users based on the Employee Number field.

#### See Also

-   [Synchronize Work.com Data Between Orgs](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_synch_data_between_orgs.htm "Users are encouraged to install and use Work.com in an org dedicated to Work.com. This may result in scenarios where data in an existing org has to be migrated or kept in synch with a new Work.com org.")

## Related Topics

- Synchronize Work.com Data Between Orgs (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_synch_data_between_orgs.htm)
