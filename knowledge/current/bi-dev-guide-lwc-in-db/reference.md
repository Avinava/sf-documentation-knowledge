---
title: "Reference"
domain: bi-dev-guide-lwc-in-db
topic: reference
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:02.474Z
estimatedTokens: 1326
keywords: [Detailed, Lightning, Web, Components, Analytics, dashboards, Component, Configuration, API, Hooks, Custom, Lifecycle]
---

# Reference

> Detailed reference for Lightning Web Components in Analytics
    dashboards.

# Reference

Detailed reference for Lightning Web Components in Analytics dashboards.

## Component Configuration

Description of attributes for the component js-meta.xml file.

analytics\_\_Dashboard Target

To allow the component to be used in Analytics dashboards, add this target to the list of targets.

```

```

To customize how the component appears in Analytics dashboards, add a targetConfig to targetConfigs.

```

```

<hasStep> tag

In an analytics\_\_Dashboard target config, you can choose to include the <hasStep>true</hasStep> attribute. For Lightning dashboards, the <hasStep> tag is always set to false.

```

```

This attribute indicates that your component requires a dashboard step to function as expected. With this tag, the dashboard builder UI prompts the user to attach an existing step or to create a step to an instance of the component. Components with an attached step have access to step specific API hooks like results and selection.

Measure and Dimension Attribute Data Types

Attributes specified in an analytics\_\_Dashboard target config are displayed in the Analytics dashboard builder UI for configuration. In addition to the common data types, this target also supports Measure and Dimension data types for components with <hasStep>true</hasStep>. The dashboard builder is able to choose a column of the given data type from the results of the attached step.

```

```

## API Hooks Overview

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

#### Note

These API hooks aren’t supported for Lightning dashboards.

| Name | Description | Available for Use in LWC |
| --- | --- | --- |
| results | An array of objects. | Requires <hasStep>true</hasStep>. |
| metadata | An object with three arrays: groups, strings, and numbers. Each array is the field name of each type from the associated query. | Requires <hasStep>true</hasStep>. |
| selectMode | Returns the selection mode of the associated query. Valid values are:singlemultisinglerequiredmultirequirednone | Requires <hasStep>true</hasStep>. |
| selection | The current selection of the associated step. | Requires <hasStep>true</hasStep>. |
| setSelection | Use this function to modify the current selection on the associated step and inform the parent dashboard. | Requires <hasStep>true</hasStep>. |
| getState | Use this function to retrieve the entire parent dashboard state as a JSON document. | Always available. |
| setState | Use this function to modify the dashboard state. | Always available |
| refresh | Use this function to refresh the dashboard state. | Always available |

## API Hooks Details

Results

The results are rows returned by the query represented as an array of maps.

\[ {columnOne: 'one', columnTwo: 123}, {columnOne: 'two', columnTwo: 456} \]

Metadata

Metadata describes the shape of the results using lists of column developer names organized into groups, numbers, and strings.

-   Groups - Grouped dimensions. Typically, all grouped columns can be used together as a primary key for the row.
-   Strings - All text fields, also known as Strings or Dimensions.
-   Numbers - All numeric fields, also known as Measures.

{ groups: \[\], strings: \['columnOne'\], numbers: \['columnTwo'\] }

selectMode

Returns the select mode specified for the associated step. Valid values are:

-   single
-   multi
-   singlerequired
-   multirequired
-   none

```

```

selection

The current selection of the associated step as an Array of objects, with each object being one or more selected rows from results. Use the setSelection function to update the dashboard selection.

```

```

setSelection

The setSelection function is a callback passed in that allows the component to update the attached step's selection in Analytics. In doing so, it potentially applies filters to the rest of the dashboard's contents depending on how the queries are configured.

```

```

getState and setState

Use getState to retrieve the current state of the dashboard. Use setState to modify the current state of the dashboard. Fetch and modify all the current selections, filters, and the currently viewed page. Use these functions to add custom logic and behavior that's not standard in the dashboard runtime.

```

```

Learn more about selection syntax with [Filter and Selection Syntax for Embedded Dashboards](https://help.salesforce.com/articleView?id=bi_embed_filters.htm&language=en_US).

refresh

Use refresh to rerun either all the queries on the dashboard or a particular query. To rerun a specific query, use the config argument with the step id of the query.

```

```

## Custom Lifecycle Methods

stateChangedCallback

Use stateChangedCallback, a built-in callback method, to inform the component whenever the state of the dashboard changes. Use stateChangedCallback to compare the current state with the new state and then rerender if necessary.

```

```

For an example of this callback in action, see the [Breadcrumb](https://github.com/forcedotcom/sfdx-analytics/tree/main/quick-start/main/default/lwc/breadcrumb) javascript in the GitHub example repository.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

#### Note

This callback method is available in v55 and later.

## Code Examples

```
<targets>
    <target>analytics__Dashboard</target>
<targets>
```

```
<targetConfigs>
    <targetConfig target="analytics__Dashboard">
    </targetConfig>
</targetConfigs>
```

```
<targetConfigs>
    <targetConfig target="analytics__Dashboard">
        <hasStep>true</hasStep>
    </targetConfig>
</targetConfigs>
```

```
<targetConfigs>
    <targetConfig target="analytics__Dashboard">
        <hasStep>true</hasStep>
        <property name="labelColumn" type="Dimension" label="Label Column" description="Segment label." required="true"/>
    </targetConfig>
</targetConfigs>
```

```
isMultiSelect() {
    return this.selectMode.includes('multi');
}
```
