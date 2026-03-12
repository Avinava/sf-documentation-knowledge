---
title: "TPM_RTRReportingWrapper_AMS (Base Class)"
domain: cgcloud-rtr-dev-guide
topic: tpmrtrreportingwrapperams-base-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.444Z
estimatedTokens: 231
keywords: [TPM_RTRReportingWrapper_AMS, Base, structures, load, input, KPIs, filter, criteria, chose, report—selected, time, frame, customers, products, Depending, Apex, receives, payload, that's, constructed]
---

# TPM_RTRReportingWrapper_AMS (Base Class)

> TPM_RTRReportingWrapper_AMS is a base class that
    contains the structures to load the input. This class contains the list of KPIs and filter
    criteria that you chose in the report—selected time frame or the list of customers and products.
    Depending on various use cases, the payload method can
    contain different attributes.

# TPM\_RTRReportingWrapper\_AMS (Base Class)

TPM\_RTRReportingWrapper\_AMS is a base class that contains the structures to load the input. This class contains the list of KPIs and filter criteria that you chose in the report—selected time frame or the list of customers and products. Depending on various use cases, the payload method can contain different attributes.

The OutputRecord method returns product (pdim), KPI (kdim), time (tdim), and values (v). The values are defined in the actual logic class, which is TPM\_RTRFunds\_AMS in this use case. For example, you can use tdim to display values on a more granular view—weeks, months, or quarters. If a report meta has monthly values, the external datasource can also provide monthly values.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cgcloud_rtr_dev_guide)

#### Note

Ensure that kdim contains the name of the fund KPI.

```

```

## Code Examples

```apex
Sample Code

global with sharing class TPM_RTRReportingWrapper_AMS
{
global class PeriodMonth {
global Integer year;
global Integer start;
global Integer total;
}
global class InputPayload{
global List <String> accountsfids;
global List <String> productsfids;
global PeriodMonth periodmonth;
global List <String> kpis;
global String responsetype;
global String callingsfuser;
}
global class OutputRecord{
global String pdim;
global String kdim;
global String tdim;
global Double v;
global OutputRecord( String pdim, String kdim , String tdim , Double v){
this.pdim = pdim;
this.kdim = kdim;
this.tdim = tdim;
this.v = v;
}
}
}
```

```apex
Sample Code

global with sharing class TPM_RTRReportingWrapper_AMS {
global class Periodmonth {
global Integer year;
global Integer start;
global Integer total;
}
global class InputPayload {
global List<String> accountsfids;
global List<String> productsfids;
global Periodmonth periodmonth;
global String timelevel;
global List<String> readproductsfids;
global List<String> kpis;
global String responsetype;
global Boolean error;
}
global class OutputRecord {
global String pdim;
global String kdim;
global String tdim;
global Double v;
global OutputRecord(String pdim, String kdim, String tdim, Double v) {
this.pdim = pdim;
this.kdim = kdim;
this.tdim = tdim;
this.v = v;
}
}
}
```
