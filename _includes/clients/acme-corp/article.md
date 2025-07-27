## Refund Policy

All customers have 30 days from purchase to request a refund.

{% if audience == "internal" or audience == "all" %}
---
INTERNAL AUDIENCE CONTENT:
VIP refunds require director approval and should be logged in Salesforce.
---
{% endif %}

{% if audience == "partner" or audience == "all" %}
---
PARTNER AUDIENCE CONTENT:
Please coordinate client refund requests with your ACME account manager.
---
{% endif %}

{% if audience == "customer" or audience == "all" %}
---
CUSTOMER AUDIENCE CONTENT:
For any refund, contact our customer support team at support@acme.com.
---
{% endif %}
