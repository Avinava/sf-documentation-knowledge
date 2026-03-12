---
title: "Customize Invocable Action Input Order in Flow Builder"
domain: apex-guide
topic: customize-invocable-action-input-order-in-flow-builder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.455Z
estimatedTokens: 1352
keywords: [Customize, Invocable, Action, Input, Order, Flow, Builder, Control, display, grouping, Apex, actions, InvocableActionExtension, metadata, file]
---

# Customize Invocable Action Input Order in Flow Builder

> Control the display order and grouping of input parameters for your Apex invocable
  actions in Flow Builder using the InvocableActionExtension metadata file.

# Customize Invocable Action Input Order in Flow Builder

Control the display order and grouping of input parameters for your Apex invocable actions in Flow Builder using the InvocableActionExtension metadata file.

## Example: Sorting Booking Request Inputs

An Apex class for a travel application, BookingAction, uses a custom input type, BookingRequest, to manage two required dates: startDate and endDate. By default, the flow displays inputs alphabetically. Use the InvocableActionExtension metadata file to define the logical order and group the fields under a relevant section header to improve the user experience.

## Create the Apex Invocable Action

This section shows the Apex class structure required for the invocable action that exposes configurable input parameters to a flow.

This Apex class creates an invocable action, BookingAction, designed to send a booking request to an external system. Note that the method accepts a List input to support bulk processing, a best practice for Apex development.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Users who invoke the action from a flow must have the appropriate Apex class access set in their profile or permission set.

public class BookingAction { @InvocableMethod( label='Booking Request' description='Sends a booking reservation request to booking system' category='Booking Integrations' callout=true // Indicates this action makes an external callout ) public static List<BookingResult> invoke(List<BookingRequest> request) { // Apex business logic goes here to process the booking requests. // This process must be designed to handle multiple requests (bulkified). // Example mock logic: List<BookingResult> results = new List<BookingResult>(); for (BookingRequest req : request) { BookingResult result = new BookingResult(); result.status = 'Booking request received for dates: ' + req.startDate + ' to ' + req.endDate; results.add(result); } return results; } public class BookingRequest { @InvocableVariable( label='Requested Start Date' description='The start date for the booking.' required=true ) public Date startDate; @InvocableVariable( label='Requested End Date' description='The end date for the booking.' required=true ) public Date endDate; } public class BookingResult { @InvocableVariable( label='Status Message' ) public String status; // Include other output variables as needed. } }

The invoke method uses the @InvocableMethod annotation to be callable from a flow. Input and output are defined by the inner classes, BookingRequest and BookingResult, ensuring data integrity. The individual input variables within BookingRequest use the @InvocableVariable annotation, which allows them to be exposed as configurable fields in Flow Builder.

![The invocable action’s default order of inputs in Flow Builder](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fforcecome_flow_invocable_action_extension_customize_input_standard.png&folder=apexcode)

## Define Input Order with Invocable Action Extension

Use the InvocableActionExtension metadata file to specify the sort order of the input fields and organize them into collapsible groups for improved usability in Flow Builder.

The file must have the suffix .invocableactionextension-meta.xml and the filename corresponds to the Apex class name, for example, BookingAction.invocableactionextension-meta.xml. Add the metadata file to the invocableactionextensions directory.

This metadata file targets each input parameter and uses the <key\>Order</key\> attribute so the start date appears before the end date. It also uses the <key\>Group</key\> attribute to organize both inputs under a single collapsible section named Booking Dates.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

To sort the order of input fields, define an Order for all input parameters for the action. If you define an Order for at least one parameter, you must define an Order for all parameters within the action to avoid unexpected behavior.

```

```

The <targets\> elements identify the specific input parameters to be customized. The <key\>Order</key\> attribute explicitly controls the vertical display sequence of the input parameters in Flow Builder. The <key\>Group</key\> attribute is used to create the collapsible Booking Dates section, improving the organization and scannability of the action's inputs.

![The invocable action’s custom order of inputs in Flow Builder](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fforcecome_flow_invocable_action_extension_customize_input_order.png&folder=apexcode)

#### See Also

-   [InvocableMethod Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Use the InvocableMethod annotation to identify methods that can be run as invocable actions.")

-   [InvocableVariable Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm "To identify variables used by invocable methods in custom classes, use the InvocableVariable annotation.")

-   [*Metadata API Developer Guide*: InvocableActionExtension](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_invocableactionextension.htm "Metadata API Developer Guide: InvocableActionExtension - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<InvocableActionExtension xmlns="http://soap.sforce.com/2006/04/metadata">
    <targets>
        <targetType>ActionParameter</targetType>
        <targetName>BookingAction.BookingRequest.startDate</targetName>
        <attributes>
            <key>Order</key>
            <dataType>Integer</dataType>
            <value>1</value> </attributes>
        <attributes>
            <key>Group</key>
            <dataType>String</dataType>
            <value>Booking Dates</value> </attributes>
    </targets>

    <targets>
        <targetType>ActionParameter</targetType>
        <targetName>BookingAction.BookingRequest.endDate</targetName>
        <attributes>
            <key>Order</key>
            <dataType>Integer</dataType>
            <value>2</value> </attributes>
        <attributes>
            <key>Group</key>
            <dataType>String</dataType>
            <value>Booking Dates</value> </attributes>
    </targets>
</InvocableActionExtension>
```

## Related Topics

- InvocableMethod Annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm)
- InvocableVariable Annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableVariable.htm)
