---
title: "Request Service Order Credentials for the Channel Order App"
domain: packagingGuide
topic: request-service-order-credentials-for-the-channel-order-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.724Z
estimatedTokens: 596
keywords: [Service, Order, Credentials, Channel, App, connect, COA, Salesforce, Help, consist, unique, username, API, key, activation]
---

# Request Service Order Credentials for the Channel Order App

> Before you connect the Channel Order App (COA) to Salesforce, request service order
  credentials on Salesforce Help. Your credentials consist of a unique username, API key, and
  activation code. You provide these credentials in the COA to establish a connection to
  Salesforce.

# Request Service Order Credentials for the Channel Order App

Before you connect the Channel Order App (COA) to Salesforce, request service order credentials on Salesforce Help. Your credentials consist of a unique username, API key, and activation code. You provide these credentials in the COA to establish a connection to Salesforce.


| User Permissions Needed |
| --- |
| To manage custom apps: | Customize Application |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

Service order credentials expire after 24 hours. To avoid issues connecting to Salesforce, finish the COA setup process soon after you receive your credentials.

1.  Launch the COA guided onboarding experience. If the guided onboarding experience is already open, skip these steps.
    1.  Log in to the org where the COA is installed.
    2.  Open the App Launcher.
    3.  In the search field, enter COA Guided Onboarding, and then select **COA Guided Onboarding**.
2.  Go to this onboarding task: Request Service Order Credentials.
3.  Click **Request Service Order Credentials**.

    You’re directed to Salesforce Help to log a case.

4.  Fill the required fields on the case submission form.

    | Field | Details |
    | --- | --- |
    | Subject | Enter: Requesting COA Service Order Credentials |
    | Description | Answer these questions:Do you have an active reseller agreement?What is the name of your solution?Did your solution pass security review?Did you complete the Channel Order App module on Trailhead?What is the ID of your Partner Business Org? |

5.  For product and topic, select **ISV Billing & Order Support (Channel Order App Setup & Product Catalog Support)**.
6.  For org ID, provide the ID of your Partner Business Org.
7.  Select an instance type and severity level.
8.  Click **Create Case**.

After your case is reviewed, we send an email with your service order credentials. This process can take a few days. After you receive the email, go back to the COA and use these credentials to connect to Salesforce.

-   [← Previous](atlas.en-us.packagingGuide.meta/packagingGuide/coa_email_service.htm "Assign Channel Order App Permission Sets and Accept the Email Service")
-   [Next →](atlas.en-us.packagingGuide.meta/packagingGuide/coa_import_data.htm "Connect the Channel Order App to Salesforce")

## Related Topics

- ← Previous (atlas.en-us.packagingGuide.meta/packagingGuide/coa_email_service.htm)
- Next → (atlas.en-us.packagingGuide.meta/packagingGuide/coa_import_data.htm)
