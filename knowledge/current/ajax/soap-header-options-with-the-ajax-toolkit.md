---
title: "SOAP Header Options with the AJAX Toolkit"
domain: ajax
topic: soap-header-options-with-the-ajax-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.603Z
estimatedTokens: 1015
keywords: [SOAP, Options, AJAX, Toolkit, API, they, differently, Specifying]
---

# SOAP Header Options with the AJAX Toolkit

> All header options in the SOAP API are supported in the toolkit, but they are specified
                differently than in the API.

# SOAP Header Options with the AJAX Toolkit

All header options in the SOAP API are supported in the toolkit, but they are specified differently than in the API.

## Syntax for Specifying Header Options

-   For headers that have only one option such as queryOptions:

    ```

    ```

-   For headers that have more than one option such as assignmentRuleHeader:

    ```

    ```


## Valid Options

Here's each valid option, organized by its corresponding SOAP header name in the API for your reference.

-   From the assignmentRuleHeader:

    assignmentRuleId

    ID of a specific assignment rule to run for the case or lead. Can be an inactive assignment rule. The ID can be retrieved by querying the AssignmentRule object. If specified, do not specify useDefaultRule. This element is ignored for accounts, because all territory assignment rules are applied. If the value is not in correct ID format (15-character or 18-character Salesforce ID), the call fails and a MALFORMED\_ID exception is returned.

    useDefaultRule

    If true for a Case or Lead, uses the default (active) assignment rule for a Case or Lead. If specified, do not specify an assignmentRuleId. If true for an Account, all territory assignment rules are applied, and if false, no territory assignment rules are applied.

-   From callOptions:

    client

    A string that identifies a particular client.

    defaultNamespace

    A string that identifies a developer namespace prefix.

-   From emailHeader:

    triggerAutoResponseEmail

    Indicates whether to trigger auto-response rules (true) or not (false), for leads and cases. In the Salesforce user interface, this email can be automatically triggered by a number of events, for example resetting a user password.

    triggerOtherEmail

    Indicates whether to trigger email outside the organization (true) or not (false). In the Salesforce user interface, this email can be automatically triggered by creating, editing, or deleting a contact for a case.

    triggerUserEmail

    Indicates whether to trigger email that is sent to users in the organization (true) or not (false). In the Salesforce user interface, this email can be automatically triggered by a number of events; resetting a password, creating a new user, adding comments to a case, or creating or modifying a task.

-   From loginScopeHeader:

    organizationId

    The ID of the organization against which you will authenticate Self-Service users.

    portalId

    Specify only if user is a Customer Portal user. The ID of the portal for this organization. The ID is available in the Salesforce user interface:

    -   From Setup, enter Customer Portal Settings in the Quick Find box, then select **Customer Portal Settings**
    -   Select a Customer Portal name, and on the Customer Portal detail page, the URL of the Customer Portal displays. The Portal ID is in the URL.

-   From mruHeader:

    updateMru

    Indicates whether to update the list of most recently used items (true) or not (false). For retrieve, if the result has only one row, MRU is updated to the ID of the retrieve result. For query, if the result has only one row and the ID field is selected, the MRU is updated to the ID of the query result.

-   From queryOptions:

    batchSize

    Batch size for the number of records returned in a query or queryMore call. Child objects count toward the number of records for the batch size. For example, in relationship queries, multiple child objects may be returned per parent row returned. The default is 500; the minimum is 200, and the maximum is 2,000.

-   From sessionHeader:

    sessionId

    Session ID returned by the login call to be used for subsequent call authentication. Since session management is done for you by the AJAX Toolkit, most scripts won't need to use this header option.

-   From userTerritoryDeleteHeader:

    transferToUserId

    The ID of the user to whom open opportunities in that user's territory will be assigned when an opportunity's owner (user) is removed from a territory.

## Code Examples

```
sforce.connection.header_option_name="value";
```

```
sforce.connection.header_name = {}
sforce.connection.header_name.header_option_name="value";
```
