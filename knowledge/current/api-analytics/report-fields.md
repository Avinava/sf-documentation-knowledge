---
title: "Report Fields"
domain: api-analytics
topic: report-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.787Z
estimatedTokens: 315
keywords: [Report, resource, reports, determine, best, dashboard, filters, seeing, different, source, common, API, version, 40.0, later]
---

# Report Fields

> The Report Fields resource returns report fields available for specified reports. Use
  the resource to determine the best fields for use in dashboard filters by seeing which fields
  different source reports have in common. Available in API version 40.0 and later.

# Report Fields

The Report Fields resource returns report fields available for specified reports. Use the resource to determine the best fields for use in dashboard filters by seeing which fields different source reports have in common. Available in API version 40.0 and later.

## Resource URL

```

```

## Formats

JSON

## HTTP Methods

| Method | Description |
| --- | --- |
| POST | If the request body is empty, returns a list of all possible report fields. Otherwise, returns a list of fields that specified reports share. |

## POST Request Body

| Property | Type | Description |
| --- | --- | --- |
| intersectWith | Array of Report IDs | An array of unique report IDs. |

## POST Response Body

| Property | Type | Description |
| --- | --- | --- |
| displayGroups | Array of Fields | Fields available when adding a filter. |
| equivalentFields | Array of Fields | Fields available for each specified report. Each object in this array is a list of common fields categorized by report type. |
| equivalentFieldIndices | Map of Fields | Map of each field’s API name to the index of the field in the equivalentFields array. |
| mergedGroups | Array of Fields | Merged fields. |

## Example Request Body

```

```

## Example Response Body

```

```

## Code Examples

```
/services/data/<latest API version>/analytics/reports/<report ID>/fields
```

```
{
   "intersectWith": ["00OR0000000P3RVMA0"]
}
```

