import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId:number;
    serverStatus: string = "offline";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverId = parseInt((Math.random() * 100).toFixed(0));
    }

    getServerStatus(): string {
        return this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}