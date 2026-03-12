---
title: "Report on Deflections: The Deflection Signals Framework"
domain: communities-dev
topic: report-on-deflections-the-deflection-signals-framework
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:23.522Z
estimatedTokens: 490
keywords: [Report, Deflections, Deflection, Signals, Framework, lightningcommunity, deflectionSignal, event, fired, user, initiates, case, views, item, addresses]
---

# Report on Deflections: The Deflection Signals Framework

> A lightningcommunity:deflectionSignal event is
    fired when a user initiates a case then views a deflection item that addresses their issue and
    causes them to abandon the case.

# Report on Deflections: The Deflection Signals Framework

A lightningcommunity:deflectionSignal event is fired when a user initiates a case then views a deflection item that addresses their issue and causes them to abandon the case.

For example, let’s say a user is filling out a form to create a customer case, and then sees a useful article on the page. After clicking the article, the user finds it helpful and decides that creating a case is unnecessary. A lightningcommunity:deflectionSignal event is then fired. The event includes information about the user’s interaction with the article. The user’s action is reported as a successful deflection because the user didn’t create a case.

You can report on these events through custom report types with the target object Community Case Deflection Metrics. The signal appears in reports as either a Successful Deflection, Failed Deflection, or Potential Deflection.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

Only those lightningcommunity:deflectionSignal events that are triggered by authenticated users are reported.

-   **[Case Create Deflection Signal](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_case_create_deflection.htm)**
    The lightningcommunity:deflectionSignal event is fired in an Aura site when a user is deflected away from creating a customer case. After a user views an article or discussion, they’re asked if the interaction was helpful, and whether they want to abandon their case.

#### See Also

-   [Case Create Deflection Signal](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_case_create_deflection.htm "The lightningcommunity:deflectionSignal event is fired in an Aura site when a user is deflected away from creating a customer case. After a user views an article or discussion, they’re asked if the interaction was helpful, and whether they want to abandon their case.")

## Related Topics

- Case Create Deflection Signal (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_case_create_deflection.htm)
