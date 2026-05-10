---
title: "About the Apex Debugging Log File"
domain: revenue-cloud
topic: about-the-apex-debugging-log-file
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:02.134Z
estimatedTokens: 133
keywords: [Apex, Debugging, Log, File, three, sections, RLM_CONFIGURATOR_BEGIN, RLM_CONFIGURATOR_STATS, RLM_CONFIGURATOR_END, RLM, _CONFIGURATOR, _BEGIN, _STATS, _END]
---

> The Apex debugging log file contains three sections: RLM_CONFIGURATOR_BEGIN,
    RLM_CONFIGURATOR_STATS, and RLM_CONFIGURATOR_END.

# About the Apex Debugging Log File

The Apex debugging log file contains three sections: RLM\_CONFIGURATOR\_BEGIN, RLM\_CONFIGURATOR\_STATS, and RLM\_CONFIGURATOR\_END.

## RLM\_CONFIGURATOR\_BEGIN

JSON representation of the request payload to ExecuteConstraintsRESTService.

```

```

## RLM\_CONFIGURATOR\_STATS

Key statistics of the request execution by the constraint engine, as in this example.

```

```

## RLM\_CONFIGURATOR\_END

JSON representation of the response payload from ExecuteConstraintsRESTService.

```

```

## Code Examples

```
"contextProperties" : { },
"rootLineItems" : [ {
  "attributes" : { },
  "properties" : {  },
  "ruleActions" : null,
  "attributeDomains" : { },
  "portDomainsToHide" : { },
  "lineItems" : [ {} ]
} ],
"orgId" : "00Dxx0000006H2F"
}
```

```
"rootId" : "0QLxx0000004D1uGAE",  //Root ID that is being configured
"Product" : "SFDC License",  //Root product name
"Total Execution Time" : "2ms",  //Total solver time
"Constraints Execution Stats" : "Distinct: 18 Total: 70",  //Number of distinct and total constraint satisfaction attempts
"Solving goal AndGoal([ConfigureComponentGoal(RootProduct RootProduct_0)]) took " : "2ms",  //Total solver time for the goal
"Configurator Stats" : "Total Time 2ms",  //Total time
"Number of Component" : "6",  //Number of components instantiated
"Number of Variables" : "42",  //Number of variables instantiated
"Number of Constraints" : "13",  //Number of constraints instantiated
"Number of Backtracks" : "0",  //Number of backtracks solver did for the last choice point
"Constraints Violation Stats" : "Distinct: 0 Total: 0",  //Distinct and total number of constraint violations followed by a list of top 10
"ChoicePoint Backtracking Stats" : "Distinct: 0 Total: 0"  // Distinct and total number of backtracked choice points followed by a list of top 10
}
```

```
"id" : "0QLxx0000004D1uGAE",
"rootId" : null,
"parentId" : null,
"cfgStatus" : "User",
"name" : "RootProduct",
"relation" : null,
"source" : "SalesTransaction.SalesTransactionItem",
"qty" : 1,
"actionCode" : null,
"modelName" : "Support_instance_variable_in_CML",
"productId" : "01txx0000006iP2AAI",
"productRelatedComponentId" : null,
"attributes" : {},  "properties" : {},
"ruleActions" : [ {} ],   "attributeDomains" : {},  "portDomainsToHide" : {},
"lineItems" : [ {} ]
}
```
