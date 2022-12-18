import { Component, OnInit } from '@angular/core';
import { Plugins, ActionSheetOptionStyle } from '@capacitor/core';
const { Modals } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  info: any;
  constructor() {}

  async ngOnInit() {
    this.info = await Plugins.Device.getInfo();
    this.info['battery'] = await Plugins.Device.getBatteryInfo();
  }

  async showActions() {
    let promptRet = await Modals.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload',
        },
        {
          title: 'Share',
        },
        {
          title: 'Remove',
          style: ActionSheetOptionStyle.Destructive,
        },
      ],
    });
  }

  async showConfirm(): Promise<void> {
    let confirmRet = await Modals.confirm({
      title: 'Confirm',
      message: "Are you sure you'd like to press the red button?",
    });
  }

  async showAlert() {
    let alertRet = await Modals.alert({
      title: 'Stop',
      message: 'this is an error',
    });
  }

  async openBrowser() {
    await Plugins.Browser.open({ url: 'http://capacitorjs.com' });
  }
}
