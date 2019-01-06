import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnChanges {
  constructor(public authService: AuthService) {}

  @Input() userLoggedOut: boolean;

  ngOnInit() {}

  ngOnChanges(change: SimpleChanges) {
    if (change.userLoggedOut.currentValue) {
      this.authService.userName = null;
      this.authService.password = null;
    }
  }
}
