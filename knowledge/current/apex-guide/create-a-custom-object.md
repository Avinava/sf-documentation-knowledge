---
title: "Create a Custom Object"
domain: apex-guide
topic: create-a-custom-object
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:47.485Z
keywords: [Create, Custom, Object, See]
---

# Create a Custom Object

# Create a Custom Object

In this step, you create a custom object called Book with one custom field called Price.

Prerequisites:

A Salesforce account in a sandbox Professional, Enterprise, Performance, or Unlimited Edition org, or an account in a Developer org.

For more information about creating a sandbox org, see “Sandbox Types and Templates” in Salesforce Help. To sign up for a free Developer org, see the [Developer Edition Environment Sign Up Page](http://developer.force.com/join "HTML (New Window)").

1.  Log in to your sandbox or Developer org.
2.  From your management settings for custom objects, if you’re using Salesforce Classic, click **New Custom Object**, or if you’re using Lightning Experience, select **Create** | **Custom Object**.
3.  Enter Book for the label.
4.  Enter Books for the plural label.
5.  Click **Save**.
    
    Ta dah! You’ve now created your first custom object. Now let’s create a custom field.
    
6.  In the **Custom Fields & Relationships** section of the Book detail page, click **New**.
7.  Select Number for the data type and click **Next**.
8.  Enter Price for the field label.
9.  Enter 16 in the length text box.
10.  Enter 2 in the decimal places text box, and click **Next**.
11.  Click **Next** to accept the default values for field-level security.
12.  Click **Save**.

You've created a custom object called Book, and added a custom field to that custom object. Custom objects already have some standard fields, like Name and CreatedBy, and allow you to add other fields that are more specific to your implementation. For this tutorial, the Price field is part of our Book object, and the Apex class you’ll write in the next step accesses it.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_qs_class.htm "Add an Apex Class")

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)