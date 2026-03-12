---
title: "Work Step Status Picklist Value Attributes"
domain: uiapi
topic: work-step-status-picklist-value-attributes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.189Z
estimatedTokens: 287
keywords: [Work, Step, Status, Picklist, Attributes, Additional, statuses]
---

# Work Step Status Picklist Value Attributes

> Additional picklist value attributes for work step
    statuses.

# Work Step Status Picklist Value Attributes

Additional picklist value attributes for work step statuses.

To use work step status picklist value attributes, you must have [Field Service](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_set_up.htm) enabled in your org.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| picklistAtrributes​ValueType | String | The value is WorkStepStatus. Indicates that these value attributes are associated with the status of a work step.For more information, see the WorkStepStatus object documentation.The property picklistAtrributes​ValueType contains a typographical error. | Small, 58.0 | 58.0 |
| statusCode | String | Indicates the status category that this status belongs to. | Small, 58.0 | 58.0 |
| sortOrder | Integer | Indicates the order in which the work step statuses are displayed in the status category’s picklist. | Small, 58.0 | 58.0 |

#### See Also

-   [Picklist Value](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_value.htm "A single picklist value.")

## Related Topics

- Picklist Value (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_value.htm)
