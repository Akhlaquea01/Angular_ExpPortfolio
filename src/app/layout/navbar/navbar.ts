import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { LucideMenu, LucideMoon, LucideSun, LucideX } from '@lucide/angular';
import { profile } from '../../../content/profile';
import { ScrollSpy } from '../../core/services/scroll-spy';
import { Theme } from '../../core/services/theme';
import { navSections } from '../../sections/sections.config';
import { Btn } from '../../shared/ui/button/btn';

@Component({
  selector: 'app-navbar',
  imports: [Btn, LucideMenu, LucideX, LucideMoon, LucideSun],
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit, OnDestroy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly scrollSpy = inject(ScrollSpy);
  protected readonly theme = inject(Theme);

  protected readonly profile = profile;
  protected readonly links = navSections;
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);

  get activeId(): string {
    return this.scrollSpy.activeId();
  }

  ngOnInit(): void {
    this.scrollSpy.watch(this.links.map((link) => link.id));
    if (this.isBrowser) {
      this.isScrolled.set(window.scrollY > 12);
    }
  }

  ngOnDestroy(): void {
    this.scrollSpy.destroy();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!this.isBrowser) return;
    this.isScrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
