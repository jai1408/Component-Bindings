import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'TestServer1', content: 'Test Server 1 content' },
  { type: 'server', name: 'TestServer2', content: 'Test Server 2 content' }, 
  { type: 'server', name: 'TestServer3', content: 'Test Server 3 content' }];


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onFirstChange() {
    this.serverElements[0].name = "changed TestServer1";
    this.serverElements[0].content = " changed Test Server 1 content"
  }

  onDestroy() {
    this.serverElements.splice(0, 1)
  }
}
