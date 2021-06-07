import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  updateServer(params: Params) {
    const serverid = +params["id"];
    this.server = this.serversService.getServer(serverid);
  }

  ngOnInit() {
    this.updateServer(this.route.snapshot.params);

    this.route.params.subscribe((params) => this.updateServer(params));
  }
}
