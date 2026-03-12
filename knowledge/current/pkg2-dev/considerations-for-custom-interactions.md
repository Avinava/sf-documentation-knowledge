---
title: "Considerations for Custom Interactions"
domain: pkg2-dev
topic: considerations-for-custom-interactions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:25.881Z
estimatedTokens: 1508
namespace: Custom
keywords: [Considerations, Custom, Interactions, Easily, log, managed, package, Apex, subscribers, interact, code, executed, defined, logged, Retrieve]
---

# Considerations for Custom Interactions

> Easily create and log custom interactions on your managed package using Apex. As
  subscribers interact with your package and your Apex code is executed, the custom interactions
  that you defined are logged. Retrieve your custom interactions in your package's AppExchange App
  Analytics usage logs and usage summaries.

**Namespace:** `Custom`

# Considerations for Custom Interactions

Easily create and log custom interactions on your managed package using Apex. As subscribers interact with your package and your Apex code is executed, the custom interactions that you defined are logged. Retrieve your custom interactions in your package's AppExchange App Analytics usage logs and usage summaries.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


As an ISV partner, the complex features that you develop in your managed packages could involve multiple actions on different objects, callouts to Apex functions, and much more. It can be difficult to interpret how your subscribers interacted with specific packaged components via your downloaded App Analytics package usage logs and summaries.

To provide you with more clarity about your subscribers’ events in custom ways and at different granularity levels, create custom interactions in your managed packages using Apex.

With Apex custom interactions, you can discover:

-   Which app feature a user interacted with
-   How users flowed through a specific user journey
-   Which UI components a user interacted with

Keep these considerations in mind:

-   A custom interaction can appear for a given user request up to 50 times. This limit avoids flooding the logs due to large loops.
-   We recommend that you don’t call IsvPartners.AppAnalytics.logCustomInteraction from inside a loop.
-   If the IsvPartners.AppAnalytics.logCustomInteraction method is called from a running Apex test, no AppExchange App Analytics package usage log or package usage summary data is produced.

