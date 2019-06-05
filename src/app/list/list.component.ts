import { Component } from '@angular/core';
import { Workspaces } from '../workspaces/workspaces.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.html'
})
export class ListComponent {
  workspaces: Workspaces;

  constructor(
    workspacesService: Workspaces
  ) {
    this.workspaces = workspacesService;
    // this.list = workspaces.list;
  }

}
