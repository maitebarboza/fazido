import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  imports: [ MatSidenavModule ],
  selector: 'app-side',
  styleUrl: './side.scss',
  templateUrl: './side.html',
})
export class Side {}
