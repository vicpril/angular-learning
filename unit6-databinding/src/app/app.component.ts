import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [{ type: 'blueprint', name: 'Testserver', content: 'Just a test!' }];

    onServerAdded(serverData: { serverName: string, serverContent: string }) {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    onBlueprintAdded(serverData: { serverName: string, serverContent: string }) {
        this.serverElements.push({
            type: 'blueprint',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    onChangeFirst() {
        this.serverElements[0].name = "Changed! " + new Date().toLocaleString();
    }

    onDestroyFirst() {
        this.serverElements.splice(0, 1);
    }
}
