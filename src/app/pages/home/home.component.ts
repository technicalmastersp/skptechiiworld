import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import {
  HERO_HIGHLIGHTS,
  SERVICES,
  PRODUCTS,
  TECH_STACK,
  ABOUT_POINTS,
  STATS,
  TEAM,
  PROCESS_STEPS,
  TESTIMONIALS,
  PRICING_PLANS,
} from '../../core/data/site-data';

@Component({
  selector: 'tn-home',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent, TechBadgeComponent, SectionHeadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  highlights = HERO_HIGHLIGHTS;
  services = SERVICES;
  products = PRODUCTS;
  techStack = TECH_STACK;
  aboutPoints = ABOUT_POINTS;
  stats = STATS;
  team = TEAM;
  processSteps = PROCESS_STEPS;
  testimonials = TESTIMONIALS;
  pricingPlans = PRICING_PLANS;
}
