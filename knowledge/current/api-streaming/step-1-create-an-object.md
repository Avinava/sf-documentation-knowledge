---
title: "Step 1: Create an Object"
domain: api-streaming
topic: step-1-create-an-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.229Z
estimatedTokens: 480
keywords: [Step, Invoice, Statement, user]
---

# Step 1: Create an Object

> Create an Invoice Statement object from the user interface.

# Step 1: Create an Object

Create an Invoice Statement object from the user interface.

After you create a PushTopic and subscribe to it, you’ll get notifications when an Invoice Statement record is created, updated, deleted, or undeleted. You’ll create the object with the user interface.

1.  From your management settings for custom objects, if you’re using Salesforce Classic, click **New Custom Object**, or if you’re using Lightning Experience, select **Create** | **Custom Object**.
2.  Define the custom object.

    -   In the **Label field**, type Invoice Statement.
    -   In the **Plural Label** field, type Invoice Statements.
    -   Select **Starts with vowel sound**.
    -   In the **Record Name** field , type Invoice Number.
    -   In the **Data Type** field , select Auto Number.
    -   In the **Display Format** field, type INV-{0000}.
    -   In the **Starting Number** field, type 1.

3.  Click **Save**.
4.  Add a Status field.
    1.  Scroll down to the Custom Fields & Relationships related list and click **New**.
    2.  For Data Type, select Picklist and click **Next**.
    3.  In the Field Label field, type Status.
    4.  Type the following picklist values in the box provided, with each entry on its own line.

        ```

        ```

    5.  Select the checkbox for **Use first value as default value**.
    6.  Click **Next**.
    7.  For field-level security, select Read Only and then click **Next**.
    8.  Click **Save & New** to save this field and create a new one.
5.  Now create an optional Description field.

    1.  In the Data Type field, select Text Area and click **Next**.
    2.  In the Field Label and Field Name fields, enter Description.
    3.  Click **Next**, accept the defaults, and click **Next** again.
    4.  Click **Save** to go the detail page for the Invoice Statement object.

    Your Invoice Statement object should now have two custom fields.

## Code Examples

```
Open
Closed
Negotiating
Pending
```
