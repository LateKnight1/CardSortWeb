import {Component, HostListener, OnInit} from '@angular/core';
import {SlideInHeader} from '../../core/animations';
import {Event, NavigationStart, Router} from '@angular/router';

type HeaderState = 'in' | 'out' | 'default';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  animations: [SlideInHeader]
})
export class HeaderNavComponent implements OnInit {
  private shouldBeDefault = true;
  public currentState: HeaderState = 'default';
  private innerWidth: any;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((result: Event) => {
      if (result instanceof NavigationStart) {
        this.innerWidth = window.innerWidth;
        this.shouldBeDefault = this.innerWidth >= 992;
        this.currentState = this.shouldBeDefault === true ? 'default' : 'out';
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 992 && this.shouldBeDefault === true) {
      this.shouldBeDefault = false;
      this.toggleMenu(true);
    }
    if (this.innerWidth >= 992 && this.shouldBeDefault === false) {
      this.toggleMenu(true, true);
    }
  }

  toggleMenu(isResizeEvent: boolean, shouldSetToDefault?: boolean): void {
    if (isResizeEvent && this.shouldBeDefault === false && shouldSetToDefault === true) {
      this.currentState = 'default';
      this.shouldBeDefault = true;
      return;
    }
    if (this.currentState === 'default' && this.shouldBeDefault === true) {
      return;
    }
    if (this.currentState === 'default' && this.shouldBeDefault === false && isResizeEvent === true) {
      this.currentState = 'out';
      return;
    }
    if (this.shouldBeDefault === false && !isResizeEvent) {
      this.currentState = this.currentState === 'in' ? 'out' : 'in';
    }
  }
}
