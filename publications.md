---
layout: default
title: Publications
---

<div class="container">
    <h1 class="mb-4">Publications</h1>

    <div class="publications-list">
        {% assign sorted_pubs = site.publications | sort: 'date' | reverse %}
        {% for pub in sorted_pubs %}
        <div class="publication mb-4">
            <h3>{{ pub.title }}</h3>
            <p class="authors">{{ pub.authors }}</p>
            <p class="venue">
                <em>{{ pub.journal }}</em>
                {% if pub.volume %}
                , Volume {{ pub.volume }}
                {% endif %}
                {% if pub.number %}
                , Number {{ pub.number }}
                {% endif %}
                {% if pub.pages %}
                , Pages {{ pub.pages }}
                {% endif %}
                ({{ pub.date | date: "%Y" }})
            </p>
            
            {% if pub.abstract %}
            <div class="abstract mt-3">
                <h5>Abstract</h5>
                <p>{{ pub.abstract }}</p>
            </div>
            {% endif %}

            <div class="links mt-3">
                {% if pub.pdf %}
                <a href="{{ pub.pdf }}" class="btn btn-sm btn-outline-primary me-2" target="_blank">
                    <i class="fas fa-file-pdf"></i> PDF
                </a>
                {% endif %}
                {% if pub.doi %}
                <a href="https://doi.org/{{ pub.doi }}" class="btn btn-sm btn-outline-secondary me-2" target="_blank">
                    <i class="fas fa-external-link-alt"></i> DOI
                </a>
                {% endif %}
                {% if pub.arxiv %}
                <a href="{{ pub.arxiv }}" class="btn btn-sm btn-outline-info me-2" target="_blank">
                    <i class="fas fa-archive"></i> arXiv
                </a>
                {% endif %}
                {% if pub.code %}
                <a href="{{ pub.code }}" class="btn btn-sm btn-outline-dark me-2" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>
                {% endif %}
            </div>
        </div>
        {% endfor %}
    </div>
</div> 