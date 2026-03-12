---
title: "Automate Time Sheet Creation, Capture Omni Status Change, and Calculate Shrinkage"
domain: workforce-engagement
topic: automate-time-sheet-creation-capture-omni-status-change-and-calculate-shrinkage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.669Z
estimatedTokens: 964
keywords: [Automate, Time, Sheet, Creation, Capture, Omni, Status, Change, Calculate, Shrinkage, basic, automation, Log, agents, Omni-Channel]
---

# Automate Time Sheet Creation, Capture Omni Status Change, and Calculate Shrinkage

> Set up basic time sheet automation. Log agents' Omni-Channel
            status changes throughout the day and use that information to calculate the shrinkage
            percentage within a shift.

# Automate Time Sheet Creation, Capture Omni Status Change, and Calculate Shrinkage

Set up basic time sheet automation. Log agents' Omni-Channel status changes throughout the day and use that information to calculate the shrinkage percentage within a shift.

| Ease of Implementation | Easy |
| --- | --- |
| Estimated Time to Implement | 60 minutes |

## Prerequisites

This example requires Omni Channel and Workforce Engagement to be turned on.

## Step 1: Create Custom Fields on the Time Sheet Object

Create custom fields on the Time Sheet object in Salesforce to correspond to the data that you use to calculate shrinkage.

1.  From Setup, select **Object Manager**.
2.  In the Quick Find box, enter Time Sheet, and then select the **Time Sheet** object.
3.  Select **Fields & Relationships** from the left pane.
4.  To create a field, select **New**.
5.  To create a custom field to hold the data, follow the steps. To learn more about creating custom fields, see [Create Custom Fields](https://help.salesforce.com/articleView?id=adding_fields.htm&language=en_US "HTML (New Window)").
6.  Create these fields.

    ![time sheet with customized fields](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fcustom_fields_on_time_sheet.png&folder=workforce_engagement)

7.  Make sure to add these fields to the layout for testing and deployment.

## Step 2: Create Custom Fields on the Time Sheet Entry Object

Create custom fields on the Time Sheet object in Salesforce to correspond to the data that you use to calculate shrinkage.

1.  From Setup, at the top of the page, select **Object Manager**.
2.  In the Quick Find box, enter Time Sheet Entry, and then select the **Time Sheet Entry** object.
3.  Select **Fields & Relationships** from the left pane.
4.  To create a field, select **New**.
5.  To create a custom field to hold the data, follow the steps. To learn more about creating custom fields, see [Create Custom Fields](https://help.salesforce.com/articleView?id=adding_fields.htm&language=en_US "HTML (New Window)").
6.  Create these fields.

    ![Time sheet fields for creation](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Ftime_sheet_entry_fields.png&folder=workforce_engagement)

7.  Make sure to add these fields to the layout for testing and deployment.

## Step 3: Introduce Automation Using Salesforce Flow

Two flows are used to allow agents to clock in, generate a Time Sheet, and capture Omni Channel status changes throughout the day.

1.  From Setup, in the Quick Find box, enter Flows, and then select **Flows**.
2.  To create your first flow, select **New**.
3.  For more information, see: [Salesforce Flows](https://help.salesforce.com/s/articleView?id=platform.flow.htm&type=5&language=en_US "HTML (New Window)")
4.  Create a screen flow to place on the home page.

    ![Salesforce flow showing automation](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fhome_page_flow_1.png&folder=workforce_engagement)

    ![Automation flow with shift times and records](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fhome_page_flow_2.png&folder=workforce_engagement)

5.  Create a record-triggered flow to capture an Omni status change.

    ![Record-triggered flow to capture Omni status](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fomni_status_change_flow_1.png&folder=workforce_engagement)

    ![Flow with entries for decisions and status](/docs/resources/img/en-us/260.0?doc_id=workforce_engagement%2Fimages%2Fomni_status_change_flow_2.png&folder=workforce_engagement)


## Test This Example

1.  Clock in using the screen flow.
2.  To simulate the changes in agent availability, change Omni statuses between different presences.
3.  Verify that time sheet entries are created and shrinkage is calculated.
