import { HostListener } from '@angular/core';

export class PostMessageAbstract {

  @HostListener('window.message', ['$event'])
  public windowMessage(event) {
    console.log('windowMessage()', event);

    switch(event.data.data.event) {
      case 'navigate':
        // console.log('receiveMessage()', 'navigate', event.data.data.data);
        break;
      case 'event':
        // console.log('receiveMessage()', 'event', event.data.data.data)
        // receiveEvent(event.data.data.data);
        break;
    }
  }

  @HostListener('window.onload')
  public windowOnload() {
    this.sendMessage({event: 'load'});
  }

  @HostListener('window.onunload')
  public windowOnunload() {
    this.sendMessage({event: 'load'});
  }

  public feedback() {
    this.sendMessage({event: 'feedback'});
  }

  public navigate(sectionId, pageId, subPageId) {
    this.sendMessage({event: 'navigate', data: {sectionId, pageId, subPageId}});
  }

  public queryParams(queryParams) {
    this.sendMessage({event: 'navigate', data: {queryParams}});
  }

  public emit(eventName) {
    this.sendMessage({event: 'emit', data: {eventName}});
  }

  private sendMessage(event) {
    // window.parent.postMessage(JSON.stringify(event), '*');
  }
}
