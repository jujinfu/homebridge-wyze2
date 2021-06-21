
export class WyzeApi{
    private log;
    private username;
    private password;
    private mfaCode;
    private authBaseUrl;
    private apiBaseUrl;
    authApiKey: any;
    phoneId: any;
    appName: any;
    appVer: any;
    appVersion: any;
    sc: string;
    sv: string;
    access_token: string;
    refresh_token: string;

    constructor(options, log) {
      this.log = log;

      // User login parameters
      this.username = options.username;
      this.password = options.password;
      this.mfaCode = options.mfaCode;

      // URLs
      this.authBaseUrl = options.authBaseUrl || 'https://auth-prod.api.wyze.com';
      this.apiBaseUrl = options.apiBaseUrl || options.baseUrl || 'https://api.wyzecam.com';

      // App emulation constants
      this.authApiKey = options.authApiKey || 'WMXHYf79Nr5gIlt3r0r7p9Tcw5bvs6BB4U8O8nGJ';
      this.phoneId = options.phoneId || 'bc151f39-787b-4871-be27-5a20fd0a1937';
      this.appName = options.appName || 'com.hualai.WyzeCam';
      this.appVer = options.appVer || 'com.hualai.WyzeCam___2.21.35';
      this.appVersion = options.appVersion || '2.21.35';
      this.sc = '9f275790cab94a72bd206c8876429f3c';
      this.sv = '9d74946e652647e9b6c9d59326aef104';

      // Login tokens
      this.access_token = '';
      this.refresh_token = '';
    }
}