---
title: "Dimensions and Derived Dimensions in XMD"
domain: bi-dev-guide-xmd
topic: dimensions-and-derived-dimensions-in-xmd
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.797Z
estimatedTokens: 1503
keywords: [Dimensions, Derived, XMD, add, action, menu, dimension, Analytics, lens, dashboard, charts, tables, Users, open, record]
---

# Dimensions and Derived Dimensions in XMD

> You can add an action menu to a dimension value in Analytics lens and dashboard
    charts and tables. Users can then open a record and perform record-level actions. The available
    XMD parameters are the same for dimensions and derived dimensions.

# Dimensions and Derived Dimensions in XMD

You can add an action menu to a dimension value in Analytics lens and dashboard charts and tables. Users can then open a record and perform record-level actions. The available XMD parameters are the same for dimensions and derived dimensions.

This XMD snippet shows the parameters used with dimensions.

```

```

The dimensions and derived dimensions sections can have the following parameters.

| Parameter | Description |
| --- | --- |
| description | Description of the dataset field, no more than 1,000 characters.Example: "description": "Region tracks where the sale was made." |
| field | Identifier for the dataset field, which is the API name. |
| label | Display name for the dataset field, up to 40 characters.Example: "label": "Sales Manager" |
| linkTemplateEnabled | (Boolean) Indicates whether to display the link to open a Salesforce record or URL. If false or not set, the menu doesn’t display the Open Record link |
| linkTemplate | The URL to open when the user clicks the link in the actions menu, up to 255 characters. This setting overrides the default URL link, which is "/{{row.recordIdField}}". The default locates the Salesforce record with the record ID specified in the recordIdField XMD parameter.To open a Salesforce record in a multi-org environment, enter {{instanceUrl}} to populate the org URL specified in the XMD organizations section.Example: "linkTemplate": "/{{row.dimensionNameId}}" |
| linkTooltip | The tooltip that a dashboard viewer sees when hovering over the link in a CRM Analytics lens or dashboard.Example: "linkTooltip": "Click to open the record" |
| members | Array of display customizations for specific values of a dataset field. For example, for the Country field, change the label from USA to United States. And change the color for this value in a chart to blue.NoteWhen you change the label, the new label appears only in the UI. You can’t use the label in queries, such as a query filter. Best practice is to modify the actual field values when you create the dataset.Example:"members": [    {      "member": "USA",      "label": "United States",      "color": "Blue"    },    {      "member": "MX",      "label": "Mexico",      "color": "Green"    },  ] |
| recordIdField | The dataset field that contains the record ID of the Salesforce object that you want to perform the action on. |
| recordOrganizationField | The dataset field that contains the Salesforce org ID used to apply record-level actions on a record from a multi-org environment. Analytics uses the org ID to look up the org URL in the XMD organizations section of the XMD. |
| recordDisplayFields | Array of dataset fields to help a dashboard viewer identify a Salesforce record when multiple records match the action. For each field, specify its API name. The fields appear in the order in which they are listed in the array.In some instances, a dimension value is associated with multiple IDs and isn’t unique. For example, an opportunity with the name “acme” has multiple opportunity IDs and records. But the action or link can only be directed to one record. In this scenario, the user is given a choice of associated records in a modal. This example specifies the record fields to display.           "field": "AccountId.Name",            "recordIdField": "AccountId.Id"            "recordDisplayFields": ["Case_ID","Account_Name","Case_Owner"] |
| salesforceActionsEnabled | (Boolean) Indicates whether the Salesforce actions menu appears on the field. If false or not set, the menu doesn’t display any actions.Example: "salesforceActionsEnabled": true |
| salesforceActions | Array of actions that appear in the action menu. You can only add actions that are defined in the page layouts for the corresponding Salesforce object. If left blank, Analytics shows all actions.Example:"salesforceActions": [   {     "enabled": true,     "name": "FeedItem.TextPost"   },      {     "enabled": true,     "name": "FSL__LogACall"   } ], |
| showInExplorer | (Boolean) Indicates whether the dataset field can be selected from the dashboard designer or explorer when creating dashboards and lenses. Even if showInExplorer is false, you can still use the field for SAQL queries, manually adding it in JSON, and accessing it using the Analytics REST API.Example: "showInExplorer": true |

For more information, see [Perform Actions on a Salesforce Record from Analytics](https://help.salesforce.com/articleView?id=bi_dashboards_actions_configure.htm&language=en_US).

#### See Also

-   [Change Display Labels for Dataset Fields and Values](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_change_labels.htm "When you change display labels for fields and values, the changes affect only the appearance in the UI. The changes don’t alter the underlying data stored in the dataset or the API names of the fields.")

-   [Hide Dataset Fields from the Explorer and Dashboard Designer](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_show_dataset_fields.htm "By default, all dataset fields are available in the UI. But you can hide fields so that users can’t select them when building queries and dashboards.")

-   [Change Chart Colors for Dimension Values](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_change_chart_colors.htm "You can customize the colors of dimension values in a stacked bar, stacked column, or stacked waterfall chart. If you specify one measure and two groups, you can also customize the color for donut, funnel, treemap, stacked pyramid, line, and timeline charts.")

-   [Add Actions to Dimensions](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_add_record_level_actions.htm "Set up record-level actions on a dimension so that dashboard viewers can perform actions directly from a CRM Analytics chart or table. Each action applies to a single Salesforce record, such as creating a task for an opportunity record. You can also create an action to open the Salesforce record or a URL.")

## Code Examples

```
"conditionalFormatting":{  
            "chartColor":{  
               "parameters":{  
                  "values":[  
                     {  
                        "formatValue":"#E8963B",
                        "value":"false"
                     },
                     {  
                        "formatValue":"#3AE867",
                        "value":"true"
                     }
                  ]
               },
               "referenceField":"Stage_IsAdvanced",
               "type":"categories"
            }
```

```
"members": [ 
  { 
    "member": "USA", 
    "label": "United States", 
    "color": "Blue" 
  }, 
  { 
    "member": "MX", 
    "label": "Mexico", 
    "color": "Green" 
  }, 
]
```

```
"field": "AccountId.Name",
           "recordIdField": "AccountId.Id"
           "recordDisplayFields": ["Case_ID","Account_Name","Case_Owner"]
```

```
"salesforceActions": [
  {
    "enabled": true,
    "name": "FeedItem.TextPost"
  },   
  {
    "enabled": true,
    "name": "FSL__LogACall"
  }
],
```

## Related Topics

- Change Display Labels for Dataset Fields and Values (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_change_labels.htm)
- Hide Dataset Fields from the Explorer and Dashboard Designer (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_show_dataset_fields.htm)
- Change Chart Colors for Dimension Values (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_change_chart_colors.htm)
- Add Actions to Dimensions (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_add_record_level_actions.htm)
