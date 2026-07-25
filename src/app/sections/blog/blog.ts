import { Component } from '@angular/core';
import { blogPosts } from '../../../content/blog';
import { Reveal } from '../../shared/directives/reveal';
import { Card } from '../../shared/ui/card';

// Disabled by default in sections.config.ts until content/blog.ts has real posts.
@Component({
  selector: 'app-blog',
  imports: [Reveal, Card],
  templateUrl: './blog.html',
})
export class Blog {
  protected readonly posts = blogPosts;
}
