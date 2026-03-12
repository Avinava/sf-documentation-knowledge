---
title: "Lightning Data Service"
domain: lightning
topic: lightning-data-service
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.664Z
estimatedTokens: 1768
keywords: [Lightning, Data, Service, load, edit, record, component, requiring, Apex, code, handles, sharing, rules, field-level, security]
---

# Lightning Data Service

> Use Lightning Data Service to load, create, edit, or delete a record
      in your component without requiring Apex code. Lightning Data Service handles sharing rules
      and field-level security for you. In addition to simplifying access to Salesforce data,
      Lightning Data Service improves performance and user interface consistency.

# Lightning Data Service

Use Lightning Data Service to load, create, edit, or delete a record in your component without requiring Apex code. Lightning Data Service handles sharing rules and field-level security for you. In addition to simplifying access to Salesforce data, Lightning Data Service improves performance and user interface consistency.

At the simplest level, you can think of Lightning Data Service as the Lightning components version of the Visualforce standard controller. While this statement is an over-simplification, it serves to illustrate a point. Whenever possible, use Lightning Data Service to read and modify Salesforce data in your components.

Data access with Lightning Data Service is simpler than the equivalent using a server-side Apex controller. Read-only access can be entirely declarative in your component’s markup. For code that modifies data, your component’s JavaScript controller is roughly the same amount of code, and you eliminate the Apex entirely. All your data access code is consolidated into your component, which significantly reduces complexity.

Lightning Data Service provides other benefits aside from the code. It’s built on highly efficient local storage that’s shared across all components that use it. Records loaded in Lightning Data Service are cached and shared across components.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Working with Lightning Data Service in Lightning Web Components? See the [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.data_ui_api).

Components accessing the same record see significant performance improvements, because a record is loaded only once, no matter how many components are using it. Shared records also improve user interface consistency. When one component updates a record, the other components using it are notified, and in most cases, refresh automatically.

## Creating Components That Use Lightning Data Service

Lightning Data Service is available through force:recordData and several base components. To return raw record data, for example if you need to view or edit only a few fields, and don't need any UI elements or layout information, use force:recordData. When using force:recordData, load the data once and pass it to child components as attributes. This approach reduces the number of listeners and minimizes server calls, which improves performance and ensures that your components show consistent data. For more information, see [force:recordData documentation](https://developer.salesforce.com/docs/component-library/bundle/force:recordData/documentation).

To create a form for working with records, use lightning:recordForm, lightning:recordEditForm, or lightning:recordViewForm. One advantage of using the form-based components is that you can achieve many of your record display needs entirely in markup without JavaScript. Another powerful feature of the form-based components is automatic field mapping with field-level validation. The form-based components use a base component that’s appropriate for the field type to render the field automatically.

force:recordData doesn’t include any UI elements; it’s simply logic and a way to communicate to the server. Here are the components that use Lightning Data Service.

lightning:recordForm

Display, create, or edit records

lightning:recordViewForm

Display records with lightning:outputField

lightning:recordEditForm

Create or edit records with lightning:inputField

force:recordData

Create, edit, or delete record data using your own custom UI components

-   **[Loading a Record](atlas.en-us.lightning.meta/lightning/data_service_load_record.htm)**
    Loading a record can be accomplished entirely in markup using lightning:recordForm. If you need a custom layout, use lightning:recordViewForm. If you need more customization than the form-based components allow for viewing record data, use force:recordData.
-   **[Editing a Record](atlas.en-us.lightning.meta/lightning/data_service_save_record.htm)**
    The simplest way to create a form that enables you to edit a record is to use the lightning:recordForm component. If you want to customize the form layout or preload custom values, use lightning:recordEditForm. If you want to customize a form more than the form-based components allow, use force:recordData.
-   **[Creating a Record](atlas.en-us.lightning.meta/lightning/data_service_create_record.htm)**
    The simplest way to create a form that enables users create a record is to use lightning:recordForm. If you want to customize the form layout or preload custom values, use lightning:recordEditForm. If you need more customization than the form-based components allow, use force:recordData.
-   **[Deleting a Record](atlas.en-us.lightning.meta/lightning/data_service_delete_record.htm)**
    To delete a record using Lightning Data Service, call deleteRecord on the force:recordData component, and pass in a callback function to be invoked after the delete operation completes. The form-based components, such as lightning:recordForm, don’t currently support deleting a record.
-   **[Record Changes](atlas.en-us.lightning.meta/lightning/data_service_handling_record_change.htm)**
    To perform more advanced tasks using force:recordData when the record changes, handle the recordUpdated event. You can handle record loaded, updated, and deleted changes, applying different actions to each change type.
-   **[Handling Errors](atlas.en-us.lightning.meta/lightning/data_service_handling_errors.htm)**
    Lightning Data Service returns an error when a resource, such as a record or an object, is inaccessible on the server.
-   **[Changing the Display Density](atlas.en-us.lightning.meta/lightning/data_service_display_density.htm)**
    In Lightning Experience, the display density setting determines how densely content is displayed and where field labels are located. Display density is controlled for the org in Setup, and users can also set display density to their liking from their profile menu.
-   **[Considerations](atlas.en-us.lightning.meta/lightning/data_service_considerations.htm)**
    Lightning Data Service is powerful and simple to use. However, it’s not a complete replacement for writing your own data access code. Here are some considerations to keep in mind when using it.
-   **[Lightning Action Examples](atlas.en-us.lightning.meta/lightning/data_service_example.htm)**
    Here are some examples that use the base components to create a Quick Contact action panel.
-   **[SaveRecordResult](atlas.en-us.lightning.meta/lightning/data_service_saverecordresult.htm)**
    Represents the result of a Lightning Data Service operation that makes a persistent change to record data.
-   **[Displaying the Create and Edit Record Modals](atlas.en-us.lightning.meta/lightning/data_service_modals.htm)**
    You can take advantage of built-in events to display modals that let you create or edit records via an Aura component.

## Related Topics

- Loading a Record (atlas.en-us.lightning.meta/lightning/data_service_load_record.htm)
- Editing a Record (atlas.en-us.lightning.meta/lightning/data_service_save_record.htm)
- Creating a Record (atlas.en-us.lightning.meta/lightning/data_service_create_record.htm)
- Deleting a Record (atlas.en-us.lightning.meta/lightning/data_service_delete_record.htm)
- Record Changes (atlas.en-us.lightning.meta/lightning/data_service_handling_record_change.htm)
- Handling Errors (atlas.en-us.lightning.meta/lightning/data_service_handling_errors.htm)
- Changing the Display Density (atlas.en-us.lightning.meta/lightning/data_service_display_density.htm)
- Considerations (atlas.en-us.lightning.meta/lightning/data_service_considerations.htm)
- Lightning Action Examples (atlas.en-us.lightning.meta/lightning/data_service_example.htm)
- SaveRecordResult (atlas.en-us.lightning.meta/lightning/data_service_saverecordresult.htm)
