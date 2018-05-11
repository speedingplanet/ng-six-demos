import { Component } from '@angular/core';

@Component( {
  selector : 'app-root',
  template : `
    <main class="container">
      <header>
        <h1>Welcome to demos for Angular 6</h1>
        <hr>
      </header>
      <section class="row">
        <nav class="col-3">
          <ul>
            <li><a routerLink="deprecated-template">Deprecated &lt;template&gt;</a></li>
            <li><a routerLink="mark-as-pending">MarkAsPending</a></li>
            <li>Example</li>
          </ul>
        </nav>
        <div class="col-9">
          <router-outlet></router-outlet>
        </div>
      </section>
    </main>
  `,
  styles : []
} )
export class AppComponent {
  title = 'app';
}
