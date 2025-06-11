---
layout: default
title: Projects
---

<div class="container">
    <h1 class="mb-4">Projects</h1>

    <div class="row">
        {% assign sorted_projects = site.projects | sort: 'date' | reverse %}
        {% for project in sorted_projects %}
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 project-card">
                {% if project.image %}
                <img src="{{ project.image | relative_url }}" class="card-img-top" alt="{{ project.title }}">
                {% endif %}
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    {% if project.technologies %}
                    <div class="mb-3">
                        {% for tech in project.technologies %}
                        <span class="badge bg-secondary me-1">{{ tech }}</span>
                        {% endfor %}
                    </div>
                    {% endif %}
                </div>
                <div class="card-footer bg-transparent">
                    {% if project.github %}
                    <a href="{{ project.github }}" class="btn btn-sm btn-outline-dark me-2" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    {% endif %}
                    {% if project.demo %}
                    <a href="{{ project.demo }}" class="btn btn-sm btn-outline-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                    {% endif %}
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</div> 