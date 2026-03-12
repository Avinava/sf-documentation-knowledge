---
title: "Create Components for the Outlook and Gmail Integrations"
domain: lightning
topic: create-components-for-the-outlook-and-gmail-integrations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.109Z
estimatedTokens: 574
keywords: [Components, Outlook, Gmail, Integrations, custom, Aura, add, email, application, pane]
---

# Create Components for the Outlook and Gmail Integrations

> Create custom Aura components that are available to add to the email application
    pane for the Outlook and Gmail integrations.

# Create Components for the Outlook and Gmail Integrations

Create custom Aura components that are available to add to the email application pane for the Outlook and Gmail integrations.

To add a component to email application panes in the Outlook or Gmail integration, implement the clients:availableForMailAppAppPage interface.

To allow the component access to email or calendar events, implement the clients:hasItemContext interface.

The clients:hasItemContext interface adds attributes to your component that it can use to implement record- or context-specific logic. The attributes included are:

-   The source attribute, which indicates the email or appointment source. Possible values include email and event.

    ```

    ```

-   The mode attribute, which indicates viewing or composing an email or event. Possible values include view and edit.

    ```

    ```

-   The people attribute indicates recipients’ email addresses on the current email or appointment.

    ```

    ```

    The shape of the people attribute changes according to the value of the source attribute.

    When the source attribute is set to email, the people object contains the following elements.

    ```

    ```

    When the source attribute is set to event, the people object contains the following elements.

    ```

    ```

-   The subject indicates the subject on the current email.

    ```

    ```

-   The messageBody indicates the email message on the current email.

    ```

    ```


To provide the component with an event’s date or location, implement the clients:hasEventContext interface.

```

```

The Outlook and Gmail integrations don’t support the following events:

-   force:navigateToList
-   force:navigateToRelatedList
-   force:navigateToObjectHome
-   force:refreshView

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

To ensure that custom components appear correctly, enable them to adjust to variable widths.

-   **[Sample Custom Components for Outlook and Gmail Integration](atlas.en-us.lightning.meta/lightning/components_custom_for_app_builder_email_app_pane.htm)**
    Review samples of custom Aura components that you can implement in the email application pane for Outlook integration and Gmail Integration.

## Code Examples

```
<aura:attribute name="source" type="String" />
```

```
<aura:attribute name="mode" type="String" />
```

```
<aura:attribute name="people" type="Object" />
```

```
{
    to: [ { name: nameString, email: emailString }, ... ],
    cc: [ ... ],
    from: { name: senderName, email: senderEmail },
}
```

```
{
    requiredAttendees: [ { name: attendeenameString, email: emailString }, ... ],
    optionalAttendees: [ { name: optattendeenameString, email: emailString }, ... ],
    organizer: { name: organizerName, email: senderEmail },
}
```

## Related Topics

- Sample Custom Components for Outlook and Gmail Integration (atlas.en-us.lightning.meta/lightning/components_custom_for_app_builder_email_app_pane.htm)
