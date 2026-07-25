import { Component } from '@angular/core';
import { techStack } from '../../../content/tech-stack';
import { TechStackItem } from '../../../content/types';
import { Reveal } from '../../shared/directives/reveal';

interface TechStackGroup {
  category: string;
  items: TechStackItem[];
}

function groupByCategory(items: TechStackItem[]): TechStackGroup[] {
  const groups: TechStackGroup[] = [];
  const index = new Map<string, TechStackGroup>();

  for (const item of items) {
    let group = index.get(item.category);
    if (!group) {
      group = { category: item.category, items: [] };
      index.set(item.category, group);
      groups.push(group);
    }
    group.items.push(item);
  }

  return groups;
}

@Component({
  selector: 'app-tech-stack',
  imports: [Reveal],
  templateUrl: './tech-stack.html',
})
export class TechStack {
  protected readonly groups = groupByCategory(techStack);
}
