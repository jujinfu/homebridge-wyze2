import { WyzeApi } from './WyzeApi';

export class WyzeService{
  log: any;
  config: any;
  api: any;
  client: any;
  accessories: never[];
  didFinishLaunching: any;
  constructor(log, config, api) {
    this.log = log;
    this.config = config;
    this.api = api;
    this.client = this.getClient();

    this.accessories = [];

    this.api.on('didFinishLaunching', this.didFinishLaunching.bind(this));
  }

  getClient() {
    return new WyzeApi({
      username: this.config.username,
      password: this.config.password,
      phoneId: this.config.phoneId,
      mfaCode: this.config.mfaCode,
    }, this.log);
  }
}