```
{
  "displayGroups" : {
    "Opportunity" : [ {
      "columns" : {
        "ACCOUNT_CREATED_DATE" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Account: Created Date",
          "maxLength" : null
        },
        "ACCOUNT_LAST_ACTIVITY" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Account: Last Activity",
          "maxLength" : null
        },
        "ACCOUNT_LAST_UPDATE" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Account: Last Modified Date",
          "maxLength" : null
        },
        "ACCOUNT_OWNER" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Account Owner",
          "maxLength" : null
        },
        "ACCOUNT_OWNER_ALIAS" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : true,
          "label" : "Account Owner Alias",
          "maxLength" : 8
        }
      },
      "label" : "Account: General",
      "labelSuffix" : "(Opportunities)"
    }, {
      "columns" : {
        "CLOSE_DATE" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Close Date",
          "maxLength" : null
        },
        "CLOSE_DATE2" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Close Date (2)",
          "maxLength" : null
        },
        "CLOSE_MONTH" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Close Month",
          "maxLength" : null
        },
        "CREATED_ALIAS" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : true,
          "label" : "Created Alias",
          "maxLength" : 8
        },
        "CREATED" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Created By",
          "maxLength" : null
        },
        "CREATED_DATE" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Created Date",
          "maxLength" : null
        },
        "LAST_ACTIVITY" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Last Activity",
          "maxLength" : null
        },
        "LAST_UPDATE_BY_ALIAS" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : true,
          "label" : "Last Modified Alias",
          "maxLength" : 8
        },
        "LAST_UPDATE_BY" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Last Modified By",
          "maxLength" : null
        },
        "LAST_UPDATE" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Last Modified Date",
          "maxLength" : null
        },
        "LAST_STAGE_CHANGE_DATE" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Last Stage Change Date",
          "maxLength" : null
        }
      },
      "label" : "Opportunity Information",
      "labelSuffix" : "(Opportunities)"
    }, {
      "columns" : {
        "FULL_NAME" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Opportunity Owner",
          "maxLength" : null
        },
        "OWNER_MANAGER" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Opportunity Owner: Manager",
          "maxLength" : null
        },
        "ALIAS" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : true,
          "label" : "Opportunity Owner Alias",
          "maxLength" : 8
        },
        "ROLLUP_DESCRIPTION" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : true,
          "label" : "Owner Role",
          "maxLength" : 80
        }
      },
      "label" : "Opportunity Owner Information",
      "labelSuffix" : "(Opportunities)"
    } ],
    "LeadList" : [ {
      "columns" : {
        "EMAIL_BOUNCED_DATE" : {
          "dataType" : "datetime",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Email Bounced Date",
          "maxLength" : null
        }
      },
      "label" : "Lead: Ph/Fax/Email",
      "labelSuffix" : "(Leads)"
    }, {
      "columns" : {
        "CREATED_ALIAS" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : true,
          "label" : "Created Alias",
          "maxLength" : 8
        },
        "CREATED_DATE" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Create Date",
          "maxLength" : null
        },
        "CREATED" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Created By",
          "maxLength" : null
        },
        "CREATED_MONTH" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Created Month",
          "maxLength" : null
        },
        "LAST_ACTIVITY" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Last Activity",
          "maxLength" : null
        },
        "LAST_UPDATE" : {
          "dataType" : "date",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Last Modified",
          "maxLength" : null
        },
        "LAST_UPDATE_BY_ALIAS" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : true,
          "label" : "Last Modified Alias",
          "maxLength" : 8
        },
        "LAST_UPDATE_BY" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : false,
          "label" : "Last Modified By",
          "maxLength" : null
        },
        "OWNER_ROLE_DISPLAY" : {
          "dataType" : "string",
          "filterValues" : [ ],
          "filterable" : true,
          "isLookup" : true,
          "label" : "Owner Role Display",
          "maxLength" : 80
        }
      },
      "label" : "Lead General",
      "labelSuffix" : "(Leads)"
    } ]
  },
  "equivalentFieldIndices" : {
    "ACCOUNT_CREATED_DATE" : 19,
    "ACCOUNT_LAST_UPDATE" : 19,
    "ACCOUNT_OWNER" : 15,
    "CREATED_ALIAS" : 16,
    "CREATED_DATE" : 19,
    "LAST_UPDATE_BY_ALIAS" : 16,
    "ALIAS" : 16,
    "EMAIL_BOUNCED_DATE" : 19,
    "CLOSE_MONTH" : 17,
    "LAST_UPDATE_BY" : 15,
    "CREATED_MONTH" : 17,
    "LAST_ACTIVITY" : 17,
    "ACCOUNT_LAST_ACTIVITY" : 17,
    "CLOSE_DATE" : 17,
    "CREATED" : 15,
    "LAST_UPDATE" : 19,
    "CLOSE_DATE2" : 17,
    "OWNER_MANAGER" : 15,
    "LAST_STAGE_CHANGE_DATE" : 19,
    "ROLLUP_DESCRIPTION" : 7,
    "FULL_NAME" : 15,
    "ACCOUNT_OWNER_ALIAS" : 16,
    "OWNER_ROLE_DISPLAY" : 7
  },
  "equivalentFields" : [ {
    "LeadList" : [ {
      "name" : "CREATED"
    }, {
      "name" : "LAST_UPDATE_BY"
    } ],
    "Opportunity" : [ {
      "name" : "CREATED"
    }, {
      "name" : "LAST_UPDATE_BY"
    }, {
      "name" : "FULL_NAME"
    }, {
      "name" : "OWNER_MANAGER"
    }, {
      "name" : "ACCOUNT_OWNER"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED_ALIAS"
    }, {
      "name" : "LAST_UPDATE_BY_ALIAS"
    } ],
    "Opportunity" : [ {
      "name" : "CREATED_ALIAS"
    }, {
      "name" : "LAST_UPDATE_BY_ALIAS"
    }, {
      "name" : "ALIAS"
    }, {
      "name" : "ACCOUNT_OWNER_ALIAS"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "LAST_UPDATE_BY"
    }, {
      "name" : "CREATED"
    } ],
    "Opportunity" : [ {
      "name" : "LAST_UPDATE_BY"
    }, {
      "name" : "CREATED"
    }, {
      "name" : "FULL_NAME"
    }, {
      "name" : "OWNER_MANAGER"
    }, {
      "name" : "ACCOUNT_OWNER"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "LAST_UPDATE_BY_ALIAS"
    }, {
      "name" : "CREATED_ALIAS"
    } ],
    "Opportunity" : [ {
      "name" : "LAST_UPDATE_BY_ALIAS"
    }, {
      "name" : "CREATED_ALIAS"
    }, {
      "name" : "ALIAS"
    }, {
      "name" : "ACCOUNT_OWNER_ALIAS"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED_DATE"
    }, {
      "name" : "LAST_UPDATE"
    }, {
      "name" : "EMAIL_BOUNCED_DATE"
    } ],
    "Opportunity" : [ {
      "name" : "CREATED_DATE"
    }, {
      "name" : "LAST_STAGE_CHANGE_DATE"
    }, {
      "name" : "LAST_UPDATE"
    }, {
      "name" : "ACCOUNT_CREATED_DATE"
    }, {
      "name" : "ACCOUNT_LAST_UPDATE"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED_MONTH"
    }, {
      "name" : "LAST_ACTIVITY"
    } ],
    "Opportunity" : [ {
      "name" : "CLOSE_DATE"
    }, {
      "name" : "CLOSE_DATE2"
    }, {
      "name" : "CLOSE_MONTH"
    }, {
      "name" : "LAST_ACTIVITY"
    }, {
      "name" : "ACCOUNT_LAST_ACTIVITY"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "LAST_UPDATE"
    }, {
      "name" : "CREATED_DATE"
    }, {
      "name" : "EMAIL_BOUNCED_DATE"
    } ],
    "Opportunity" : [ {
      "name" : "LAST_UPDATE"
    }, {
      "name" : "LAST_STAGE_CHANGE_DATE"
    }, {
      "name" : "CREATED_DATE"
    }, {
      "name" : "ACCOUNT_CREATED_DATE"
    }, {
      "name" : "ACCOUNT_LAST_UPDATE"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "OWNER_ROLE_DISPLAY"
    } ],
    "Opportunity" : [ {
      "name" : "ROLLUP_DESCRIPTION"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "LAST_ACTIVITY"
    }, {
      "name" : "CREATED_MONTH"
    } ],
    "Opportunity" : [ {
      "name" : "LAST_ACTIVITY"
    }, {
      "name" : "CLOSE_DATE"
    }, {
      "name" : "CLOSE_DATE2"
    }, {
      "name" : "CLOSE_MONTH"
    }, {
      "name" : "ACCOUNT_LAST_ACTIVITY"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "EMAIL_BOUNCED_DATE"
    }, {
      "name" : "CREATED_DATE"
    }, {
      "name" : "LAST_UPDATE"
    } ],
    "Opportunity" : [ {
      "name" : "LAST_STAGE_CHANGE_DATE"
    }, {
      "name" : "CREATED_DATE"
    }, {
      "name" : "LAST_UPDATE"
    }, {
      "name" : "ACCOUNT_CREATED_DATE"
    }, {
      "name" : "ACCOUNT_LAST_UPDATE"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "LAST_ACTIVITY"
    }, {
      "name" : "CREATED_MONTH"
    } ],
    "Opportunity" : [ {
      "name" : "CLOSE_DATE2"
    }, {
      "name" : "CLOSE_DATE"
    }, {
      "name" : "CLOSE_MONTH"
    }, {
      "name" : "LAST_ACTIVITY"
    }, {
      "name" : "ACCOUNT_LAST_ACTIVITY"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "LAST_ACTIVITY"
    }, {
      "name" : "CREATED_MONTH"
    } ],
    "Opportunity" : [ {
      "name" : "CLOSE_MONTH"
    }, {
      "name" : "CLOSE_DATE"
    }, {
      "name" : "CLOSE_DATE2"
    }, {
      "name" : "LAST_ACTIVITY"
    }, {
      "name" : "ACCOUNT_LAST_ACTIVITY"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED"
    }, {
      "name" : "LAST_UPDATE_BY"
    } ],
    "Opportunity" : [ {
      "name" : "FULL_NAME"
    }, {
      "name" : "CREATED"
    }, {
      "name" : "LAST_UPDATE_BY"
    }, {
      "name" : "OWNER_MANAGER"
    }, {
      "name" : "ACCOUNT_OWNER"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED_ALIAS"
    }, {
      "name" : "LAST_UPDATE_BY_ALIAS"
    } ],
    "Opportunity" : [ {
      "name" : "ALIAS"
    }, {
      "name" : "CREATED_ALIAS"
    }, {
      "name" : "LAST_UPDATE_BY_ALIAS"
    }, {
      "name" : "ACCOUNT_OWNER_ALIAS"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED"
    }, {
      "name" : "LAST_UPDATE_BY"
    } ],
    "Opportunity" : [ {
      "name" : "OWNER_MANAGER"
    }, {
      "name" : "CREATED"
    }, {
      "name" : "LAST_UPDATE_BY"
    }, {
      "name" : "FULL_NAME"
    }, {
      "name" : "ACCOUNT_OWNER"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED"
    }, {
      "name" : "LAST_UPDATE_BY"
    } ],
    "Opportunity" : [ {
      "name" : "ACCOUNT_OWNER"
    }, {
      "name" : "CREATED"
    }, {
      "name" : "LAST_UPDATE_BY"
    }, {
      "name" : "FULL_NAME"
    }, {
      "name" : "OWNER_MANAGER"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED_ALIAS"
    }, {
      "name" : "LAST_UPDATE_BY_ALIAS"
    } ],
    "Opportunity" : [ {
      "name" : "ACCOUNT_OWNER_ALIAS"
    }, {
      "name" : "CREATED_ALIAS"
    }, {
      "name" : "LAST_UPDATE_BY_ALIAS"
    }, {
      "name" : "ALIAS"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "LAST_ACTIVITY"
    }, {
      "name" : "CREATED_MONTH"
    } ],
    "Opportunity" : [ {
      "name" : "ACCOUNT_LAST_ACTIVITY"
    }, {
      "name" : "CLOSE_DATE"
    }, {
      "name" : "CLOSE_DATE2"
    }, {
      "name" : "CLOSE_MONTH"
    }, {
      "name" : "LAST_ACTIVITY"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED_DATE"
    }, {
      "name" : "LAST_UPDATE"
    }, {
      "name" : "EMAIL_BOUNCED_DATE"
    } ],
    "Opportunity" : [ {
      "name" : "ACCOUNT_CREATED_DATE"
    }, {
      "name" : "LAST_STAGE_CHANGE_DATE"
    }, {
      "name" : "CREATED_DATE"
    }, {
      "name" : "LAST_UPDATE"
    }, {
      "name" : "ACCOUNT_LAST_UPDATE"
    } ]
  }, {
    "LeadList" : [ {
      "name" : "CREATED_DATE"
    }, {
      "name" : "LAST_UPDATE"
    }, {
      "name" : "EMAIL_BOUNCED_DATE"
    } ],
    "Opportunity" : [ {
      "name" : "ACCOUNT_LAST_UPDATE"
    }, {
      "name" : "LAST_STAGE_CHANGE_DATE"
    }, {
      "name" : "CREATED_DATE"
    }, {
      "name" : "LAST_UPDATE"
    }, {
      "name" : "ACCOUNT_CREATED_DATE"
    } ]
  } ],
  "mergedGroups" : { }
}
```
