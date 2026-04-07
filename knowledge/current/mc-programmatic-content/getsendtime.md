---
title: "GetSendTime"
domain: mc-programmatic-content
topic: getsendtime
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.376Z
estimatedTokens: 435
keywords: [GetSendTime, Function, Ordinal, Determines, whether, show, send, time, subscribers, job, data, extension, start, **Overview**, **Syntax**]
---

# GetSendTime

> GetSendTime(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    boolean
    
    Determines whether to show the same send time for all subscribers in a job. For list or data extension sends, a value of true returns the job start time.

# GetSendTime

## **Overview**

After a list, data extension (DE), or manual send, GetSendTime returns either the date and time that the send started or the date and time that the send is completed for the individual subscriber. After a triggered or journey send, this function returns either the date and time that the send was published or the date and time that the send was completed for the individual subscriber. GetSendTime is in Central Standard Time (CST) without daylight saving time.

### **Syntax**

GetSendTime(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | boolean |  | Determines whether to show the same send time for all subscribers in a job. For list or data extension sends, a value of true returns the job start time. For triggered or journey sends, a value of true returns the publish time. |

### Usage

Review what Now() and GetSendTime() return in different situations.

|  | During a send | After a list, DE, or manual send | After a triggered or journey send |
| --- | --- | --- | --- |
| Now() | Current system time | Current system time | Current system time |
| Now(1) | Current system time | Job start time | Job publish time |
| GetSendTime() | Current system time | Individual subscriber send completed time | Individual subscriber send completed time |
| GetSendTime(1) | Current system time | Job start time | Job publish time |

Given that the send started at this date and time: 10 a.m., April 1, 2019.

```
GetSendTime()
```

System returns:

```
4/1/2019  10:00:00
```

Given that the send is completed for the individual subscriber at this date and time: 10 a.m., March 1, 2019.

```
GetSendTime(1)
```

System returns:

```
3/1/2019  10:00:00
```

Last Updated: Jun 8, 2021
