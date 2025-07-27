## Refund Policy

All customers have 30 days from purchase to request a refund.

{% if audience == "internal" or audience == "all" %}
<span style="font-size: 1em; font-weight: normal;">
INTERNAL AUDIENCE CONTENT: VIP refunds require director approval and should be logged in Salesforce.
</span>
{% endif %}

{% if audience == "partner" or audience == "all" %}
<span style="font-size: 1em; font-weight: normal;">
PARTNER AUDIENCE CONTENT: Please coordinate client refund requests with your ACME account manager.
</span>
{% endif %}

{% if audience == "customer" or audience == "all" %}
<span style="font-size: 1em; font-weight: normal;">
CUSTOMER AUDIENCE CONTENT: For any refund, contact our customer support team at support@acme.com.
</span>
{% endif %}