-   **[Log Custom Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_interactions.htm#app_analytics_custom_interactions_log)**
    Create and log custom interactions with your managed package using Apex.

#### See Also

-   [Apex Developer Guide: Enums](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_enums.htm "Apex Developer Guide: Enums - HTML (New Window)")

-   [Download Package Usage Logs, Package Usage Summaries, and Subscriber Snapshots](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_download_mp_logs.htm "To request package usage logs, monthly package usage summaries, and subscriber snapshots, use the AppAnalyticsQueryRequest object. Usage logs, usage summaries, and subscriber snapshots are downloadable comma-separated value (.csv) files.")

-   [Apex Reference Guide: IsvPartners Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_IsvPartners.htm "Apex Reference Guide: IsvPartners Namespace - HTML (New Window)")

-   [Custom Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_custom_interactions.htm "To understand which features and UI components a subscriber interacted with and how they flow through a user journey, create custom interactions with Apex enums and the IsvPartners.AppAnalytics.logCustomInteraction Apex method.")


## Log Custom Interactions

Create and log custom interactions with your managed package using Apex.

1.  In your packaged Apex code, include Apex enums that are associated with the events that you want to log as custom interactions.
2.  In your Apex code, invoke IsvPartners.AppAnalytics.logCustomInteraction, using the enums that you created.
3.  Test your code by running it in your development environment and checking your debug logs to be certain that the custom interactions you created are being logged. Ensure that your debug log levels for Apex Code are set to FINE.
4.  After you’re finished with your implementation, publish a new version of your managed package.
5.  After subscribers install your package, retrieve your package usage logs and package usage summaries. Filter your package usage log data on custom\_entity\_type by CustomInteractionLabel, and on log\_record\_type by CustomInteraction. Or filter your package usage summary data on custom\_entity\_type by CustomInteractionLabel.
6.  Analyze your custom interaction data.

### Example

Let’s suppose you have a Lightning Web Component (LWC). Your LWC provides a list of related contacts for each Account record, uses a table layout, and is wired to an Apex class. You add a new card layout to your LWC. To track how well users are adopting this new layout, you log an interaction when a user switches between layouts.

![An example Lightning Web Component in table format showing these columns: Name, Title, Email, and Phone, plus Table and Card buttons](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_custom_interactions_example.png&folder=pkg2_dev)

In your code, include Apex enums and invoke IsvPartners.AppAnalytics.logCustomInteraction.

Your LWC HTML code:

```

```

Your LWC JavaScript code:

```

```

Your Apex class:

```

```

Next, you test your code. With your Apex code debug log level set to FINE, confirm that the custom interactions are logged by finding events in your debug logs called APP\_ANALYTICS\_FINE, APP\_ANALYTICS\_WARN, or APP\_ANALYTICS\_ERROR.

```

```

#### See Also

-   [Package Usage Logs Schema](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm "Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.")

-   [Considerations for Custom Interactions](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_interactions.htm#app_analytics_custom_interactions "Easily create and log custom interactions on your managed package using Apex. As subscribers interact with your package and your Apex code is executed, the custom interactions that you defined are logged. Retrieve your custom interactions in your package's AppExchange App Analytics usage logs and usage summaries.")

## Code Examples

```
<template>
    <div
        class="slds-var-m-top_medium slds-var-m-bottom_x-large slds-box slds-theme_default"
    >
        <h2 class="slds-text-heading_medium slds-var-m-bottom_medium">
            Change data view
        </h2>
    <!-- Button group: simple buttons -->
    <lightning-button-group class="slds-var-m-bottom_medium">
        <lightning-button
            label="Table"
            variant={tableVariant}
            onclick={handleClick}
    ></lightning-button>
        <lightning-button
            label="Card"
            variant={cardVariant}
            onclick={handleClick}
        ></lightning-button>
    </lightning-button-group>
    <template lwc:if={displayTable}>
        <lightning-datatable
            key-field="id"
            data={records}
            columns={columns}
        ></lightning-datatable>
    </template>
    <template lwc:if={displayCard}>
        <div class="slds-grid slds-wrap slds-grid_pull-padded-small">
            <template for:each={records} for:item="contact">
        <div
            class="slds-col slds-small-size_1-of-1 slds-large-size_1-of-2 slds-var-p_small"
            key={contact.id}
        >
            <lightning-card
                variant="Narrow"
                title={contact.name}
                icon-name="standard:contact"
            >
                <div class="slds-var-p-horizontal_small">
                    <p>{contact.name}</p>
                    <p>{contact.title}</p>
                    <p>
                        <lightning-formatted-phone
                        value={contact.phone}
                        ></lightning-formatted-phone>
                    </p>
                    <p>
                        <lightning-formatted-email
                        value={contact.email}
                        ></lightning-formatted-email>
                   </p>
                </div>
            </lightning-card>
        </div>
    </template>
    </div>
    </template>
     </div>
</template>
```

```
import { LightningElement, wire, api } from "lwc";
import { getRelatedListRecords } from "lightning/uiRelatedListApi";
import logInteraction from "@salesforce/apex/LogContactListInteraction.log";

export default class ContactList extends LightningElement {
    @api recordId;
    error;
    records;
    displayTable = true;
    displayCard = false;
    columns = [
        { label: "Name", fieldName: "name" },
        { label: "Title", fieldName: "title" },
        { label: "Email", fieldName: "email", type: "email" },
        { label: "Phone", fieldName: "phone", type: "phone" }
    ];
    @wire(getRelatedListRecords, {
        parentRecordId: "$recordId",
        relatedListId: "Contacts",
        fields: [
            "Contact.Name",
            "Contact.Id",
            "Contact.Phone",
            "Contact.Email",
            "Contact.Title"
    ],
    sortBy: ["Contact.Name"]
    })
    contactList({ error, data }) {
        if (data) {
        this.records = data.records.map((item) => {
            return {
              name: item.fields.Name.value,
              id: item.fields.Id.value,
              title: item.fields.Title.value,
              email: item.fields.Email.value,
              phone: item.fields.Phone.value
              };
        });
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.records = undefined;
        }
    }

    handleClick(event) {
        if (event.target.label.toLowerCase() === "table") {
        this.displayTable = true;
        this.displayCard = false;
            logInteraction({ type: "table" });
        } else if (event.target.label.toLowerCase() === "card") {
              this.displayTable = false;
              this.displayCard = true;
              logInteraction({ type: "card" });
        }
    }
    get cardVariant() {
        return this.displayCard === true ? "brand" : "";
    }
    get tableVariant() {
        return this.displayTable === true ? "brand" : "";
    }
}
```

```apex
public class LogContactListInteraction {
    public Enum ContactListLayouts { TABLE, CARD }
    
    @AuraEnabled
    public static void log(String type) {
        try {
           IsvPartners.AppAnalytics.logCustomInteraction(getInteractionLabel(type)); 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    private static ContactListLayouts getInteractionLabel(String type) {
        if (type.toLowerCase() == 'table') {
            return ContactListLayouts.TABLE;
        } else if (type.toLowerCase() == 'card') {
            return ContactListLayouts.CARD;
        } 
        return null;
    }
}
```

```
APP_ANALYTICS_FINE [External]IsvPartners.AppAnalytics.logCustomInteraction was called, but not from an installed managed package.
This means that the code is ready to be packaged.
```

## Related Topics

- Log Custom Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_interactions.htm)
- Download Package Usage Logs, Package Usage Summaries, and Subscriber Snapshots (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_download_mp_logs.htm)
- Custom Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_read_logs_custom_interactions.htm)
- Package Usage Logs Schema (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm)
- Considerations for Custom Interactions (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_interactions.htm)
