---
title: "Get a List of Report Types"
domain: api-analytics
topic: get-a-list-of-report-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.651Z
estimatedTokens: 109
keywords: [Report, analytics, notifications]
---

# Get a List of Report Types

> Return a list of analytics notifications using a GET request.

# Get a List of Report Types

Return a list of analytics notifications using a GET request.

Use a GET request on the [Report Type List](atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_list.htm#analytics_api_reporttypes_reference_list "Return a list of report types.") resource to return a list of report types.

Example Usage

/services/data/v39.0/analytics/reportTypes

Example Response Body

```

```

## Code Examples

```
[ {
  "label" : "Accounts & Contacts",
  "reportTypes" : [ {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/AccountList",
    "label" : "Accounts",
    "type" : "AccountList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContactList",
    "label" : "Contacts & Accounts",
    "type" : "ContactList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/AccountPartner",
    "label" : "Accounts with Partners",
    "type" : "AccountPartner"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/AccountTeam",
    "label" : "Account with Account Teams",
    "type" : "AccountTeam"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/AccountContactRole",
    "label" : "Accounts with Contact Roles",
    "type" : "AccountContactRole"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/AccountAsset",
    "label" : "Accounts with Assets",
    "type" : "AccountAsset"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContactAsset",
    "label" : "Contacts with Assets",
    "type" : "ContactAsset"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/AccountAuditHistory",
    "label" : "Account History",
    "type" : "AccountAuditHistory"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContactAuditHistory",
    "label" : "Contact History",
    "type" : "ContactAuditHistory"
  } ]
}, {
  "label" : "Opportunities",
  "reportTypes" : [ {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/Opportunity",
    "label" : "Opportunities",
    "type" : "Opportunity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityProduct",
    "label" : "Opportunities with Products",
    "type" : "OpportunityProduct"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityContact",
    "label" : "Opportunities with Contact Roles",
    "type" : "OpportunityContact"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityPartner",
    "label" : "Opportunities with Partners",
    "type" : "OpportunityPartner"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityCompetitor",
    "label" : "Opportunities with Competitors",
    "type" : "OpportunityCompetitor"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityHistory",
    "label" : "Opportunity History",
    "type" : "OpportunityHistory"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityFieldAuditHistory",
    "label" : "Opportunity Field History",
    "type" : "OpportunityFieldAuditHistory"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityTrend",
    "label" : "Opportunity Trends",
    "type" : "OpportunityTrend"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityContactProduct",
    "label" : "Opportunities with Contact Roles and Products",
    "type" : "OpportunityContactProduct"
  } ]
}, {
  "label" : "Customer Support Reports",
  "reportTypes" : [ {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/CaseList",
    "label" : "Cases",
    "type" : "CaseList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/CaseHistory",
    "label" : "Case Lifecycle",
    "type" : "CaseHistory"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/CaseContactRole",
    "label" : "Cases with Contact Roles",
    "type" : "CaseContactRole"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/CaseAsset",
    "label" : "Cases with Assets",
    "type" : "CaseAsset"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/CaseSolution",
    "label" : "Cases with Solutions",
    "type" : "CaseSolution"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/CaseAuditHistory",
    "label" : "Case History",
    "type" : "CaseAuditHistory"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/SolutionList",
    "label" : "Solutions",
    "type" : "SolutionList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/SolutionCategory",
    "label" : "Solution Categories",
    "type" : "SolutionCategory"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/SolutionAuditHistory",
    "label" : "Solution History",
    "type" : "SolutionAuditHistory"
  } ]
}, {
  "label" : "Leads",
  "reportTypes" : [ {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/LeadList",
    "label" : "Leads",
    "type" : "LeadList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityLead",
    "label" : "Leads with converted lead information",
    "type" : "OpportunityLead"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/LeadAuditHistory",
    "label" : "Lead History",
    "type" : "LeadAuditHistory"
  } ]
}, {
  "label" : "Activities",
  "reportTypes" : [ {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/Activity",
    "label" : "Tasks and Events",
    "type" : "Activity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/EventAttendee",
    "label" : "Events with Invitees",
    "type" : "EventAttendee"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/EmailStatus",
    "label" : "HTML Email Status",
    "type" : "EmailStatus"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/AccountActivity",
    "label" : "Activities with Accounts",
    "type" : "AccountActivity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContactActivity",
    "label" : "Activities with Contacts",
    "type" : "ContactActivity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OpportunityActivity",
    "label" : "Activities with Opportunities",
    "type" : "OpportunityActivity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/LeadActivity",
    "label" : "Activities with Leads",
    "type" : "LeadActivity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/CaseActivity",
    "label" : "Activities with Cases",
    "type" : "CaseActivity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/SolutionActivity",
    "label" : "Activities with Solutions",
    "type" : "SolutionActivity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContractActivity",
    "label" : "Activities with Contracts",
    "type" : "ContractActivity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ProductActivity",
    "label" : "Activities with Products",
    "type" : "ProductActivity"
  } ]
}, {
  "label" : "Contracts and Orders",
  "reportTypes" : [ {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContractList",
    "label" : "Contracts",
    "type" : "ContractList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContractAuditHistory",
    "label" : "Contract History",
    "type" : "ContractAuditHistory"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContractOrder",
    "label" : "Contracts with Orders",
    "type" : "ContractOrder"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContractOrderItem",
    "label" : "Contracts with Orders and Products",
    "type" : "ContractOrderItem"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ContractContactRole",
    "label" : "Contracts with Contact Roles",
    "type" : "ContractContactRole"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OrderList",
    "label" : "Orders",
    "type" : "OrderList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OrderItemList",
    "label" : "Orders with Products",
    "type" : "OrderItemList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/OrderAuditHistory",
    "label" : "Order History",
    "type" : "OrderAuditHistory"
  } ]
}, {
  "label" : "Price Books, Products and Assets",
  "reportTypes" : [ {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ProductList",
    "label" : "Products",
    "type" : "ProductList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ProductOpportunity",
    "label" : "Products with Opportunities",
    "type" : "ProductOpportunity"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/PricebookProduct",
    "label" : "Price Books with Products",
    "type" : "PricebookProduct"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ProductAsset",
    "label" : "Products with Assets",
    "type" : "ProductAsset"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/AssetWithProduct",
    "label" : "Assets",
    "type" : "AssetWithProduct"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/AssetCase",
    "label" : "Assets with Cases",
    "type" : "AssetCase"
  } ]
}, {
  "label" : "Administrative Reports",
  "reportTypes" : [ {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/User",
    "label" : "Users",
    "type" : "User"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/ReportList",
    "label" : "Reports",
    "type" : "ReportList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/DocumentList",
    "label" : "Documents",
    "type" : "DocumentList"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/LoginIpEmail",
    "label" : "New Login Locations",
    "type" : "LoginIpEmail"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/TwoFactorMethodsInfo",
    "label" : "Identity Verification Methods",
    "type" : "TwoFactorMethodsInfo"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/CollabGroup",
    "label" : "Collaboration Group Report",
    "type" : "CollabGroup"
  }, {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/CollabGroupFeedPosts",
    "label" : "Collaboration Group Feed Posts Report",
    "type" : "CollabGroupFeedPosts"
  } ]
}, {
  "label" : "File and Content Reports",
  "reportTypes" : [ {
    "describeUrl" : "/services/data/v39.0/analytics/reportTypes/File",
    "label" : "File and Content Report",
    "type" : "File"
  } ]
} ]
```

## Related Topics

- Report Type List (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_reporttypes_reference_list.htm)
