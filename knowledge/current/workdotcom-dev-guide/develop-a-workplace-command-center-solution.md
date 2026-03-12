---
title: "Develop a Workplace Command Center Solution"
domain: workdotcom-dev-guide
topic: develop-a-workplace-command-center-solution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.311Z
estimatedTokens: 440
keywords: [Develop, Workplace, Command, Center, Solution, best, user, experience, integrates]
---

# Develop a Workplace Command Center Solution

> For the best user experience, develop a solution that integrates with Workplace Command
  Center.

# Develop a Workplace Command Center Solution

For the best user experience, develop a solution that integrates with Workplace Command Center.

Workplace Command Center provides a top down view of the readiness states of a workforce, worksites, and the operating profile of a business. Workplace Command Center UI includes:

-   A global filter component, allowing the user to filter Command Center components by Location. Location selection changes are communicated to other components using Lightning Message Service.
-   Components with visualizations sourced from the Wellness Check survey, including a mapping visualization of site and location status, and charts of wellness responses.
-   A public world-wide health visualization provided by Tableau, showing the same data for all customers. Because this is a public component, Tableau licenses are not required.

-   **[Create a Workplace Command Center Compatible Lightning Component](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_create_lightning_component.htm)**
    Use Workplace Command Center compatible components in your custom solution.
-   **[Respond to Location Filter Changes](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_location_filter_changes.htm)**
    Custom components should respond to global filter changes if possible, to provide a cohesive Command Center user experience.
-   **[Add a Component to Workplace Command Center](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_add_component.htm)**
    Users will need to add custom components to the Workplace Command Center.

#### See Also

-   [*Github*: Sample solution](https://github.com/forcedotcom/WorkDotCom-Partners "
    Github: Sample solution - HTML (New Window)")

## Related Topics

- Create a Workplace Command Center Compatible Lightning Component (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_create_lightning_component.htm)
- Respond to Location Filter Changes (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_location_filter_changes.htm)
- Add a Component to Workplace Command Center (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_add_component.htm)
