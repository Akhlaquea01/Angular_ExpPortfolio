import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, PLATFORM_ID, ViewChild, inject, signal } from '@angular/core';
import {
  LucideChevronLeft,
  LucideChevronRight,
  LucideExternalLink,
  LucideGitFork,
  LucideLoaderCircle,
  LucideStar,
} from '@lucide/angular';
import { profile } from '../../../content/profile';
import { projects } from '../../../content/projects';
import { Reveal } from '../../shared/directives/reveal';
import { Badge } from '../../shared/ui/badge';
import { Btn } from '../../shared/ui/button/btn';
import { Card } from '../../shared/ui/card';

interface GithubRepo {
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stars: number;
  forks: number;
}

interface GithubRepoResponse {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

type FetchState = 'loading' | 'ready' | 'empty' | 'error';

const GITHUB_USERNAME = 'Akhlaquea01';

@Component({
  selector: 'app-projects',
  imports: [
    Reveal,
    Card,
    Badge,
    Btn,
    LucideExternalLink,
    LucideStar,
    LucideGitFork,
    LucideChevronLeft,
    LucideChevronRight,
    LucideLoaderCircle,
  ],
  templateUrl: './projects.html',
})
export class Projects {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  @ViewChild('repoScroller') private repoScroller?: ElementRef<HTMLElement>;

  protected readonly projects = projects;
  protected readonly profile = profile;

  protected readonly repos = signal<GithubRepo[]>([]);
  protected readonly state = signal<FetchState>('loading');

  constructor() {
    if (this.isBrowser) {
      this.loadRepos();
    } else {
      // Live GitHub data is a client-only progressive enhancement — never fetched during prerender.
      this.state.set('empty');
    }
  }

  scrollRepos(direction: 'left' | 'right'): void {
    const el = this.repoScroller?.nativeElement;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  }

  private async loadRepos(): Promise<void> {
    // Errors (rate-limited, offline, GitHub down) intentionally collapse to the
    // 'error' state rather than throwing — the curated project cards above still
    // render fine, this strip just quietly hides itself.
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=15`,
      );
      if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);

      const data = (await response.json()) as GithubRepoResponse[];

      const repos = data
        .filter((repo) => !repo.fork && repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 8)
        .map(
          (repo): GithubRepo => ({
            name: repo.name,
            description: repo.description,
            htmlUrl: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
          }),
        );

      this.repos.set(repos);
      this.state.set(repos.length ? 'ready' : 'empty');
    } catch {
      this.state.set('error');
    }
  }
}
