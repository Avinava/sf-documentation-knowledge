---
title: "staticflex Step Type
            Properties"
domain: bi-dev-guide-json
topic: staticflex-step-type-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.332Z
estimatedTokens: 737
keywords: [staticflex, Step, manually, define, own, data, populate, toggle, widget, provide, binding, possible, filters, groups, measures]
---

# staticflex Step Type
            Properties

> Use the staticflex step type to manually define
        your own set of data. For example, you can use this step to populate a list of static values
        in a toggle or list widget. It can also be used to provide values to a binding. For example,
        it can provide possible filters, groups, measures, sort order, and limits.

# staticflex Step Type Properties

Use the staticflex step type to manually define your own set of data. For example, you can use this step to populate a list of static values in a toggle or list widget. It can also be used to provide values to a binding. For example, it can provide possible filters, groups, measures, sort order, and limits.

| Field Name | Description |
| --- | --- |
| type | Step type. Set to staticflex. |
| label | Step label, which is primarily used for display in the dashboard designer user interface. |
| values | Values for the static step. You can have multiple fields for each static value, where each field provides different information about the value, like a label, measurement, or range. When the static step is associated with a widget, the widget uses the first specified field as the display label. You can use other fields to specify values or ranges that you can use to facet or bind steps. For more information about binding a static step to another step, see the Analytics Bindings Developer Guide. For more information about faceting a static step with another data source, see Configure Cross-Dataset Faceting with Connected Data Sources.If you use the static step wizard to create the step, the step contains the following default fields: display and value, as shown in the JSON example. You can change these arbitrary field names and add more fields.The values in each field must have the same datatype, like numbers, strings, or arrays. For instance, if a row has "value": "123", another row can’t have "value": [123]. |
| broadcastFacet | Controls whether the step’s selections are broadcasted as facets. Faceting is when a selection in a widget filters other steps in the dashboard. Default is true.To enable this step to broadcast facets, set this property to true and connect this step with another data source. This step type can’t receive facets. |
| isGlobal | Not applicable. You can only apply this property on steps that are connected to a global filter widget—all other steps ignore this property. |
| useGlobal | Indicates whether to apply global filters to this step (true) or not (false). |
| selectMode | Determines the selection interaction. The options for charts are: none, single, and singlerequired. The options for list, range, and toggle selectors are: single, singlerequired, multi, and multirequired.NoteselectMode doesn’t apply to number, values table, compare table, date, and global filter widgets. |
| start | The initial selections that are applied to the step when the dashboard first opens.Static example that sets an initial selection in a dashboard: "start": {                     "display": [                         "Atlanta"                     ]                 }Binding example that selects the logged in user manager ID in a dashboard :"start": { "display" : "{{column(LoggedinUserInfo_1.result, ["ManagerId"]).asObject()}}" } |

## staticflex Step

```

```

## Code Examples

```
"start": {
                    "display": [
                        "Atlanta"
                    ]
                }
```

```
"start": {
"display" : "{{column(LoggedinUserInfo_1.result, ["ManagerId"]).asObject()}}"
}
```

```
"my_opps_1": {
    "numbers": [],
    "strings": [],
    "groups": [],
    "broadcastFacet": true,
    "selectMode": "single",
    "datasets": [],
    "dimensions": [],
    "type": "staticflex",
    "label": "my opps",
    "values": [
        {
            "display": "All opps",
            "value": "false"
        },
        {
            "display": "My opps",
            "value": "true"
        }
    ]
}
```
