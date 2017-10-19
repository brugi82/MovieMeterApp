import { LoaderService } from './shared/loader/loader.service';
import { SearchService } from './search/search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService, LoaderService]
})
export class AppComponent {
  title = 'app';
}
