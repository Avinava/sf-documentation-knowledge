---
title: "Create Proxy Signups for OAuth and API Access"
domain: packagingGuide
topic: create-proxy-signups-for-oauth-and-api-access
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.436Z
estimatedTokens: 1386
keywords: [Proxy, Signups, OAuth, API, Access, SignupRequest, programmatically, org, any, system-generated, emails, sent, user]
---

# Create Proxy Signups for OAuth and API Access

> Using the SignupRequest object, you can programmatically create an org without any
    system-generated emails being sent to the user.

# Create Proxy Signups for OAuth and API Access

Using the SignupRequest object, you can programmatically create an org without any system-generated emails being sent to the user.


| User Permissions Needed |
| --- |
| To create or view signup requests: | Signup Request API |

You can then obtain an OAuth access token to log in to the org and make API requests from it, without any action by the user. This proxy signup lets you create and operate the org on the user’s behalf, without their knowledge that you’re using Salesforce behind the scenes.

In the traditional signup process, when you create an org, the user receives a system-generated email containing the login URL and initial password. The user then has to log in and explicitly grant you API access to make calls into the org on their behalf. With proxy signup, you get API access without those traditional steps.

The ability to create and manage orgs by proxy expands your options for integrating Salesforce with external applications on other platforms. It enables you to incorporate any feature of the Lightning Platform into your own application, without exposing the Salesforce user interface (UI). All Salesforce features can be decoupled from the UI and are available to integrate into any other application runtime or UI in a seamless and invisible way.

For example, suppose that an ISV has a web application, built on the .NET platform, that helps companies manage travel expense reporting and reimbursement for employees. Let’s say the ISV wants to integrate Chatter into its application, so all employees of a company can share feedback and tips about their travel experiences. The ISV can use the appropriate Salesforce APIs to implement the following solution.The ISV can provide its customers access to Chatter functionality, without having to develop it from scratch. The ISV’s customers experience Chatter as a natural extension of the existing application, in an interface they’re familiar with. They don’t have to know about or log in to Salesforce. The same approach can be extended to any other feature of Salesforce, including standard and custom objects, Apex, and Visualforce. Proxy signup gives ISVs the ability to consume Salesforce as a service, integrating its features into applications on any platform, without exposing the Salesforce UI. The potential applications are limited only by the ISV’s imagination.

-   Use proxy signup to create a Salesforce org for each of its customers.
-   Create users in each customer org for all employees of that company.
-   Set up and maintain a Chatter group for sharing travel information.
-   Monitor each user’s Chatter feed and extract information from individual posts.
-   Insert the information into its application, and display it in the existing UI.

1.  To create a proxy signup, log in to a Developer Edition org (which has the Connected Apps user permission enabled by default).
2.  In Lightning Experience, from **Setup**, enter App Manager in the Quick Find box, then click **New Connected App**. (If your org uses Salesforce Classic, go to **Setup**, enter Apps in the Quick Find box. Under Build. select**Apps**. Under Connected Apps, click **New**.)
3.  Enter values for the required fields. Specify an X.509 certificate and grant full and refresh token access for the OAuth scopes in the "Selected OAuth Scopes" selector. The callback URL is required but can initially be set to any valid URL as it's not used. Click **Save** when you’re done.
4.  Record the value of Consumer Key on the same page. Also, click **Click to reveal** and record the value of Consumer Secret.
5.  Package the Connected App by adding it as a component to a new package. Record the Installation URL value for the package.
6.  Log in to your Trialforce Management org and create a Trialforce Source org from it.
7.  Log in to your Trialforce Source org and install the package containing the Connected App, using the installation URL.
8.  After the Connected App is installed in the Trialforce Source org, you can customize it from Setup by entering Manage Applications in the Quick Find box, then selecting **Manage Applications**. You can see the Connected App and can edit its attributes. Specify the appropriate profiles and permission sets. Choose the option **Admin approved users are pre-authorized** in the OAuth policies section to ensure you can authenticate into the org on behalf of users with these criteria.
9.  Once you’ve configured the Trialforce Source org to your requirements, create a Trialforce template from it. Select the **All Setup and Data** radio button when creating the Trialforce template.
10.  File a case in the [Partner Community](https://partners.salesforce.com "HTML (New Window)") to get approval for creating signups using the template.
11.  Once the template is approved, you can sign up a new org using the SignupRequest object. Specify the OAuth values necessary to connect to the org, that is: Consumer Key and Callback URL.

     ```

     ```


When the ConnectedAppConsumerKey and ConnectedAppCallbackUrl fields are specified in the SignupRequest object, a proxy signup flow is triggered to automatically approve an existing Connected App for use in this org. In that flow, no signup-related emails are sent to the user. With knowledge of the admin username, consumer key and consumer secret, you now have all the information required to:

-   make API requests to the org as an admin user of that org.
-   request an updated access token at any time in the future.

## Code Examples

```
POST https://mycompany-tmo.salesforce.com/services/data/v27.0/sobjects/SignupRequest/
Authorization Bearer 
  <SALESFORCE_ACCESS_TOKEN>
    XrksSniyjom9kXfDac4UP.m9FApjTw9ukJfKqWuD8pA9meeLaltRmNFvPqUn7
Content-Type application/json Body:
{    "TemplateId":"0TT000000000001",
     "SignupEmail":"john.smith@mycompany.com",
     "Username":"gm@trial1212.org",
     "Country":"US", 
     "Company":"salesforce.com",
     "LastName":"Smith",
     "ConnectedAppConsumerKey":
      "3MVG9AOp4kbriZOLfSVjG2Pxa3cJ_nOkwhxL1J1AuV22u8bm82FtDtWFVV__
         Vs6mvqoVbAnwsChp9YT4bfrYu",
     "ConnectedAppCallbackUrl":
       "https%3A%2F%2Fwww.mysite.com%2Fcode_callback.jsp" }
```
