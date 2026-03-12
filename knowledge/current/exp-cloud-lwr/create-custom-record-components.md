---
title: "Create Custom Record Components"
domain: exp-cloud-lwr
topic: create-custom-record-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.514Z
estimatedTokens: 709
keywords: [Custom, Record, Components, Build, Own, LWR, template, doesn’t, include, User, API, construct, Cell, Navigate, Action]
---

# Create Custom Record Components

> The Build Your Own (LWR) template doesn’t include record components, but you can use
    the User Interface API to construct your own custom components.

# Create Custom Record Components

The Build Your Own (LWR) template doesn’t include record components, but you can use the User Interface API to construct your own custom components.

Although many Aura template components aren’t available as Lightning web components, you can extend existing Lightning web components, as detailed in the [Lightning Web Components Reference](https://developer.salesforce.com/docs/component-library/overview/components). However, User Interface APIs aren’t yet available for related record lists, so you can’t fully construct these types of components.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

See examples of custom record home and record detail components in customRecord/force-app/main/default/lwc in the [code samples files](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm#code_sample).

## Create a Custom Cell for Record Lists

Let’s say you want to add a custom column to the data table in your record list component—in this case, the Account Name column.![Record list](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_records.png&folder=exp_cloud_lwr)

To add a custom cell to your record list, you can extend LightningDatatable to define a custom data type. In this example, the name of the record is displayed in the table with a hyperlink to its record page.

```

```

We then define the markup for the custom type inside our template. To display a hyperlink to a record page, we create a separate record link component and provide the values supplied by the record table component.

```

```

## Navigate to a Record Page or Custom Action

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

User Interface APIs aren’t yet available for actions. For basic record creation and editing, consider using a separate page and a lightning-record-form or a custom Apex controller.

Record components can extend NavigationMixin from lightning/navigation, which allows your web component to generate a URL for navigating record and object pages.

```

```

Using NavigationMixin.Navigate, you provide the desired page type and route parameters. This function generates a new URL and navigates to it, which is useful for performing actions on another page. Record actionNames other than view require a custom page.

Here’s an example for navigating to a custom page to edit a record.

```

```

The result generates a URL that can be used for a new record page.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=exp_cloud_lwr)

#### Important

Custom solutions for object pages using preconfigured route parameters have only limited support. Use at your own risk. Use Salesforce-provided page templates when possible.

## Code Examples

```
import { LightningDatatable } from ‘lightning/datatable;

export default class RecordTable extends LightningDatatable {
   // define a new custom type… the custom cell will have a markup
   // represented by the template attribute
   static customTypes = {
      ‘name’: {
         template: ‘./name.html’
   };
}
```

```
// inside name.html
<template>
   <c-record-link
      object-api-name={value.objectApiName}
      record-id={value.id}
      label={value.name}>
   </c-record-link>
</template>
```

```
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RecordList extends NavigationMixin(LightningElement) {
   ...
}
```

```
handleEdit() {
    // assumes you have created a custom page with API Name “record”
    this[NavigationMixin.Navigate]({
        type: 'comm__namedPage',
        attributes: {
            name: 'record__c'
        },
        state: {
            objectApiName: this.objectApiName,
            recordId,
            actionName: 'edit'
        }
    });
}
```

## Related Topics

- code
            samples files (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm)
